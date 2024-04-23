// EMPTY INPUT
    const inputId = criaElemento('input', 'number', id_inputs[0], '', "ID", '', "", "", "")
    const inputNome = criaElemento('input', 'name', id_inputs[1], '', "Nome", '', "", "", "")
    const inputEmail = criaElemento('input', 'email', id_inputs[2], '',"Email", '', "", "", "")
    const inputDT_Nascimento = criaElemento('input', 'date', id_inputs[3], '', "Data de Nascimento", '', "", "", "")

// Estilização

    // CREATE
        inputId.style.fontSize = "1.5vw"
        inputId.style.width = "32.5vw"

        inputNome.style.fontSize = "1.5vw"
        inputNome.style.width = "30vw"

        inputEmail.style.fontSize = "1.5vw"
        inputEmail.style.width = "30.5vw"

        inputDT_Nascimento.style.fontSize = "1.5vw"
        inputDT_Nascimento.style.width = "21vw"
