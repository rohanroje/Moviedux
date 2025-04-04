import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"; 
import React,{useState,useEffect} from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const [watchList,setWatchList]=useState([]);

    const toggleWatchList=(movieId)=>{
      setWatchList( prev=> prev.includes(movieId)?prev.filter(id=>id!==movieId):[...prev,movieId]
      );
    }
    
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);


  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/watchList">WatchList</Link>
                </li>
            </ul>
          </nav>
          <Routes>
              <Route path="/" element={<MovieGrid watchList={watchList} movies={movies} toggleWatchList={toggleWatchList}></MovieGrid>}>HOME</Route>
              <Route path="/watchList" element={<WatchList watchList={watchList} movies={movies} toggleWatchList={toggleWatchList}></WatchList>}>WATCHLIST</Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
