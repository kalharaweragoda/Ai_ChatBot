const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a message to the UI
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

    const bubble = document.createElement('div');
    bubble.className = `p-3 rounded-lg max-w-[80%] text-sm ${
        sender === 'user' 
        ? 'bg-blue-600 text-white rounded-br-none' 
        : 'bg-gray-200 text-gray-800 rounded-bl-none'
    }`;
    bubble.textContent = text;

    messageDiv.appendChild(bubble);
    chatWindow.appendChild(messageDiv);

    // Auto-scroll to the bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to handle sending message
function handleSend() {
    const message = userInput.value.trim();
    if (message === "") return;

    // 1. Show User Message
    addMessage(message, 'user');
    userInput.value = "";

    // 2. Simulate Bot Reply (Delay for realism)
    setTimeout(() => {
        const botReply = `You said: "${message}". I am a simple JIAT bot!`;
        addMessage(botReply, 'bot');
    }, 800);
}

// Event Listeners
sendBtn.addEventListener('click', handleSend);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});