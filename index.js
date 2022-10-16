const movieList = document.querySelector('.movie-list');

// fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies').then(
//   (response) =>
//     response.json().then((data) => {
//       //console.log(data);
//       movieList.innerHTML = data.map((item) => {
//         return `
//         <ul class="movie-list">
//           <li class="movie-detail">
//           <div class="movie-poster">
//            <img
//             src="${item.posterUrl}"
//             alt="${item.title}"
//             />
//            </div>
//            <div class="movie-info">
//           <h2 class="movie-title">${item.title}</h2>
//           <div class="movie-year">Rok vydání:${item.year}</div>
//           <div class="movie-link">
//           <a href="${item.url}" target="_blank">Odkaz na CSFD</a>
//          </div>
//          </div>
//         </li>
//         `;
//       });
//     }),
// );

const genre = document.querySelector('#select-genre');

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  const select = document.querySelector('#select-genre');
  const selectedValue = select.value;
  let url = new URL(
    'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies',
  );
  url.searchParams.set('genre', selectedValue);

  //alert(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      movieList.innerHTML = data
        .map((item) => {
          // alert(item.title);
          return `
          <li class="movie-detail">
          <div class="movie-poster">
           <img
            src="${item.posterUrl}"
            alt="${item.title}"
            />
           </div>
           <div class="movie-info">
         
          <h2 class="movie-title">${item.title}</h2>
          <div class="movie-year">Rok vydání:${item.year}</div>
          <div class="movie-link">
          <a href="${item.url}" target="_blank">Odkaz na CSFD</a>
         </div>
         </div>
        </li>
        `;
        })
        .join('');
    });
});

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres')
  .then((response) => response.json())
  .then((data) => {
    genre.innerHTML = data.map((item) => {
      return `
  <option value="${item}">${item}</option>
  `;
    });
  });
