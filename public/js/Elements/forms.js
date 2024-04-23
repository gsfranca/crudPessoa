const formCreate = criaElemento("form", "", id_forms[0], "", "", "", "URL", "POST", "")
const formUpdate = criaElemento("form", "", id_forms[2], "", "", "", "URL", "PUT", "")
const formDelete = criaElemento("form", "", id_forms[3], "", "", "", "URL", "DELETE", "")

formCreate.style.display = "grid"
formCreate.style.gridTemplateRows = "repeat(5, 1fr)";

formUpdate.style.display = "grid"
formUpdate.style.gridTemplateRows = "repeat(6, 1fr)";