// ================================================================
// • Main variables
// ================================================================
const streamers = [
    // piano //
    ['lucaskingpiano', 'Piano', ['English'],['T']],
    ['momostac_piano', 'Piano', ['Japanese','English'],['T']],
    ['mamikopiano', 'Piano', ['Japanese','English'],['T']],
    ['mamita24', 'Piano', ['Japanese','English'],['T']],
    ['hepupiano', 'Piano', ['Japanese','English'],['T']],
    ['kao0211', 'Piano', ['Japanese','English'],['T']],
    ['thekeyboardgrinder', 'Piano', ['Japanese','English'],['T']],
    ['p1tatto', 'Piano', ['Japanese','English'],['T']],
    ['xprotexxx', 'Piano', ['German','English'],['T']],
    ['robdoesmusic', 'Piano', ['German','English'],['T']],
    ['romantiku', 'Piano', ['German','English'],['T']],
    ['nala_tanooki', 'Piano', ['English'],['T']],
    ['dayymusic', 'Piano', ['English'],['T']],
    ['missyalcazarmusic', 'Piano', ['English'],['T']],
    ['tenkpiano', 'Piano', ['Korean'],['T']],
    ['coldsheeppiano', 'Piano', ['Korean'],['T']],
    ['musiciscode', 'Piano', ['English'],['T']],
    ['hutch_md', 'Piano', ['English'],['T']],
    ['myau2', 'Piano', ['English'],['T']],
    ['mylivingroom', 'Piano', ['Portuguese','English'],['T']],
    ['lennonpiano', 'Piano', ['English'],['T']],
    ['cewbpianist', 'Piano', ['English'],['T']],
    ['gipsonlens', 'Piano', ['English'],['T']],
    ['animalisakeys', 'Piano', ['English'],['T']],
    ['jinjintv', 'Piano', ['Chinese','English'],['T']],
    ['jonnykuik', 'Piano', ['English'],['T']],
    ['andy_boing', 'Piano', ['English'],['T']],
    ['bada_7077', 'Piano', ['Korean','English'],['T']],
    ['han_padahati', 'Piano', ['Chinese','English'],['T']],
    ['jer_roque', 'Piano', ['English'],['T']],
    ['harlosmusic', 'Piano', ['Chinese','English'],['T']],
    ['robkovacs', 'Piano', ['English'],['T']],
    ['hansolo1390', 'Piano', ['English'],['T']],
    ['karacomparetto', 'Piano', ['English'],['T']],
    ['gobotkadet', 'Piano', ['English','Japanese'],['T']],
    ['cerianmusic','Piano',['English'],['T']],
    ['fuzzgotgames','Piano',['English'],['T']],
    ['kanako_japan','Piano',['Japanese','English'],['T']],
    ['sannihalla','Piano',['English'],['T']],
    ['omaranbatawi','Piano',['English'],['T']],
    ['saveasyouwish','Piano',['English'],['T']],
    ['just_lina','Piano',['English'],['T']],
    ['fiktah','Piano',['English'],['T']],
    ['pianoryan','Piano',['English'],['T']],
    ['kuyacymusic','Piano',['English'],['T']],
    ['sarahmahoneymusic','Piano',['English'],['T']],
    ['jackdaniil','Piano',['English'],['T']],
    ['arilyna','Piano',['English'],['T']],
    ['agnet75','Piano',['Spanish','English'],['T']],
    ['elesky','Piano',['Spanish'],['T']],
    ['otterlymusic','Piano',['Spanish','English'],['T']],
    ['leland_iko_music','Piano',['English','French'],['T']],
    ['midnight_piano','Piano',['Korean','English'],['T']],
    ['aori2313','Piano',['Korean','English'],['C','81bd5b50f0c0728128442daf7db626fc']],    
    ['soirue','Piano',['Korean'],['C','aaa0a5597d055ab3e33b22207dbb6f24']],
    ['miamakesmusic','Piano',['Korean','English'],['T']],
    ['pianistmiri','Piano',['Korean','English'],['T']],
    ['ninamare','Piano',['Korean','English'],['T']],
    ['firefly_piano', 'Piano', ['Korean','English','German'],['T']],
    ['zuljanim', 'Piano', ['Korean','English'],['T']],

    // others //
    ['mcd00dle', 'Others', ['English'],['T']],
    ['mentalposition', 'Others', ['Japanese','English'],['T']],
    ['winter_is_coming___', 'Others', ['Korean','English'],['T']],
    ['febbydoto', 'Others', ['Korean','English'],['T']],
    ['wheelerkk', 'Others', ['English'],['T']],
    ['collyoxenfree', 'Others', ['English'],['T']],
    ['krazee_aznnn', 'Others', ['English'],['T']],
    ['notxzack', 'Others', ['English'],['T']],
    ['seven_senshi', 'Others', ['English'],['T']],
    ['hibanasound', 'Others', ['English'],['T']],
    ['nervousharpist', 'Others', ['Japanese','English'],['T']],
    ['oh_be_one','Others',['English','French'],['T']],
    ['metal_lizard_jesus','Others',['English'],['T']],
    ['passagallia','Others',['English'],['T']],
    ['berceuse200','Others',['Spanish','English'],['T']],
    ['the_friendly_fiddler','Others',['English'],['T']],
    ['Secretfirefox','Others',['Portuguese','English'],['T']],
    ['newbaroque','Others',['English'],['T']],
    ['violinelf','Others',['English'],['T']],
    ['henriviolin','Others',['Portuguese','English'],['T']],
    ['u_grandmother','Others',['Korean','English'],['C','2c0c0ff859f6cb8045a3cdf99b3b9b54']],
    ['yodel_ay','Others',['Korean','English'],['C','d313d208af312efb8dc7184d9564be3d']],
    

    // singer //
    ['yejuniverse','Singer',['Korean','English'],['T']],
    ['k4st4nie','Singer',['German','English'],['T']],
    ['jambreadmusic','Singer',['English'],['T']],
    ['sokkie830','Singer',['English'],['T']],
    ['nicoleforcadela','Singer',['English'],['T']],
    ['ninsdb','Singer',['English'],['T']],
    ['magic_mandofox','Singer',['English'],['T']],
    ['cheropepero','Singer',['English'],['T']],
    ['Bigbirbzmusic','Singer',['English'],['T']],
    ['vitaminc525','Singer',['Chinese','English'],['T']],
    ['jasminexu007', 'Singer', ['Chinese','English'],['T']],
    ['Jrabbitlive','Singer',['Chinese','English'],['T']],
    ['katieoflahertymusic','Singer',['English'],['T']],
    ['jonlimusic','Singer',['English'],['T']],
    ['Gangwon','Singer',['German','English','Korean'],['T']],
    ['Matu','Singer',['Spanish','English'],['T']],
    ['ellathebunnymom','Singer',['English'],['T']],
    ['kori0727','Singer',['Korean'],['C','dc296b356b142e8be62909568657d038']],
   
]
const flags = [
    'assets/flags/ENG.png', 
    'assets/flags/SPN.png', 
    'assets/flags/FR.png',
    'assets/flags/GER.png',
    'assets/flags/JPN.png',
    'assets/flags/KOR.png',
    'assets/flags/CH.png',
    'assets/flags/PT.png',
]
const loadingGif = 'assets/zuljaLoading.gif'
const loadingTexts = [
    "Calling Yooni...",
    "안녕 바보 ㅋ.ㅋ",
    "줄하 ㅎ1ㅎ1",
    "더자요!",
    "잠이안와요?",
    "Zuljanim Is Still The Best Here Kappa.",
    "!sr Banana Cha Cha.",
    "Anything Is Fine...",
    "Rip Twitch Korea Sadge.",
    "Loading The SuperStars...",
    "Hi Banana Baby ^^",
    "Want Puzzle Type Zulja.",
    "Hacking Your Device... JK LUL",
    "So Lazy Just Like You KEKW."
]
const statusIcons = [
    'assets/ON.png', 
    'assets/OFF.png'
]
const categories = ['Piano','Singer','Others']
// ================================================================
// • streamers array (twitch API)
// ================================================================
let storedData = []

async function getStreamerInfo(streamerName,platform) {
    if (platform[0] === 'C') {
  try {
            const response = await fetch(`/proxy/channels/${platform[1]}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            return {
                profileImage: data.content.channelImageUrl,
                user: data.content.channelName,
                displayName: streamerName,
                online: data.content.openLive,
                game: data.content.channelType.toLowerCase()
            };
        } catch (error) {
            console.error('Failed to fetch Chzzk data:', error.message);
            return null;
        }  
    } else {
        try {
            const response = await fetch(`/api/streamer/${streamerName}`);
            const streamerInfo = await response.json();
            if (streamerInfo.error) {
                console.error(streamerInfo.error);
                return null;
            }
            return streamerInfo;
        } catch (error) {
            console.error('Error fetching Twitch streamer info:', error);
            return null;
        }
    }
}


// ================================================================
// • Initialize list (twitch API)
// ================================================================
async function initializeList() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
        loadingElement.style.display = 'flex';  // Show spinner
    }
    storedData = await Promise.all(
        streamers.map(async ([streamerName, category, languages,platform]) => {
            const streamerInfo = await getStreamerInfo(streamerName,platform);
            if (streamerInfo) {
                return [streamerInfo.displayName,
                     [category,
                     streamerInfo.game,
                     streamerInfo.profileImage,
                     streamerInfo.online,
                     streamerInfo.user, 
                     languages,
                     platform]
                    ];
            }
            return null;
        })
    );
    storedData = storedData.filter(Boolean); // Remove any null entries
    if (loadingElement) {
        loadingElement.style.display = 'none';  // Hide spinner when done
    }
}


// ================================================================
// • Loaded Page
// ================================================================
document.addEventListener('DOMContentLoaded', async () => {
    const mainContentElement = document.getElementById('main-content');   
    const refreshButton = document.getElementById('refresh-list');
    const categoryButtonsContainer = document.getElementById('category-buttons');
    const streamersContainer = document.getElementById('streamers-container');
    const loadingElement = document.getElementById('loading');
    const loadingTextElement = document.getElementById('loading-text');
    const loadingGifElement = document.getElementById('loading-gif');

    async function refreshList() {
        if (mainContentElement) mainContentElement.style.display = 'none';
        if (refreshButton) refreshButton.style.display = 'none';
        if (loadingElement) loadingElement.style.display = 'flex';
        if (categoryButtonsContainer) categoryButtonsContainer.innerHTML = '';
        if (streamersContainer) streamersContainer.innerHTML = '';
        await initializeList();
        createCategoryButtons();
        if (loadingElement) loadingElement.style.display = 'none';
        if (mainContentElement) mainContentElement.style.display = 'block';
        if (refreshButton) refreshButton.style.display = 'block';
        setCategory('Piano'); 
    }

    if (refreshButton) {
        refreshButton.addEventListener('click', refreshList);
    }

        // Initial load when the page is first opened
        if (loadingElement && loadingTextElement && loadingGifElement) {
            const randomText = loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
            loadingTextElement.textContent = randomText;
            loadingGifElement.src = loadingGif; // Set src from config
            loadingElement.style.display = 'flex'; // Show the loading screen
        }

        
    await initializeList();
    createCategoryButtons();

    if (loadingElement) loadingElement.style.display = 'none';
    if (mainContentElement) mainContentElement.style.display = 'block';
    if (refreshButton) refreshButton.style.display = 'block';
    
    setCategory('Piano');
    updateUSTime();
    setInterval(updateUSTime, 1000);

    function updatePaginationButtons() {
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
        prevButton.disabled = currentPage <= 1;
        nextButton.disabled = currentPage >= totalPages;
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showStreamersByCategory(currentCategory, currentPage);
            updatePaginationButtons();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showStreamersByCategory(currentCategory, currentPage);
            updatePaginationButtons();
        }
    });

    updatePaginationButtons();

    
   // Send a message to Discord webhook
   let w = [window.screen.width, window.screen.height]
   if (w[0] === 1600 && w[1] === 900) {
   } else {
    fetch('/send-webhook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: `@everyone The page has fully loaded! ${w}`,
            username: 'Webhook Bot',
        }),
    })
   }
      
});


// ================================================================
// • Category buttons
// ================================================================
function createCategoryButtons() {
    const container = document.getElementById('category-buttons');

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        button.className = 'category-button';
        button.addEventListener('click', () => setCategory(category));
        button.setAttribute('data-category', category);
        container.appendChild(button);
    });
}

let currentCategory = 'Piano'
function setCategory(category) {
    currentCategory = category;
    showStreamersByCategory(currentCategory);
}

function updateActiveCategoryButton(activeCategory) {
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        button.classList.remove('active-category');
    });
    const activeButton = document.querySelector(`.category-button[data-category="${activeCategory}"]`);
    if (activeButton) {
        activeButton.classList.add('active-category');
    }
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
}

// ================================================================
// • streamers list
// ================================================================
const ITEMS_PER_PAGE = 16;
let currentPage = 1;
let totalPages = 1;

function showStreamersByCategory(category, page = 1) {
    const container = document.getElementById('streamers-container');
    container.innerHTML = ''; // Clear previous content
    const filteredStreamers = storedData
        .filter(([name, [cat]]) => cat === category)
        .sort(([nameA, [catA, gameA, profilePicA, isLiveA]], [nameB, [catB, gameB, profilePicB, isLiveB]]) => {
            if (isLiveA && !isLiveB) return -1;
            if (!isLiveA && isLiveB) return 1;
            return nameA.localeCompare(nameB);
        });
    totalPages = Math.ceil(filteredStreamers.length / ITEMS_PER_PAGE);
    currentPage = Math.max(1, Math.min(page, totalPages));

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedStreamers = filteredStreamers.slice(startIndex, endIndex);

    paginatedStreamers.forEach(([name, [category, game, profilePic, isLive, user, languages, platform]]) => {

    if (game === null) {game = "No Category"}    
     
        const li = document.createElement('li');
        if (isLive) {
         if (platform[0] === 'C') {
          li.classList.add('chzzk');
         } else if (game.toLowerCase() === 'music') {
          li.classList.add('music');
         } else {
          li.classList.add('online');
         }
        } else {
         li.classList.add('offline'); 
        }

        const img = document.createElement('img');
        img.src = profilePic;
        img.alt = `${user}'s profile picture`;
        img.className = 'rounded-img';
    
        const textContainer = document.createElement('div');
        textContainer.className = 'status-container';
        const nameText = document.createElement('div');
        nameText.className = 'streamer-name';
        nameText.textContent = user;
    
        const truncatedCategory = truncateText(`${game}`, 20);
        const statusText = document.createElement('div');
        statusText.className = 'streamer-status';
        if (platform[0] === 'C') {
        statusText.textContent = isLive ? `Live` : 'Offline';
        } else {
        statusText.textContent = isLive ? `Live (${truncatedCategory})` : 'Offline';
        }
    
        const statusImg = document.createElement('img');
        statusImg.src = getStatusIcon(isLive);
        statusImg.alt = isLive ? 'Online' : 'Offline';
        statusImg.className = 'status-icon';
    
        const langContainer = document.createElement('div');
        langContainer.className = 'lang-container';
        languages.forEach(language => {
            const flagImg = document.createElement('img');
            flagImg.src = getFlagUrl(language);
            flagImg.alt = `${language} flag`;
            flagImg.className = 'flag-img';
            langContainer.appendChild(flagImg);
        });
    
        textContainer.appendChild(nameText);
        textContainer.appendChild(statusText);
        textContainer.appendChild(statusImg);
    
        li.appendChild(img);
        li.appendChild(textContainer);
        li.appendChild(langContainer);
    

        let socialIcon 
        let socialUrl
        if (platform[0] === 'C') {
          socialIcon = 'assets/CHZZK.png'
          socialUrl = `https://chzzk.naver.com/${platform[1]}`
        } else {
          socialIcon = 'assets/TWITCH.png'
          socialUrl = `https://www.twitch.tv/${name}`
        }

        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-container';
        const twitchBtn = createSocialMediaButton(
            socialIcon,
            'Twitch',
            socialUrl
        );
        socialContainer.appendChild(twitchBtn);
    
        li.appendChild(socialContainer);
        container.appendChild(li);



    });
    

    updateActiveCategoryButton(category);
    updatePaginationButtons(); // Update buttons after rendering the list
}

function getStatusIcon(isLive) {
    return isLive ? statusIcons[0] : statusIcons[1];
}
function getFlagUrl(language) {
   const lang = [
    'English','Spanish','French','German',
    'Japanese','Korean','Chinese','Portuguese'
]
   const lindex = lang.indexOf(language)
   if (lindex  != -1) {
    return flags[lindex]
   } else {
    return flags[0]
   }
}

function createSocialMediaButton(iconSrc, altText, url) {
    const button = document.createElement('a');
    button.href = url;
    button.target = '_blank'; // Open in a new tab
    button.className = 'social-btn';
    const icon = document.createElement('img');
    icon.src = iconSrc;
    icon.alt = altText;
    icon.className = 'social-icon';
    // Tooltip
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = `Watch Stream`;
    button.appendChild(icon);
    button.appendChild(tooltip);
    return button;
}

const pageIndicator = document.getElementById('page-indicator');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updatePaginationButtons() {


    pageIndicator.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
}

// ================================================================
// • Time
// ================================================================
function updateUSTime() {
    const usTimeElement = document.getElementById('time-text');
    const usFlagElement = document.getElementById('us-flag');
    if (!usTimeElement || !usFlagElement) return;
    // Set the flag image source (using the flag for English or US)
    usFlagElement.src = flags[0];
    const now = new Date();
    const options = {
        timeZone: 'America/New_York', // Eastern Time (ET)
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    let usTimeString = now.toLocaleTimeString('en-US', options);
    // Adjust for the case where hours are '24'
    if (usTimeString.startsWith('24')) {
        usTimeString = '00' + usTimeString.slice(2);
    }
    usTimeElement.textContent = `${usTimeString} HS`;
}
