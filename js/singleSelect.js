export function setupSingleSelect(cardSelector, inputSelector) {
    const singleSticker = document.querySelectorAll(cardSelector);
    const inputbar = document.querySelector(inputSelector);

    if (!singleSticker.length || !inputbar) return;

    singleSticker.forEach(sticker => {
        sticker.addEventListener('click', () => {
            // 移除所有卡片的選中狀態
            singleSticker.forEach(c => c.classList.remove('selected'));
            // 加上目前這張卡片的選中狀態
            sticker.classList.add('selected');
            // 顯示對應文字
            inputbar.value = sticker.dataset.text;
        });
    });
}