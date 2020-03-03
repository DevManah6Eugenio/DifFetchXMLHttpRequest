function buscar() {

 const getData = async () => {
     const url = document.querySelector('#url').value;
     select = document.querySelector('#verbo-http');
     method = select.value

     if(url.value) {
         code.innerHTML = await fetch(url.value, { method :  method })
             .then(res => res.text())
             .catch(error => error)
     } else {
        console.log('deu erro');
     }
 }

 getData();
}