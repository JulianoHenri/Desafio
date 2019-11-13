function validateForm() {
    var nome = document.forms["myForm"]["nome"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var x = document.forms["myForm"]["pass"].value;
    var y = document.forms["myForm"]["repass"].value;
    if (x != y) {
        alert("SENHAS DIFERENTES");
        return true;
    }else{
        alert("Bem Vindo "+nome+" \nEmail: "+email+"\nTelefore: "+phone);
    }
}
