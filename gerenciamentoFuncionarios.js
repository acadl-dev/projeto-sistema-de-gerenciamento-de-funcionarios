

function adicionarFuncionario(){
    //input:   

    const NOME = document.getElementById("nome").value;
    const IDADE = parseInt(document.getElementById("idade").value);
    const CARGO = document.getElementById("cargo").value;
    const SALARIO = parseFloat(document.getElementById("salario").value);
    
    if(validarDados(NOME, IDADE, CARGO, SALARIO)){

    let tabela = document.getElementById("corpoTabelaFuncionarios");
    let row = tabela.insertRow(0);
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = NOME;
    cell2.innerHTML = IDADE;
    cell3.innerHTML = CARGO;
    cell4.innerHTML = SALARIO;

    limparCampos();

} else {
    alert("Verifique os campos!");
}
}

function validarDados(NOME, IDADE, CARGO, SALARIO){
    if(NOME && IDADE && CARGO && SALARIO){
        if(IDADE>0 && SALARIO>0){
            return true
        }
    }
}

function limparCampos(){
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("salario").value = "";
}
