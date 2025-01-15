const dataUrl = 'data/data.json'
const dailyBtn: HTMLButtonElement = document.querySelector('#daily--btn')
const weeklyBtn: HTMLButtonElement = document.querySelector('#weekly--btn')
const monthlyBtn: HTMLButtonElement = document.querySelector('#monthly--btn')

interface Timeframe {
  current: number
  previous: number
}

interface DataItem {
  title: string
  timeframes: {
    daily: Timeframe
    weekly: Timeframe
    monthly: Timeframe
  }
}

async function getData(url: string): Promise<DataItem[]> {
  try {
    const resp = await fetch(url)
    if (!resp.ok) {
      throw new Error('data.json not found')
    }

    const data: DataItem[] = await resp.json()
    console.log(data)

    frequencyClick(dailyBtn, data, 'daily')
    frequencyClick(weeklyBtn, data, 'weekly')
    frequencyClick(monthlyBtn, data, 'monthly')

    data.forEach((item, index) => {
      const title = item.title
      const current = item.timeframes['weekly'].current
      const previous = item.timeframes['weekly'].previous
  
      setFrequency(title, current, previous ,index)
    })  

  } catch (error) {
    console.error(error)
    return []
  }
}

function frequencyClick(button: HTMLButtonElement, data: DataItem[], frequency: 'daily' | 'weekly' | 'monthly') {
  button.addEventListener('click', () => {
      data.forEach((item, index) => {
          const title = item.title
          const current = item.timeframes[frequency].current
          const previous = item.timeframes[frequency].previous

          setFrequency(title, current, previous ,index)
      })
  })
}

function setFrequency(title:string, current:number, previous:number, index:number) {
  const titleCard: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.card__activity__title__txt')
  const currentCard: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.card__activity__hours')
  const previousCard: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.card__activity__last__hours')

  titleCard.forEach((t, i) => {
    if(index === i) {
      t.textContent = title
    }
  })
  
  currentCard.forEach((c, i) => {
    if(index === i) {
      c.textContent = `${current}hrs`
    }
  })

  previousCard.forEach((p, i) => {
    if(index === i) {
      p.textContent = `Last Week - ${previous}hrs`
    }
  })
}

function colorBtn(...frequencyBtns: HTMLButtonElement[]) {
  weeklyBtn.classList.add('active__btn')

  frequencyBtns.forEach((button) => {
    button.addEventListener('click', () => {
      frequencyBtns.forEach((btn) => btn.classList.remove('active__btn'))
      button.classList.add('active__btn')
    })
  })
}

getData(dataUrl).then(() => {
  colorBtn(dailyBtn, weeklyBtn, monthlyBtn)
})