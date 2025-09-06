export function setupInputToggle() {
    const inputDefault = document.getElementById('input-default');
    const inputEnter = document.getElementById('input-enter');
    const inputbarDefault = document.getElementById('inputbar-default');
    const inputbarEnter = document.getElementById('inputbar-enter');

    if (!inputDefault || !inputEnter || !inputbarDefault || !inputbarEnter) return;

    // 點擊 default inputbar → 切換成輸入狀態
    inputbarDefault.addEventListener('click', function (e) {
        inputDefault.style.display = 'none';
        inputEnter.style.display = 'flex';
        inputbarEnter.removeAttribute('readonly');
        inputbarEnter.focus();
        e.stopPropagation();
    });

    // 點擊外部 → 還原狀態
    document.addEventListener('click', function (e) {
        if (!inputEnter.contains(e.target)) {
            inputEnter.style.display = 'none';
            inputDefault.style.display = 'flex';
            inputbarEnter.setAttribute('readonly', true);
        }
    });

    // 調整textarea的高度，初始為50px, 之後隨著內容變高
    const textarea = document.getElementById('inputbar-enter');
    textarea.addEventListener('input', () => {
        textarea.style.height = 'auto'; // 先清除原本高度，避免越來越高
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'; // 限制最大高度
    });

    // 點擊 input-enter 裡面時不要觸發還原
    inputEnter.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
