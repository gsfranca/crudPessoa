window.onload = () =>
{
    readPHP()
}


function readPHP() 
{
    const id_pessoa_trans = document.getElementsByClassName("id_pessoa_trans")
    const nome_pessoa_trans = document.getElementsByClassName("nome_pessoa_trans")
    const email_pessoa_trans = document.getElementsByClassName("email_pessoa_trans")

    const id_pessoas_read = []
    const nome_pessoas_read = []
    const email_pessoas_read = []

    for (let i = 0; i < id_pessoa_trans.length; i++) 
    {
        id_pessoas_read[i] = id_pessoa_trans[i].value;
    }
    for (let i = 0; i < nome_pessoa_trans.length; i++) 
    {
        nome_pessoas_read[i] = nome_pessoa_trans[i].value;
    }
    for (let i = 0; i < email_pessoa_trans.length; i++) 
    {
        email_pessoas_read[i] = email_pessoa_trans[i].value;
    }

    console.log(id_pessoas_read, nome_pessoas_read, email_pessoas_read)
}
