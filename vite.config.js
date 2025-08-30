import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "glob";

import liveReload from "vite-plugin-live-reload";

function moveOutputPlugin() {
    return {
        name: "move-output",
        enforce: "post",
        apply: "build",
        async generateBundle(options, bundle) {
            for (const fileName in bundle) {
                if (fileName.startsWith("pages/")) {
                    const newFileName = fileName.slice("pages/".length);
                    bundle[fileName].fileName = newFileName;
                }
            }
        },
    };
}

export default defineConfig({
    // base 的寫法:
    // base: '/Repository 的名稱/'
    base: "/Re-mind-AAPD-2025/",
    plugins: [
        liveReload([
            "./layout/**/*.ejs",
            "./pages/**/*.ejs",
            "./pages/**/*.html",
        ]),
        ViteEjsPlugin(),
        moveOutputPlugin(),
    ],
    server: {
        // 啟動 server 時預設開啟的頁面
        open: "pages/index.html",
    },

    build: {
        rollupOptions: {
            // 同時把 pages/ 與 components/ 的 html 都列為入口
            input: Object.fromEntries(
                glob.sync("{pages,components}/**/*.html").map((file) => [
                    path.relative(
                        "", // 讓輸出路徑自然帶上資料夾層級（components/…、pages/…）
                        file.slice(0, file.length - path.extname(file).length)
                    ),
                    fileURLToPath(new URL(file, import.meta.url)),
                ])
            ),
        },
        outDir: "dist",
    },
});
//     build: {
//         rollupOptions: {
//             input: Object.fromEntries(
//                 glob
//                     .sync("pages/**/*.html")
//                     .map((file) => [
//                         path.relative(
//                             "pages",
//                             file.slice(
//                                 0,
//                                 file.length - path.extname(file).length
//                             )
//                         ),
//                         fileURLToPath(new URL(file, import.meta.url)),
//                     ])
//             ),
//         },
//         outDir: "dist",
//     },
// });
