
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  
  const movieNumber = 1; 

  return (
    <>

     {movieNumber ===1 && <MovieCard movie={{title:"Tim's Film", releasedate:"2020" }} />}
    </>
  )
}

export default App
