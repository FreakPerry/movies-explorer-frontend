import { Route, Routes, useLocation } from 'react-router-dom';
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

function App() {
  const location = useLocation();

  const isHeaderVisible = !['/signup', '/signin'].includes(location.pathname);
  const isFooterVisible = !['/signup', '/signin', '/profile'].includes(location.pathname);

  return (
    <div className="page">
      {isHeaderVisible && <Header />}
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="movies" element={<Movies />} />
          <Route path="saved-movies" element={<SavedMovies />} />
          <Route path="profile" element={<Profile />} />
          <Route path="preloader" element={<Preloader />} />
          <Route path="*" element={<NotFound />} />
          <Route path="signup" element={<Auth />} />
          <Route path="signin" element={<Auth />} />
        </Routes>
      </main>
      {isFooterVisible && <Footer />}
    </div>
  );
}

export default App;
