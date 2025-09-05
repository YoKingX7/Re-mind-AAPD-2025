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

    // 點擊 input-enter 裡面時不要觸發還原
    inputEnter.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
