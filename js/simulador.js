$(document).ready(function(){

    var comparacao = document.getElementById("enviarEmail").value;
    console.log(comparacao);
    
    $("#caixaEmail").hide();
    $("#enviarEmail").click(function(){
        if($("#caixaEmail").value == true){
            $("#caixaEmail").hide();
            $("#caixaEmail").value = false;
        }else {
            $("#caixaEmail").show();
            $("#caixaEmail").value = true;
        }
    });


})

