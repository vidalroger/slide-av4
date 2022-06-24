let slides = [];
function adicionar(slides, slide) {
    slides.push(slide);
}
function dados() {
    var imagem = document.getElementById('img').value;
    var descricao =  document.getElementById('desc').value;
}
function passarSlide(passo) {
    let atual = parseInt(document.querySelector('#atual').value) + passo;
    exibirSlide(atual);
}
