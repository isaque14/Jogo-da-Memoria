const FRONT = 'card_front'
const BACK = 'card_back'

// Tipos das cartas do jogo
let techs = ['angular',
    'bootstrap',
    'c++',
    'html',
    'java',
    'javaScrpt',
    'node',
    'python',
    'react',
    'vue'
]

let cards = null

function startGame(){
    cards = createCardsFromTechs(techs)
    shuffleCards(cards)
    console.log(cards)
}

function shuffleCards(cards){
    let currentIndex = cards.length
    let randomIndex =  0

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}

// Adiciona os pares de cartas 
function createCardsFromTechs(techs){
    let cards = []

    for (let tech of techs){
        cards.push(createPairFromTech(tech))
    }
    return cards.flatMap(pair => pair)
}

// Cria os Pares de Cartas 
function createPairFromTech(tech){
    return[{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}


//Cria ID Randômico
function createIdWithTech(tech) {
    return tech + parseInt(Math.random() * 1000)
}
