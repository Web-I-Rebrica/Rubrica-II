
function Characters(done) {
  const apiUrl = 'https://rickandmortyapi.com/api/character';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const results = data.results.slice(0, 12);
      done(results);
    });
}

function showCharacters(personajes) {
  const main = document.querySelector('.column');

  personajes.forEach(personaje => {
    const div = document.createRange().createContextualFragment(`
      <div class="col-sm-3 mb-3 mb-sm-0 mt-4" data-name="${personaje.name}">
        <div class="card">
          <div class="card-body">
            <h6 class="card-tittle">${personaje.name}</h6>
          </div>
          <img src="${personaje.image}" class="card-img-bottom">
        </div>
      </div>
    `);

    main.append(div);
  });

  createSelect([{ name: 'Mostrar todos' }, ...personajes]);
}

function createSelect(personajes) {
  const select = document.querySelector('#selector');

  personajes.forEach(personaje => {
    const option = document.createElement('option');
    option.value = personaje.name;
    option.text = personaje.name;
    select.add(option);
  });


  select.addEventListener('change', () => {
    const selectedName = select.value;


    const tarjetas = document.querySelectorAll('.column > .col-sm-3');
    tarjetas.forEach(tarjeta => {
      tarjeta.style.display = (tarjeta.dataset.name === selectedName || selectedName === 'Mostrar todos') ? 'block' : 'none';
    });
  });
}

Characters(showCharacters);
