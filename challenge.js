const PLUS = document.getElementById('+')
const MINUS = document.getElementById('-')
const COUNTER = document.getElementById('counter')
const HEART = document.getElementById('<3')
const LIKELIST = document.querySelector('ul.likes')
const PAUSE = document.getElementById('pause')
const COMMENTSFORM = document.getElementById('comment-form')

PLUS.addEventListener('click', increment)
MINUS.addEventListener('click', decrement)
HEART.addEventListener('click', like)
PAUSE.addEventListener('click', pause)
COMMENTSFORM.addEventListener('submit', addComment)

let gameInterval = setInterval(increment, 1000)

function pause(e){
	if (gameInterval){
		clearInterval(gameInterval)
		gameInterval = null
		PAUSE.innerText = 'resume'
		PLUS.disabled = true
		MINUS.disabled = true
		HEART.disabled = true
		document.getElementById('submit').disabled = true
	} else{
		gameInterval = setInterval(increment, 1000)
		PAUSE.innerText = 'pause'
		PLUS.disabled = false
		MINUS.disabled = false
		HEART.disabled = false
		Cdocument.getElementById('submit').disabled = false
	}
}

function increment(){
	COUNTER.innerText ++
}

function decrement(){
	COUNTER.innerText --
}

let likes = {num:[], text:[]}

function like(){
	number = COUNTER.innerText
	if (!(number in likes.num)){
		likes.num[number] = 1
		li = document.createElement('li')
		li.innerText =  `${number} has been liked ${likes.num[number]} time`
		likes.text[number] = li
		LIKELIST.append(li)
	} else{
		likes.num[number] ++
		likes.text[number].innerText = `${number} has been liked ${likes.num[number]} times`
	}
}

function addComment(e){
	e.stopPropagation()
	e.preventDefault()
	let li = document.createElement('li')
	li.innerText = document.getElementById('comments').value
	document.getElementById('list').append(li)
}
