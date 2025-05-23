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
    if (precoSeparado[0].length < 1 && precoSeparado[1].length != 2) {
        error.textContent = "O preço deve conter duas casas decimais!"
        return;
    }

    const novoProduto = document.createElement('div')
    if (categoria === "tecnologia") {
        novoProduto.style.fontWeight = "bold"
    } else if (categoria === "alimentos") {
        novoProduto.style.backgroundColor = "yellow"
    }

    novoProduto.innerHTML = `
    <p>Produto: ${nome}</p>
    <p>R$ ${preco}</p>
    <p>Categoria: ${categoria}</p>
    `
    produtos.append(novoProduto)
    form.reset();
})










