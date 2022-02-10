function cadastrar() {
  let dados = {
    'nome': document.getElementById('nome').value,
    'decrição': document.getElementById('descrição').value,
    'preco': document.getElementById('preco').value,
    'imagem': getElementById('imagem').value
  }
  itens.push(dados);
  console.log(itens);
}

function limpar() {
  document.getElementById('nome2').innerHTML = '<label for="nome">Nome</label><input type="text" name="nome" id="nome">'
  document.getElementById('descrição2').innerHTML = '<label for="descrição">Descrição</label><input type="text" name="descrição" id="descrição">'
  document.getElementById('preço2').innerHTML = '<label for="preço">Preço</label><input type="number" name="preço" id="preço">'
  document.getElementById('imagem2').innerHTML = '<label for="imagem">Imagem</label><input type="file" name="imagem" id="imagem">'
}

// Itens cadastrados
var itens = []
