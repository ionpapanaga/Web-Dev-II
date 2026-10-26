import Header from './components/Header';
import MovieCard from './components/MovieCard';
import { movies } from './data/movies';

export default function App() {
  return (
    <div className="app-layout">
      <Header />
      <main className="content-container">
        <div className="movies-grid">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} cardIndex={index + 1} />
          ))}
        </div>
      </main>
    </div>
  );
}