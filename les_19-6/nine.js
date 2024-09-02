const presentDay = document.querySelector(".present-day");
const welcome = document.querySelector(".welcome")
const day = document.querySelector(".day");
const time = document.querySelector(".time");
const newYear = document.querySelector(".new-year");
let currentTime;
let good;
let daysRemaining;
let dayTheWeek;

const getData = () => {
    let dayNow = new Date().getDay();
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    const getTillNewYear = (year) => {
        let dateStop = new Date(`01 january ${year}`).getTime();
        let dateNow = new Date().getTime();
        daysRemaining = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);
        console.log(daysRemaining);
        if (daysRemaining === 1 || daysRemaining % 10 === 1) {
            daysRemaining = `${daysRemaining} день`;
        } else if (
            (daysRemaining > 1 && daysRemaining < 5) ||
            (daysRemaining % 10 > 1 && daysRemaining % 10 < 5)
        ) {
            daysRemaining = `${daysRemaining} дня`;
        } else {
            daysRemaining = `${daysRemaining} дней`;
        }

        return daysRemaining;
    };
    const TimeFormat = () => {
        let amPm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;

        hours = hours < 10 ? `0${hours}` : `${hours}`;
        minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    };
    const greetingTranslation = () => {
        if (hours >= 5 && hours < 11) {
            good = "Доброе утро!";
        }
        if (hours >= 11 && hours < 18) {
            good = "Добрый день!";
        }
        if (hours >= 18 && hours < 23) {
            good = "Добрый вечер!";
        }
        else  {
            good = "Доброй ночи!";
        }
    };
    const getDayWeek = () => {
        const days = [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
        ];

        dayTheWeek = days[dayNow];
    };
    greetingTranslation();
    getDayWeek();
    TimeFormat();
    getTillNewYear("2025");

    welcome.textContent = `${good}`;
    day.textContent = `Сегодня: ${dayTheWeek}`;
    time.textContent = `Текущее время: ${currentTime}`;
    newYear.textContent = `До нового года осталось ${daysRemaining}`;
};

setInterval(getData, 1000);