const container_principal = document.getElementById("container-principal");

// Função Criadora de Elementos
    function criaElemento(elemento, tipo, id, innerText, placeholder, value, action, method, href)
    {
        const novoElemento = document.createElement(elemento);
        novoElemento.type = tipo;
        novoElemento.id = id
        novoElemento.innerText= innerText
        novoElemento.placeholder = placeholder
        novoElemento.value = value
        novoElemento.action = action
        novoElemento.method = method
        novoElemento.href = href
        novoElemento.name = id


        return novoElemento;
    }

//  Nome dos Campos
    const id_inputs = ["id_pessoa", "nome_pessoa", "email_pessoa", "dt-nascimento_pessoa"] 
    const id_forms = ["create_pessoa", "read_pessoa", "update_pessoa", "delete_pessoa"]

// Configurações padrão
    // Body
        document.body.style.backgroundColor = "#2D627D"
        document.body.style.fontFamily = "sans-serif"
        document.body.style.color = "white"

    // BR
        const br1 = criaElemento("br")
        const br2 = criaElemento("br")
        const br3 = criaElemento("br")