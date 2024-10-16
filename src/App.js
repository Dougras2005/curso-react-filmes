import './App.css';

const filmes = {
  search: [
    {
      Title: 'Matrix',
      Year: '1999',
      Poster: 'https://irs.www.warnerbros.com.br/gallery-v2-mobile-jpeg/movies/system/ajax/6876PPVKIT11_14faaa1a.JPEG',
    },
    {
      Title: 'Terminator',
      Year: '1985',
      Poster: 'https://m.media-amazon.com/images/I/61vlcXmVQGL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      Title: 'Sherek',
      Year: '2011',
      Poster: 'https://m.media-amazon.com/images/S/pv-target-images/030f9ae65cadc9afc0e3c51ed35d2ddeb814f213d7a87fc5aa4445738ebb32b9.jpg',
    },
    {
      Title: 'Rise of the planet of the apes',
      Year: '2001',
      Poster: 'https://m.media-amazon.com/images/I/51EUCV1LlyL._AC_UF894,1000_QL80_.jpg',
    },
    {
      Title: 'Mad max',
      Year: '2015',
      Poster: 'https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_.jpg',
    },
    {
      Title: 'Deu a Louca na Chapeuzinho',
      Year: '2011',
      Poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_nMMXETM7fDMvBQJZjy6kj3Wh8l9ODtIXw&s',
    },
  ]
};

function App() {
  return (
    <div className="App">
      <div className='boxFilmes'>
        <h2>Buscar Filmes: </h2>
        <form>
          <input placeholder='Digíte o nome do filme...'/>
          <button type='submite'>Buscar</button>
        </form>
        <div className='filmesGrid'>
          {filmes.search.map((filme) => (
          <div className='filmeCard'>
            <h3>{filme.Title}</h3>
            <img src={filme.Poster}></img>
            <p>Ano: {filme.Year}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
