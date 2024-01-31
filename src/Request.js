const API_KEY = "ed8d973bbf9c74644bea23c6f0899c70";

const requests = {
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
};
export default requests;
