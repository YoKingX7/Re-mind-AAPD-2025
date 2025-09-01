export default function showMessage(messageText, messagePlace = 'message-container', textDelay = 1000) {
  const container = document.getElementById(messagePlace);
  let index = 0;

  function addMessage({ role, text }) {
    const msg_chatbox = document.createElement('div');
    msg_chatbox.classList.add('chatbox-unshow', role);

    const msg_text = document.createElement('span');
    msg_text.classList.add('text-unshow');
    msg_text.textContent = text;
    msg_chatbox.appendChild(msg_text);

    container.appendChild(msg_chatbox);

    // ✅ 用雙層 requestAnimationFrame，避免動畫過早觸發
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        msg_chatbox.classList.add('show');
        msg_text.classList.remove('text-unshow');
        msg_text.classList.add('text-show');

        // 自動捲到底部
        msg_chatbox.scrollIntoView({ behavior: 'smooth', block: 'end' });

      });
    });



  }

  function next() {
    if (index >= messageText.length) return;
    addMessage(messageText[index]);
    index++;
    setTimeout(next, textDelay);
  }

  next();
}