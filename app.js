// --- アプリのグローバル状態（ステート） ---
const STORAGE_PREFIX = "fishQuizV2_";

const GROUP_MASTER_DEF = {
    "魚": ["ベラ科", "ハゼ科", "スズメダイ科", "チョウチョウウオ科", "テンジクダイ科", "イソギンポ科", "ハタ亜科", "ニザダイ科", "フサカサゴ科", "フエダイ科", "キンチャクダイ科", "アジ科", "ハナダイ亜科", "イットウダイ科", "フグ科", "ヨウジウオ科", "カワハギ科", "モンガラカワハギ科", "ウツボ科", "フエフキダイ科", "ヒメジ科", "ゴンベ科", "ネズッポ科", "トラギス科", "アイゴ科", "イトヨリダイ科", "カエルアンコウ科", "エソ科", "オクスデルケス科", "ヘビギンポ科", "イサキ科", "サバ科", "ウミヘビ科", "オニオコゼ科", "カマス科", "ハコフグ科", "アナゴ科", "コチ科", "ウバウオ科", "アカエイ科", "キツネアマダイ科", "ウラナイカジカ科", "ササウシノシタ科", "コケギンポ科", "ハリセンボン科", "マンジュウダイ科", "メジロザメ科", "ハタンポ科", "タナバタウオ科", "ヒラメ科", "エボシダイ科", "メジナ科", "ホウボウ科", "ハナスズキ科", "キントキダイ科", "ベラギンポ科", "ダルマガレイ科", "ヘコアユ科", "メギス科", "ボラ科", "タカノハダイ科", "イスズミ科", "ヤガラ科", "ヌノサラシ亜科", "アンコウ科", "イシダイ科", "ウミテング科", "ウシノシタ科", "ダツ科", "イトマキエイ科", "タイ科", "カレイ科", "ミシマオコゼ科", "アイナメ科", "アカグツ科", "シュモクザメ科", "イタチウオ科", "イボダイ科", "ウチワザメ科", "オオセ科", "コモリザメ科", "ウミタナゴ科", "カゴカキダイ科", "カスザメ科", "カミソリウオ科", "キビナゴ科", "ユゴイ科", "クロサギ科", "シマイサキ科", "コバンザメ科", "サカタザメ科", "サバヒー科", "シビレエイ科", "キス科", "シロワニ科", "ジンベエザメ科", "クサウオ科", "セミホウボウ科", "サヨリ科", "タカベ亜科", "ダンゴウオ科", "ツノダシ科", "カワビシャ科", "ドチザメ科", "トビウオ科", "トビエイ科", "トラフザメ科", "トラザメ科", "オナガザメ科", "ネコザメ科", "ヒメ科", "ヒメツバメウオ科", "ヒラタエイ科", "ヘラヤガラ科", "ホタテエソ科", "フサアンコウ科", "マイワシ科", "タナゴ亜科", "マダラトビエイ科", "マツカサウオ科", "マツダイ科", "マトウダイ科", "マンボウ科", "ムツ科", "アゴアマダイ科"],
    "魚以外": ["テナガエビ科", "マイルカ科", "イロウミウシ科", "コブラ科", "ナガスクジラ科", "コウイカ科", "マダコ科", "ウミガメ科", "ヨツスジミノウミウシ科", "フジタウミウシ科", "ヤリイカ科", "イボウミウシ科", "チドリミドリガイ科", "ミドリイシ科", "クモガニ科", "Epialtidae", "カラッパ科", "ハタゴイソギンチャク科", "アメフラシ科", "セミクジラ科", "イッカク科", "ネズミイルカ科", "ダンゴイカ科", "アカイカ科", "サメハダホウズキイカ科", "モエビ科", "イセエビ科", "セミエビ科", "オウギガニ科", "ガザミ／ワタリガニ科", "サンゴガニ科", "カニダマシ科", "ワラエビ科", "オキクラゲ科", "ギンカクラゲ科", "ビゼンクラゲ科", "カノコキセワタ科", "アシカ科", "アカヒトデ科", "コブヒトデ科", "ナガウニ科", "ラッパウニ科", "クロナマコ科", "シカクナマコ科", "ザルガイ科", "ハナサンゴ科", "サザナミサンゴ科", "ミツバウツギ科", "マッコウクジラ科", "コククジラ科", "アカボウクジラ科", "ヒメイカ科", "ホタルイカモドキ科", "ソデイカ科", "ユウレイイカ科", "ダイオウイカ科", "オトヒメエビ科", "ヒメサンゴモエビ科", "ヒゲナガモエビ科", "Chlorotocellidae", "サラサエビ科", "カイカムリ科", "ミズヒキガニ科", "ケブカガニ科", "キンセンガニ科", "アサヒガニ科", "トゲアシガニ科", "ヒシガニ科", "ショウジンガニ科", "スナガニ科", "ミズクラゲ科", "タコクラゲ科", "ハナガサクラゲ科", "サカサクラゲ科", "アンドンクラゲ科", "ネッタイアンドンクラゲ科", "カツオノエボシ科", "オワンクラゲ科", "ウリクラゲ科", "カブトクラゲ科", "ユウレイクラゲ科", "オビクラゲ科", "マツバクラゲ科", "テマリクラゲ科", "ミズダコ科", "ムラサキダコ科", "アオイガイ科", "オサガメ科", "Cadlinellidae", "ツヅレウミウシ科", "クロシタナシウミウシ科", "ニセツノヒラムシ科", "ジュゴン科", "アザラシ科", "オニヒトデ科", "ガンガゼ科", "ホラガイ科", "ソデボラ科", "ウミウサギガイ科", "タカラガイ科", "オウムガイ科", "カンザシゴカイ科", "ウミケムシ科", "イグアナ科", "ハナシャコ科", "トラフシャコ科", "ケヤリムシ科", "ミミガイ科", "サザエ科", "トウカムリ科", "イトマキヒトデ科", "ヒメヒトデ科", "タコノマクラ科", "アミジグサ科", "テッポウエビ科", "ウメボシイソギンチャク科", "マボヤ科", "ユウレイボヤ科", "ツツボヤ科", "ハマサンゴ科", "クサビライシ科", "オオトゲサンゴ科", "ヒラフキサンゴ科"],
    "サメの仲間": ["メジロザメ科", "シュモクザメ科", "オオセ科", "コモリザメ科", "カスザメ科", "シロワニ科", "ジンベエザメ科", "ドチザメ科", "トラフザメ科", "トラザメ科", "オナガザメ科", "ネコザメ科"],
    "エイの仲間": ["アカエイ科", "イトマキエイ科", "ウチワザメ科", "サカタザメ科", "シビレエイ科", "トビエイ科", "ヒラタエイ科", "マダラトビエイ科"],
    "海の哺乳類": ["マイルカ科", "ナガスクジラ科", "セミクジラ科", "イッカク科", "ネズミイルカ科", "アシカ科", "マッコウクジラ科", "コククジラ科", "アカボウクジラ科", "ジュゴン科", "アザラシ科"],
    "爬虫類": ["ウミガメ科", "コブラ科", "オサガメ科", "イグアナ科"],
    "エビの仲間": ["テナガエビ科", "モエビ科", "イセエビ科", "セミエビ科", "オトヒメエビ科", "ヒメサンゴモエビ科", "ヒゲナガモエビ科", "Chlorotocellidae", "サラサエビ科", "テッポウエビ科"],
    "カニの仲間": ["クモガニ科", "Epialtidae", "カラッパ科", "オウギガニ科", "ガザミ／ワタリガニ科", "サンゴガニ科", "カニダマシ科", "ワラエビ科", "カイカムリ科", "ミズヒキガニ科", "ケブカガニ科", "キンセンガニ科", "アサヒガニ科", "トゲアシガニ科", "ヒシガニ科", "ショウジンガニ科", "スナガニ科"],
    "シャコの仲間": ["ハナシャコ科", "トラフシャコ科"],
    "イカ・タコ・オウムガイの仲間": ["コウイカ科", "マダコ科", "ヤリイカ科", "ダンゴイカ科", "アカイカ科", "サメハダホウズキイカ科", "ヒメイカ科", "ホタルイカモドキ科", "ソデイカ科", "ユウレイイカ科", "ダイオウイカ科", "ミズダコ科", "ムラサキダコ科", "アオイガイ科", "オウムガイ科"],
    "貝の仲間": ["ザルガイ科", "ホラガイ科", "ソデボラ科", "ウミウサギガイ科", "タカラガイ科", "ミミガイ科", "サザエ科", "トウカムリ科"],
    "ウミウシ・アメフラシの仲間": ["イロウミウシ科", "ヨツスジミノウミウシ科", "フジタウミウシ科", "イボウミウシ科", "チドリミドリガイ科", "アメフラシ科", "カノコキセワタ科", "Cadlinellidae", "ツヅレウミウシ科", "クロシタナシウミウシ科"],
    "クラゲの仲間": ["オキクラゲ科", "ギンカクラゲ科", "ビゼンクラゲ科", "ミズクラゲ科", "タコクラゲ科", "ハナガサクラゲ科", "サカサクラゲ科", "アンドンクラゲ科", "ネッタイアンドンクラゲ科", "カツオノエボシ科", "オワンクラゲ科", "ウリクラゲ科", "カブトクラゲ科", "ユウレイクラゲ科", "オビクラゲ科", "マツバクラゲ科", "テマリクラゲ科"],
    "サンゴ・イソギンチャクの仲間": ["ハタゴイソギンチャク科", "ミドリイシ科", "ハナサンゴ科", "サザナミサンゴ科", "ウメボシイソギンチャク科", "ハマサンゴ科", "クサビライシ科", "オオトゲサンゴ科", "ヒラフキサンゴ科"],
    "ウニ・ヒトデ・ナマコの仲間": ["アカヒトデ科", "コブヒトデ科", "ナガウニ科", "ラッパウニ科", "クロナマコ科", "シカクナマコ科", "オニヒトデ科", "ガンガゼ科", "イトマキヒトデ科", "ヒメヒトデ科", "タコノマクラ科"],
    "ホヤ・ゴカイ・海藻・植物など": ["ニセツノヒラムシ科", "カンザシゴカイ科", "ウミケムシ科", "ケヤリムシ科", "マボヤ科", "ユウレイボヤ科", "ツツボヤ科", "ミツバウツギ科", "アミジグサ科"],
    "大きな魚": ["メジロザメ科", "シュモクザメ科", "シロワニ科", "ジンベエザメ科", "オナガザメ科", "イトマキエイ科", "トビエイ科", "マダラトビエイ科", "サバ科", "カマス科", "トビウオ科", "マンボウ科", "エボシダイ科", "イボダイ科"],
    "群れる小・中型魚": ["マイワシ科", "アジ科", "タイ科", "サヨリ科", "キビナゴ科", "イサキ科", "ボラ科", "ダツ科", "クロサギ科", "シマイサキ科", "ウミタナゴ科", "タカベ亜科", "ユゴイ科", "ヒメツバメウオ科", "ムツ科", "タナゴ亜科", "サバヒー科"],
    "海底に住む魚": ["ヒラメ科", "カレイ科", "ササウシノシタ科", "ウシノシタ科", "ダルマガレイ科", "オオセ科", "コモリザメ科", "カスザメ科", "ドチザメ科", "トラフザメ科", "トラザメ科", "ネコザメ科", "アカエイ科", "ウチワザメ科", "サカタザメ科", "シビレエイ科", "ヒラタエイ科"],
    "砂地や岩穴の魚": ["ハゼ科", "イソギンポ科", "フサカサゴ科", "ウツボ科", "ヒメジ科", "ネズッポ科", "トラギス科", "イトヨリダイ科", "カエルアンコウ科", "エソ科", "オクスデルケス科", "ヘビギンポ科", "ウミヘビ科", "オニオコゼ科", "アナゴ科", "コチ科", "ウバウオ科", "キツネアマダイ科", "ウラナイカジカ科", "コケギンポ科", "ホウボウ科", "ベラギンポ科", "アンコウ科", "ミシマオコゼ科", "アイナメ科", "アカグツ科", "イタチウオ科", "キス科", "クサウオ科", "セミホウボウ科", "ヒメ科", "ホタテエソ科", "フサアンコウ科", "アゴアマダイ科"],
    "サンゴ礁を彩る魚": ["ベラ科", "スズメダイ科", "チョウチョウウオ科", "テンジクダイ科", "ハタ亜科", "ニザダイ科", "フエダイ科", "キンチャクダイ科", "ハナダイ亜科", "イットウダイ科", "カワハギ科", "モンガラカワハギ科", "フエフキダイ科", "ゴンベ科", "アイゴ科", "マンジュウダイ科", "ハタンポ科", "タナバタウオ科", "メジナ科", "ハナスズキ科", "キントキダイ科", "メギス科", "タカノハダイ科", "イスズミ科", "ヌノサラシ亜科", "イシダイ科", "カゴカキダイ科", "ツノダシ科", "カワビシャ科"]
};

let fishMaster = [];       
let orderMaster = [];      
let familyMaster = [];     

let currentUser = null;
let userFavorites = [];    
let userWrongs = [];       
let userCorrects = [];     
let userNotToLearn = [];   
let userLogs = [];         

let currentQuizPool = [];  
let quizQuestions = [];    
let currentQuestionIdx = 0;
let currentScore = 0;      
let quizHistory = [];      
let selectedChoicesCount = 4; 

let timerInterval = null;
let quizSecondsElapsed = 0;
let currentQuizSettings = {};

let currentDetailTab = 'order'; 
let lastQuizTargetFishes = []; 

// --- 1. アプリ初期化 ＆ データロード ---
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await fetch('aquatic_database.json');
        fishMaster = await res.json();
        setupEventListeners();
        generateCategoryMaster();
        renderCategories("count_rank", true); 
    } catch (error) {
        console.error("データの読み込みに失敗しました:", error);
        alert("データの読み込みに失敗しました。ローカルサーバーが起動しているか確認してください。");
    }
});

function getValidImages(fish) {
    const validPaths = [];
    if (fish.image1) validPaths.push(fish.image1);
    if (fish.image2) validPaths.push(fish.image2);
    if (fish.image3) validPaths.push(fish.image3);
    return validPaths;
}

function pickRandomImage(fish) {
    const images = getValidImages(fish);
    if (images.length === 0) return null;
    return images[Math.floor(Math.random() * images.length)];
}

function generateCarouselHTML(fish) {
    const images = getValidImages(fish);
    if (images.length === 0) {
        return `<div class="carousel-container"><div class="no-image-placeholder">NO IMAGE</div></div>`;
    }
    let html = `<div class="carousel-container">`;
    images.forEach(src => {
        html += `<img class="carousel-item" src="${src}" alt="${fish.name}">`;
    });
    html += `</div>`;
    return html;
}

function generateExternalLinksHTML(fishName) {
    const wikiUrl = `https://ja.wikipedia.org/wiki/${encodeURIComponent(fishName)}`;
    const inatUrl = `https://www.inaturalist.org/search?q=${encodeURIComponent(fishName)}`;
    return `
        <div class="external-links">
            <a href="${wikiUrl}" target="_blank" class="btn-external">📖 Wikipedia</a>
            <a href="${inatUrl}" target="_blank" class="btn-external">🍃 iNaturalist</a>
        </div>
    `;
}

function formatTime(totalSeconds) {
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        quizSecondsElapsed++;
        document.getElementById("quiz-timer").textContent = `⏱️ ${formatTime(quizSecondsElapsed)}`;
    }, 1000);
}

function navigateTo(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
    window.scrollTo(0, 0);
}

// --- 2. ユーザー管理 ---
function handleLogin() {
    const idInput = document.getElementById("login-id-input").value.trim();
    if (!idInput) {
        document.getElementById("login-error").textContent = "IDを入力してください。";
        return;
    }
    currentUser = idInput;
    
    userFavorites = JSON.parse(localStorage.getItem(STORAGE_PREFIX + currentUser + "_favs")) || [];
    userWrongs = JSON.parse(localStorage.getItem(STORAGE_PREFIX + currentUser + "_wrongs")) || [];
    userCorrects = JSON.parse(localStorage.getItem(STORAGE_PREFIX + currentUser + "_corrects")) || [];
    userNotToLearn = JSON.parse(localStorage.getItem(STORAGE_PREFIX + currentUser + "_notToLearn")) || [];
    userLogs = JSON.parse(localStorage.getItem(STORAGE_PREFIX + currentUser + "_logs")) || [];

    document.getElementById("current-user-id").textContent = currentUser;
    
    generateCategoryMaster();
    renderCategories("count_rank", true);
    updateDashboard();
    navigateTo("setup-screen");
}

function updateStorage() {
    if (!currentUser) return;
    localStorage.setItem(STORAGE_PREFIX + currentUser + "_favs", JSON.stringify(userFavorites));
    localStorage.setItem(STORAGE_PREFIX + currentUser + "_wrongs", JSON.stringify(userWrongs));
    localStorage.setItem(STORAGE_PREFIX + currentUser + "_corrects", JSON.stringify(userCorrects));
    localStorage.setItem(STORAGE_PREFIX + currentUser + "_notToLearn", JSON.stringify(userNotToLearn));
    localStorage.setItem(STORAGE_PREFIX + currentUser + "_logs", JSON.stringify(userLogs));
    
    generateCategoryMaster();
}

// --- 3. 分類マスタの動的生成 ---
function generateCategoryMaster() {
    const orderMap = new Map();
    const familyMap = new Map();

    fishMaster.forEach(f => {
        if (userNotToLearn.includes(f.id)) return;

        if (!familyMap.has(f.family_name)) {
            familyMap.set(f.family_name, { name: f.family_name, count: 0 });
        }
        familyMap.get(f.family_name).count++;

        if (!orderMap.has(f.order_name)) {
            orderMap.set(f.order_name, { name: f.order_name, count: 0, families: new Set() });
        }
        orderMap.get(f.order_name).count++;
        orderMap.get(f.order_name).families.add(f.family_name);
    });

    familyMaster = Array.from(familyMap.values());
    orderMaster = Array.from(orderMap.values()).map(o => ({
        name: o.name,
        count: o.count,
        families: Array.from(o.families)
    }));

    const searchSelect = document.getElementById("search-category-select");
    searchSelect.innerHTML = `<option value="all">すべての分類</option>`;
    const sortedFam = [...familyMaster].sort((a,b) => b.count - a.count);
    sortedFam.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.name; opt.textContent = `${c.name} (${c.count}種)`;
        searchSelect.appendChild(opt);
    });
}

function updateDashboard() {
    const activeCount = fishMaster.filter(f => !userNotToLearn.includes(f.id)).length;
    document.getElementById("db-total-count").textContent = activeCount;
    
    const validCorrects = userCorrects.filter(id => !userNotToLearn.includes(id));
    const validRemaining = activeCount - validCorrects.length;
    
    document.getElementById("db-correct-count").textContent = validCorrects.length;
    document.getElementById("db-remaining-count").textContent = validRemaining;
    
    const pct = activeCount > 0 ? Math.floor((validCorrects.length / activeCount) * 100) : 0;
    document.getElementById("db-progress-bar").style.width = pct + "%";
    document.getElementById("db-progress-percent").textContent = pct + "%";

    const logContainer = document.getElementById("db-log-container");
    logContainer.innerHTML = "";
    if (userLogs.length === 0) {
        logContainer.innerHTML = `<p class="empty-log-text">まだチャレンジ履歴がありません。</p>`;
    } else {
        const recentLogs = [...userLogs].reverse().slice(0, 5);
        recentLogs.forEach(log => {
            const row = document.createElement("div"); row.className = "log-row";
            const dateStr = new Date(log.date).toLocaleDateString('ja-JP', {month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});
            row.innerHTML = `
                <div class="log-info">
                    <span class="log-date">${dateStr}</span>
                    <span class="log-type">${log.settings.type} / ${log.settings.difficulty}</span>
                </div>
                <div class="log-score ${log.score === log.total ? 'perfect' : ''}">${log.score} / ${log.total}</div>
            `;
            logContainer.appendChild(row);
        });
    }
}

function showDashboardDetail(isTabClick = false) {
    if (currentDetailTab === 'order') {
        document.getElementById("detail-tab-order").classList.add("active");
        document.getElementById("detail-tab-group").classList.remove("active");
    } else {
        document.getElementById("detail-tab-group").classList.add("active");
        document.getElementById("detail-tab-order").classList.remove("active");
    }

    const catStatsContainer = document.getElementById("detail-cat-stats-container");
    catStatsContainer.innerHTML = "";

    let catMap = new Map();
    
    if (currentDetailTab === 'order') {
        fishMaster.forEach(f => {
            if(userNotToLearn.includes(f.id)) return;
            if(!catMap.has(f.order_name)) { catMap.set(f.order_name, { total: 0, correct: 0 }); }
            catMap.get(f.order_name).total++;
            if(userCorrects.includes(f.id)) catMap.get(f.order_name).correct++;
        });
    } else {
        Object.keys(GROUP_MASTER_DEF).forEach(groupName => {
            catMap.set(groupName, { total: 0, correct: 0 });
        });
        catMap.set("その他", { total: 0, correct: 0 });

        fishMaster.forEach(f => {
            if(userNotToLearn.includes(f.id)) return;
            let foundGroup = false;
            Object.entries(GROUP_MASTER_DEF).forEach(([gName, families]) => {
                if(families.includes(f.family_name)) {
                    catMap.get(gName).total++;
                    if(userCorrects.includes(f.id)) catMap.get(gName).correct++;
                    foundGroup = true;
                }
            });
            if (!foundGroup) {
                catMap.get("その他").total++;
                if(userCorrects.includes(f.id)) catMap.get("その他").correct++;
            }
        });
        
        for (let [key, val] of catMap.entries()) {
            if (val.total === 0) catMap.delete(key);
        }
    }

    const sortedCats = Array.from(catMap.entries()).sort((a,b) => b[1].total - a[1].total);
    sortedCats.forEach(([catName, stats]) => {
        const pct = Math.floor((stats.correct / stats.total) * 100);
        catStatsContainer.innerHTML += `
            <div class="stat-row">
                <div class="stat-row-label" title="${catName}">${catName}</div>
                <div class="stat-row-bar-bg"><div class="stat-row-bar-fg" style="width: ${pct}%"></div></div>
                <div class="stat-row-val">${stats.correct}/${stats.total}</div>
                <div class="stat-row-pct">${pct}%</div>
            </div>
        `;
    });

    const logFullContainer = document.getElementById("detail-log-full-container");
    logFullContainer.innerHTML = "";
    if (userLogs.length === 0) {
        logFullContainer.innerHTML = `<p class="empty-log-text">履歴がありません。</p>`;
    } else {
        [...userLogs].reverse().forEach(log => {
            const dateStr = new Date(log.date).toLocaleString('ja-JP');
            const categoriesText = log.settings.categories && log.settings.categories.length > 0 
                ? log.settings.categories.join(", ") 
                : "全範囲";

            logFullContainer.innerHTML += `
                <div class="detailed-log-card">
                    <div class="dl-header"><span>${dateStr}</span> <span class="dl-type">${log.settings.type} / ${log.settings.difficulty}</span></div>
                    <div class="dl-row"><span class="dl-label">スコア</span><span class="dl-value">${log.score} / ${log.total} (${Math.floor(log.score/log.total*100)}%)</span></div>
                    <div class="dl-row"><span class="dl-label">所要時間</span><span class="dl-value">${formatTime(log.time)}</span></div>
                    <div class="dl-row"><span class="dl-label">出題範囲</span><span class="dl-value" style="font-size:0.7rem; text-align:right; width:65%; word-break: break-all;">${categoriesText}</span></div>
                </div>
            `;
        });
    }

    if (!isTabClick) {
        navigateTo("db-detail-screen");
    }
}

function renderCategories(sortKey, forceReset = false) {
    const container = document.getElementById("category-list-container");
    const viewMode = document.querySelector("input[name='cat-view-mode']:checked").value;
    const famControls = document.getElementById("family-selection-control");
    
    if (!container) return;
    container.innerHTML = "";

    // リスト全体を一括で操作するボタンは常に表示
    famControls.style.display = "flex";

    if (viewMode === "family") {
        let sortedFamilies = [...familyMaster];
        if (sortKey === "count_rank") sortedFamilies.sort((a,b) => b.count - a.count);
        if (sortKey === "abc") sortedFamilies.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
        
        sortedFamilies.forEach(fam => {
            const label = document.createElement("label"); label.className = "category-check-label";
            label.innerHTML = `<input type="checkbox" name="category" value="${fam.name}" class="category-check" ${forceReset ? "checked" : ""}> ${fam.name} <span class="cat-count">(${fam.count}種)</span>`;
            container.appendChild(label);
        });
    } else if (viewMode === "order") {
        let sortedOrders = [...orderMaster];
        if (sortKey === "count_rank") sortedOrders.sort((a,b) => b.count - a.count);
        if (sortKey === "abc") sortedOrders.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
        
        sortedOrders.forEach(ord => {
            const wrapper = document.createElement("div"); wrapper.className = "accordion-item";
            const header = document.createElement("button"); header.className = "accordion-header";
            header.innerHTML = `<span class="acc-title">${ord.name} <span style="font-size:0.8rem; font-weight:normal;">(${ord.count}種)</span></span><span class="acc-icon">▼</span>`;
            
            const body = document.createElement("div"); body.className = "accordion-body"; body.style.display = forceReset ? "block" : "none";
            
            // ★ 復活：各アコーディオン内の「すべて選択/解除」ボタン
            const ctrl = document.createElement("div"); ctrl.className = "accordion-controls";
            ctrl.innerHTML = `<button type="button" class="btn btn-sm btn-outline select-ord-all">すべて選択</button> <button type="button" class="btn btn-sm btn-outline deselect-ord-all">すべて解除</button>`;
            body.appendChild(ctrl);
            
            const famList = document.createElement("div"); famList.className = "acc-fam-list";
            let sortedFamOfOrd = familyMaster.filter(f => ord.families.includes(f.name));
            if (sortKey === "count_rank") sortedFamOfOrd.sort((a,b) => b.count - a.count);
            if (sortKey === "abc") sortedFamOfOrd.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
            
            sortedFamOfOrd.forEach(fam => {
                const label = document.createElement("label"); lPREFIX + currentUser + "_logs", JSON.stringify(userLogs));
    
    generateCategoryMaster();
}

// --- 3. 分類マスタの動的生成 ---
function generateCategoryMaster() {
    const orderMap = new Map();
    const familyMap = new Map();

    fishMaster.forEach(f => {
        if (userNotToLearn.includes(f.id)) return;

        if (!familyMap.has(f.family_name)) {
            familyMap.set(f.family_name, { name: f.family_name, count: 0 });
        }
        familyMap.get(f.family_name).count++;

        if (!orderMap.has(f.order_name)) {
            orderMap.set(f.order_name, { name: f.order_name, count: 0, families: new Set() });
        }
        orderMap.get(f.order_name).count++;
        orderMap.get(f.order_name).families.add(f.family_name);
    });

    familyMaster = Array.from(familyMap.values());
    orderMaster = Array.from(orderMap.values()).map(o => ({
        name: o.name,
        count: o.count,
        families: Array.from(o.families)
    }));

    const searchSelect = document.getElementById("search-category-select");
    searchSelect.innerHTML = `<option value="all">すべての分類</option>`;
    const sortedFam = [...familyMaster].sort((a,b) => b.count - a.count);
    sortedFam.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.name; opt.textContent = `${c.name} (${c.count}種)`;
        searchSelect.appendChild(opt);
    });
}

function updateDashboard() {
    const activeCount = fishMaster.filter(f => !userNotToLearn.includes(f.id)).length;
    document.getElementById("db-total-count").textContent = activeCount;
    
    const validCorrects = userCorrects.filter(id => !userNotToLearn.includes(id));
    const validRemaining = activeCount - validCorrects.length;
    
    document.getElementById("db-correct-count").textContent = validCorrects.length;
    document.getElementById("db-remaining-count").textContent = validRemaining;
    
    const pct = activeCount > 0 ? Math.floor((validCorrects.length / activeCount) * 100) : 0;
    document.getElementById("db-progress-bar").style.width = pct + "%";
    document.getElementById("db-progress-percent").textContent = pct + "%";

    const logContainer = document.getElementById("db-log-container");
    logContainer.innerHTML = "";
    if (userLogs.length === 0) {
        logContainer.innerHTML = `<p class="empty-log-text">まだチャレンジ履歴がありません。</p>`;
    } else {
        const recentLogs = [...userLogs].reverse().slice(0, 5);
        recentLogs.forEach(log => {
            const row = document.createElement("div"); row.className = "log-row";
            const dateStr = new Date(log.date).toLocaleDateString('ja-JP', {month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'});
            row.innerHTML = `
                <div class="log-info">
                    <span class="log-date">${dateStr}</span>
                    <span class="log-type">${log.settings.type} / ${log.settings.difficulty}</span>
                </div>
                <div class="log-score ${log.score === log.total ? 'perfect' : ''}">${log.score} / ${log.total}</div>
            `;
            logContainer.appendChild(row);
        });
    }
}

function showDashboardDetail(isTabClick = false) {
    if (currentDetailTab === 'order') {
        document.getElementById("detail-tab-order").classList.add("active");
        document.getElementById("detail-tab-group").classList.remove("active");
    } else {
        document.getElementById("detail-tab-group").classList.add("active");
        document.getElementById("detail-tab-order").classList.remove("active");
    }

    const catStatsContainer = document.getElementById("detail-cat-stats-container");
    catStatsContainer.innerHTML = "";

    let catMap = new Map();
    
    if (currentDetailTab === 'order') {
        fishMaster.forEach(f => {
            if(userNotToLearn.includes(f.id)) return;
            if(!catMap.has(f.order_name)) { catMap.set(f.order_name, { total: 0, correct: 0 }); }
            catMap.get(f.order_name).total++;
            if(userCorrects.includes(f.id)) catMap.get(f.order_name).correct++;
        });
    } else {
        Object.keys(GROUP_MASTER_DEF).forEach(groupName => {
            catMap.set(groupName, { total: 0, correct: 0 });
        });
        catMap.set("その他", { total: 0, correct: 0 });

        fishMaster.forEach(f => {
            if(userNotToLearn.includes(f.id)) return;
            let foundGroup = false;
            Object.entries(GROUP_MASTER_DEF).forEach(([gName, families]) => {
                if(families.includes(f.family_name)) {
                    catMap.get(gName).total++;
                    if(userCorrects.includes(f.id)) catMap.get(gName).correct++;
                    foundGroup = true;
                }
            });
            if (!foundGroup) {
                catMap.get("その他").total++;
                if(userCorrects.includes(f.id)) catMap.get("その他").correct++;
            }
        });
        
        for (let [key, val] of catMap.entries()) {
            if (val.total === 0) catMap.delete(key);
        }
    }

    const sortedCats = Array.from(catMap.entries()).sort((a,b) => b[1].total - a[1].total);
    sortedCats.forEach(([catName, stats]) => {
        const pct = Math.floor((stats.correct / stats.total) * 100);
        catStatsContainer.innerHTML += `
            <div class="stat-row">
                <div class="stat-row-label" title="${catName}">${catName}</div>
                <div class="stat-row-bar-bg"><div class="stat-row-bar-fg" style="width: ${pct}%"></div></div>
                <div class="stat-row-val">${stats.correct}/${stats.total}</div>
                <div class="stat-row-pct">${pct}%</div>
            </div>
        `;
    });

    const logFullContainer = document.getElementById("detail-log-full-container");
    logFullContainer.innerHTML = "";
    if (userLogs.length === 0) {
        logFullContainer.innerHTML = `<p class="empty-log-text">履歴がありません。</p>`;
    } else {
        [...userLogs].reverse().forEach(log => {
            const dateStr = new Date(log.date).toLocaleString('ja-JP');
            const categoriesText = log.settings.categories && log.settings.categories.length > 0 
                ? log.settings.categories.join(", ") 
                : "全範囲";

            logFullContainer.innerHTML += `
                <div class="detailed-log-card">
                    <div class="dl-header"><span>${dateStr}</span> <span class="dl-type">${log.settings.type} / ${log.settings.difficulty}</span></div>
                    <div class="dl-row"><span class="dl-label">スコア</span><span class="dl-value">${log.score} / ${log.total} (${Math.floor(log.score/log.total*100)}%)</span></div>
                    <div class="dl-row"><span class="dl-label">所要時間</span><span class="dl-value">${formatTime(log.time)}</span></div>
                    <div class="dl-row"><span class="dl-label">出題範囲</span><span class="dl-value" style="font-size:0.7rem; text-align:right; width:65%; word-break: break-all;">${categoriesText}</span></div>
                </div>
            `;
        });
    }

    if (!isTabClick) {
        navigateTo("db-detail-screen");
    }
}

function renderCategories(sortKey, forceReset = false) {
    const container = document.getElementById("category-list-container");
    const viewMode = document.querySelector("input[name='cat-view-mode']:checked").value;
    const famControls = document.getElementById("family-selection-control");
    
    if (!container) return;
    container.innerHTML = "";

    famControls.style.display = "flex";

    if (viewMode === "family") {
        let sortedFamilies = [...familyMaster];
        if (sortKey === "count_rank") sortedFamilies.sort((a,b) => b.count - a.count);
        if (sortKey === "abc") sortedFamilies.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
        
        sortedFamilies.forEach(fam => {
            const label = document.createElement("label"); label.className = "category-check-label";
            label.innerHTML = `<input type="checkbox" name="category" value="${fam.name}" class="category-check" ${forceReset ? "checked" : ""}> ${fam.name} <span class="cat-count">(${fam.count}種)</span>`;
            container.appendChild(label);
        });
    } else if (viewMode === "order") {
        let sortedOrders = [...orderMaster];
        if (sortKey === "count_rank") sortedOrders.sort((a,b) => b.count - a.count);
        if (sortKey === "abc") sortedOrders.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
        
        sortedOrders.forEach(ord => {
            const wrapper = document.createElement("div"); wrapper.className = "accordion-item";
            const header = document.createElement("button"); header.className = "accordion-header";
            header.innerHTML = `<span class="acc-title">${ord.name} <span style="font-size:0.8rem; font-weight:normal;">(${ord.count}種)</span></span><span class="acc-icon">▼</span>`;
            
            const body = document.createElement("div"); body.className = "accordion-body"; body.style.display = forceReset ? "block" : "none";
            
            const famList = document.createElement("div"); famList.className = "acc-fam-list";
            let sortedFamOfOrd = familyMaster.filter(f => ord.families.includes(f.name));
            if (sortKey === "count_rank") sortedFamOfOrd.sort((a,b) => b.count - a.count);
            if (sortKey === "abc") sortedFamOfOrd.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
            
            sortedFamOfOrd.forEach(fam => {
                const label = document.createElement("label"); label.className = "category-check-label";
                label.innerHTML = `<input type="checkbox" name="category" value="${fam.name}" class="category-check" ${forceReset ? "checked" : ""}> ${fam.name} <span class="cat-count">(${fam.count}種)</span>`;
                famList.appendChild(label);
            });
            body.appendChild(famList);
            
            header.onclick = () => {
                const isHidden = body.style.display === "none";
                body.style.display = isHidden ? "block" : "none";
                header.querySelector(".acc-icon").textContent = isHidden ? "▲" : "▼";
            };
            wrapper.appendChild(header); wrapper.appendChild(body); container.appendChild(wrapper);
        });
    } else if (viewMode === "group") {
        let groups = [];
        Object.entries(GROUP_MASTER_DEF).forEach(([gName, famNames]) => {
            let famsInThisGroup = familyMaster.filter(f => famNames.includes(f.name));
            if (famsInThisGroup.length > 0) {
                groups.push({
                    name: gName,
                    families: famsInThisGroup,
                    count: famsInThisGroup.reduce((sum, f) => sum + f.count, 0)
                });
            }
        });

        let allDefinedFamsArray = Object.values(GROUP_MASTER_DEF).reduce((acc, val) => acc.concat(val), []);
        let handledFamNames = new Set(allDefinedFamsArray);
        
        let otherFams = familyMaster.filter(f => !handledFamNames.has(f.name));
        if (otherFams.length > 0) {
            groups.push({
                name: "その他",
                families: otherFams,
                count: otherFams.reduce((sum, f) => sum + f.count, 0)
            });
        }

        groups.forEach(grp => {
            const wrapper = document.createElement("div"); wrapper.className = "accordion-item";
            const header = document.createElement("button"); header.className = "accordion-header";
            header.innerHTML = `<span class="acc-title">${grp.name} <span style="font-size:0.8rem; font-weight:normal;">(${grp.count}種)</span></span><span class="acc-icon">▼</span>`;
            
            const body = document.createElement("div"); body.className = "accordion-body"; body.style.display = forceReset ? "block" : "none";
            
            const famList = document.createElement("div"); famList.className = "acc-fam-list";
            let sortedFamOfGrp = [...grp.families];
            if (sortKey === "count_rank") sortedFamOfGrp.sort((a,b) => b.count - a.count);
            if (sortKey === "abc") sortedFamOfGrp.sort((a,b) => a.name.localeCompare(b.name, 'ja'));
            
            sortedFamOfGrp.forEach(fam => {
                const label = document.createElement("label"); label.className = "category-check-label";
                label.innerHTML = `<input type="checkbox" name="category" value="${fam.name}" class="category-check" ${forceReset ? "checked" : ""}> ${fam.name} <span class="cat-count">(${fam.count}種)</span>`;
                famList.appendChild(label);
            });
            body.appendChild(famList);
            
            header.onclick = () => {
                const isHidden = body.style.display === "none";
                body.style.display = isHidden ? "block" : "none";
                header.querySelector(".acc-icon").textContent = isHidden ? "▲" : "▼";
            };
            wrapper.appendChild(header); wrapper.appendChild(body); container.appendChild(wrapper);
        });
    }

    if(forceReset) {
        const specialGrid = document.createElement("div");
        specialGrid.style.display = "flex"; specialGrid.style.gap = "10px"; specialGrid.style.marginTop = "12px"; specialGrid.style.paddingTop = "12px"; specialGrid.style.borderTop = "1px solid var(--border-color)";
        specialGrid.innerHTML = `
            <label class="category-check-label special-check"><input type="checkbox" name="category" value="__FAVORITES__" class="category-check"> ⭐お気に入り</label>
            <label class="category-check-label special-check"><input type="checkbox" name="category" value="__WRONGS__" class="category-check"> ❌間違えた生物</label>
        `;
        container.appendChild(specialGrid);
    }
}

// ★ 追加・改修：HARDモードの高度なダミー抽出ロジック
function generateQuizQuestions(targetFishes) {
    const difficulty = document.querySelector("input[name='quiz-difficulty']:checked").value;
    const quizType = document.querySelector("input[name='quiz-type']:checked").value;
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const requiredDummiesCount = selectedChoicesCount - 1;

    return targetFishes.map(correctFish => {
        let dummyPool = [];
        if (difficulty === "hard") {
            let usedIds = new Set([correctFish.id]);

            let sameFamily = fishMaster.filter(f => f.family_name === correctFish.family_name && !usedIds.has(f.id) && !userNotToLearn.includes(f.id) && getValidImages(f).length > 0);
            shuffle(sameFamily);
            dummyPool.push(...sameFamily);
            dummyPool.forEach(d => usedIds.add(d.id));

            if (dummyPool.length < 5) {
                let sameOrder = fishMaster.filter(f => f.order_name === correctFish.order_name && !usedIds.has(f.id) && !userNotToLearn.includes(f.id) && getValidImages(f).length > 0);
                shuffle(sameOrder);
                dummyPool.push(...sameOrder);
                dummyPool.forEach(d => usedIds.add(d.id));
            }

            if (dummyPool.length < 5) {
                let myGroups = [];
                Object.entries(GROUP_MASTER_DEF).forEach(([gName, famNames]) => {
                    if (famNames.includes(correctFish.family_name)) {
                        const count = fishMaster.filter(f => famNames.includes(f.family_name)).length;
                        myGroups.push({ name: gName, famNames: famNames, count: count });
                    }
                });
                
                myGroups.sort((a, b) => a.count - b.count);

                for (let grp of myGroups) {
                    if (dummyPool.length >= 5) break;
                    let sameGroup = fishMaster.filter(f => grp.famNames.includes(f.family_name) && !usedIds.has(f.id) && !userNotToLearn.includes(f.id) && getValidImages(f).length > 0);
                    shuffle(sameGroup);
                    dummyPool.push(...sameGroup);
                    dummyPool.forEach(d => usedIds.add(d.id));
                }
            }
        } else {
            dummyPool = currentQuizPool.filter(f => f.id !== correctFish.id);
            shuffle(dummyPool);
        }
        
        if (dummyPool.length < requiredDummiesCount) {
            const extraDummies = fishMaster.filter(f => f.id !== correctFish.id && !userNotToLearn.includes(f.id) && !dummyPool.some(d => d.id === f.id) && getValidImages(f).length > 0);
            dummyPool = dummyPool.concat(shuffle(extraDummies));
        }

        const finalDummies = dummyPool.slice(0, requiredDummiesCount);
        const choices = shuffle([correctFish, ...finalDummies]);
        const chosenCorrectImagePath = pickRandomImage(correctFish);

        return {
            correct: correctFish,
            correctImage: chosenCorrectImagePath,
            choices: choices.map(cf => ({ fish: cf, imagePath: cf.id === correctFish.id ? chosenCorrectImagePath : pickRandomImage(cf) }))
        };
    }).map(q => {
        q.type = quizType;
        return q;
    });
}

// --- 4. クイズの開始と生成 ---
function startQuiz() {
    const selectedCats = [...new Set(Array.from(document.querySelectorAll("input[name='category']:checked")).map(el => el.value))];
    if (selectedCats.length === 0) { alert("出題する分類を1つ以上選択してください。"); return; }

    let poolMap = new Map();
    selectedCats.forEach(cat => {
        if (cat === "__FAVORITES__") { fishMaster.forEach(f => { if (userFavorites.includes(f.id)) poolMap.set(f.id, f); }); } 
        else if (cat === "__WRONGS__") { fishMaster.forEach(f => { if (userWrongs.includes(f.id)) poolMap.set(f.id, f); }); } 
        else { fishMaster.forEach(f => { if (f.family_name === cat) poolMap.set(f.id, f); }); }
    });

    const isUnansweredOnly = document.getElementById("unanswered-only-switch").checked;
    currentQuizPool = Array.from(poolMap.values()).filter(fish => {
        if (userNotToLearn.includes(fish.id)) return false;
        if (isUnansweredOnly && userCorrects.includes(fish.id)) return false;
        if (getValidImages(fish).length === 0) return false;
        return true;
    });

    if (currentQuizPool.length === 0) { alert("条件に該当する、出題可能な生物がいません。"); return; }

    selectedChoicesCount = parseInt(document.getElementById("choices-count").value);
    const quizType = document.querySelector("input[name='quiz-type']:checked").value;
    const difficulty = document.querySelector("input[name='quiz-difficulty']:checked").value;
    const reqQuestionsVal = document.getElementById("questions-count-select").value;

    const checkedFamilyNodes = document.querySelectorAll("input[name='category'].category-check:not(.special-check):checked");
    const allFamilyNodes = document.querySelectorAll("input[name='category'].category-check:not(.special-check)");
    const distinctCheckedFam = new Set(Array.from(checkedFamilyNodes).map(el => el.value));
    const distinctAllFam = new Set(Array.from(allFamilyNodes).map(el => el.value));

    let categoryLogText = "";
    if (distinctCheckedFam.size === distinctAllFam.size && distinctAllFam.size > 0) {
        categoryLogText = "全範囲";
    } else {
        let displayNames = [];
        const favCheck = document.querySelector("input[value='__FAVORITES__']");
        const wrongCheck = document.querySelector("input[value='__WRONGS__']");
        if (favCheck && favCheck.checked) displayNames.push("⭐お気に入り");
        if (wrongCheck && wrongCheck.checked) displayNames.push("❌間違えた");
        displayNames = displayNames.concat(Array.from(distinctCheckedFam));
        categoryLogText = displayNames.join(", ");
    }

    currentQuizSettings = {
        type: quizType === "photo-to-name" ? "📷 写真➔名前" : "📝 名前➔写真",
        difficulty: difficulty.toUpperCase(),
        categories: [categoryLogText],
    };

    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    let shuffledPool = shuffle([...currentQuizPool]);

    let maxQuestions = reqQuestionsVal === "all" ? shuffledPool.length : parseInt(reqQuestionsVal);
    const totalQuestions = Math.min(maxQuestions, shuffledPool.length);
    const selectedFishes = shuffledPool.slice(0, totalQuestions);

    lastQuizTargetFishes = [...selectedFishes]; 
    quizQuestions = generateQuizQuestions(selectedFishes);

    currentQuestionIdx = 0; currentScore = 0; quizHistory = []; quizSecondsElapsed = 0; 
    navigateTo("quiz-screen"); renderQuestion();
}

// ★ 追加：同じ問題（ランダムにシャッフル）で再生成してスタートする
function startQuizWithSameQuestions() {
    if (!lastQuizTargetFishes || lastQuizTargetFishes.length === 0) return;
    
    const validTargets = lastQuizTargetFishes.filter(f => !userNotToLearn.includes(f.id));
    if (validTargets.length === 0) {
        alert("出題可能な問題がありません（すべて覚えないリストに追加されました）。");
        updateDashboard(); navigateTo("setup-screen");
        return;
    }

    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const shuffledTargets = shuffle([...validTargets]);

    quizQuestions = generateQuizQuestions(shuffledTargets);
    
    currentQuestionIdx = 0; currentScore = 0; quizHistory = []; quizSecondsElapsed = 0; 
    navigateTo("quiz-screen"); renderQuestion();
}

// --- 5. クイズの進行 ---
function renderQuestion() {
    const q = quizQuestions[currentQuestionIdx];
    document.getElementById("quiz-timer").textContent = `⏱️ ${formatTime(quizSecondsElapsed)}`;
    startTimer();

    document.getElementById("quiz-progress").textContent = `第 ${currentQuestionIdx + 1} 問 / ${quizQuestions.length}問`;
    document.getElementById("quiz-feedback-container").style.display = "none";
    document.getElementById("feedback-wrong-choices-wrapper").style.display = "none";
    document.getElementById("next-question-btn").style.display = "none";

    const imgContainer = document.getElementById("question-image-wrapper");
    const textContainer = document.getElementById("question-text-wrapper");
    const choicesContainer = document.getElementById("quiz-choices-container");

    choicesContainer.className = q.type === "name-to-photo" ? "choices-grid photo-grid" : "choices-grid";
    choicesContainer.innerHTML = "";

    if (q.type === "photo-to-name") {
        imgContainer.style.display = "flex"; textContainer.style.display = "none";
        document.getElementById("question-image").src = q.correctImage;
        q.choices.forEach(c => {
            const btn = document.createElement("button"); btn.className = "btn btn-choice"; btn.textContent = c.fish.name;
            btn.onclick = () => handleAnswer(c.fish, btn); choicesContainer.appendChild(btn);
        });
    } else {
        imgContainer.style.display = "none"; textContainer.style.display = "block";
        document.getElementById("question-fish-name").textContent = q.correct.name;
        q.choices.forEach(c => {
            const btn = document.createElement("button"); btn.className = "btn btn-choice"; 
            const imgPath = c.imagePath || "https://via.placeholder.com/150?text=NO+IMAGE";
            btn.innerHTML = `<img src="${imgPath}"><div class="photo-choice-name-overlay" style="display: none;">${c.fish.name}</div>`;
            btn.onclick = () => handleAnswer(c.fish, btn); choicesContainer.appendChild(btn);
        });
    }
}

function handleAnswer(selectedFish, btnElement) {
    clearInterval(timerInterval);
    const q = quizQuestions[currentQuestionIdx];
    const isCorrect = selectedFish.id === q.correct.id;
    
    document.querySelectorAll(".btn-choice").forEach(b => {
        b.disabled = true;
        if (q.type === "photo-to-name") {
            if (b.textContent === q.correct.name) b.classList.add("correct");
        } else {
            const img = b.querySelector("img");
            if (img && img.src.includes(q.correctImage)) b.classList.add("correct");
        }
    });

    if (q.type === "name-to-photo") {
        document.querySelectorAll(".btn-choice .photo-choice-name-overlay").forEach(overlay => {
            overlay.style.display = "block";
        });
    }

    if (isCorrect) {
        btnElement.classList.add("correct"); currentScore++;
        document.getElementById("feedback-icon").textContent = "⭕";
        document.getElementById("feedback-text").textContent = "正解！";
        document.getElementById("feedback-text").style.color = "var(--success-color)";
        if (!userCorrects.includes(q.correct.id)) userCorrects.push(q.correct.id);
        userWrongs = userWrongs.filter(id => id !== q.correct.id);
    } else {
        btnElement.classList.add("wrong");
        document.getElementById("feedback-icon").textContent = "❌";
        document.getElementById("feedback-text").textContent = "不正解...";
        document.getElementById("feedback-text").style.color = "var(--error-color)";
        if (!userWrongs.includes(q.correct.id)) userWrongs.push(q.correct.id);
    }

    quizHistory.push({ correctFish: q.correct, selectedFish: selectedFish, isCorrect: isCorrect, isConfident: true });
    updateStorage();

    const fbContainer = document.getElementById("quiz-feedback-container");
    fbContainer.style.display = "block";
    document.getElementById("feedback-fish-name").textContent = q.correct.name;
    document.getElementById("feedback-carousel-container").innerHTML = generateCarouselHTML(q.correct);
    document.getElementById("feedback-fish-desc").innerHTML = `
        <strong>分類:</strong> ${q.correct.order_name} > ${q.correct.family_name} > ${q.correct.genus_name}<br><br>
        <strong>生息地:</strong> ${q.correct.area || '記載なし'}<br><br>
        <strong>解説:</strong><br>${q.correct.description || '記載なし'}
        ${generateExternalLinksHTML(q.correct.name)}
    `;

    const wrongContainer = document.getElementById("feedback-wrong-choices-container");
    wrongContainer.innerHTML = "";
    if (q.type === "photo-to-name") {
        document.getElementById("feedback-wrong-choices-wrapper").style.display = "block";
        q.choices.filter(c => c.fish.id !== q.correct.id).forEach(c => {
            const wrapper = document.createElement("div");
            wrapper.className = "wrong-choice-wrapper";

            const wImg = document.createElement("img");
            wImg.src = c.imagePath || "https://via.placeholder.com/150?text=NO+IMAGE";
            wImg.className = "wrong-choice-img";
            wImg.title = c.fish.name;
            wImg.onclick = () => {
                document.getElementById("modal-image").src = wImg.src;
                document.getElementById("image-modal").classList.remove("hidden");
            };
            
            const wName = document.createElement("span");
            wName.className = "wrong-choice-name";
            wName.textContent = c.fish.name;

            wrapper.appendChild(wImg);
            wrapper.appendChild(wName);
            wrongContainer.appendChild(wrapper);
        });
    }

    setupFeedbackActionButtons(q.correct);
    document.getElementById("next-question-btn").style.display = "block";
    
    setTimeout(() => { fbContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 300);
}

function setupFeedbackActionButtons(fish) {
    const favBtn = document.getElementById("feedback-fav-btn");
    const confCheck = document.getElementById("feedback-confidence-check");
    const notLearnBtn = document.getElementById("feedback-not-learn-btn");

    favBtn.textContent = userFavorites.includes(fish.id) ? "★" : "☆";
    favBtn.classList.toggle("active", userFavorites.includes(fish.id));
    confCheck.checked = false;
    
    favBtn.onclick = () => {
        if (userFavorites.includes(fish.id)) {
            userFavorites = userFavorites.filter(id => id !== fish.id);
            favBtn.textContent = "☆"; favBtn.classList.remove("active");
        } else {
            userFavorites.push(fish.id);
            favBtn.textContent = "★"; favBtn.classList.add("active");
        }
        updateStorage();
    };

    confCheck.onchange = (e) => {
        quizHistory[currentQuestionIdx].isConfident = !e.target.checked;
        if (e.target.checked && quizHistory[currentQuestionIdx].isCorrect) {
            if (!userWrongs.includes(fish.id)) userWrongs.push(fish.id);
            updateStorage();
        }
    };

    notLearnBtn.onclick = () => {
        if (confirm(`${fish.name} を今後一切クイズやリストに出現させないようにしますか？`)) {
            if (!userNotToLearn.includes(fish.id)) userNotToLearn.push(fish.id);
            userFavorites = userFavorites.filter(id => id !== fish.id);
            userWrongs = userWrongs.filter(id => id !== fish.id);
            userCorrects = userCorrects.filter(id => id !== fish.id);
            updateStorage(); alert("覚えないリストに追加しました。");
            document.getElementById("next-question-btn").click();
        }
    };
}

document.getElementById("next-question-btn").addEventListener("click", () => {
    currentQuestionIdx++;
    if (currentQuestionIdx < quizQuestions.length) { 
        renderQuestion(); 
        window.scrollTo(0, 0); 
    } 
    else { showResult(); }
});

function showResult() {
    clearInterval(timerInterval);
    const resultLog = {
        date: new Date().toISOString(),
        score: currentScore,
        total: quizQuestions.length,
        time: quizSecondsElapsed,
        settings: currentQuizSettings,
        history: quizHistory.map(h => ({ fishId: h.correctFish.id, isCorrect: h.isCorrect, isConfident: h.isConfident }))
    };
    userLogs.push(resultLog); updateStorage(); updateDashboard();

    const pct = Math.floor((currentScore / quizQuestions.length) * 100);
    document.getElementById("result-score-percent").textContent = pct + "%";
    document.getElementById("result-score-text").textContent = `${quizQuestions.length}問中 ${currentScore}問 正解！`;
    document.getElementById("result-time-elapsed").textContent = formatTime(quizSecondsElapsed);
    
    const speed = quizSecondsElapsed > 0 ? ((currentScore / quizSecondsElapsed) * 10).toFixed(2) : "0.00";
    document.getElementById("result-speed-rate").textContent = speed + "問";

    const listContainer = document.getElementById("result-list-container");
    listContainer.innerHTML = "";
    
    quizHistory.forEach((h, idx) => {
        const card = document.createElement("div");
        const isWrong = userWrongs.includes(h.correctFish.id);
        const isFav = userFavorites.includes(h.correctFish.id);

        card.className = "fish-card" + (h.isCorrect ? (h.isConfident ? "" : " warning") : " wrong");
        card.style.flexDirection = "column"; 

        const statusBadge = `<span class="status-badge ${h.isCorrect ? (h.isConfident ? 'status-correct' : 'status-warning') : 'status-wrong'}">${h.isCorrect ? (h.isConfident ? '⭕ 正解' : '🤔 まぐれ正解') : '❌ 不正解'}</span>`;
        
        card.innerHTML = `
            <div style="display: flex; flex-direction: row; width: 100%; position: relative;">
                ${statusBadge}
                ${generateCarouselHTML(h.correctFish)}
                <div class="fish-info" style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; padding-right: 0;">
                    <h3>${h.correctFish.name}</h3>
                    <p class="fish-category">${h.correctFish.order_name} > ${h.correctFish.family_name}</p>
                </div>
            </div>
            
            <div class="card-actions" style="margin-top: 8px; border-top: 1px dashed var(--border-color); padding-top: 8px; display: flex; justify-content: space-between; align-items: center;">
                <label class="no-confidence-label" style="font-size: 0.8rem; color: var(--warning-color); cursor: pointer; display: flex; align-items: center; gap: 4px;">
                    <input type="checkbox" class="res-conf-check" data-id="${h.correctFish.id}" ${isWrong ? 'checked' : ''} style="transform: scale(1.1);"> 🤔 復習に入れる
                </label>
                <div style="display: flex; gap: 16px; align-items: center;">
                    <button class="btn-fav res-fav-btn ${isFav ? 'active' : ''}" data-id="${h.correctFish.id}" style="position: static; font-size: 1.4rem; background: none; border: none; box-shadow: none; padding: 0; width: auto; height: auto;">${isFav ? '★' : '☆'}</button>
                    <button class="btn-not-learn-sm res-not-learn-btn" data-id="${h.correctFish.id}" style="background: none; border: none; font-size: 1.2rem; cursor: pointer; opacity: 0.6;">🙈</button>
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });

    document.querySelectorAll(".res-fav-btn").forEach(btn => {
        btn.addEventListener("click", handleListFavToggle);
    });

    document.querySelectorAll(".res-conf-check").forEach(chk => {
        chk.addEventListener("change", (e) => {
            const id = parseInt(e.target.dataset.id);
            if (e.target.checked) {
                if (!userWrongs.includes(id)) userWrongs.push(id);
            } else {
                userWrongs = userWrongs.filter(wid => wid !== id);
            }
            updateStorage();
        });
    });

    document.querySelectorAll(".res-not-learn-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id);
            if (confirm("覚えないリストに追加し、今後表示させないようにしますか？")) {
                if (!userNotToLearn.includes(id)) userNotToLearn.push(id);
                userFavorites = userFavorites.filter(fid => fid !== id);
                userWrongs = userWrongs.filter(wid => wid !== id);
                userCorrects = userCorrects.filter(cid => cid !== id);
                updateStorage();
                e.target.closest(".fish-card").style.opacity = "0.3";
                e.target.disabled = true;
            }
        });
    });

    navigateTo("result-screen"); window.scrollTo(0, 0);
}

// --- 6. リスト表示関連 (図鑑、お気に入り、等) ---
function showListScreen(title, idArray, mode) {
    document.getElementById("list-title").textContent = title;
    const container = document.getElementById("list-container");
    container.innerHTML = "";

    const listFish = fishMaster.filter(f => idArray.includes(f.id));
    
    if (listFish.length === 0) {
        container.innerHTML = `<p class="empty-list-msg">該当する生物がいません。</p>`;
    } else {
        listFish.forEach(fish => {
            const card = document.createElement("div"); card.className = "fish-card";
            card.innerHTML = `
                ${generateCarouselHTML(fish)}
                <div class="fish-info">
                    <h3>${fish.name}</h3>
                    <p class="fish-category">${fish.order_name} > ${fish.family_name}</p>
                    <div style="font-size:0.8rem; margin: 8px 0;"><strong>生息地:</strong> ${fish.area || '-'}</div>
                    <p class="formatted-desc" style="font-size: 0.8rem;">${fish.description || '解説なし'}</p>
                    ${generateExternalLinksHTML(fish.name)}
                    <div class="card-actions">
                        <button class="btn-fav ${userFavorites.includes(fish.id) ? 'active' : ''}" data-id="${fish.id}">${userFavorites.includes(fish.id) ? '★' : '☆'}</button>
                        ${mode === 'wrong' ? `<button class="btn btn-sm btn-outline-danger btn-remove-wrong" data-id="${fish.id}">❌ 外す</button>` : ''}
                        ${mode === 'correct' ? `<button class="btn btn-sm btn-outline-danger btn-remove-correct" data-id="${fish.id}">❌ 外す</button>` : ''}
                        ${mode === 'notLearn' ? `<button class="btn btn-sm btn-primary btn-remove-not-learn" data-id="${fish.id}">リストから戻す</button>` : ''}
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll(".btn-remove-wrong").forEach(b => b.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id); userWrongs = userWrongs.filter(wid => wid !== id); updateStorage();
            e.target.closest(".fish-card").remove(); updateDashboard();
        }));
        document.querySelectorAll(".btn-remove-correct").forEach(b => b.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id); userCorrects = userCorrects.filter(cid => cid !== id); updateStorage();
            e.target.closest(".fish-card").remove(); updateDashboard();
        }));
        document.querySelectorAll(".btn-remove-not-learn").forEach(b => b.addEventListener("click", (e) => {
            const id = parseInt(e.target.dataset.id); userNotToLearn = userNotToLearn.filter(nid => nid !== id); updateStorage();
            e.target.closest(".fish-card").remove(); updateDashboard(); renderCategories("count_rank", true);
        }));
        document.querySelectorAll("#list-container .btn-fav").forEach(btn => btn.addEventListener("click", handleListFavToggle));
    }
    navigateTo("list-screen");
}

function handleListFavToggle(e) {
    const btn = e.target;
    const id = parseInt(btn.dataset.id);
    if (userFavorites.includes(id)) {
        userFavorites = userFavorites.filter(fid => fid !== id);
        btn.textContent = "☆"; btn.classList.remove("active");
    } else {
        userFavorites.push(id);
        btn.textContent = "★"; btn.classList.add("active");
    }
    updateStorage();
}

// --- 7. 図鑑（検索）機能 ---
function renderSearchResults() {
    const kw = document.getElementById("search-keyword-input").value.toLowerCase();
    const cat = document.getElementById("search-category-select").value;
    const container = document.getElementById("search-results-container");
    container.innerHTML = "";

    const results = fishMaster.filter(f => {
        if (userNotToLearn.includes(f.id)) return false;
        if (cat !== "all" && f.family_name !== cat) return false;
        if (kw && !f.name.toLowerCase().includes(kw) && !(f.description && f.description.toLowerCase().includes(kw))) return false;
        return true;
    });

    document.getElementById("search-count-display").textContent = results.length;

    results.forEach(fish => {
        const card = document.createElement("div"); card.className = "fish-card";
        card.innerHTML = `
            ${generateCarouselHTML(fish)}
            <div class="fish-info">
                <h3>${fish.name}</h3>
                <p class="fish-category">${fish.order_name} > ${fish.family_name} > ${fish.genus_name}</p>
                <div style="font-size:0.8rem; margin: 8px 0;"><strong>生息地:</strong> ${fish.area || '-'}</div>
                <p class="formatted-desc" style="font-size: 0.8rem;">${fish.description || ''}</p>
                ${generateExternalLinksHTML(fish.name)}
                <div class="card-actions">
                    <button class="btn-fav ${userFavorites.includes(fish.id) ? 'active' : ''}" data-id="${fish.id}">${userFavorites.includes(fish.id) ? '★' : '☆'}</button>
                    <button class="btn-not-learn-sm" data-id="${fish.id}">🙈 覚えない</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll("#search-results-container .btn-fav").forEach(b => b.addEventListener("click", handleListFavToggle));
    document.querySelectorAll("#search-results-container .btn-not-learn-sm").forEach(b => b.addEventListener("click", (e) => {
        const id = parseInt(e.target.dataset.id);
        if (confirm("覚えないリストに追加し、今後表示させないようにしますか？")) {
            userNotToLearn.push(id); updateStorage(); renderSearchResults(); updateDashboard();
        }
    }));
}

// --- 8. イベントリスナー統合 ---
function setupEventListeners() {
    document.getElementById("login-btn").addEventListener("click", handleLogin);
    
    document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);

    document.getElementById("retry-same-questions-btn").addEventListener("click", startQuizWithSameQuestions);
    document.getElementById("retry-same-settings-btn").addEventListener("click", startQuiz);
    
    document.getElementById("quiz-quit-btn").addEventListener("click", () => {
        if (quizHistory.length === 0) { 
            clearInterval(timerInterval); updateDashboard(); navigateTo("setup-screen"); 
        } else {
            if (confirm("クイズを中断しますか？\n（『OK』でここまでのリザルトを表示します）")) { 
                showResult(); 
            } else { 
                clearInterval(timerInterval); updateDashboard(); navigateTo("setup-screen"); 
            }
        }
    });

    document.getElementById("back-to-setup-btn").addEventListener("click", () => {
        updateDashboard(); navigateTo("setup-screen");
    });

    document.getElementById("open-db-detail-btn").addEventListener("click", () => showDashboardDetail(false));
    
    document.getElementById("back-from-db-detail-btn").addEventListener("click", () => {
        updateDashboard(); navigateTo("setup-screen");
    });

    document.getElementById("detail-tab-order").addEventListener("click", () => {
        currentDetailTab = 'order';
        showDashboardDetail(true);
    });
    document.getElementById("detail-tab-group").addEventListener("click", () => {
        currentDetailTab = 'group';
        showDashboardDetail(true);
    });

    const activeTabObj = { id: "sort-count-btn" };
    document.getElementById("sort-count-btn").addEventListener("click", (e) => { switchTab(e.target, "count_rank", activeTabObj); });
    document.getElementById("sort-abc-btn").addEventListener("click", (e) => { switchTab(e.target, "abc", activeTabObj); });

    document.querySelectorAll("input[name='cat-view-mode']").forEach(radio => {
        radio.addEventListener("change", () => {
            const sortKey = activeTabObj.id.includes("count") ? "count_rank" : "abc";
            renderCategories(sortKey, false);
        });
    });

    document.getElementById("select-all-btn").addEventListener("click", () => { document.querySelectorAll(".category-check").forEach(cb => cb.checked = true); });
    document.getElementById("deselect-all-btn").addEventListener("click", () => { document.querySelectorAll(".category-check").forEach(cb => cb.checked = false); });

    document.getElementById("nav-search-btn").addEventListener("click", () => { renderSearchResults(); navigateTo("search-screen"); });
    document.getElementById("nav-fav-btn").addEventListener("click", () => { showListScreen("⭐ お気に入り", userFavorites, 'fav'); });
    document.getElementById("nav-wrong-btn").addEventListener("click", () => { showListScreen("❌ 間違えた生物", userWrongs, 'wrong'); });
    document.getElementById("nav-correct-btn").addEventListener("click", () => { showListScreen("📁 正解リスト", userCorrects, 'correct'); });
    document.getElementById("nav-not-learn-btn").addEventListener("click", () => { showListScreen("🙈 覚えないリスト", userNotToLearn, 'notLearn'); });

    ["back-from-list-btn", "back-from-search-btn"].forEach(id => {
        document.getElementById(id).addEventListener("click", () => {
            const sortKey = activeTabObj.id.includes("count") ? "count_rank" : "abc";
            renderCategories(sortKey, false); updateDashboard(); navigateTo("setup-screen");
        });
    });

    document.getElementById("search-keyword-input").addEventListener("input", renderSearchResults);
    document.getElementById("search-category-select").addEventListener("change", renderSearchResults);

    const modal = document.getElementById("image-modal");
    document.getElementById("modal-close-btn").addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });
}

function switchTab(activeBtn, sortKey, activeTabObj) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active"); activeTabObj.id = activeBtn.id;
    renderCategories(sortKey, false);
}
