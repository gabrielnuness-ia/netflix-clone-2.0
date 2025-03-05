// Configurações centralizadas da API do The Movie Database
const TMDB_CONFIG = {
    API_KEY: 'd19a1946970f98fae002af7545322879',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500',
    ENDPOINTS: {
        GENRES_LIST: 'https://api.themoviedb.org/3/genre/movie/list',
        MOVIE_DISCOVERY: 'https://api.themoviedb.org/3/discover/movie'
    }
};

// Exportar para permitir uso em outros módulos
export default TMDB_CONFIG;