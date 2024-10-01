fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let post = data[0];
        console.log(data);
        let myDiv = document.getElementById('my-div');
        let titulo = document.createElement('h1');
        let paragrafo = document.createElement('p');

        titulo.textContent = post.title;
        paragrafo.textContent = post.body;

        myDiv.appendChild(titulo);
        myDiv.appendChild(paragrafo);

    })
    
.catch(error => console.error('Error: ' + error));