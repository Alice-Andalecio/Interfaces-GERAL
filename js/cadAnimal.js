window.onload = function(){
    document.querySelector('#racaPuro').addEventListener('click', function(e){ EsconderPorcentagem(e.target.id) });
   // document.querySelector('#racaMest').addEventListener('click', function(e){ ExibirPorcentagem(e.target.id) });
}

function ExibirPorcentagem(){
    document.querySelector('#divPorcentagem1').className = 'mostrar';
    document.querySelector('#divPorcentagem2').className = 'mostrar';
    document.querySelector('#raca1').className = 'mostrar';
    document.querySelector('#raca2').className = 'mostrar';
}  