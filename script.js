// Переход на страницу страны
function goToCountry(country) {
    window.location.href = `country.html?country=${country}`;
}

// Свап тайтлов
const titles = [
    "Поехали путешествовать!",
    "Скажи «Да» новым впечатлениям!",
    "Собирай чемодан. А остальное мы возьмём на себя!",
    "Время увидеть мир!",
    "Взгляните на мир по — новому!",
    "Поможем спланировать ваш отпуск!",
    "Откройтесь новому!",
    "Пусть твоя мечта станет реальностью!",
    "Больше, чем просто путешествие!"
];

let randomIndex = Math.floor(Math.random() * titles.length);

const heroTitle = document.getElementById('heroTitle');
if(heroTitle){
    heroTitle.textContent = titles[randomIndex];
}

// Функционал иконок
const burger = document.getElementById('burger-menu');
const profile = document.getElementById('user-profile');

// Бургер меню (иконка самолета)

if(burger){
    burger.addEventListener('click', () => {
        alert('Меню открыто (здесь может быть ваш Sidebar)');
    });
}

// Профиль пользователя
if(profile){
   profile.addEventListener('click', () => {
        alert('Переход в личный кабинет');
        // window.location.href = 'profile.html';
    });
}

// Возврат домой через лого
const logo = document.getElementById("logo");

if (logo){
    logo.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

// Get vacation type grid
const countries = {
    culture: [
        {
            title: "ФРАНЦИЯ",
            code: "france",
            img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=500",
            desc: "Прогулки по Лувру, вечерние кафе и искусство на каждом шагу!"
        },
        {
            title: "ИTАЛИЯ",
            code: "italy",
            img: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?w=500",
            desc: "Открой музеи, древние города и вкус настоящей истории!"
        },
        {
            title: "ГРЕЦИЯ",
            code: "greece",
            img: "https://plus.unsplash.com/premium_photo-1675375678457-d70708bf77c8?w=500",
            desc: "Исследуй античные храмы и почувствуй дух древних цивилизаций!"
        }
    ],
    recreation: [
        {
            title: "TУРЦИЯ",
            code: "turkey",
            img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=500",
            desc: "Турция — наслаждайся пляжами, SPA и комфортом “всё включено”!"
        },
        {
            title: "МАЛЬДИВЫ",
            code: "maldives",
            img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=500",
            desc: "Мальдивы — купайся в бирюзовом океане и отдыхай в виллах над водой!"
        },
        {
            title: "TАИЛАНД",
            code: "thailand",
            img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=500",
            desc: "Таиланд — отдыхай на тропических пляжах и пробуй экзотическую кухню!"
        }
    ],
    adventure: [
        {
            title: "ШВЕЙЦАРИЯ",
            code: "switzerland",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Катайся на лыжах и покоряй Альпы!"
        },
        {
            title: "НОРВЕГИЯ",
            code: "norway",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Отправляйся в походы к Фьордам и смотри на северное сияние!"
        },
        {
            title: "НОВАЯ ЗЕЛАНДИЯ",
            code: "new zeland",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Экстремальные приключения: от банджи до горных треков!"
        }
    ],
    occasion: [
        {
            title: "США",
            code: "usa",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Посещай концерты, фестивали и масштабные шоу мирового уровня!"
        },
        {
            title: "ГЕРМАНИЯ",
            code: "germany",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Участвуй в легендарных фестивалях и ярких праздниках!"
        },
        {
            title: "ЮЖНАЯ КОРЕЯЯ",
            code: "south-korea",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Будь на концертах K-pop и современных культурных событиях!"
        }
    ],
    eco: [
        {
            title: "КАНАДА",
            code: "canada",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Гуляй по диким лесам, смотри на озёра и дикую природу!"
        },
        {
            title: "ИСЛАНДИЯ",
            code: "iceland",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Наблюдай вулканы, водопады и гейзеры!"
        },
        {
            title: "КОСTА-РИКА",
            code: "costa-rica",
            img: "https://images.unsplash.com/photo-1677475191981-653bcfcc3cd2?q=80&w=1193",
            desc: "Исследуй джунгли и наблюдай редких животных в природе!"
        }
    ]
};

// Display the cards add click to them
function renderCards(type) {
    const grid = document.getElementById("countryGrid");
    grid.innerHTML = "";

    countries[type].forEach(country => {

        // создаём карточку
        const div = document.createElement("div");
        div.className = "card";

        // добавляем клик
        div.addEventListener("click", () => {
            goToCountry(country.code);
        });

        // наполняем HTML внутри карточки
        div.innerHTML = `
            <div class="card-image">
                <img src="${country.img}">
            </div>
            <h2 class="card-title">${country.title}</h2>
            <div class="card-divider"></div>
            <div class="card-desc">
                <p>${country.desc}</p>
            </div>
        `;

        // data attributes for search
        div.dataset.title = country.title || '';
        div.dataset.desc = country.desc || '';
        div.dataset.code = country.code || '';
        div.dataset.img = country.img || '';

        // добавляем карточку в контейнер
        grid.appendChild(div);
    });
}

// Обработчик клика
document.querySelectorAll(".vacation-types-container p")
.forEach(item => {
    item.addEventListener("click", () => {
        const type = item.dataset.type;
        renderCards(type);
        // Re-run search to filter newly rendered cards (if user typed something)
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput && searchInput.value.trim()) {
            performSearch(searchInput.value.trim());
        }
    });
});

// Render first grid (only on index page)
if (document.getElementById("countryGrid")) {
    renderCards("culture");
}

// Get country from URL
const params = new URLSearchParams(window.location.search);
const countryName = params.get("country");
const hotelParam = params.get("hotel");

// container for hotels loaded from hotels.json
let hotelsData = [];

const isHotelPage = !!document.querySelector('.main-hotel-title');

if (isHotelPage) {
    // Only load hotels data for the hotel page (avoid loading country details here)
    fetch('hotels.json')
      .then(r => r.json())
      .then(hotels => {
          hotelsData = hotels || [];

          // find hotel by URL param or fallback
          let hotel = null;
          if (hotelParam) {
              const decoded = decodeURIComponent(hotelParam).toLowerCase();
              hotel = hotelsData.find(h => h.name.toLowerCase() === decoded);
          }
          if (!hotel && countryName) {
              hotel = hotelsData.find(h => h.country_code === countryName);
          }
          if (!hotel) hotel = hotelsData[0];

          if (!hotel) {
              const titleElem = document.querySelector('.main-hotel-title');
              if (titleElem) titleElem.textContent = 'Отель не найден';
              const descEl = document.querySelector('.hotel-desc');
              if (descEl) descEl.textContent = 'Отель не найден.';
              return;
          }

          // populate hero
          document.title = `YourTravel - ${hotel.name}`;
          const titleElem = document.querySelector('.main-hotel-title');
          if (titleElem) titleElem.textContent = hotel.name;
          const imgElem = document.querySelector('.hotel-main-image');
          if (imgElem) imgElem.src = hotel.image;
          const ratingElem = document.querySelector('.rating');
          if (ratingElem) ratingElem.textContent = hotel.rating || '';
          const tagsElems = document.querySelectorAll('.tags');
          if (tagsElems && tagsElems.length) tagsElems.forEach(t => t.textContent = (hotel.tags || []).join(' '));
          const priceElem = document.querySelector('.price');
          if (priceElem) priceElem.textContent = hotel.price || '';

          // generate and show a richer description
          const descEl = document.querySelector('.hotel-desc');
          if (descEl) descEl.innerHTML = generateDetailedDescription(hotel);

          // amenities
          const amenities = document.querySelector('.amenities');
          if (amenities) amenities.textContent = (hotel.tags || []).join(' ');

          // actions
          const backBtn = document.getElementById('back-to-country');
          if (backBtn) backBtn.addEventListener('click', () => {
              if (countryName) goToCountry(countryName); else window.location.href = 'index.html';
          });
          const bookBtn = document.getElementById('book-now');
          if (bookBtn) bookBtn.addEventListener('click', () => { alert('Переход к бронированию: ' + hotel.name); });

          // photos, similar, comments
          renderPhotosGrid(hotel);
          renderSimilarHotels(hotel);
          initComments(hotel);
      })
      .catch(err => console.error('Failed to load hotels data', err));
} else {
    // Index / country page: load countries.json and hotels.json
    Promise.all([
        fetch('countries.json').then(r => r.json()),
        fetch('hotels.json').then(r => r.json()).catch(err => { console.warn('Could not load hotels.json', err); return []; })
    ])
    .then(([countriesJson, hotels]) => {
        hotelsData = hotels || [];

        if (countryName && countriesJson[countryName]) {
            const country = countriesJson[countryName];

            // Update page title
            const titleElem = document.querySelector(".main-country-title");
            if(titleElem) titleElem.textContent = country.title;

            // Update description
            const descElem = document.querySelector(".full-desc");
            if(descElem) descElem.innerHTML = country.description;

            // Update hero image
            const imgElem = document.querySelector(".main-image-container img");
            if(imgElem) imgElem.src = country.image;

            // Update hotels (use hotels.json)
            const hotelGrid = document.querySelector(".hotel-grid");
            const hotelsForCountry = hotelsData.filter(h => h.country_code === countryName);
            if(hotelGrid){
                hotelGrid.innerHTML = "";
                hotelsForCountry.forEach(hotel => {
                    const card = document.createElement('div');
                    card.className = 'hotel-card';
                    card.dataset.name = hotel.name || '';
                    card.dataset.tags = (hotel.tags || []).join(' ') || '';
                    card.dataset.desc = hotel.desc || '';
                    card.dataset.price = hotel.price || '';
                    card.dataset.country = hotel.country_code || '';

                    card.addEventListener('click', () => {
                        window.location.href = `hotel.html?country=${countryName}&hotel=${encodeURIComponent(hotel.name)}`;
                    });

                    card.innerHTML = `
                      <img src="${hotel.image}">
                      <div class = "hotel-content-block">
                          <div class = "hotel-info">
                              <div class="hotel-header">
                                  <h3>${hotel.name}</h3>
                                  <span class="rating">${hotel.rating}</span>
                              </div>
                              <div class="tags">${(hotel.tags || []).join(' ')}</div>
                              <div class="price">${hotel.price}</div>
                          </div>
                          <p class="hotel-desc">${hotel.desc}</p>
                      </div>`;

                    hotelGrid.appendChild(card);
                });
            }
        } else {
            console.error("Country not found in data");
        }
    })
    .catch(err => console.error("Failed to load countries or hotels data", err));
}

// Helper: generate a slightly richer description when on the hotel page
function generateDetailedDescription(hotel) {
    const base = hotel.desc || '';
    const tags = (hotel.tags || []).map(t => t.replace(/^#/, '')).join(', ');
    const rating = hotel.rating ? `Рейтинг ${hotel.rating}` : '';
    const price = hotel.price ? `Цена от ${hotel.price}` : '';
    const amenities = tags ? `Удобства: ${tags}.` : '';
    const extra = `${rating}${rating && price ? ' · ' : ''}${price}`;
    return `<p>${base}</p><p>${amenities} ${extra}</p><p>${hotel.name} — отличный выбор для комфортного отдыха и знакомства с городом.</p>`;
}

// Render photos grid (click thumb to swap main image)
function renderPhotosGrid(hotel) {
    const grid = document.querySelector('.photos-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const photos = (hotel.photos && hotel.photos.length) ? hotel.photos : [hotel.image, hotel.image, hotel.image];
    photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = hotel.name;
        img.className = 'photo-thumb';
        img.addEventListener('click', () => {
            const main = document.querySelector('.hotel-main-image');
            if (main) main.src = src;
        });
        grid.appendChild(img);
    });
}

// Render similar hotels based on hashtag overlap
function renderSimilarHotels(hotel) {
    const grid = document.querySelector('.similar-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const curTags = new Set((hotel.tags || []).map(t => t.toLowerCase()));
    const scored = hotelsData
        .filter(h => h.name !== hotel.name)
        .map(h => {
            const otherTags = new Set((h.tags || []).map(t => t.toLowerCase()));
            let score = 0;
            otherTags.forEach(t => { if (curTags.has(t)) score++; });
            return { h, score };
        })
        .filter(s => s.score > 0)
        .sort((a,b) => b.score - a.score)
        .slice(0,3);

    if (!scored.length) {
        // fallback: same country
        const fallback = hotelsData.filter(h => h.country_code === hotel.country_code && h.name !== hotel.name).slice(0,3);
        fallback.forEach(h => appendSimilar(h));
    } else {
        scored.forEach(s => appendSimilar(s.h));
    }

    function appendSimilar(h) {
        const div = document.createElement('div');
        div.className = 'similar-card';
        div.innerHTML = `<img src="${h.image}" alt="${h.name}"><div class="sim-info"><h4>${h.name}</h4><div class="rating">${h.rating}</div><div class="tags">${(h.tags||[]).join(' ')}</div></div>`;
        div.addEventListener('click', () => {
            window.location.href = `hotel.html?country=${h.country_code}&hotel=${encodeURIComponent(h.name)}`;
        });
        grid.appendChild(div);
    }
}

// Simple comments: stored in localStorage per-hotel
function initComments(hotel) {
    const key = 'comments_' + encodeURIComponent(hotel.name);
    const list = document.querySelector('.comments-list');
    const form = document.getElementById('comment-form');
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    if (!list || !form || !nameInput || !textInput) return;

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
    }

    function loadComments() {
        const raw = localStorage.getItem(key);
        let arr = raw ? JSON.parse(raw) : [];
        list.innerHTML = '';
        if (!arr.length) list.innerHTML = '<div class="no-comments">Пока нет отзывов. Будьте первым!</div>';
        arr.forEach(c => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.innerHTML = `<div class="comment-meta"><strong>${escapeHtml(c.name)}</strong> <span class="time">${new Date(c.time).toLocaleString()}</span></div><div class="comment-text">${escapeHtml(c.text)}</div>`;
            list.appendChild(div);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim() || 'Аноним';
        const text = textInput.value.trim();
        if (!text) return;
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        const comment = { name, text, time: new Date().toISOString() };
        arr.unshift(comment);
        localStorage.setItem(key, JSON.stringify(arr));
        nameInput.value = '';
        textInput.value = '';
        loadComments();
    });

    loadComments();
}

// ------------------ Search / Filtering ------------------
function debounce(fn, wait) {
    let t;
    return function(...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

function showNoResultsMessage(container) {
    if (!container) return;
    let msg = container.querySelector('.no-results');
    if (!msg) {
        msg = document.createElement('div');
        msg.className = 'no-results';
        msg.style.padding = '20px';
        msg.style.textAlign = 'center';
        msg.textContent = 'Ничего не найдено.';
        container.appendChild(msg);
    }
}

function removeNoResultsMessage(container) {
    if (!container) return;
    const msg = container.querySelector('.no-results');
    if (msg) container.removeChild(msg);
}

function performSearch(query) {
    const q = (query || '').trim().toLowerCase();

    // If empty query, show all
    if (!q) {
        // show all country cards
        const countryGrid = document.getElementById('countryGrid');
        if (countryGrid) {
            Array.from(countryGrid.querySelectorAll('.card')).forEach(c => { c.style.display = ''; });
            removeNoResultsMessage(countryGrid);
        }
        // show all hotel cards
        const hotelGrid = document.querySelector('.hotel-grid');
        if (hotelGrid) {
            Array.from(hotelGrid.querySelectorAll('.hotel-card')).forEach(c => { c.style.display = ''; });
            removeNoResultsMessage(hotelGrid);
        }
        return;
    }

    // Search country cards (index page)
    const countryGrid = document.getElementById('countryGrid');
    if (countryGrid) {
        const cards = Array.from(countryGrid.querySelectorAll('.card'));
        const scored = cards.map(card => {
            let score = 0;
            const title = (card.dataset.title || (card.querySelector('.card-title') && card.querySelector('.card-title').textContent) || '').toLowerCase();
            const desc = (card.dataset.desc || (card.querySelector('.card-desc p') && card.querySelector('.card-desc p').textContent) || '').toLowerCase();
            const tokens = q.split(/\s+/).filter(Boolean);
            tokens.forEach(token => {
                if (title.includes(token)) score += 4;
                if (desc.includes(token)) score += 1;
            });
            return { card, score };
        });
        const matches = scored.filter(s => s.score > 0).sort((a,b) => b.score - a.score);
        cards.forEach(c => c.style.display = 'none');
        if (matches.length) {
            matches.forEach(m => { m.card.style.display = ''; countryGrid.appendChild(m.card); });
            removeNoResultsMessage(countryGrid);
        } else {
            showNoResultsMessage(countryGrid);
        }
    }

    // Search hotel cards (country page)
    const hotelGrid = document.querySelector('.hotel-grid');
    if (hotelGrid) {
        const cards = Array.from(hotelGrid.querySelectorAll('.hotel-card'));
        const scored = cards.map(card => {
            let score = 0;
            const title = (card.dataset.name || (card.querySelector('h3') && card.querySelector('h3').textContent) || '').toLowerCase();
            const desc = (card.dataset.desc || (card.querySelector('.hotel-desc') && card.querySelector('.hotel-desc').textContent) || '').toLowerCase();
            const tags = (card.dataset.tags || '').toLowerCase();
            const tokens = q.split(/\s+/).filter(Boolean);
            tokens.forEach(token => {
                if (token.startsWith('#')) {
                    if (tags.includes(token)) score += 6;
                } else {
                    if (title.includes(token)) score += 5;
                    if (tags.includes('#' + token) || tags.includes(token)) score += 3;
                    if (desc.includes(token)) score += 1;
                }
            });
            return { card, score };
        });
        const matches = scored.filter(s => s.score > 0).sort((a,b) => b.score - a.score);
        cards.forEach(c => c.style.display = 'none');
        if (matches.length) {
            matches.forEach(m => { m.card.style.display = ''; hotelGrid.appendChild(m.card); });
            removeNoResultsMessage(hotelGrid);
        } else {
            showNoResultsMessage(hotelGrid);
        }
    }
}

// Attach search input listeners (debounced)
const searchInputs = document.querySelectorAll('.search-bar input');
if (searchInputs.length) {
    searchInputs.forEach(inp => inp.addEventListener('input', debounce((e) => performSearch(e.target.value), 220)));
}

// Run initial search if input not empty
const globalSearch = document.querySelector('.search-bar input');
if (globalSearch && globalSearch.value.trim()) performSearch(globalSearch.value.trim());