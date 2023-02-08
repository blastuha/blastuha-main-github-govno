function askClient(estimastions) {
  const ask = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
  
  // Нажата отмена
  if (ask === null) {
    return
  }

  if (+ask > 0 && +ask <= 10) {
    estimastions.push(ask)
  }
}

function logEsimations(estimastions) {
  const good = estimastions.filter((estimation) => estimation >= 5)
  const bad = estimastions.filter((estimation) => estimation < 5)

  alert(`Хороших оценок ${good.length}`)
  alert(`Плохих оценок ${bad.length}`)
}

function getStats() {
  const clientsEstimations = []

  for (let i = 0; i < 3; i++) {
    askClient(clientsEstimations)
  }

  logEsimations(clientsEstimations)
}

getStats()
