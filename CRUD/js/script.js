var selectedRow = null

function salvarForm() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["email"] = document.getElementById("email").value;
    formData["celular"] = document.getElementById("celular").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["cpf"] = document.getElementById("cpf").value;
    formData["nascimento"] = document.getElementById("nascimento").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("alunoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.celular;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telefone;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cpf;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.nascimento;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="editarAluno(this)" class="fas fa-edit" style="color: blue; "></a>
                       <a onClick="deletarAluno(this)" class="far fa-trash-alt " style="color: red;"></a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("nascimento").value = "";
    selectedRow = null;
}

function editarAluno(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("celular").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cpf").value = selectedRow.cells[4].innerHTML;
    document.getElementById("nascimento").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.celular;
    selectedRow.cells[3].innerHTML = formData.telefone;
    selectedRow.cells[4].innerHTML = formData.cpf;
    selectedRow.cells[5].innerHTML = formData.nascimento;
}

function deletarAluno(td) {
    if (confirm('Tem certeza que deseja excluir')) {
        row = td.parentElement.parentElement;
        document.getElementById("alunoList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "" || document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("validar").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("validar").classList.contains("hide"))
            document.getElementById("validar").classList.add("hide");
    }
    
    return isValid;
}

