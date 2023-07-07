//* Evitar cadastro com campo vazio
function validationForm(){
    let validationCod = document.forms['register']['cod'].value;
    let validationTitle = document.forms['register']['title'].value;
    let validationArtist = document.forms['register']['artist'].value;
    let validationAlbum = document.forms['register']['album'].value;
    let validationYear = document.forms['register']['year'].value;
    let validationCountry = document.forms['register']['country'].value;
    let validationRadio = document.forms['register']['radio'].value;
    
    if(validationCod == ""){
        alert("O código deve ser preenchido.");
        return false;
    }
    if(validationTitle == ""){
        alert("O título deve ser preenchido.");
        return false;
    }
    if(validationArtist == ""){
        alert("O artista deve ser preenchido.");
        return false;
    }
    if(validationAlbum == ""){
        alert("O álbum deve ser preenchido.");
        return false;
    }
    if(validationYear == ""){
        alert("O ano deve ser preenchido.");
        return false;
    }
    if(validationCountry == ""){
        alert("O país deve ser preenchido.");
        return false;
    }
    if(validationRadio == ""){
        alert("O gênero deve ser selecionado.");
        return false;
    }

    alert("A validação correu de forma correta.");
}

//* Inserir novos filmes na lista
//? Tentei adaptar para que as músicas fossem adicionadas na seção certa conforme gênero selecionado
function insert() {
    let cod = document.forms['register']['cod'].value;
    let title = document.forms['register']['title'].value;
    let artist = document.forms['register']['artist'].value;
    let album = document.forms['register']['album'].value;
    let year = document.forms['register']['year'].value;
    let country = document.forms['register']['country'].value;
    let radio = document.forms['register']['radio'].value;
    
    if(radio == "Pop") {
        let insert = window.document.getElementById("insertPop");
        insert.innerHTML = `
            <th scope='row'>${cod}</th>
            <td scope='col'>${title}</td>    
            <td scope='col'>${artist}</td>    
            <td scope='col'>${album}</td>    
            <td scope='col'>${year}</td>    
            <td scope='col'>${country}</td>    
            <td scope='col'>${radio}</td>    
        `
    }
    if(radio == "Rock") {
        let insert = window.document.getElementById("insertRock");
        insert.innerHTML = `
            <th scope='row'>${cod}</th>
            <td scope='col'>${title}</td>    
            <td scope='col'>${artist}</td>    
            <td scope='col'>${album}</td>    
            <td scope='col'>${year}</td>    
            <td scope='col'>${country}</td>    
            <td scope='col'>${radio}</td>    
        `
    }
    if(radio == "Metal") {
        let insert = window.document.getElementById("insertMetal");
        insert.innerHTML = `
            <th scope='row'>${cod}</th>
            <td scope='col'>${title}</td>    
            <td scope='col'>${artist}</td>    
            <td scope='col'>${album}</td>    
            <td scope='col'>${year}</td>    
            <td scope='col'>${country}</td>    
            <td scope='col'>${radio}</td>    
        `
    }
    if(radio == "Outro") {
        let insert = window.document.getElementById("insertOther");
        insert.innerHTML = `
            <th scope='row'>${cod}</th>
            <td scope='col'>${title}</td>    
            <td scope='col'>${artist}</td>    
            <td scope='col'>${album}</td>    
            <td scope='col'>${year}</td>    
            <td scope='col'>${country}</td>    
            <td scope='col'>${radio}</td>    
        `
    }
}