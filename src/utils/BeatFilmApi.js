class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Произошла ошибка: ${res.status}`);
  }

  async getMovies() {
    try {
      const res = await fetch(`${this._url}`, {
        method: 'GET',
        headers: this._headers
      });
      return this._handleResponse(res);
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error.message);
    }
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json' }
});
