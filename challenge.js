const PLUS = document.getElementById('+')
const MINUS = document.getElementById('-')
const COUNTER = document.getElementById('counter')
const HEART = document.getElementById('<3')
const LIKELIST = document.querySelector('ul.likes')

PLUS.addEventListener('click', increment)
MINUS.addEventListener('click', decrement)
HEART.addEventListener('click', like)

gameInterval = setInterval(increment, 1000)

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


