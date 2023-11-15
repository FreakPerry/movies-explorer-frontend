import { Route, Routes } from 'react-router-dom';
import Landing from '../../pages/Landing/Langing';

import './App.css';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Auth from '../../pages/Auth/Auth';
import NotFound from '../../pages/NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="movies" element={<Movies />} />
        <Route path="saved-movies" element={<SavedMovies />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<Auth />} />
        <Route path="signin" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
        <Route path="preloader" element={<Preloader />} />
      </Routes>
    </div>
  );
}

export default App;
