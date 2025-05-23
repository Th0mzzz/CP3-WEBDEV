const error = document.getElementById('error')
const inputNome = document.getElementById('nome')
const inputPreco = document.getElementById('preco')
const btnCadastrar = document.getElementById('btnCadastrar')
const selectCategoria = document.getElementById('categoria')
const form = document.getElementById('formulario')
const produtos = document.getElementById('produtos')

btnCadastrar.addEventListener("click", (event) => {
    event.preventDefault()

    error.textContent = ""

    let nome = inputNome.value
    let preco = inputPreco.value
    let categoria = selectCategoria.value

    if (nome === "" || preco === "" || categoria === "") {
        error.textContent = "Preencha os campos Vazios"
        return;
    }

    if (preco < 0) {
        error.textContent = "O preço deve ser maior que zero"
        return;
    }
    let precoSeparado = preco.toString().split(".")
    if (precoSeparado[0].length < 1 || precoSeparado[1].length != 2) {
        error.textContent = "O preço deve conter duas casas decimais!"
        return;
    }

    // O split separa a string no caracter '.' ,ou seja, separa um número '10,00' em 2 elementos de uma lista. A partir disso, verificamos se o primeiro item dessa lista (precoSeparado[0] ou o numero antes da virgula) tem mais de 1 caracter e se o segundo item (precoSeparado[1] ou o numero depois da virgula) tem mais de 2 caracteres. Se algum desses for falso, ele escreve o erro e termina a função.

    const novoProduto = document.createElement('div')
    if (categoria === "tecnologia") {
        novoProduto.style.fontWeight = "bold"
    } else if (categoria === "alimentos") {
        novoProduto.style.backgroundColor = "yellow"
    }

    // style acessa o estilo do elemento div e o altera.

    novoProduto.innerHTML = `
    <p>Produto: ${nome}</p>
    <p>R$ ${preco}</p>
    <p>Categoria: ${categoria}</p>
    `
    produtos.append(novoProduto)
    form.reset();
})










