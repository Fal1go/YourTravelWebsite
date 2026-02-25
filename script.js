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
heroTitle.textContent = titles[randomIndex];

// Бургер меню (иконка самолета)
document.getElementById('burger-menu').addEventListener('click', () => {
    alert('Меню открыто (здесь может быть ваш Sidebar)');
});

// Профиль пользователя
document.getElementById('user-profile').addEventListener('click', () => {
    alert('Переход в личный кабинет');
    // window.location.href = 'profile.html';
});