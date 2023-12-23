let dailyBtn = document.querySelector('#daily--btn')
let weeklyBtn = document.querySelector('#weekly--btn')
let monthlyBtn = document.querySelector('#monthly--btn')

fetch('data.json').then((response) => {
    response.json().then((info) => {
        
        function daily() {
            dailyBtn.style.color = '#ffffff'
            weeklyBtn.style.color = 'hsl(235, 45%, 61%)'
            monthlyBtn.style.color = 'hsl(235, 45%, 61%)'


            workCurrentHours = document.querySelector('.work__hours').innerHTML = info[0].timeframes.daily.current + 'hrs'
            workLastHours = document.querySelector('.work__last__hours').innerHTML = info[0].timeframes.daily.previous + 'hrs'

            playCurrentHours = document.querySelector('.play__hours').innerHTML = info[1].timeframes.daily.current + 'hrs'
            playLastHours = document.querySelector('.play__last__hours').innerHTML = info[1].timeframes.daily.previous + 'hrs'

            studyCurrentHours = document.querySelector('.study__hours').innerHTML = info[2].timeframes.daily.current + 'hrs'
            studyLastHours = document.querySelector('.study__last__hours').innerHTML = info[2].timeframes.daily.previous + 'hrs'

            exerciseCurrentHours = document.querySelector('.exercise__hours').innerHTML = info[3].timeframes.daily.current + 'hrs'
            exerciseLastHours = document.querySelector('.exercise__last__hours').innerHTML = info[3].timeframes.daily.previous + 'hrs'

            socialCurrentHours = document.querySelector('.social__hours').innerHTML = info[4].timeframes.daily.current + 'hrs'
            socialLastHours = document.querySelector('.social__last__hours').innerHTML = info[4].timeframes.daily.previous + 'hrs'

            selfcareCurrentHours = document.querySelector('.selfcare__hours').innerHTML = info[5].timeframes.daily.current + 'hrs'
            selfcareLastHours = document.querySelector('.selfcare__last__hours').innerHTML = info[5].timeframes.daily.previous + 'hrs'
        }

        function weekly() {
            dailyBtn.style.color = 'hsl(235, 45%, 61%)'
            weeklyBtn.style.color = '#ffffff'
            monthlyBtn.style.color = 'hsl(235, 45%, 61%)'

            workCurrentHours = document.querySelector('.work__hours').innerHTML = info[0].timeframes.weekly.current + 'hrs'
            workLastHours = document.querySelector('.work__last__hours').innerHTML = info[0].timeframes.weekly.previous + 'hrs'

            playCurrentHours = document.querySelector('.play__hours').innerHTML = info[1].timeframes.weekly.current + 'hrs'
            playLastHours = document.querySelector('.play__last__hours').innerHTML = info[1].timeframes.weekly.previous + 'hrs'

            studyCurrentHours = document.querySelector('.study__hours').innerHTML = info[2].timeframes.weekly.current + 'hrs'
            studyLastHours = document.querySelector('.study__last__hours').innerHTML = info[2].timeframes.weekly.previous + 'hrs'

            exerciseCurrentHours = document.querySelector('.exercise__hours').innerHTML = info[3].timeframes.weekly.current + 'hrs'
            exerciseLastHours = document.querySelector('.exercise__last__hours').innerHTML = info[3].timeframes.weekly.previous + 'hrs'

            socialCurrentHours = document.querySelector('.social__hours').innerHTML = info[4].timeframes.weekly.current + 'hrs'
            socialLastHours = document.querySelector('.social__last__hours').innerHTML = info[4].timeframes.weekly.previous + 'hrs'

            selfcareCurrentHours = document.querySelector('.selfcare__hours').innerHTML = info[5].timeframes.weekly.current + 'hrs'
            selfcareLastHours = document.querySelector('.selfcare__last__hours').innerHTML = info[5].timeframes.weekly.previous + 'hrs'
        }

        function monthly() {
            dailyBtn.style.color = 'hsl(235, 45%, 61%)'
            weeklyBtn.style.color = 'hsl(235, 45%, 61%)'
            monthlyBtn.style.color = '#ffffff'

            workCurrentHours = document.querySelector('.work__hours').innerHTML = info[0].timeframes.monthly.current + 'hrs'
            workLastHours = document.querySelector('.work__last__hours').innerHTML = info[0].timeframes.monthly.previous + 'hrs'

            playCurrentHours = document.querySelector('.play__hours').innerHTML = info[1].timeframes.monthly.current + 'hrs'
            playLastHours = document.querySelector('.play__last__hours').innerHTML = info[1].timeframes.monthly.previous + 'hrs'

            studyCurrentHours = document.querySelector('.study__hours').innerHTML = info[2].timeframes.monthly.current + 'hrs'
            studyLastHours = document.querySelector('.study__last__hours').innerHTML = info[2].timeframes.monthly.previous + 'hrs'

            exerciseCurrentHours = document.querySelector('.exercise__hours').innerHTML = info[3].timeframes.monthly.current + 'hrs'
            exerciseLastHours = document.querySelector('.exercise__last__hours').innerHTML = info[3].timeframes.monthly.previous + 'hrs'

            socialCurrentHours = document.querySelector('.social__hours').innerHTML = info[4].timeframes.monthly.current + 'hrs'
            socialLastHours = document.querySelector('.social__last__hours').innerHTML = info[4].timeframes.monthly.previous + 'hrs'

            selfcareCurrentHours = document.querySelector('.selfcare__hours').innerHTML = info[5].timeframes.monthly.current + 'hrs'
            selfcareLastHours = document.querySelector('.selfcare__last__hours').innerHTML = info[5].timeframes.monthly.previous + 'hrs'
        }
        
        dailyBtn.addEventListener('click', daily)
        weeklyBtn.addEventListener('click', weekly)
        monthlyBtn.addEventListener('click', monthly)
    })
})
