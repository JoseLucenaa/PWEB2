
function addLinha() {
    const tabela = document.getElementById('infoTable');
    
    const addtr = document.createElement('tr');
    
    const addnome = document.createElement('td');
    addnome.textContent = 'João';
    addtr.appendChild(addnome);
    
    const addidade = document.createElement('td');
    addidade.textContent = '25';
    addtr.appendChild(addidade);
    
    tabela.appendChild(addtr);
}

function modificarDiv() {

    const contentDiv = document.getElementById('content');
    
    const header = contentDiv.querySelector('h2');
    if (header) {
        header.textContent = 'Conteúdo Atualizado';
    }
        
    const paragrafo = document.createElement('p');
    paragrafo.textContent = 'Este é um novo parágrafo adicionado.';
    contentDiv.appendChild(paragrafo);
}

function alterarcor(){
    let link = document.getElementById("myLink")
    link.style.color = "red"
}

function adicionarBloco() {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
            <h3>Novo Bloco</h3>
            <p>Este é um novo bloco adicionado.</p>
        `;
        document.getElementById('content').appendChild(newDiv);
}


function removerBloco(){
    const paragraph = document.querySelector('#content p');
        if (paragraph) {
            paragraph.remove();
        }
}
