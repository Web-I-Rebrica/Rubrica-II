
const cardContainer = document.querySelector('.card-container');

// Hacemos una solicitud HTTP a la API de Rick and Morty
fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => {
    // Tomamos los primeros 12 personajes
    const characters = data.results.slice(0, 12);

    // Generamos una tarjeta HTML para cada personaje
    characters.forEach(character => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = character.image;
      image.alt = character.name;
      card.appendChild(image);

      const name = document.createElement('h2');
      name.textContent = character.name;
      card.appendChild(name);

      const status = document.createElement('p');
      status.textContent = `Estado: ${character.status}`;
      card.appendChild(status);

      const species = document.createElement('p');
      species.textContent = `Especie: ${character.species}`;
      card.appendChild(species);

      const origin = document.createElement('p');
      origin.textContent = `Origen: ${character.origin.name}`;
      card.appendChild(origin);

      cardContainer.appendChild(card);
    });
  })
  .catch(error => console.error(error));