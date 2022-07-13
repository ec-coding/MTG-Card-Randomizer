
document.querySelector('#blue-button').addEventListener('click', () => getFetchColor('blue'))
document.querySelector('#black-button').addEventListener('click', () => getFetchColor('black'))
document.querySelector('#red-button').addEventListener('click', () => getFetchColor('red'))
document.querySelector('#green-button').addEventListener('click', () => getFetchColor('green'))
document.querySelector('#white-button').addEventListener('click', () => getFetchColor('white'))

function getFetchColor(color){

  const url = `https://api.magicthegathering.io/v1/cards/?`

  fetch(url + `pageSize=5&random=true&contains=imageUrl&colors=${color}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.cards[0].name)
        document.querySelector('#card1name').innerText = data.cards[0].name
        document.querySelector('#card1img').src = data.cards[0].imageUrl
        document.querySelector('#card2name').innerText = data.cards[1].name
        document.querySelector('#card2img').src = data.cards[1].imageUrl
        document.querySelector('#card3name').innerText = data.cards[2].name
        document.querySelector('#card3img').src = data.cards[2].imageUrl
        document.querySelector('#card4name').innerText = data.cards[3].name
        document.querySelector('#card4img').src = data.cards[3].imageUrl
        document.querySelector('#card5name').innerText = data.cards[4].name
        document.querySelector('#card5img').src = data.cards[4].imageUrl
      })
      .catch(err => {
          console.log(`error ${err}`)
  });
}

