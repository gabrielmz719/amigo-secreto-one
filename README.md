🎁 Amigo Secreto ONE
Um aplicativo simples feito com HTML, CSS e JavaScript para gerenciar participantes e sortear nomes no estilo "amigo secreto".
link do projeto:https://gabrielmz719.github.io/amigo-secreto-one/

📌 Funcionalidades
Adicionar participantes à lista.

Exibir todos os nomes já cadastrados.

Sortear um participante aleatoriamente.

Remover automaticamente o sorteado da lista para evitar repetição.

Interface centralizada e organizada.

🛠️ Tecnologias utilizadas
HTML5 → Estrutura da página.

CSS3 (Flexbox) → Estilização e centralização dos elementos.

JavaScript Puro (Vanilla JS) → Lógica de adicionar, listar e sortear participantes.

 Como foi construído
1. HTML (index.html)
Criamos um campo <input> para o nome do participante.

Dois botões: um para adicionar (onclick="adicionarParticipante()") e outro para sortear (onclick="sortear()").

Dois parágrafos (<p>) para mostrar a lista e o resultado do sorteio.

Ligação com o arquivo script.js usando <script src="./script.js"></script>.

Estilização feita dentro de uma tag <style> no próprio HTML, usando Flexbox para centralizar o conteúdo.

2. CSS
display: flex; flex-direction: column; justify-content: center; align-items: center; → centraliza todo o conteúdo vertical e horizontalmente.

height: 100vh; → ocupa a tela inteira.

Margens e espaçamentos para deixar os elementos separados e organizados.

3. JavaScript (script.js)
Criamos um array participantes para armazenar os nomes.

Função adicionarParticipante()

Pega o valor digitado no input.

Valida para evitar nomes vazios.

Adiciona o nome ao array.

Limpa o campo e atualiza a lista.

Função atualizarLista()

Mostra todos os participantes separados por vírgula dentro do elemento #lista.

Função sortear()

Verifica se existem participantes.

Gera um índice aleatório.

Remove o sorteado do array.

Atualiza a lista e exibe o resultado no elemento #resultado.

🚀 Como usar
Abra o arquivo index.html no navegador.

Digite um nome no campo de texto e clique em Adicionar.

Repita o processo para todos os participantes.

Clique em Sortear para ver o nome escolhido.

O participante sorteado será removido automaticamente da lista.

