import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyCOofqOvuTKvT5Am0XT7YLI9ORUlTq9Gig";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash"
});

let messages = {
    history: [],
};

async function sendMessage() {
    console.log(messages);
    const userMessage = document.querySelector(".chat-window input").value.trim();

    if (userMessage.length) {
        try {
            document.querySelector(".chat-window input").value = "";
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="user">
                    <p>${userMessage}</p>
                </div>
            `);

            // Add a placeholder for chatbot response
            const chatContainer = document.querySelector(".chat-window .chat");
            let botMessageContainer = document.createElement("div");
            botMessageContainer.classList.add("model");
            let botMessageText = document.createElement("p");
            botMessageContainer.appendChild(botMessageText);
            chatContainer.appendChild(botMessageContainer);

            // Restricting responses to only PCOD and periods
            const chat = model.startChat({
                history: messages.history,
                generationConfig: {
                    temperature: 0.7,
                    top_k: 50,
                    top_p: 0.95,
                    max_output_tokens: 200
                }
            });

            let prompt = `
                You are an AI chatbot specialized in answering questions **only** related to PCOD and menstrual health. 
                If a user asks anything unrelated, politely respond with: 
                "I'm here to provide information about PCOD and periods. Let me know how I can assist you in that area!"
                
                User: ${userMessage}
                AI:
            `;

            const result = await chat.sendMessage(prompt);
            let botResponse = await result.response.text();

            // Typing effect function
            async function typeText(element, text, speed = 50) {
                for (let i = 0; i < text.length; i++) {
                    element.innerHTML += text[i];
                    await new Promise(resolve => setTimeout(resolve, speed)); // Delay between letters
                }
            }

            // Apply typing effect
            await typeText(botMessageText, botResponse);

            // Update chat history
            messages.history.push({ role: "user", parts: [{ text: userMessage }] });
            messages.history.push({ role: "model", parts: [{ text: botResponse }] });

        } catch (error) {
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="error">
                    <p>The message could not be sent. Please try again.</p>
                </div>
            `);
        }
    }
}

document.querySelector(".chat-window .input-area button")
.addEventListener("click", () => sendMessage());

document.querySelector(".chat-button")
.addEventListener("click", () => {
    document.querySelector("body").classList.add("chat-open")
});

document.querySelector(".chat-window button.close")
.addEventListener("click", () => {
    document.querySelector("body").classList.remove("chat-open")
});
