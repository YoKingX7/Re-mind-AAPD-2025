# Re-mind-AAPD-2025

-   AAPD X 六角學院的產品研發營｜ 2025
-   以 **Bootstrap + Vite** 打造的前端切版專案。
-   核心目標：在繁忙、情緒負載偏高的情境下，提供一種 **更溫暖、被陪伴的紀錄與提醒體驗**，幫助使用者快速覺察、輕鬆記錄並持續改善情緒狀態。

---

## 背景與問題

-   **紀錄門檻高、缺乏彈性**：市面 App 多半只做「冷冰冰」的數據記錄，流程固定，難以在忙碌中無痛融入。
-   **難以表達與釐清情緒**：有時心情很亂，卻不知道該怎麼記或從哪開始。
-   **回饋缺乏溫度與個人化**：紀錄後常沒有下一步引導；提醒與回饋不貼近個人。
-   **提醒不夠即時**：缺少主動、可調整的提醒與 nudges 來幫助形成習慣。

> **How Might We**：在使用者心理負擔較高、情緒波動的時候，**提供一種更溫暖、被陪伴的體驗**，讓紀錄更自然、流程更順、提醒更即時與個人化。

---

## 主要人物誌

-   **族群**：25–45 歲、女性、行銷企劃／上班族、育有 1 子
-   **特性**：時間有限、節奏快、承受中高壓；接受科技程度中等但偏務實
-   **習慣**：用 App 做筆記、日程、健康追蹤，但偏好好上手與直覺
-   **痛點**：
    -   不知如何用語言表達情緒／難以釐清
    -   缺乏 **即時、個人化** 的支持與提醒
    -   回饋太冷硬、缺少被理解的感受
-   **期望**：
    -   **簡單、輕鬆的紀錄方式**
    -   **個人化提醒互動**
    -   **精準洞察、快速釐清**
    -   **被理解、被陪伴的感受**

---

## 使用者故事

1. **作為一位情緒容易受工作影響的上班族**，我想要用 Re-mind **快速記錄情緒與情境**（幾個按鈕＋簡短文字），**以便在忙碌時也能完成紀錄**並建立連續性。
2. **當我情緒波動時**，我希望 Re-mind 能 **主動提醒** 我做 1 分鐘的微紀錄或呼吸練習，**讓我能即時調節與覺察**。
3. **完成紀錄後**，我希望系統提供 **溫暖、個人化的回饋**（貼心建議＋下一步 CTA），**而不是只有數據**。
4. **每週一次**，我希望看到 **清楚的洞察摘要**（趨勢、觸發因素、改善建議），讓我 **更了解自己並形成策略**。

---

## 核心功能範圍

-   **超輕量情緒紀錄**：Mood scale + 標籤（情境/觸發）+ 簡述
-   **即時／排程提醒**：可調整頻率、情境化文案、貼心語氣
-   **溫暖回饋**：完成後的鼓勵與下一步指引（微練習／回顧）
-   **洞察與回顧**：每日／每週趨勢、Top 觸發、改善建議
-   **可無痛融入的 UI**：一鍵開啟、一步完成、行動優先

---

## 技術與開發

-   **Vite**（開發伺服器與建置）
-   **Bootstrap 5**（切版與元件）
-   **SCSS**（樣式管理）
-   **EJS**（樣板分離：`layout/` / partials）
-   **Node.js ≥ 18**

---

## 快速開始

### Node.js 版本

-   專案的 Node.js 版本需為 **v18 以上**
-   查看版本：`node -v`

### 指令列表

-   `npm install`：初次下載專案請先安裝套件
-   `npm run dev`：執行開發模式
    -   若未自動開啟瀏覽器，請手動輸入  
        `http://localhost:5173/Re-mind-AAPD-2025/pages/index.html`
-   `npm run build`：執行編譯（不會開瀏覽器）
-   `npm run deploy`：自動化部署至 GitHub Pages

### 資料夾結構

-   assets # 靜態資源

    -   images # 圖片
    -   scss # SCSS 樣式

-   layout # ejs 模板
-   pages # HTML 頁面

### 注意事項

-   已將 `pages/index.html` 預設為首頁，**請勿更名**
-   `.gitignore` 已忽略不應上傳的檔案（如 `node_modules`），**請勿移除**
-   Vite 的 `npm run dev` 已自動監聽，**不需**再使用 Live Sass Compiler 監看

---

## 部署 GitHub Pages（gh-pages）

1. 建議先在 GitHub 建立 Repository：`Re-mind-AAPD-2025`

2. 初始化並推上遠端

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署

---

## Emotion 中英對照

- 充實 fulfilled
- 愉悅 joyful
- 憤怒 angry
- 放鬆 relaxed
- 普通 neutral
- 焦慮 anxious
- 難過 sad

---

## 變數改動

### Colors 以下都有加到theme-color裡
```scss
$white: #fff !default;
$gray-50: #E8E8E8 !default;
$gray-100: #B8B8B7 !default;
$gray-200: #969595 !default;
$gray-300: #666564 !default;
$gray-400: #494746 !default;
$gray-500: #494746 !default;
$gray-600: #191716 !default;
$gray-700: #131211 !default;
$gray-800: #0F0E0D !default;
$gray-900: #0B0B0A !default;
$black: $gray-900 !default;

$blue: #24C4D1 !default;
$red: #FE6A4D !default;
$yellow: #F1B626 !default;

$blue-50: #E9F9FA !default;
$blue-100: #BBEDF1 !default;
$blue-200: #9AE4EA !default;
$blue-300: #6CD7E0 !default;
$blue-400: #50D0DA !default;
$blue-500: $blue !default;
$blue-600: #21B2BE !default;
$blue-700: #1A8B94 !default;
$blue-800: #146C73 !default;
$blue-900: #0F5258 !default;

$red-50: #FFF0ED !default;
$red-100: #FFD1C8 !default;
$red-200: #FFBAAD !default;
$red-300: #FE9B88 !default;
$red-400: #FE8871 !default;
$red-500: $red !default;
$red-600: #E76046 !default;
$red-700: #B44B37 !default;
$red-800: #8C3A2A !default;
$red-900: #6B2D20 !default;

$yellow-10: #FFFDF8 !default;
$yellow-50: #FEF8E9 !default;
$yellow-100: #FBE8BC !default;
$yellow-200: #F9DD9B !default;
$yellow-300: #F6CE6E !default;
$yellow-400: #F4C551 !default;
$yellow-500: $yellow !default;
$yellow-600: #DBA623 !default;
$yellow-700: #AB811B !default;
$yellow-800: #856415 !default;
$yellow-900: #654C10 !default;

$fulfilled: #FFA192; //充實
$joyful: #FF7712; // 愉悅
$angry: #ED4235; // 憤怒
$relaxed: #FFBA1F; // 放鬆
$neutral: #A2E553; // 普通
$anxious: #2B73AA; // 焦慮
$sad: #25C4D1; // 難過
```

### 間距 $spacers
```scss
$spacers: (
  0: 0,
  1: 2px,
  2: 4px,
  3: 8px,
  4: 12px,
  5: 16px,
  6: 24px,
  7: 32px,
  8: 40px,
  9: 48px,
  10: 56px,
  11: 64px,  )
```

### 文字大小 $font-sizes
```scss
$h1-font-size: $font-size-base * 2.5 !default;
$h2-font-size: $font-size-base * 2 !default;
$h3-font-size: $font-size-base * 1.5 !default;
$h4-font-size: $font-size-base * 1.25 !default;
$h5-font-size: $font-size-base * 1.125 !default;
$h6-font-size: $font-size-base !default;

fs-7 = 14px

```

### 關閉 RFS：$enable-rfs

```scss
$enable-rfs: false !default;
```

### 圓角 $border-radius

```scss
$border-radius-xs: 4px !default;
$border-radius-sm: 8px !default;  // rounded-1
$border-radius: 12px !default;  // rounded-2
$border-radius-lg: 1rem !default;  // rounded-3
$border-radius-xl: 20px !default;  // rounded-4
$border-radius-xxl: 24px !default;  // rounded-5
$border-radius-pill: 50rem !default;

"rounded": (
  property: border-radius,
  class: rounded,
  values: (
    null: var(--#{$prefix}border-radius),
    0: 0,
    1: var(--#{$prefix}border-radius-sm),
    2: var(--#{$prefix}border-radius),
    3: var(--#{$prefix}border-radius-lg),
    4: var(--#{$prefix}border-radius-xl),
    5: var(--#{$prefix}border-radius-xxl),
    circle: 50%,
    pill: var(--#{$prefix}border-radius-pill)
  )
),

```


### 陰影 $box-shadow

```scss
$box-shadow: 0 2px 4px rgba($black, .1) !default;
$box-shadow-lg: 4px 4px 20px rgba($black, .1) !default;


```

### 全域樣式
- 字體：font-family
- 網頁背景色： $body-bg: $yellow-50 !default;
- 清除文字標籤下方空間: h1-h6, p標籤
- 清除 a 標籤文字下方線條
- 內文行高 $line-height-base: 1.6 !default;
- 內文行高 $line-height-sm: 1.2 !default;
- 標題字重：$headings-font-weight

### progress
```scss
$progress-height: 12px !default;
$progress-bg: $white !default;


```

### happy path 的 page順序
chatroom-home > choosing-emotionLG > choosing-emotionSM > choosing-emotionR > 
entering-diary1 > entering-diary2 > 
choosing-nextStep > choosing-stressRelief > whether-stressRelief > sysRemind-stressRelief
