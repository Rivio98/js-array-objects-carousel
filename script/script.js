// Array di oggetti contenente i dati delle immagini
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Seleziona l'elemento del DOM dove verranno inserite le immagini del carosello
const carouselInner = document.querySelector('.carousel-inner');

// Popola dinamicamente il carosello con gli oggetti dell'array
images.forEach((img, index) => {
    // Crea un nuovo div per ogni elemento del carosello
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carousel-item');

    // Aggiunge la classe 'active' al primo elemento del carosello
    if (index === 0) itemDiv.classList.add('active');

    // Imposta il contenuto del div con l'immagine, titolo e testo
    itemDiv.innerHTML = `
        <img src="${img.image}" alt="${img.title}">
        <div class="carousel-caption">
            <h3>${img.title}</h3>
            <p>${img.text}</p>
        </div>
    `;

    // Aggiunge il div appena creato al container del carosello
    carouselInner.appendChild(itemDiv);
});

// Variabile per tenere traccia dell'indice dell'immagine attualmente visibile
let currentIndex = 0;

// Seleziona tutti gli elementi del carosello
const items = document.querySelectorAll('.carousel-item');

// Calcola il numero totale di elementi del carosello
const totalItems = items.length;

// Aggiunge un event listener al bottone "next" per scorrere le immagini in avanti
document.querySelector('.next').addEventListener('click', () => {
    // Rimuove la classe 'active' dall'elemento corrente
    items[currentIndex].classList.remove('active');

    // Incrementa l'indice corrente con modulo per il ciclo infinito
    currentIndex = (currentIndex + 1) % totalItems;

    // Aggiunge la classe 'active' al nuovo elemento corrente
    items[currentIndex].classList.add('active');
});

// Aggiunge un event listener al bottone "prev" per scorrere le immagini indietro
document.querySelector('.prev').addEventListener('click', () => {
    // Rimuove la classe 'active' dall'elemento corrente
    items[currentIndex].classList.remove('active');

    // Decrementa l'indice corrente con modulo per il ciclo infinito
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;

    // Aggiunge la classe 'active' al nuovo elemento corrente
    items[currentIndex].classList.add('active');
});

