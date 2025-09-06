
export default function showMessage(messageText, messagePlace = 'message-container', textDelay = 1000) {
  const container = document.getElementById(messagePlace);
  let index = 0;

  function addMessage({ role, text, styleType = '' }) {
    const msg_wrapper = document.createElement('div');

    // ✅ 如果是系統提醒，不加 chatbox-unshow，改用 styleType class
    if (styleType === 'sysRemind-text') {
      msg_wrapper.classList.add(styleType);
      msg_wrapper.textContent = text;

      container.appendChild(msg_wrapper);

      // 動畫（如有需要，也可以在 CSS 控制進場）
      requestAnimationFrame(() => {
        msg_wrapper.classList.add('show');
        msg_wrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
      });

    } else {
      // ✅ 一般聊天訊息流程
      msg_wrapper.classList.add('chatbox-unshow', role);

      // 額外樣式
      if (styleType) {
        msg_wrapper.classList.add(styleType);
      }

      const msg_text = document.createElement('span');
      msg_text.classList.add('text-unshow');
      msg_text.textContent = text;

      msg_wrapper.appendChild(msg_text);
      container.appendChild(msg_wrapper);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          msg_wrapper.classList.add('show');
          msg_text.classList.remove('text-unshow');
          msg_text.classList.add('text-show');
          msg_wrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
      });
    }
  }

  function next() {
    if (index >= messageText.length) return;
    addMessage(messageText[index]);
    index++;
    setTimeout(next, textDelay);
  }

  next();
}