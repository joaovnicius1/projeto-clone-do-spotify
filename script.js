document.addEventListener('DOMContentLoaded', ()=> {
const artistasData = [
    {nome: 'Tyler, The Creator', imagem: 'clone spotify/artista-tyler-the-creator.jpg'}, { nome: 'Kendrick Lamar', imagem:'clone spotify/artista-kendrick-lamar.jpg'}, {nome: 'Billie Eilish', imagem: 'clone spotify/artista-billie-eillish.jpg'}, {nome: 'Clairo', imagem:'clone spotify/artista-clairo.jpg'}, {nome:'Mitski', imagem: 'clone spotify/artista-mitski.jpg'}
];


const albumData = [
    {nome: 'To Pimp a Butterfly', artista: 'Kendrick Lamar', imagem: 'clone spotify/album-kendrick-lamar.jpg'},
    {nome: 'Be The Cowboy', artista: 'Mitski', imagem:'clone spotify/album-mitski.jpg'}, {nome: 'HIT ME HARD AND SOFT', artista: 'Billie Eilish', imagem: 'clone spotify/album-billie-eilish.jpg'}, {nome: 'Cham', artista: 'Clairo', imagem:'clone spotify/album-clairo.jpg'}, {nome: 'Flower Boy',artista: 'Tyler, The Creator', imagem: 'clone spotify/album-tyler-the-creator.png'}
];

const artistaGrid = document.querySelector('.grid-artistas');
const albumGrid = document.querySelector('.grid-albuns')

artistasData.forEach( artista => {
    const artistaCard = document.createElement('div')
    artistaCard.classList.add('artista-card')


    artistaCard.innerHTML =`
    <img src= "${artista.imagem}" alt = "imagem do ${artista.nome}">
    <h3> ${artista.nome}</h3>
    <p>artista<p>
    `

    artistaGrid.appendChild(artistaCard);
})
    albumData.forEach( album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')


    albumCard.innerHTML =`
    <img src= "${album.imagem}" alt = "imagem do ${album.nome}">
    <h3> ${album.nome}</h3>
    <p>${album.artista}<p>
    `

    albumGrid.appendChild(albumCard);
})


});
