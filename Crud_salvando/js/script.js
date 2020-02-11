
$(function(){
    var operacao = "A"; 
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tbAlunos = localStorage.getItem("tbAlunos");// Recupera os dados armazenados
    tbAlunos = JSON.parse(tbAlunos); // Converte string para objeto

		if(tbAlunos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
            tbAlunos = [];
		}

		$("#frmCadastro").on("submit",function(){
			if(operacao == "A"){
			    return Adicionar(tbAlunos);
			}else{
			    return Editar(tbAlunos,indice_selecionado);
			}
		});
        
		Listar(tbAlunos);

		$("#tblListar").on("click", ".btnEditar", function(){
	    operacao = "E";
	    indice_selecionado = parseInt($(this).attr("alt"));
			var cli = JSON.parse(tbAlunos[indice_selecionado]);
	    $("#nome").val(cli.nome);
	    $("#email").val(cli.email);
	    $("#celular").val(cli.celular);
        $("#telefone").val(cli.telefone);
        $("#cpf").val(cli.cpf);
        $("#nascimento").val(cli.nascimento);
		$("#nome").attr("readonly","readonly");
		$("#email").focus();
		});

		$("#tblListar").on("click", ".btnExcluir",function(){
	    indice_selecionado = parseInt($(this).attr("alt"));
			Excluir(tbAlunos, indice_selecionado);
	    Listar(tbAlunos);
        });
       
});


function Adicionar(tbAlunos){

		var aluno = JSON.stringify({
        nome   : $("#nome").val(),
        email     : $("#email").val(),
        celular    : $("#celular").val(),
        telefone : $("#telefone").val(),
        cpf    : $("#cpf").val(),
        nascimento    : $("#nascimento").val()
        
        
    });

    
    tbAlunos.push(aluno);
		console.log("tbAlunos - " + tbAlunos);
    localStorage.setItem("tbAlunos", JSON.stringify(tbAlunos));
    alert("Registro adicionado.");
    return true;
}

function Editar(tbAlunos,indice_selecionado){
    tbAlunos[indice_selecionado] = JSON.stringify({
        nome   : $("#nome").val(),
        email     : $("#email").val(),
        celular    : $("#celular").val(),
        telefone : $("#telefone").val(),
        cpf    : $("#cpf").val(),
        nascimento    : $("#nascimento").val()
        });
    localStorage.setItem("tbAlunos", JSON.stringify(tbAlunos));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function Excluir(tbAlunos, indice_selecionado){
    tbAlunos.splice(indice_selecionado, 1);
    localStorage.setItem("tbAlunos", JSON.stringify(tbAlunos));
    alert("Registro excluído.");

}

function Listar(tbAlunos){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Nome</th>"+
        "   <th>E-mail</th>"+
        "   <th>Celular</th>"+
        "   <th>Telefone</th>"+
        "   <th>CPF</th>"+
        "   <th>Data de Nascimento</th>"+
        "   <th>Ações</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbAlunos){
        var alu = JSON.parse(tbAlunos[i]);
        $("#tblListar tbody").append("<tr alt=' style=' table-striped'>");
        $("#tblListar tbody").append("<td>"+alu.nome+"</td>");
        $("#tblListar tbody").append("<td>"+alu.email+"</td>");
        $("#tblListar tbody").append("<td>"+alu.celular+"</td>");
        $("#tblListar tbody").append("<td>"+alu.telefone+"</td>");
        $("#tblListar tbody").append("<td>"+alu.cpf+"</td>");
        $("#tblListar tbody").append("<td>"+alu.nascimento+"</td>");
        $("#tblListar tbody").append("<td><img src='img/edit.png'width='25' height='25' alt='"+i+"'class='btnEditar'/><img src='img/delete.png'width='25' height='25' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tblListar tbody").append("</tr>");
    }
}
