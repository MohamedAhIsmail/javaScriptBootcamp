document.getElementById('title').style.color = "red"

let card = document.getElementById('card')

// let i = Date.now()


card.addEventListener('click', function(){
  let x = Math.random() * 100
  card.style.rotate = `${x}deg`
})