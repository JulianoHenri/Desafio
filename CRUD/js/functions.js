$(function(){
    var operation= "C"//igual a criar
    var selected_index = -1
    var tblPersons = localStorage.getItem("tblPersons")
    tblPersons = JSON.parse(tblPersons)
    if(tblPersons === null)
    tblPersons=[]

    function Create(){
        var tblPerson = JSON.stringify({
            Nome: $("#nome").val(),
            Email: $("#email").val(),
            Celular: $("#celular").val(),
            Telefone: $("#telefone").val(),
            CPF: $("#cpf").val(),
            dataNascimento: $("#nascimento").val()
        })
        tblPersons.push(person)
        localStorage.setItem("tblPersons",JSON.stringify(tblPersons))
        alert("Os dados foram armazenados")
        return true
    }

    function Edit(){
        tblPersons[selected_index] = JSON.stringify({
            Nome: $("nome").val(),
            Email: $("#email").val(),
            Celular: $("#celular").val(),
            Telefone: $("#telefone").val(),
            CPF: $("#cpf").val(),
            dataNascimento: $("#nascimento").val()
        })
        localStorage.setItem("tblPersons",JSON.stringify(tblPersons))
        alert("Os dados foram Editados")
        return true
    }

    function Delete(){
        
        tblPersons.splice(selected_index,1)
        localStorage.setItem("tblPersons",JSON.stringify(tblPersons))
        alert("Aluno Excluido")
        
    }

    function List(){
        $("#tblList").html("")
        $("#tblList").html(
            "<thead>"+
                    "<tr>"+
                      "<th>Nome</th>" +
                      "<th>Email</th>"+
                      "<th>Celular</th>"+
                      "<th>Telefone</th>"+
                      "<th>CPF</th>"+
                      "<th>Data de Nascimento</th>"+
                      "<th>Ações</th>"+
                    "</tr>"+
                  "</thead>"+
                  "<tbody>"+
                "</tbody>"
        )
        for (var i in tblPersons){
            var per = JSON.parse(tblPersons[i])
            $("#tblList tbody").append(
                "<tr>"+
                "<td>per.Nome</td>"+
                "<td>per.Email</td>"+
                "<td>per.Celular</td>"+
                "<td>per.Telefone</td>"+
                "<td>per.CPF</td>"+
                "<td>per.dataNascimento</td>"
            )
                        
        }
    }
    $("#frmPerson").bind("submit",function(){
        if (operation ==="C")
        return Create()
        else
            return Edit()
    })
    List()

    $(".btnEdit").bind("click",function(){
        operation = "E"

        selected_index = parseInt ($(this).attr(alt).replace("Edit",""))

        var per = JSON.parse(tblPersons[selected_index])
        $("#nome").val(per.Nome)
        $("#email").val(per.Email)
        $("#celular").val(per.Celular)
        $("#telefone").val(per.Telefone)
        $("#cpf").val(per.CPF)
        $("#nascimento").val(per.dataNascimento)
        $("#cpf").attr("readonly","readonly",)
        $("#nome").focus()
    })

    $(".btnDelete").bind("click",function(){
        selected_index= parseInt($(this).attr("alt").replace("Delete",""))
        Delete()
        List()
    })


})
