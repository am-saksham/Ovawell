// Select the food items and sections
const foodItems = document.querySelectorAll('.food-item');
const sections = document.querySelectorAll('.section');

// Initialize portion counters and tracking variables
let portionSizes = {
    protein: 0,
    carbs: 0,
    veggies: 0,
};

let points = 0;
let badges = [];
let selectedFoods = {
    protein: [],
    carbs: [],
    veggies: [],
    fiber: [],
};

// Food data for analysis and meal suggestions
const foodData = {
    protein: ["Chicken", "Eggs", "Tofu"],
    carbs: ["Brown Rice", "Quinoa", "Sweet Potatoes"],
    veggies: ["Spinach", "Broccoli", "Carrots"],
    fiber: ["Spinach", "Broccoli", "Sweet Potatoes", "Chia Seeds", "Lentils"],
    recipes: {
        "Fiber Boost Salad": ["Spinach", "Chia Seeds", "Carrots"],
        "Protein-Packed Stir Fry": ["Chicken", "Tofu", "Broccoli"],
        "Sweet Potato & Rice Bowl": ["Sweet Potatoes", "Brown Rice", "Broccoli"],
    },
};

// Event listeners for drag-and-drop logic
foodItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

sections.forEach(section => {
    section.addEventListener('dragover', handleDragOver);
    section.addEventListener('dragenter', handleDragEnter);
    section.addEventListener('dragleave', handleDragLeave);
    section.addEventListener('drop', handleDrop);
});

// Handle drag start and end
function handleDragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

// Handle drag over (allow drop)
function handleDragOver(e) {
    e.preventDefault();
}

// Handle drag enter and leave (visual feedback)
function handleDragEnter(e) {
    e.target.style.backgroundColor = '#3498db';
}

function handleDragLeave(e) {
    e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.5)';
}

// Handle drop event
function handleDrop(e) {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text');
    const draggedItem = document.getElementById(draggedItemId);
    const targetSection = e.target;
    const itemType = draggedItem.dataset.type;
    const itemPortion = parseInt(draggedItem.dataset.portion);

    // Check if the section matches the item type
    if (targetSection.classList.contains(itemType)) {
        const currentPortion = portionSizes[itemType];

        // Check if adding the item exceeds the portion limit
        if ((itemType === 'protein' && currentPortion + itemPortion <= 25) ||
            (itemType === 'carbs' && currentPortion + itemPortion <= 25) ||
            (itemType === 'veggies' && currentPortion + itemPortion <= 50)) {
            
            // Add item to section
            targetSection.appendChild(draggedItem);
            portionSizes[itemType] += itemPortion;
            gsap.from(draggedItem, { x: -1000, duration: 1, ease: 'bounce' }); // Animation effect

            // Update progress and points
            points += 10; // Add 10 points for a successful drop
            updateProgress();

            // Add the item to selected foods
            if (!selectedFoods[itemType].includes(draggedItem.textContent)) {
                selectedFoods[itemType].push(draggedItem.textContent);
            }

            // Check for badges
            checkBadges();

            // Update expert tips and recipe suggestions
            provideExpertTips();
            suggestRecipes();
        } else {
            alert(`You can't add more than the allowed portion for ${itemType}!`);
        }
    }

    targetSection.style.backgroundColor = 'rgba(52, 152, 219, 0.5)';
}

// Update progress bar
function updateProgress() {
    const totalPortion = portionSizes.protein + portionSizes.carbs + portionSizes.veggies;
    const maxPortion = 25 + 25 + 50;
    const progressPercentage = (totalPortion / maxPortion) * 100;
    document.getElementById('progress').style.width = `${progressPercentage}%`;
    document.getElementById('points').textContent = `Points: ${points}`;
}

// Check for badges
function checkBadges() {
    if (portionSizes.protein === 25 && portionSizes.carbs === 25 && portionSizes.veggies === 50) {
        if (!badges.includes('Balanced Meal')) {
            badges.push('Balanced Meal');
            document.getElementById('badges').textContent = `Badges: ${badges.join(', ')}`;
            alert('Congratulations! You earned the "Balanced Meal" badge!');
        }
    }
}

// Provide expert tips based on selections
function provideExpertTips() {
    const tipsElement = document.getElementById('expert-tips');
    let tip = "You are making great food choices!";

    if (selectedFoods.fiber.length === 0) {
        tip = "It looks like you're low on fiber today. Try adding a serving of leafy greens or chia seeds.";
    } else if (selectedFoods.veggies.length < 2) {
        tip = "You're not getting enough veggies! Try adding more broccoli, spinach, or carrots to your meals.";
    } else if (selectedFoods.protein.length === 0) {
        tip = "You could use more protein. Consider adding chicken, eggs, or tofu to your meals.";
    }

    tipsElement.textContent = tip;
}

// Suggest recipes based on selected foods
function suggestRecipes() {
    const recipesElement = document.getElementById('suggested-recipes');
    const availableRecipes = [];

    for (const [recipeName, ingredients] of Object.entries(foodData.recipes)) {
        if (ingredients.every(ingredient => selectedFoods[ingredientCategory(ingredient)].includes(ingredient))) {
            availableRecipes.push(recipeName);
        }
    }

    if (availableRecipes.length > 0) {
        recipesElement.innerHTML = `Here are some recipes you can try:<br>${availableRecipes.join(", ")}`;
    } else {
        recipesElement.textContent = "No recipe suggestions yet! Try selecting more foods.";
    }
}

// Helper function to determine food category
function ingredientCategory(ingredient) {
    if (foodData.protein.includes(ingredient)) return 'protein';
    if (foodData.carbs.includes(ingredient)) return 'carbs';
    if (foodData.veggies.includes(ingredient)) return 'veggies';
    if (foodData.fiber.includes(ingredient)) return 'fiber';
}
