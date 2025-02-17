

document.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x+30+"px"
  crsr.style.top=dets.y+"px"
  blur.style.left=dets.x-250+"px"
  blur.style.top=dets.y-250+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3
    crsr.style.border="1px solid #fff"
    crsr.style.backgroundColor="transparent"
  })
  
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid #b31ec1cb"
    crsr.style.backgroundColor="#b31ec1cb "
  })
})
gsap.to("#nav",{
  backgroundColor: "#FFBFA9",
  duration:0.5,
  height: "65px",
  scrollTrigger: {
    trigger:"#nav",
    scroller: "body",
    //markers: true,
    start:"top -10%",
    end:"top -11%",
    scrub: 1

  }
})
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    //markers:"true",
    start:"top -30%",
    end:"top -70%",
    scrub: 2,
  }
})
gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    //markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1

  }
})
gsap.from(".card",{
  scale: 0.8,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    //markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1

  }
})
// GSAP animation for #colon1
gsap.from("#colon1", {
  y: -70, // Moves up
  x: -70, // Moves left
  opacity: 0, // Fades in
  scrollTrigger: {
    trigger: "#colon1", // Triggered when #colon1 comes into view
    scroller: "body", // Scroller reference
    start: "top 75%", // Start animation when top of #colon1 hits 75% of viewport
    end: "top 45%", // End animation when top of #colon1 hits 45% of viewport
    scrub: 1, // Smoothens the animation progress
  }
});

// GSAP animation for #colon2
gsap.from("#colon2", {
  y: 40, // Moves down
  x: 80, // Moves right
  opacity: 1, // Fades in
  scrollTrigger: {
    trigger: "#colon2", // Triggered when #colon2 comes into view
    scroller: "body", // Scroller reference
    start: "top 85%", // Start animation when top of #colon2 hits 75% of viewport
    end: "top 65%", // End animation when top of #colon2 hits 45% of viewport
    scrub: 1, // Smoothens the animation progress
  }
});
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger: "#page4 h1", // Triggered when #colon2 comes into view
    scroller: "body", // Scroller reference
    start: "top 85%", // Start animation when top of #colon2 hits 75% of viewport
    end: "top 65%", // End animation when top of #colon2 hits 45% of viewport
    scrub: 2// Smoothens the animation progress
  }
})
// Show the notification slider on page load
// Get the notification and close button elements
const notification = document.getElementById('login-signup-notification');
const closeButton = document.getElementById('close-notification');

// Close the notification when the close button is clicked
closeButton.addEventListener('click', () => {
  notification.style.display = 'none';
});

// Show the notification when the page is loaded
window.onload = function() {
  notification.style.display = 'flex';
};
let isChatbotOpen = false;





function sendMessage() {
  const userMessage = document.getElementById('user-message').value.trim();
  if (!userMessage) return;

  // Display user message
  const messagesDiv = document.getElementById('chatbot-messages');
  const userMessageElement = document.createElement('div');
  userMessageElement.classList.add('user-message');
  userMessageElement.innerHTML = `<p><strong>You:</strong> ${userMessage}</p>`;
  messagesDiv.appendChild(userMessageElement);

  // Simulate AI response (You can replace this with your API call)
  const aiResponse = getAIResponse(userMessage);

  // Display AI response
  const aiMessageElement = document.createElement('div');
  aiMessageElement.classList.add('ai-message');
  aiMessageElement.innerHTML = `<p><strong>Bot:</strong> ${aiResponse}</p>`;
  messagesDiv.appendChild(aiMessageElement);

  // Scroll to the bottom
  messagesDiv.scrollTop = messagesDiv.scrollHeight;

  // Clear the input field
  document.getElementById('user-message').value = '';
}

function getAIResponse(userMessage) {
  // Simple predefined responses for the sake of example
  const lowerCaseMessage = userMessage.toLowerCase();
  
  if (lowerCaseMessage.includes('pcod')) {
    return "PCOD (Polycystic Ovarian Disease) is a hormonal disorder affecting women of reproductive age. It can lead to irregular periods, weight gain, and fertility issues.";
  } else if (lowerCaseMessage.includes('periods')) {
    return "Your menstrual cycle is a key indicator of reproductive health. Regular cycles are generally a sign of balanced hormones.";
  } else {
    return "I'm here to answer questions related to PCOD and periods. How can I help you?";
  }
}
function openMainPage() {
  // Hide loader and show main content
  document.querySelector('.loader-container').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}
let lastScrollTop = 0;
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Check if the user is scrolling down or up
    if (scrollTop > lastScrollTop) {
        // Scrolling Down - Hide Navbar
        navbar.style.top = "-60px"; // Hide by moving out of view
    } else {
        // Scrolling Up - Show Navbar
        navbar.style.top = "0"; // Bring navbar back to top
    }
    lastScrollTop = scrollTop; // Update last scroll position
});

// JavaScript for the chatbot functionality





function sendMessage() {
  var input = document.getElementById("user-message");
  var message = input.value.trim();
  if (message) {
    var messagesContainer = document.getElementById("chatbot-messages");
    var userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = message;
    userMessageDiv.style.background = "#e0e0e0";
    userMessageDiv.style.padding = "8px";
    userMessageDiv.style.margin = "5px 0";
    userMessageDiv.style.borderRadius = "5px";
    messagesContainer.appendChild(userMessageDiv);
    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
  }
}

// Consolidated cursor movement logic
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX - 10}px`;
  cursor.style.top = `${e.pageY - 10}px`;
  cursorBlur.style.left = `${e.pageX - 20}px`;
  cursorBlur.style.top = `${e.pageY - 20}px`;
});

// Define chatbot container elements
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotMessages = document.getElementById("chatbot-messages");
const userMessageInput = document.getElementById("user-message");
const sendMessageBtn = document.getElementById("send-message");

// Add the user's message to the chatbox
function addMessageToChatbox(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
}


// Toggle the visibility of the chatbot
function toggleChatbot() {
    chatbotBox.style.display = chatbotBox.style.display === "none" ? "block" : "none";
}

// Close the chatbot
function closeChatbot() {
    chatbotBox.style.display = "none";
}

// Send user message and get bot response
async function sendMessage() {
    const userMessage = userMessageInput.value.trim();
    if (userMessage === "") return;

    // Display the user's message
    displayMessage(userMessage, "user");

    // Call the API to get a response from the bot
    const botResponse = await fetchBotResponse(userMessage);

    // Display the bot's response
    displayMessage(botResponse, "bot");

    // Clear the input field
    userMessageInput.value = "";
}

// Function to display a message (either from the user or bot)
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
}

// Function to fetch response from OpenAI 

function toggleChatbot() {
  var chatbot = document.getElementById("chatbot-box");
  chatbot.style.display = chatbot.style.display === "block" ? "none" : "block";
}

function closeChatbot() {
  document.getElementById("chatbot-box").style.display = "none";
}

function sendMessage() {
  var input = document.getElementById("user-message");
  var message = input.value.trim();
  if (message) {
    var messagesContainer = document.getElementById("chatbot-messages");
    var userMessageDiv = document.createElement("div");
    userMessageDiv.textContent = message;
    userMessageDiv.style.background = "#e0e0e0";
    userMessageDiv.style.padding = "8px";
    userMessageDiv.style.margin = "5px 0";
    userMessageDiv.style.borderRadius = "5px";
    messagesContainer.appendChild(userMessageDiv);
    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
  });
});


