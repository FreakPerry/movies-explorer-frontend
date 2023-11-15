import Header from '../../components/Header/Header';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  );
}

export default SavedMovies;
