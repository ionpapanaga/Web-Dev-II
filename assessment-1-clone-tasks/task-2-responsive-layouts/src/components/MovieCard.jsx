export default function MovieCard({ movie, cardIndex }) {
  return (
    <article className={`movie-card card-${cardIndex}`}>
      <div className="movie-poster-wrap">
        <img src={movie.image} alt={movie.alt} className="movie-poster" />
      </div>
      <div className="movie-details">
        <div className="movie-text">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-description">{movie.description}</p>
        </div>
        <button className="btn-watch" type="button">WATCH NOW</button>
      </div>
    </article>
  );
}