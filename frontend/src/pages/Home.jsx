import MovieCard from "../components/MovieCard"


function Home(){
    const movies = [
        {id: 1,title:"John Wicked", releasedate:"2020"},
        {id: 2,title:"John ponga", releasedate:"2020"},
        {id: 3,title:"John lunga", releasedate:"2020"},
        {id: 4,title:"John singa", releasedate:"2020"},
    ]
    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie =><MovieCard)}
        </div>
    </div>
}