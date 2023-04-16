function getCaracteres(done){

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
            .then(response => response.json())
            .then(data => {
                done(data)
            });
}

getCaracteres(data => {
     
    data.results.forEach(personaje => {
        //  console.log(data); 
        
        const article = document.createRange().createContextualFragment(/*html*/`
        
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>

    `);

    const main = document.querySelector("main");

    main.append(article);
    });
    
});