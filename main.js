
const app = document.getElementById('app');

const games = [
  {
    name: "The Witcher 3",
    year: 2015,
    genre: "RPG",
    stock: 10
  },
  {
    name: "The Last of US",
    year: 2013,
    genre: "Action",
    //stock: 0
  },
  {
    name: "Good of War",
    year: 2018,
    genre: "Action",
    stock: 100
  }
]

const [gameOne, gameTwo, gameThree] = games;

const btnClass = (stock) => {
  return stock > 0 ? "btn-primary" : "btn-danger disabled";
};

function Card({name, year, genre, stock=0}){

  return `
  <div class="card my-2" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${year} - ${genre}</P>
    <a href='#' class="btn ${btnClass(stock)}">go somewhere</a>
  </div>
</div>`;
}

app.innerHTML = Card(gameOne);
app.innerHTML += Card(gameTwo);
app.innerHTML += Card(gameThree);