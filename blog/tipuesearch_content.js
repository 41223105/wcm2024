var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"w6 課程內容","text":"w6 上課內容， 說明如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法. Git 歷史與希望解決的問題 Git 的發展歷史可以追溯到2005年，當時Linux的創始人Linus Torvalds為了管理Linux核心開發而創建了Git版本控制系統。以下是Git的主要發展歷程： 2005年：Git 誕生。Linus Torvalds開始編寫 Git 作為管理 Linux 內核代碼的工具。他受到 BitKeeper 版本控制系統的啟發，但對於一些限制感到不滿，因此決定創建自己的版本控制系統。 2005年4月：Git 開始在 Linux 內核開發中使用。Torvalds將Linux內核的版本控制從BitKeeper轉移到Git。 2005年6月：Git 1.0版本發布。這是Git的首個正式穩定版本，標誌著Git正式進入廣泛使用的階段。 2008年：GitHub成立。GitHub是一個基於Git的代碼托管平台，為開發者提供了方便的代碼存儲、版本控制和協作功能。GitHub的出現進一步推動了Git的普及和發展。 2012年：Git 1.8.0版本發布。這是Git的一個重要版本，引入了許多新特性和改進，包括重寫的分支合併策略、子模組支持等。 2016年：Git 2.0版本發布。這個版本引入了一些重要的改進和更新，包括重新設計的設置系統、忽略規則的改進等。 至今：Git 不斷進行著更新和改進。每個新版本都帶來了更多的功能、性能優化和使用體驗改進，使得Git在軟件開發領域中得到廣泛應用。 一般相同專業人士如何利用 git 解決內容管理問題? 對於一般的專業人士，尤其是軟件開發人員和其他技術人員來說，Git 是一個強大的工具，可以幫助他們解決內容管理問題。以下是一些一般相同專業人士如何利用 Git 解決內容管理問題的方式： 版本控制：Git 讓你能夠跟蹤和管理內容的各個版本。這對於文檔、代碼、配置文件等各種類型的內容都非常有用。你可以隨時回溯到之前的版本，比如當需要查找錯誤的起源時，或者需要恢復到之前的穩定狀態時。 分支和合併：Git 允許創建分支來獨立開發新功能或修復問題，而不會影響主要的開發分支。這樣可以同時進行多個功能的開發，而不會相互干擾。然後，你可以使用合併操作將這些分支合併回主要的開發線上。 協作：Git 提供了便捷的方式讓多個人協作開發同一個項目。通過將代碼庫克隆到本地，進行修改後再推送回原始代碼庫，不同團隊成員可以輕鬆地共享和合作。這對於團隊內部或跨團隊之間的合作都非常有用。 代碼審查：Git 可以與代碼審查工具結合使用，這使得團隊能夠進行代碼審查，從而提高代碼質量和可讀性。通過在代碼庫中創建分支，然後將分支中的代碼發送給同事進行審查，可以有效地進行代碼審查流程。 自動化流程：利用 Git 的 Hooks 功能，可以實現自動化的流程。例如，你可以設置 pre-commit hook，在提交代碼之前運行測試，從而確保提交的代碼是合格的。這樣可以提高代碼的質量並減少錯誤。 Git 是一個非常強大且靈活的工具，可以滿足各種內容管理需求。通過充分利用 Git 的功能，專業人士可以更有效地管理和協作開發項目，提高生產力和內容質量。","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"w5 課程內容","text":"w5 上課內容，以 iframe 嵌入先前的教學影片, 並摘要各影片內容. 將組員的個人倉儲納為分組倉儲的子模組 可以先 git status git submodule add (貼上自己的倉儲網站).git (輸入自己的學號) git add . git commit -m \"上傳子模組\" git push","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"w4 課程內容","text":"w4 上課內容，複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法. 有關建立網站 cmsimde 套件有關動態與靜態網站的標題、啟動網址與埠號設定位於 init.py 程式檔案中, 若將 init.py 中的啟動網址設為外部 IP, 則此網際內容管理系統的編輯網站, 可直接連外. Replit 靜態網站檢視 下載 main2.txt 與 static.txt, 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. Replit 建立分組倉儲權限 由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應, 因此若將分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config (id_rsa.pub 必須登錄到 Github 對應帳號)","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"w3 課程內容","text":"w3 上課內容，除了 Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站. 利用Gitpod維護倉儲 https://www.gitpod.io/ - gitpod的使用與 Codespaces 類似,每個月有 50 小時的免費使用時間, 可以使用 Github 帳號登入 利用 localhost 維護倉儲 透過 Windows 環境中的 USB 隨身碟, 配置可攜程式系統, 用來管理個人與分組的分組倉儲與網站, 可使用老師給的portable_2024.7z(密碼為:kmolab)","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"w2 課程內容","text":"w2 上課內容，主要確認各學員是否完成 Github 中個人倉儲與網站的建立，並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 利用 Github Classroom 建立分組網站 在 mdewcm2024 帳號下, 期中分組作業名稱為 1a,各班作業名稱必須有所區別, 而且各分組 Team 名稱也不能相同. 如何利用 Codespaces 維護網站 採用 Github Codespaces 維護網站的好處是, Visual Studio code 介面提供多終端機與多 ports 開啟功能, 在 Codespaces 中維護 wcm2024 的過程幾乎如同在 localhost Windows 10 或 11 的操作系統環境中進行.","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"w1 課程內容","text":"w1 上課內容 建立個人的Github帳號 自行建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. 建立個人課程網站 網際內容管理的個人課程網站名稱為 wcm2024, 請先登入 Github 後, 連接至 https://github.com/mdecycu/cmsimde_site, 以此倉儲作為 Template 建立個人的 wcm2024 倉儲, 並將倉儲主分支設定 Github Pages 後, 檢查是否已經可以連線到個人的課程網頁.","tags":"w1","url":"./2024-Spring-w1.-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};