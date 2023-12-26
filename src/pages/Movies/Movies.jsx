import { useEffect, useState } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import { moviesApi } from '../../utils/BeatFilmApi';
import MoreButton from '../../components/MoreButton/MoreButton';
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/LocalStorage';
import { filterShortFilms, transformMovies } from '../../utils/utils';

function Movies({ onSave, onDelete, savedMovies }) {
  const [searchResults, setSearchResults] = useState([]);
  const [shortFilm, setShortFilm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(0);

  const storedQuery = getFromLocalStorage('searchQuery');
  const storedShortFilm = getFromLocalStorage('shortFilm');
  const storedMovies = getFromLocalStorage('searchResults');
  const storedVisibleMoviesCount = getFromLocalStorage('visibleMoviesCount');

  const handleSearch = async query => {
    try {
      setLoading(true);
      const allMovies = await moviesApi.getMovies();
      const finishedMovie = transformMovies(allMovies);
      const filteredMovies = finishedMovie.filter(movie => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });

      const finalMovies = filterShortFilms(filteredMovies, shortFilm);

      setSearchResults(filteredMovies);
      setDisplayedMovies(finalMovies.slice(0, visibleMoviesCount));
      setLoading(false);

      saveToLocalStorage('searchQuery', query);
      saveToLocalStorage('shortFilm', shortFilm);
      saveToLocalStorage('searchResults', filteredMovies);
      saveToLocalStorage('visibleMoviesCount', visibleMoviesCount);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleShortFilmChange = checked => {
    setShortFilm(checked);
    setDisplayedMovies(filterShortFilms(searchResults, checked));
  };

  const handleLoadMore = () => {
    setDisplayedMovies(prevMovies => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        const newVisibleCount = prevMovies.length + 3;
        return searchResults.slice(0, newVisibleCount);
      } else if (screenWidth >= 768) {
        const newVisibleCount = prevMovies.length + 2;
        return searchResults.slice(0, newVisibleCount);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        const newVisibleCount = prevMovies.length + 2;
        return searchResults.slice(0, newVisibleCount);
      }
    });
  };

  useEffect(() => {
    if (storedShortFilm) {
      setShortFilm(true);
    } else {
      setShortFilm(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setVisibleMoviesCount(12);
      } else if (screenWidth >= 768) {
        setVisibleMoviesCount(8);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        setVisibleMoviesCount(4);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (storedMovies) {
      setSearchResults(storedMovies);
      setDisplayedMovies(storedMovies.slice(0, storedVisibleMoviesCount));
      console.log(storedVisibleMoviesCount);
      setShortFilm(storedShortFilm);
    }
  }, []);

  return (
    <>
      <SearchForm
        onSearch={handleSearch}
        storedQuery={storedQuery}
        onCheckboxChange={handleShortFilmChange}
        isShortFilm={shortFilm}
      />

      {displayedMovies.length === 0 && <p>Ничего не найдено</p>}
      {displayedMovies.length > 0 && (
        <>
          <MoviesCardList
            movies={displayedMovies}
            isLoading={loading}
            onSave={onSave}
            onDelete={onDelete}
            savedMovies={savedMovies}
          />
          {!loading && searchResults.length > displayedMovies.length ? (
            <MoreButton onClick={handleLoadMore} />
          ) : null}
        </>
      )}
    </>
  );
}

export default Movies;
