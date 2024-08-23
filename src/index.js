let dailyBtn = document.querySelector('#daily--btn')
let weeklyBtn = document.querySelector('#weekly--btn')
let monthlyBtn = document.querySelector('#monthly--btn')

fetch('data.json').then((response) => {
    response.json().then((info) => {

        function colorBtn (dailyBtn, weeklyBtn, monthlyBtn, dailyBtnColor, weeklyBtnColor, monthlyBtnColor) {
            dailyBtn.style.color = dailyBtnColor
            weeklyBtn.style.color = weeklyBtnColor
            monthlyBtn.style.color = monthlyBtnColor
        }

        function getData(hoursContainerClass, indexDataHours, period, lastWeekContainer, indexDataLastHours) {
            document.querySelector(`${hoursContainerClass}`).innerHTML = `${info[indexDataHours].timeframes[period].current} hrs`
            document.querySelector(`${lastWeekContainer}`).innerHTML = `${info[indexDataLastHours].timeframes[period].previous} hrs`
        }

        dailyBtn.addEventListener('click', () => {
            colorBtn(dailyBtn, weeklyBtn, monthlyBtn, '#ffffff', 'hsl(235, 45%, 61%)', 'hsl(235, 45%, 61%)')
            getData('.work__hours', 0, 'daily', '.work__last__hours', 0)
            getData('.play__hours', 1, 'daily', '.play__last__hours', 1)
            getData('.study__hours', 2, 'daily', '.study__last__hours', 2)
            getData('.exercise__hours', 3, 'daily', '.exercise__last__hours', 3)
            getData('.social__hours', 4, 'daily', '.social__last__hours', 4)
            getData('.selfcare__hours', 5, 'daily', '.selfcare__last__hours', 5)
        })

        weeklyBtn.addEventListener('click', () => {
            colorBtn(dailyBtn, weeklyBtn, monthlyBtn, 'hsl(235, 45%, 61%)', '#ffffff', 'hsl(235, 45%, 61%)')
            getData('.work__hours', 0, 'weekly', '.work__last__hours', 0)
            getData('.play__hours', 1, 'weekly', '.play__last__hours', 1)
            getData('.study__hours', 2, 'weekly', '.study__last__hours', 2)
            getData('.exercise__hours', 3, 'weekly', '.exercise__last__hours', 3)
            getData('.social__hours', 4, 'weekly', '.social__last__hours', 4)
            getData('.selfcare__hours', 5, 'weekly', '.selfcare__last__hours', 5)
        })

        monthlyBtn.addEventListener('click', () => {
            colorBtn(dailyBtn, weeklyBtn, monthlyBtn, 'hsl(235, 45%, 61%)', 'hsl(235, 45%, 61%)', '#ffffff')
            getData('.work__hours', 0, 'monthly', '.work__last__hours', 0)
            getData('.play__hours', 1, 'monthly', '.play__last__hours', 1)
            getData('.study__hours', 2, 'monthly', '.study__last__hours', 2)
            getData('.exercise__hours', 3, 'monthly', '.exercise__last__hours', 3)
            getData('.social__hours', 4, 'monthly', '.social__last__hours', 4)
            getData('.selfcare__hours', 5, 'monthly', '.selfcare__last__hours', 5)
        })
    })
})
