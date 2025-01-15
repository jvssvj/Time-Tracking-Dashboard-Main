const dataUrl = 'data/data.json';
const dailyBtn = document.querySelector('#daily--btn');
const weeklyBtn = document.querySelector('#weekly--btn');
const monthlyBtn = document.querySelector('#monthly--btn');
async function getData(url) {
    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error('data.json not found');
        }
        const data = await resp.json();
        console.log(data);
        frequencyClick(dailyBtn, data, 'daily');
        frequencyClick(weeklyBtn, data, 'weekly');
        frequencyClick(monthlyBtn, data, 'monthly');
        data.forEach((item, index) => {
            const title = item.title;
            const current = item.timeframes['weekly'].current;
            const previous = item.timeframes['weekly'].previous;
            setFrequency(title, current, previous, index);
        });
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
function frequencyClick(button, data, frequency) {
    button.addEventListener('click', () => {
        data.forEach((item, index) => {
            const title = item.title;
            const current = item.timeframes[frequency].current;
            const previous = item.timeframes[frequency].previous;
            setFrequency(title, current, previous, index);
        });
    });
}
function setFrequency(title, current, previous, index) {
    const titleCard = document.querySelectorAll('.card__activity__title__txt');
    const currentCard = document.querySelectorAll('.card__activity__hours');
    const previousCard = document.querySelectorAll('.card__activity__last__hours');
    titleCard.forEach((t, i) => {
        if (index === i) {
            t.textContent = title;
        }
    });
    currentCard.forEach((c, i) => {
        if (index === i) {
            c.textContent = `${current}hrs`;
        }
    });
    previousCard.forEach((p, i) => {
        if (index === i) {
            p.textContent = `Last Week - ${previous}hrs`;
        }
    });
}
function colorBtn(...frequencyBtns) {
    weeklyBtn.classList.add('active__btn');
    frequencyBtns.forEach((button) => {
        button.addEventListener('click', () => {
            frequencyBtns.forEach((btn) => btn.classList.remove('active__btn'));
            button.classList.add('active__btn');
        });
    });
}
getData(dataUrl).then(() => {
    colorBtn(dailyBtn, weeklyBtn, monthlyBtn);
});
