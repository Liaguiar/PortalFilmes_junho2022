const API_KEY  = '97be3f94220810b7fcefe5fe6c36bad1';
const BASE_API_URL = 'https://api.themoviedb.org/3/';
const BASE_IMG_URL = 'http://image.tmdb.org/t/p/w342';
const BASE_LOGO_URL = 'http://image.tmdb.org/t/p/w45';

function exibeFilme() {
	let filme = JSON.parse(this.responseText);
	let sectionFilme = document.getElementById("section-filme");
	sectionFilme.innerHTML = `    <div class="container">
	<section id="section-filme">
    <div class = "row" id "detalhesfilmes">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                     <img src="http://image.tmdb.org/t/p/w342${filme.poster_path}">
                        </div>
  <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 ">
<p>
</p>
                      <h1>${filme.title}</h1 style ="text-align: center;">
                      <p>${filme.overview}</p style ="text-align: center;">
                      <p>${filme.release_date}</p>>
</div>
                      </div>`;
}

const urlParams = new URLSearchParams(window.location.search);
const idFilme = urlParams.get('id');

let xhrFilme = new XMLHttpRequest();
xhrFilme.onload = exibeFilme;
xhrFilme.open('GET', `${BASE_API_URL}movie/${idFilme}?api_key=${API_KEY}&language=pt-BR`);
xhrFilme.send();

