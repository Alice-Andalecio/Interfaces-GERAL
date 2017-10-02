function NumCrias(){
	var num = document.querySelector('#numCrias').value;

	if(num==1){
		document.querySelector('#cria1').className = 'mostrar';
	}else{
		document.querySelector('#cria1').className = 'mostrar';
		document.querySelector('#cria2').className = 'mostrar';

	}
}