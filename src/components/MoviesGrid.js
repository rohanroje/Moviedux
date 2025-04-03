import React,{useState} from "react";
import Header from "./Header";
import '../styles.css';
import MovieCard from "./MovieCard";


export default function MovieGrid({movies,watchList,toggleWatchList}){

    
    const[searchTerm,setSearchTerm]=useState("");

    const[genre,setGenre]=useState("All Genres");
    const[rating,setRating]=useState("All");

    const handleGenre=(e)=>{
        setGenre(e.target.value);
    }

    const handleRating=(e)=>{
        setRating(e.target.value);
    }

    const handleSearchTerm=(e)=>{
        setSearchTerm(e.target.value);
    }

    const matchesGenre=(movie,genre)=>{
          return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();       
    };

    const matchSearchTerm=(movie,searchTerm)=>{
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchesRating=(movie,rating)=>{    
            switch(rating){
                case "All":
                    return true;
                case "Good":
                    return movie.rating>=8;
                case "Ok":
                    return movie.rating>=5&& movie.rating<8;

                case "Bad":
                    return movie.rating<5;

                default :
                    return false;
            }   
    
    }

    
    const filterMovies=movies.filter((movie)=>
         matchesGenre(movie,genre) &&
         matchesRating(movie,rating)&& 
        matchSearchTerm(movie,searchTerm)
        ); 


   

    return (
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search your movie..."
          value={searchTerm}
          onChange={handleSearchTerm}
        />
        <div className="filter-bar">
          <div className="filter-slot">
            <label>genre</label>
            <select
              className="filter-dropdown"
              value={genre}
              onChange={handleGenre}
            >
              <option>All Genres</option>
              <option>Drama</option>
              <option>Fantasy</option>
              <option>Horror</option>
            </select>
          </div>

          <div className="filter-slot">
            <label>Rating</label>
            <select
              className="filter-dropdown"
              value={rating}
              onChange={handleRating}
            >
              <option>All</option>
              <option>Good</option>
              <option>Ok</option>
              <option>Bad</option>
            </select>
          </div>
        </div>
        <div className="movies-grid">
          {filterMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
              toggleWatchList={toggleWatchList}
              isWatchListed={watchList.includes(movie.id)}
            ></MovieCard>
          ))}
        </div>
      </div>
    );

}