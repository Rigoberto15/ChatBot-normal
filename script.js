const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = userInput.value;
  addMessage('user', question);
  userInput.value = '';

  const response = await getBotResponse(question);
  addMessage('bot', response);
});

function addMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simulación de respuestas (puedes conectarlo con OpenAI o una API real)
async function getBotResponse(question) {
  // Aquí puedes usar fetch para conectarte a una API real.
  if (question.toLowerCase().includes("hola")) {
    return "¡Hola! ¿En qué puedo ayudarte?";
  } else if (question.toLowerCase().includes("quién eres")) {
    return "Soy un chatbot creado para responder preguntas.";
  } else {
    return "Lo siento, aún estoy aprendiendo. ¡Hazme otra pregunta!";
  }
      }
