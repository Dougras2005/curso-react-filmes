import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [filmes, setFilmes] = useState({ Search: [] });
  const [searchTerm, setSeachTerm] = useState('');

  const fetchfilmes = async(term) => {
    try {
      const response = await
        fetch(`https://www.omdbapi.com/?apikey=f8eccc80&s=${term}&type=movie&plot=full`);
      const data = await response.json();
  
      if (data.Response === 'True') {
        setFilmes(data);
      }else {
        console.error('Erro ao buscar o filme', data.Error);
      }
    } catch (error) {
      console.error('Erro ao faxer a requisição:', error);
    }
  };

  useEffect(() => {
    fetchfilmes(searchTerm);
  }, [searchTerm])

  const handleSeach = (event) => {
    event.preventDefault();
    fetchfilmes(searchTerm);
  };

  return (
    <div className="App">
      <div className='boxFilmes'>
        <h2>Buscar Filmes: </h2>
        <form onSubmit={handleSeach}>
          <input 
            type='text'
            value={searchTerm}
            onChange={(e) => setSeachTerm(e.target.value)}
            placeholder='Digíte o nome do filme...'/>
          <button type='submit'>Buscar</button>
        </form>
        <div className='filmesGrid'>
          {filmes.Search.map((filme) => (
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
