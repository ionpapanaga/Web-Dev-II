import Header from './components/Header';
import ArticleGrid from './components/ArticleGrid';
import ImageGallery from './components/ImageGallery';
import Author from './components/Author';
import Comments from './components/Comments';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main-container">
        <section className="hero-section">
          <h1 className="main-title">Erased Tapes:</h1>
          <h2 className="subtitle">Exploring the Sonic Frontier</h2>
          <p className="lead-paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis
            posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin
            nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus.
            Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
          </p>
        </section>

        <ArticleGrid />
        <ImageGallery />
        <Author />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}