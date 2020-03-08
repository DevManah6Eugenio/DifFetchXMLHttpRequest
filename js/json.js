function buscarFetch() {

	let url = document.querySelector('#url').value;
	let metodo = document.querySelector('#metodo-http').value;
	let textExibirResult = document.querySelector('#result');

	//valida se a url foi preenchida
	if (url) {
		//chamada do fetch
		fetch(url, 
			{
				method: metodo,
		        headers: {
		                'Content-Type': 'application/json'
		        }
		    }).then(response => response.json() //converte em json
		    ).then(data => textExibirResult.value = JSON.stringify(data) //coloca o retorno no textarea
		    ).catch(error => console.log(error)); //se acontecer algum erro exibe no log
	}
}

function buscarXMLHttpRequest() {

	let url = document.querySelector('#url').value;
	let metodo = document.querySelector('#metodo-http').value;
	let textExibirResult = document.querySelector('#result');

	//valida se a url foi preenchida
	if (url) {
		//criação da varial XMLHttpRequest para requisições
		let xhr = new XMLHttpRequest();
		//defini o metodo que sera realizado a url e se a chamada vai ser assincrona
		xhr.open(metodo, url, true);
		//cabeçalho da requisição 
		xhr.setRequestHeader('Content-Type', 'application/json');
		//o que fazer quando chegar o retorno da requisição
		xhr.onreadystatechange  = function() {
	        textExibirResult.value = (this.responseText);
		}
		//realiza a requisição
		xhr.send();
	}
}

//evento de clique no botão
document.querySelector('#button-pesquisar').addEventListener("click", buscarFetch, false);