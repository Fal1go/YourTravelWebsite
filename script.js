// Переход на страницу страны
function goToCountry(country) {
    if(country === 'kazakhstan') {
        window.location.href = 'country.html';
    }
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