export default function showChatbox(chatboxText, chatboxPlace = 'message-container', textDelay = 1000) {
  const container = document.getElementById(chatboxPlace);
  let index = 0;

  function addText({ role, text }) {
    const msg = document.createElement('div');
    msg.classList.add('chatbox-unshow', role);
    msg.textContent = text;
    container.appendChild(msg);

    // 套用動畫 class，（使用setTimeout讓第一個訊息動畫出現，不然網頁還沒加載完，第一個動畫已經結束了）
    // -> 第一個訊息有動畫了，但是從目標位置回到初始位置，再到目標位置，意思是不會由下往下出現而是下上下（救我！
    setTimeout(() => {
      msg.classList.add('show');
    }, 100);

    // 不會有下上下動畫，但第一個訊息就沒有動畫（救我！
    //   requestAnimationFrame(() => {
    //   msg.classList.add('show');
    // });


    // 自動捲到底部
    container.scrollTop = container.scrollHeight;
  }

  function next() {
    if (index >= chatboxText.length) return;
    addText(chatboxText[index]);
    index++;
    setTimeout(next, textDelay);
  }

  next();
}