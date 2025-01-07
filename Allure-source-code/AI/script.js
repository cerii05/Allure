const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

function appendMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = text;
  message.appendChild(bubble);
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

function getBotResponse(userMessage) {
  // Hardcoded bot responses for demo
  const responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm here to assist you!",
    "bye": "Goodbye! Have a great day!"
  };

  const message = userMessage.toLowerCase();
  return responses[message] || "Sorry, I don't understand that.";
}

// Greet the user when the page loads
function botGreeting() {
  const greeting = "Hello! Welcome to AI Chat. How can I assist you today?";
  appendMessage(greeting, "bot");
}

// Send message when clicking the button or pressing Enter
sendBtn.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    appendMessage(userMessage, "user");
    const botResponse = getBotResponse(userMessage);
    setTimeout(() => appendMessage(botResponse, "bot"), 500);
    chatInput.value = "";
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

// Trigger bot greeting on page load
window.addEventListener("load", botGreeting);