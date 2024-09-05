// ================================================================
// • Main variables
// ================================================================
const streamers = [
    // piano //
    ['momostac_piano', 'Piano', ['Japanese','English']],
    ['mamikopiano', 'Piano', ['Japanese','English']],
    ['mamita24', 'Piano', ['Japanese','English']],
    ['hepupiano', 'Piano', ['Japanese','English']],
    ['kao0211', 'Piano', ['Japanese','English']],
    ['thekeyboardgrinder', 'Piano', ['Japanese','English']],
    ['p1tatto', 'Piano', ['Japanese','English']],
    ['xprotexxx', 'Piano', ['German','English']],
    ['robdoesmusic', 'Piano', ['German','English']],
    ['romantiku', 'Piano', ['German','English']],
    ['nala_tanooki', 'Piano', ['English']],
    ['dayymusic', 'Piano', ['English']],
    ['missyalcazarmusic', 'Piano', ['English']],
    ['tenkpiano', 'Piano', ['Korean']],
    ['coldsheeppiano', 'Piano', ['Korean']],
    ['musiciscode', 'Piano', ['English']],
    ['hutch_md', 'Piano', ['English']],
    ['myau2', 'Piano', ['English']],
    ['mylivingroom', 'Piano', ['Portuguese','English']],
    ['lennonpiano', 'Piano', ['English']],
    ['cewbpianist', 'Piano', ['English']],
    ['gipsonlens', 'Piano', ['English']],
    ['animalisakeys', 'Piano', ['English']],
    ['jinjintv', 'Piano', ['Chinese','English']],
    ['jonnykuik', 'Piano', ['English']],
    ['han_padahati', 'Piano', ['Chinese','English']],
    ['jer_roque', 'Piano', ['English']],
    ['harlosmusic', 'Piano', ['Chinese','English']],
    ['robkovacs', 'Piano', ['English']],
    ['hansolo1390', 'Piano', ['English']],
    ['gobotkadet', 'Piano', ['English','Japanese']],
    ['cerianmusic','Piano',['English']],
    ['fuzzgotgames','Piano',['English']],
    ['kanako_japan','Piano',['Japanese','English']],
    ['sannihalla','Piano',['English']],
    ['omaranbatawi','Piano',['English']],
    ['saveasyouwish','Piano',['English']],
    ['just_lina','Piano',['English']],
    ['fiktah','Piano',['English']],
    ['pianoryan','Piano',['English']],
    ['kuyacymusic','Piano',['English']],
    ['sarahmahoneymusic','Piano',['English']],
    ['jackdaniil','Piano',['English']],
    ['arilyna','Piano',['English']],
    ['agnet75','Piano',['Spanish','English']],
    ['leland_iko_music','Piano',['English','French']],
    ['midnight_piano','Piano',['Korean','English']],
    ['aori2313','Piano',['Korean','English']],
    ['miamakesmusic','Piano',['Korean','English']],
    ['pianistmiri','Piano',['Korean','English']],
    ['ninamare','Piano',['Korean','English']],
    ['firefly_piano', 'Piano', ['Korean','English','German']],
    ['zuljanim', 'Piano', ['Korean','English']],

    // others //
    ['mcd00dle', 'Others', ['English']],
    ['mentalposition', 'Others', ['Japanese','English']],
    ['winter_is_coming___', 'Others', ['Korean','English']],
    ['febbydoto', 'Others', ['Korean','English']],
    ['wheelerkk', 'Others', ['English']],
    ['collyoxenfree', 'Others', ['English']],
    ['krazee_aznnn', 'Others', ['English']],
    ['notxzack', 'Others', ['English']],
    ['seven_senshi', 'Others', ['English']],
    ['hibanasound', 'Others', ['English']],
    ['nervousharpist', 'Others', ['Japanese','English']],
    ['oh_be_one','Others',['English','French']],
    ['metal_lizard_jesus','Others',['English']],
    ['passagallia','Others',['English']],
    ['berceuse200','Others',['Spanish','English']],
    ['the_friendly_fiddler','Others',['English']],
    ['Secretfirefox','Others',['Portuguese','English']],
    ['newbaroque','Others',['English']],
    ['violinelf','Others',['English']],
    ['henriviolin','Others',['Portuguese','English']],

    // singer //
    ['yejuniverse','Singer',['Korean','English']],
    ['k4st4nie','Singer',['German','English']],
    ['jambreadmusic','Singer',['English']],
    ['sokkie830','Singer',['English']],
    ['cheropepero','Singer',['English']],
    ['Bigbirbzmusic','Singer',['English']],
    ['vitaminc525','Singer',['Chinese','English']],
    ['Jrabbitlive','Singer',['Chinese','English']],
    ['katieoflahertymusic','Singer',['English']],
    ['jonlimusic','Singer',['English']],
    ['cerianmusic','Singer',['English']],
    ['Gangwon','Singer',['German','English','Korean']],
    ['Matu','Singer',['Spanish','English']],
    ['ellathebunnymom','Singer',['English']],
   
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
    "Zuljanim Is Still The Best Here Kappa.",
    "!sr Banana Cha Cha",
    "Rip Twitch Korea Sadge.",
    "Loading The SuperStars...",
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



async function getStreamerInfo(streamerName) {
    if (streamerName === 'aori2313') {
    async function getChzzkData() {
  const url = "https://api.chzzk.naver.com/service/v1/channels/81bd5b50f0c0728128442daf7db626fc";
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON from the response
    console.log(data); // Display the data in the console
    
    // Use the data as needed
    // For example, you can display it in your HTML like this:
    document.getElementById('output').innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
getChzzkData()
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
        streamers.map(async ([streamerName, category, languages]) => {
            const streamerInfo = await getStreamerInfo(streamerName);
            if (streamerInfo) {
                return [streamerInfo.displayName, [category, streamerInfo.game, streamerInfo.profileImage, streamerInfo.online, streamerInfo.user, languages]];
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

    paginatedStreamers.forEach(([name, [category, game, profilePic, isLive, user, languages]]) => {
        if (name === 'aori2313') {
            console.log(true)
        }
         
        const li = document.createElement('li');
        if (isLive) {
         if (game.toLowerCase() === 'music') {
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
        statusText.textContent = isLive ? `Live (${truncatedCategory})` : 'Offline';
    
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
    
        const socialContainer = document.createElement('div');
        socialContainer.className = 'social-container';
        const twitchBtn = createSocialMediaButton(
            'assets/TWITCH.png',
            'Twitch',
            `https://www.twitch.tv/${user}`
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

