function buscarFetch() {

let url = document.querySelector('#url').value;
let metodo = document.querySelector('#metodo-http').value;
let textExibirResult = document.querySelector('#result');

//chamada do fetch
    fetch(url, {method: metodo })
    .then(response => console.log(response)
    ).catch(error => console.log(error));
}

//document.querySelector('#button-pesquisar').addEventListener("click", buscarFetch, false);
