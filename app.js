const secondsContainer   = document.querySelector('#seconds')
const minutesContainer   = document.querySelector('#minutes')
const hoursContainer     = document.querySelector('#hours')
const daysContainer      = document.querySelector('#days')
const spinnerLoading     = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

// 2) Data de início: primeiro beijo em 17/12/2022
const startDate = new Date('2022-12-17T00:00:00')

// 3) Função de formatação: 0 → '00'
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

// 4) Insere os valores formatados no HTML
const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  daysContainer.textContent    = getTimeUnit(days)
  hoursContainer.textContent   = getTimeUnit(hours)
  minutesContainer.textContent = getTimeUnit(minutes)
  secondsContainer.textContent = getTimeUnit(seconds)
}

// 5) Calcula a diferença entre agora e a data de início
const updateCountdown = () => {
  const currentTime = new Date()
  const difference  = currentTime - startDate

  const days    = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours   = Math.floor(difference / (1000 * 60 * 60)) % 24
  const minutes = Math.floor(difference / (1000 * 60)) % 60
  const seconds = Math.floor(difference / 1000) % 60

  insertCountdownValues({ days, hours, minutes, seconds })
}

// 6) Quando o carregamento terminar, mostra o contador
const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = 'flex'
}

// 7) Liga as duas tarefas:
//    – Depois de 1s remove o spinner e mostra o contador
//    – A cada 1s atualiza os valores
setTimeout    (handleCountdownDisplay, 1000)
setInterval   (updateCountdown,        1000)

// corações fofos

const heartColors = [
    '#ff69b4', '#ff1493', '#ff6ec7', '#db7093', '#ffb6c1', '#f08080', 
    '#ff8da6', '#ec407a', '#e91e63', '#ff5722', '#9c27b0', '#673ab7',
    '#3f51b5', '#2196f3', '#03a9f4', '#4caf50', '#8bc34a', '#cddc39'
  ]
  
  function createHeart() {
    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.style.left = Math.random() * 100 + 'vw'
    heart.style.animationDuration = 2 + Math.random() * 3 + 's'
    heart.style.backgroundColor = heartColors[Math.floor(Math.random() * heartColors.length)]
  
    document.querySelector('.hearts').appendChild(heart)
  
    setTimeout(() => {
      heart.remove()
    }, 5000)
  }
  
  setInterval(createHeart, 300)
  