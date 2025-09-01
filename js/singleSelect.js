/**
 * 初始化複選卡片功能
 * @param {string} cardSelector - 卡片的 CSS 選擇器（例如 '#single-selection-group .sticker'）
 * @param {string} inputSelector - 輸入框的 CSS 選擇器（例如 '#inputbar-noEnter'）
 */

export function setupSingleSelect(cardSelector, inputSelector) {
    const singleSticker = document.querySelectorAll(cardSelector);
    const singleInput = document.querySelector(inputSelector);

    if (!singleSticker.length || !singleInput) return;

    singleSticker.forEach(sticker => {
        sticker.addEventListener('click', () => {
            // 移除所有卡片的選中狀態
            singleSticker.forEach(c => c.classList.remove('selected'));
            // 加上目前這張卡片的選中狀態
            sticker.classList.add('selected');
            // 顯示對應文字
            singleInput.value = sticker.dataset.text;
        });
    });
}