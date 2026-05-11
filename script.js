const form = document.querySelector('#post-form');
const tituloInput = document.querySelector('#titulo-input');
const conteudoInput = document.querySelector('#conteudo-input');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');
const articleResultado = document.querySelector('#post-result');


form.addEventListener('submit', function (event) {
    event.preventDefault();


    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => {


            articleResultado.classList.remove('hidden');


            tituloRenderizar.innerHTML = json.title;
            conteudoRenderizar.innerHTML = json.body;

            form.reset();

            console.log("Postagem realizada com sucesso!", json);
        })
        .catch(error => {
            console.error("Houve um erro na requisição:", error);
            alert("Ops! Não foi possível enviar sua postagem.");
        });
});