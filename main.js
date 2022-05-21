function tocaSom(selectorAudio){
    if(validaElementoVazio(selectorAudio)){
        tocar(document.querySelector(selectorAudio));
    }else{
        console.log('Informe um elemento');
    }
    
}
const listaDeTeclas = document.querySelectorAll('.tecla');


listaDeTeclas.forEach(function(tecla){
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || teclaEnter(evento)){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
});

function tocar(elemento){
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado');
    }
}
function teclaEnter(evento){
    return evento.code === 'NumpadEnter' || evento.code === 'Enter'
}

function validaElementoVazio(elemento){
    return elemento ? elemento.trim().length > 0 : false;
}