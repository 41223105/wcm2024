var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: 請填入目前網站所在的 URL,  https://mde.tw/cmsimde_site \n 網誌: 請填入目前網站所在的 URL/blog,  https://mde.tw/cmsimde_site/blog \n 簡報: 請填入目前網站所在的 URL/reveal,  https://mde.tw/cmsimde_site/reveal \n 倉儲: 請填入目前網站所對應的 Github 倉儲連結 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'W6', 'text': '四技網際內容管理第六週實習操作 \n 請根據第六週的網誌, 實際操作下列兩項議題: \n \n 根據您的專業, 就 git 的使用, 從與 ChatGPT 的對話, 將內容整理到個人的第六網誌, 其中包含: git 的發展歷史, 創作人的相關履歷, 以及一般相同專業人士如何利用 \xa0git 解決內容管理問題? \n 假如要在 Windows 實際 demo git client 與 git server, 該如何進行? 請將相關操作流程整理至個人第六週網誌中. \n \n \n git 的發展歷史 \n Git 的發展歷史可以追溯到2005年，當時Linux的創始人Linus Torvalds為了管理Linux核心開發而創建了Git版本控制系統。以下是Git的主要發展歷程： \n \n \n 2005年 ：Git 誕生。Linus Torvalds開始編寫 Git 作為管理 Linux 內核代碼的工具。他受到 BitKeeper 版本控制系統的啟發，但對於一些限制感到不滿，因此決定創建自己的版本控制系統。 \n \n \n 2005年4月 ：Git 開始在 Linux 內核開發中使用。Torvalds將Linux內核的版本控制從BitKeeper轉移到Git。 \n \n \n 2005年6月 ：Git 1.0版本發布。這是Git的首個正式穩定版本，標誌著Git正式進入廣泛使用的階段。 \n \n \n 2008年 ：GitHub成立。GitHub是一個基於Git的代碼托管平台，為開發者提供了方便的代碼存儲、版本控制和協作功能。GitHub的出現進一步推動了Git的普及和發展。 \n \n \n 2012年 ：Git 1.8.0版本發布。這是Git的一個重要版本，引入了許多新特性和改進，包括重寫的分支合併策略、子模組支持等。 \n \n \n 2016年 ：Git 2.0版本發布。這個版本引入了一些重要的改進和更新，包括重新設計的設置系統、忽略規則的改進等。 \n \n \n 至今 ：Git 不斷進行著更新和改進。每個新版本都帶來了更多的功能、性能優化和使用體驗改進，使得Git在軟件開發領域中得到廣泛應用。 \n \n \n git創作人Linus Torvalds的相關履歷 \n Linus Torvalds，Git 的創始人，是一位著名的計算機科學家和軟件工程師，最著名的貢獻是 Linux 操作系統的開發。以下是他的一些相關履歷： \n \n \n 早年生活和教育 ： \n \n Linus Benedict Torvalds 生於1969年12月28日，出生於芬蘭赫爾辛基。 \n 他在赫爾辛基大學學習計算機科學，於1996年獲得碩士學位。 \n \n \n \n Linux 的創建 ： \n \n 在大學期間，他開始對操作系統感興趣，並開始編寫一個新的操作系統的核心。 \n 1991年，他發布了 Linux 核心的第一個版本，這成為了 Linux 操作系統的開端。 \n \n \n \n Git 的誕生 ： \n \n 2005年，Torvalds為了管理 Linux 內核代碼的開發而創建了 Git 版本控制系統。 \n 他受到 BitKeeper 版本控制系統的啟發，但對於一些限制感到不滿，因此決定創建自己的版本控制系統。 \n \n \n \n 軟件工程師生涯 ： \n \n Torvalds 是一位極具影響力的軟件工程師，除了 Linux 和 Git 外，他還參與了許多其他開源項目。 \n 他經常參加各種開發者活動和會議，並在開源社區中發揮著積極的作用。 \n \n \n \n 榮譽與獎項 ： \n \n 2000年，他被《時代》雜誌列為「互聯網最重要的人物之一」。 \n 2012年，他獲得了芬蘭國家技術獎。 \n 他還獲得了許多其他獎項和榮譽，以表彰他在計算機科學領域的重要貢獻。 \n \n \n \n \n 一般相同專業人士如何利用 git 解決內容管理問題 ? \n \n \n \n \n \n \n \n \n \n \n \n \n \n 對於一般的專業人士，尤其是軟件開發人員和其他技術人員來說，Git 是一個強大的工具，可以幫助他們解決內容管理問題。以下是一些一般相同專業人士如何利用 Git 解決內容管理問題的方式： \n \n \n 版本控制 ：Git 讓你能夠跟蹤和管理內容的各個版本。這對於文檔、代碼、配置文件等各種類型的內容都非常有用。你可以隨時回溯到之前的版本，比如當需要查找錯誤的起源時，或者需要恢復到之前的穩定狀態時。 \n \n \n 分支和合併 ：Git 允許創建分支來獨立開發新功能或修復問題，而不會影響主要的開發分支。這樣可以同時進行多個功能的開發，而不會相互干擾。然後，你可以使用合併操作將這些分支合併回主要的開發線上。 \n \n \n 協作 ：Git 提供了便捷的方式讓多個人協作開發同一個項目。通過將代碼庫克隆到本地，進行修改後再推送回原始代碼庫，不同團隊成員可以輕鬆地共享和合作。這對於團隊內部或跨團隊之間的合作都非常有用。 \n \n \n 代碼審查 ：Git 可以與代碼審查工具結合使用，這使得團隊能夠進行代碼審查，從而提高代碼質量和可讀性。通過在代碼庫中創建分支，然後將分支中的代碼發送給同事進行審查，可以有效地進行代碼審查流程。 \n \n \n 自動化流程 ：利用 Git 的 Hooks 功能，可以實現自動化的流程。例如，你可以設置 pre-commit hook，在提交代碼之前運行測試，從而確保提交的代碼是合格的。這樣可以提高代碼的質量並減少錯誤。 \n \n \n Git 是一個非常強大且靈活的工具，可以滿足各種內容管理需求。通過充分利用 Git 的功能，專業人士可以更有效地管理和協作開發項目，提高生產力和內容質量。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};