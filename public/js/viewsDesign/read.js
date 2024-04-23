// Feito em `` porque o read se repete
function readHTML()
{
    return `
        <div id="col_blue_read">
            <form id="${id_forms[1]}" action="GET">
            
                <!-- Div ID -->
                    <div id="div1">
                        <label for="inputIdValued">ID:</label>
                        <input type="text" id="id_pessoa" name="id" value=${0}>
                    </div>
                <!-- Fim da Div ID -->

                <!-- Div Nome -->
                    <div id="div2">
                        <label for="inputNomeValued">Nome:</label>
                        <input type="name" id="nome_pessoa" name="nome"  value=${"Fulano"}>
                    </div>
                <!-- Fim da Div Nome -->

                <!-- Div Email -->
                    <div id="div3">
                        <label for="inputEmailValued">Email:</label>
                        <input type="email" id="email_pessoa" name="email"  value=${"Fulano@Gmail.com"}>
                    </div>
                <!-- Fim da Div Email -->

                <!-- Div Data de Nascimento -->
                    <div id="div4">
                        <label for="inputDT_NascimentoValued">Data de Nascimento:</label>
                        <input type="date" id="dt-nascimento_pessoa" name="data_nascimento" value=${"0202-02-02"}>
                    </div>
                <!-- Fim da Div Data de Nascimento -->

                <!-- Div Botões -->
                    <div id="div5">
                        <!-- Botão Editar -->
                            <a href="${"LINK"}" id="a_editar">Editar</a>
                        
                        <!-- Botão Deletar -->
                            <form id="formDelete">
                                <a href id="a_excluir">Excluir</a>
                            </form>
                    </div>
                <!-- Fim da Div Botões -->
            </form>
    `
}
document.addEventListener("DOMContentLoaded", function() 
{
    container_principal.innerHTML = readHTML();
});
