import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Landing from '../../pages/Landing/Langing';

import './App.css';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Auth from '../../pages/Auth/Auth';
import NotFound from '../../pages/NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { mainApi } from '../../utils/MainApi';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/context';
import { saveToLocalStorage } from '../../utils/LocalStorage';

function App() {
  document.documentElement.lang = 'ru';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const validHeaderRoutes = ['/', '/movies', '/saved-movies', '/profile'];
  const validFooterRoutes = ['/', '/movies', '/saved-movies'];

  const isHeaderVisible = validHeaderRoutes.includes(location.pathname);
  const isFooterVisible = validFooterRoutes.includes(location.pathname);

  const checkToken = async () => {
    try {
      setLoading(true);
      const res = await mainApi.getContent();
      if (res) {
        setIsLoggedIn(true);
        setCurrentUser(res);
      } else {
        setIsLoggedIn(false);
      }
    } catch (e) {
      console.warn(e);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
      setIsTokenChecked(true);
    }
  };

  const resetError = () => {
    setError('');
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      setLoading(true);
      await mainApi.register({ name, email, password });
      handleLogin({ email, password });
    } catch (e) {
      setError(e);
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async dataLogin => {
    try {
      setLoading(true);
      const res = await mainApi.login(dataLogin);
      setCurrentUser(res);
      setIsLoggedIn(true);
      saveToLocalStorage('storedIsLoggedIn', true);
      navigate('/movies', { replace: true });
    } catch (e) {
      setError(e);
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await mainApi.logout();
      setIsLoggedIn(false);
      setCurrentUser({});
      localStorage.clear();
      setLoading(false);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleProfileEdit = async ({ name, email }) => {
    try {
      setLoading(true);
      const res = await mainApi.updateUser({ name, email });
      setCurrentUser(res);
      setSuccessMessage('Данные пользователя успешно изменены');
      setIsSuccess(true);
      setLoading(false);
    } catch (e) {
      console.warn(e);
      setIsSuccess(false);
      setSuccessMessage(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const resetStates = () => {
      setSuccessMessage('');
      setIsSuccess(false);
    };
    return () => resetStates();
  }, [location.pathname]);

  const handleSaveMovie = async movie => {
    try {
      const res = await mainApi.createMovie(movie);
      setSavedMovies([res, ...savedMovies]);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleDeleteMovie = async movie => {
    try {
      const savedMovie = savedMovies.find(
        item => item._id === movie._id || item.movieId === String(movie.id)
      );
      if (!savedMovie) {
        throw new Error('Фильм для удаления не найден.');
      }

      const res = await mainApi.deleteMovie(savedMovie._id);
      if (res) {
        setSavedMovies(prevMovies => prevMovies.filter(item => item._id !== savedMovie._id));
      }
    } catch (e) {
      console.warn('Ошибка при удалении фильма:', e);
    }
  };

  const getSavedMovies = async () => {
    try {
      if (isLoggedIn && currentUser) {
        const res = await mainApi.getMovies();
        const movieList = res.filter(movie => movie.owner === currentUser._id);
        setSavedMovies(movieList);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    getSavedMovies();
  }, [currentUser, isLoggedIn]);

  return (
    <>
      {loading || !isTokenChecked ? (
        <Preloader />
      ) : (
        <div className="page">
          <CurrentUserContext.Provider value={currentUser}>
            {isHeaderVisible && <Header isLoggedIn={isLoggedIn} />}
            <main className="main">
              <Routes>
                <Route
                  path="signup"
                  element={
                    <Auth onRegister={handleRegister} error={error} resetError={resetError} />
                  }
                />
                <Route
                  path="signin"
                  element={<Auth onLogin={handleLogin} error={error} resetError={resetError} />}
                />
                <Route path="/" element={<Landing />} />

                <Route
                  path="movies"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Movies
                        savedMovies={savedMovies}
                        onSave={handleSaveMovie}
                        onDelete={handleDeleteMovie}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="saved-movies"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <SavedMovies savedMovies={savedMovies} onDelete={handleDeleteMovie} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Profile
                        onLogout={handleLogout}
                        onSubmit={handleProfileEdit}
                        successMessage={successMessage}
                        isSuccess={isSuccess}
                      />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {isFooterVisible && <Footer />}
          </CurrentUserContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;
