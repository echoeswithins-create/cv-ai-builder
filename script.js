const chatForm = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("messages");

function addMessage(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messages.appendChild(p);
  messages.scrollTop = messages.scrollHeight;
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  addMessage("👤 Sen", text);
  input.value = "";

  addMessage("🤖 ChatGPT", "Düşünüyor...");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();

    // "Düşünüyor..." mesajını son mesajdan sil
    messages.lastChild.remove();

    addMessage("🤖 ChatGPT", data.reply);
  } catch (err) {
    messages.lastChild.remove();
    addMessage("⚠️ Hata", "Sunucuya bağlanılamadı.");
  }
});
