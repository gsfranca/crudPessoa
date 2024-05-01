const formCreate = criaElemento("form", "", id_forms[0], "", "", "", "../../../crudPessoa/src/create.php", "POST", "")
const formUpdate = criaElemento("form", "", id_forms[2], "", "", "", "URL2", "PUT", "")
const formDelete = criaElemento("form", "", id_forms[3], "", "", "", "URL3", "DELETE", "")

formCreate.style.display = "grid"
formCreate.style.gridTemplateRows = "repeat(5, 1fr)";

formUpdate.style.display = "grid"
formUpdate.style.gridTemplateRows = "repeat(6, 1fr)";