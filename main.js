var vet, busca, str = [];

function cadeia(){
    
    for (vet = 1; vet <= 20; vet++){
        str = prompt("Informe o texto desejado:" );
        str.length;  
        busca = prompt("Digite o caractere a ser procurado: ") 
        str.indexOf(busca);

        if (str.indexOf(busca) == true){
            return str[busca];
        }

        else if (str.indexOf(busca) == false){
            alert("O caractere não pertence à cadeia informada!");
        }
        
        else{

            if (vet == '') or (vet > 20);{
                alert("Atenção!!! A cadeia de caracteres deve ter entre 1 a 20 caracteres!");
            }

            if(busca == ''){
                alert("Informe um caractere para ser procurado!")
            }
        }
        
    }
}
