export default function showMessage(
  messageText,
  messagePlace = "message-container",
  textDelay = 1000
) {
  const container = document.getElementById(messagePlace);
  let index = 0;

  function addMessage({ role, text, styleType = "" }) {
    const msg_wrapper = document.createElement("div");

    // 如果是系統提醒，不加 chatbox-unshow，改用 styleType class
    if (styleType === "sysRemind-text") {
      msg_wrapper.classList.add(styleType);
      msg_wrapper.textContent = text;

      container.appendChild(msg_wrapper);

      // 動畫（如有需要，也可以在 CSS 控制進場）
      requestAnimationFrame(() => {
        msg_wrapper.classList.add("show");
        msg_wrapper.scrollIntoView({ behavior: "smooth", block: "end" });
      });
    } else {
      //  一般聊天訊息流程
      msg_wrapper.classList.add("chatbox-unshow", role);

      // 額外樣式
      if (styleType) {
        msg_wrapper.classList.add(styleType);
      }

      const msg_text = document.createElement("span");
      msg_text.classList.add("text-unshow");
      msg_text.textContent = text;

      msg_wrapper.appendChild(msg_text);
      container.appendChild(msg_wrapper);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          msg_wrapper.classList.add("show");
          msg_text.classList.remove("text-unshow");
          msg_text.classList.add("text-show");
          msg_wrapper.scrollIntoView({ behavior: "smooth", block: "end" });
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

//測試sticker隨對話框一起出現
// export default function showMessage(
//   messageText,
//   messagePlace = "message-container",
//   textDelay = 1000
// ) {
//   const container = document.getElementById(messagePlace);
//   const listGroup = document.getElementById("single-selection-group");
//   let index = 0;

//   function addMessage({ role, text, styleType = "" }) {
//     const msg_wrapper = document.createElement("div");

//     // 如果是系統提醒，不加 chatbox-unshow，改用 styleType class
//     if (styleType === "sysRemind-text") {
//       msg_wrapper.classList.add(styleType);
//       msg_wrapper.textContent = text;

//       container.appendChild(msg_wrapper);

//       // 動畫（如有需要，也可以在 CSS 控制進場）
//       requestAnimationFrame(() => {
//         msg_wrapper.classList.add("show");
//         msg_wrapper.scrollIntoView({ behavior: "smooth", block: "end" });
//       });
//     } else {
//       // 一般聊天訊息流程
//       msg_wrapper.classList.add("chatbox-unshow", role);

//       // 額外樣式
//       if (styleType) {
//         msg_wrapper.classList.add(styleType);
//       }

//       const msg_text = document.createElement("span");
//       msg_text.classList.add("text-unshow");
//       msg_text.textContent = text;

//       msg_wrapper.appendChild(msg_text);
//       container.appendChild(msg_wrapper);

//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           msg_wrapper.classList.add("show");
//           msg_text.classList.remove("text-unshow");
//           msg_text.classList.add("text-show");
//           msg_wrapper.scrollIntoView({ behavior: "smooth", block: "end" });
//         });
//       });
//     }
//   }
//   listGroup.classList.add("preload");

//   // 等頁面完全載入或你想要的時機再移除 preload
//   window.addEventListener("load", () => {
//     listGroup.classList.remove("preload");
//   });

//   function next() {
//     if (index == messageText.length) {
//       // 全部訊息顯示完了，讓 ul 顯示或滾動到視窗
//       if (listGroup) {
//         // listGroup.classList.remove("hidden");
//         listGroup.classList.add("show");

//         // 滾動 ul 到視窗中（如果需要）
//         listGroup.scrollIntoView({ behavior: "smooth", block: "end" });
//       }
//       return;
//     }

//     addMessage(messageText[index]);
//     index++;
//     setTimeout(next, textDelay);
//   }

//   next();
// }
