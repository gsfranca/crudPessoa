document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../../../crudPessoa/src/read.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);

            data.forEach(function (cliente) {
                var container = document.createElement('div'); // Crie um novo div container para cada item

                var div = `
                <form id="${id_forms[1]}" method='POST' action="../../../crudPessoa/src/form.php">

                    <input type="text" id="id_pessoa" name="id" value=${cliente.id} hidden>
    
                    <!-- Div Nome -->
                        <div id="div2">
                            <label for="inputNomeValued">Nome:</label>
                            <input type="name" id="nome_pessoa" name="nome" value=${cliente.nome}>
                        </div>
                    <!-- Fim da Div Nome -->

                    <!-- Div Email -->
                        <div id="div3">
                            <label for="inputEmailValued">Email:</label>
                            <input type="email" id="email_pessoa" name="email"  value=${cliente.email}>
                        </div>
                    <!-- Fim da Div Email -->

                    <!-- Div Data de Nascimento -->
                        <div id="div4">
                            <label for="inputDT_NascimentoValued">Data de Nascimento:</label>
                            <input type="text" id="dt-nascimento_pessoa" name="data_nascimento" value=${cliente.data_nascimento}>
                        </div>
                    <!-- Fim da Div Data de Nascimento -->

                    <!-- Div Botões -->
                        <div id="div5">
                            <!-- Botão Excluir -->
                            <button type="submit" value="editar" name="submit" id="a_editar">Salvar Edição</button>
                            <button type="submit" value="deletar" name="submit" id="a_excluir">Deletar</button>

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
