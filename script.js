// Переход на страницу страны
function goToCountry(country) {
    window.location.href = `country.html?country=${country}`;
}

// Свап тайтлов
const titles = [
    "Куда отправимся?",
    "Куда летим?",
    "Что хотим?",
    "В какое приключение?",
    "Где откроем что-то новое?",
    "Следующий пункт приключений",
    "В поисках удивительного",
    "Мечтаем о новых местах!"
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