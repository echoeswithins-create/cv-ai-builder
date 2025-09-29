const chatForm = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("messages");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  // Kullanıcının mesajını göster
  const userMsg = document.createElement("p");
  userMsg.textContent = "👤 " + text;
  messages.appendChild(userMsg);

  input.value = "";

  // Sunucuya gönder
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }),
  });

  const data = await res.json();

  const botMsg = document.createElement("p");
  botMsg.textContent = "🤖 " + data.reply;
  messages.appendChild(botMsg);
});
