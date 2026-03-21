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
    });
});

// Render first grid (only on index page)
if (document.getElementById("countryGrid")) {
    renderCards("culture");
}

// Get country from URL
const params = new URLSearchParams(window.location.search);
const countryName = params.get("country");

// Load JSON file
fetch('countries.json')
  .then(res => res.json())
  .then(data => {
      if(countryName && data[countryName]) {
          const country = data[countryName];

          // Update page title
          const titleElem = document.querySelector(".main-country-title");
          if(titleElem) titleElem.textContent = country.title;

          // Update description
          const descElem = document.querySelector(".full-desc");
          if(descElem) descElem.innerHTML = country.description;

          // Update hero image
          const imgElem = document.querySelector(".main-image-container img");
          if(imgElem) imgElem.src = country.image;

          // Update hotels
          const hotelGrid = document.querySelector(".hotel-grid");
          if(hotelGrid){
              hotelGrid.innerHTML = "";
              country.hotels.forEach(hotel => {
                  hotelGrid.innerHTML += `
                  <div class="hotel-card">
                    <img src="${hotel.image}">
                    <div class = "hotel-content-block">
                        <div class = "hotel-info">
                            <div class="hotel-header">
                                <h3>${hotel.name}</h3>
                                <span class="rating">${hotel.rating}</span>
                            </div>
                            <div class="tags">${hotel.tags}</div>
                            <div class="price">${hotel.price}</div>
                        </div>
                        <p class="hotel-desc">${hotel.desc}</p>
                    </div>
                  </div>`;
              });
          }
      } else {
          console.error("Country not found in data");
      }
  })
  .catch(err => console.error("Failed to load countries data", err));