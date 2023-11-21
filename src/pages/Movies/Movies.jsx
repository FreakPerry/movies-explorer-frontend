import Header from '../../components/Header/Header';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  );
}

export default Movies;
