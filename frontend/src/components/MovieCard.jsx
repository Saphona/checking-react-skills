function MovieCard({movie}){
    function onFavouriteClick(){
        alert("clicked")
    }
  
    return<div className="movie-card">
             <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favor" onClick={onFavouriteClick}>
                    ✰
                    </button>
                </div>
             </div>
             <div className="movieinfo">
                <h3>{movie.title}</h3>
                <p>{movie.releasedata}</p>
             </div>
    </div>
}



export default MovieCard