var immaginiRandom = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300/0000FF',
    'https://via.placeholder.com/300/00FF00',
    'https://via.placeholder.com/300/FF0000',
];

function cambiaImmagine() {
    var immagine = document.getElementById('immagineRandom');
    var indiceCasuale = Math.floor(Math.random() * immaginiRandom.length);
    immagine.src = immaginiRandom[indiceCasuale];
}