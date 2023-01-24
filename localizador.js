function localizarCep(){
    let cep = document.getElementById("cep").value
    fetch(`http://viacep.com.br/ws/${cep}/json`).then(response =>{
        return response.json()
    }).then (users =>{
        document.getElementById("logradouro").value = users.logradouro;
        document.getElementById("UF").value = users.uf;
        document.getElementById("Estado").value = users.localidade;
        document.getElementById("bairro").value = users.bairro;
    })
}