const blockQuoteEl = document.querySelector('blockquote > p')
const refreshBtn = document.querySelector('button')
const divEl = document.querySelector('div')
divEl.style.display = 'none'

const ADVICE_URL = 'https://api.adviceslip.com/advice'

refreshBtn.addEventListener('click',()=>{
    window.location.href = '/'
})

const fetchData = async () => {
    try {
        const response = await fetch(ADVICE_URL)
        const data = await response.json()
        return data
    }
    catch {
        console.log('error');
    }
}
const advice = await fetchData()

blockQuoteEl.innerText = advice.slip.advice
divEl.style.display = 'block'

