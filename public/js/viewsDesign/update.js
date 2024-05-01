document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../../../crudPessoa/src/update.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);

            data.forEach(function (cliente) {
                var container = document.createElement('div'); // Crie um novo div container para cada item

                var div = `
                <form id="${id_forms[2]}" action="GET">
                    <!-- Div ID -->
                        <div id="div1">
                            <label for="inputIdValued">ID:</label>
                            <input type="text" id="id_pessoa" name="id" value=${cliente.id} disabled>
                        </div>
                    <!-- Fim da Div ID -->

                    <!-- Div Nome -->
                        <div id="div2">
                            <label for="inputNomeValued">Nome:</label>
                            <input type="name" id="nome_pessoa" name="nome"  value=${cliente.nome} disabled>
                        </div>
                    <!-- Fim da Div Nome -->

                    <!-- Div Email -->
                        <div id="div3">
                            <label for="inputEmailValued">Email:</label>
                            <input type="email" id="email_pessoa" name="email"  value=${cliente.email} disabled>
                        </div>
                    <!-- Fim da Div Email -->

                    <!-- Div Data de Nascimento -->
                        <div id="div4">
                            <label for="inputDT_NascimentoValued">Data de Nascimento:</label>
                            <input type="text" id="dt-nascimento_pessoa" name="data_nascimento" value=${cliente.data_nascimento_br} disabled>
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
            
                `;

                container.classList.add("col_blue_read")
                container.innerHTML = div; // Adicione o HTML ao container
                container_principal.appendChild(container); // Adicione o container ao container_principal
            });
        }
    };
    xhr.send();
});
