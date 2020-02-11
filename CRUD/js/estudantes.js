var studentsArray = []


function init(){
    if(localStorage.studentsRecord){
        studentsArray = JSON.parse(localStorage.studentsRecord)
        for(var i = 0; i< studentsArray.length;i++){
            prepareTableCell(studentsArray[i].nome, studentsArray[i].email,studentsArray[i].celular,studentsArray[i].telefone,studentsArray[i].cpf,studentsArray[i].nascimento)
        }
    }
}
function onRegisterPressed (){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var celular = document.getElementById("celular").value
    var telefone = document.getElementById("telefone").value
    var cpf = document.getElementById("cpf").value
    var nascimento = document.getElementById("nascimento").value

    var aluno = {nome, email, celular, telefone, cpf, nascimento}
    studentsArray.push(aluno)

    localStorage.studentsRecord = JSON.stringify(studentsArray)

    prepareTableCell(nome,email,celular,telefone,cpf,nascimento)

    document.getElementById("nome").value=""
    document.getElementById("email").value=""
    document.getElementById("celular").value=""
    document.getElementById("telefone").value=""
    document.getElementById("cpf").value=""
    document.getElementById("nascimento").value=""

    function prepareTableCell(nome,email,celular,telefone,cpf,nascimento)
        var table = document.getElementById("regtable")
        var row = table.insertRow();
        var nomeCell = row.insertCell(0)
        var emailCell = row.insertCell(1)
        var celularCell = row.insertCell(2)
        var telefoneCell = row.insertCell(3)
        var cpfCell = row.insertCell(4)
        var nascimentoCell = row.insertCell(5)

        nomeCell.innerHTML = nome
        emailCell.innerHTML = email
        celularCell.innerHTML = celular
        telefoneCell.innerHTML = telefone
        cpfCell.innerHTML = cpf
        nascimentoCell.innerHTML = nascimento

    
}