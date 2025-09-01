/**
 * 初始化複選卡片功能
 * @param {string} cardSelector - 卡片的 CSS 選擇器（例如 '#multi-selection-group .sticker'）
 * @param {string} inputSelector - 輸入框的 CSS 選擇器（例如 '#inputbar-noEnter'）
 * @param {string} separator - 分隔符號（例如 '、' 或 ','）
 */

export function setupMultiSelect(cardSelector, inputSelector, separator = '、') {
    const multiSticker = document.querySelectorAll(cardSelector);
    const multiInput = document.querySelector(inputSelector);
    const selectedTexts = [];

    if (!multiSticker.length || !multiInput) return;

    multiSticker.forEach(sticker => {
        sticker.addEventListener('click', () => {
            const text = sticker.dataset.text;
            const index = selectedTexts.indexOf(text);

            if (index === -1) {
                // 新增選項
                selectedTexts.push(text);
                sticker.classList.add('selected');
            } else {
                // 移除選項
                selectedTexts.splice(index, 1);
                sticker.classList.remove('selected');
            }

            // 更新輸入框的值
            multiInput.value = selectedTexts.join(separator);
        });
    });
}




// const multiSticker = document.querySelectorAll('#multi-selection-group .sticker');
// const multiInput = document.getElementById('inputbar-noEnter');
// const MultiTexts_selected = [];

// multiSticker.forEach(sticker => {
//     sticker.addEventListener('click', () => {
//         const text = sticker.dataset.text;
//         const index = MultiTexts_selected.indexOf(text);

//         if (index === -1) {  // 如果陣列裡沒有文字（indexOf(text)沒有結果會回傳-1)
//             // 新增選項
//             MultiTexts_selected.push(text);
//             sticker.classList.add('selected');
//         } else {
//             // 移除選項
//             MultiTexts_selected.splice(index, 1);
//             sticker.classList.remove('selected');
//         }

//         // inputbar裡的值是陣列文字，由、分開
//         multiInput.value = MultiTexts_selected.join('、');
//     });
// });