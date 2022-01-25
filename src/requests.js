const API_KEY = "8be9eb85a8d025c42456c206a5d94317"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=12`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=35`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=80`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=10751`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=27`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=878`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=6&with_genres=9648`,
}