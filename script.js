function validaformulario(){
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    console.log(senha)

    //validação de campos vazios
    if(nome == '' || email == '' || senha == ''){
    alert("Por favor, preencha os campos vazios!")
    }

    // verifica tamanho da senha
    if(senha.length > 8 ){
    alert("A senha excedeu a quantidade de caracteres")
    }

    // verifica o tamanho da sua senha
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]=$/
}
    function darkmode(){
        const pagina = document.body;
        pagina.classList.toggle("dark-mode");
    
        const botao = document.getElementById("modoPreto");
    
        const isdarkmode = document.body.classList.contains("dark-mode");
    
        if (isdarkmode === true) {
            botao.textContent = "Modo Claro"
        }else {
        botao.textContent = "Modo preto"

        }
    }

