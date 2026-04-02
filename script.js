const API_KEY = "0f2255d1e244258b05ac309d90dd8f14";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

let allMovies = [];
let filteredMovies = [];
let favorites = JSON.parse(localStorage.getItem("fav")) || [];


function showLoading(show) {
    document.getElementById("loading").style.display = show ? "block" : "none";
}

async function fetchMovies(query) {
    try {
        showLoading(true);
        document.getElementById("error").innerText = "";

        let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        let data = await res.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("No movies found");
        }

        allMovies = data.results;
        filteredMovies = [...allMovies];

        displayMovies(filteredMovies);

    } catch (err) {
        document.getElementById("error").innerText = err.message;
    } finally {
        showLoading(false);
    }
}


let timer;
document.getElementById("searchInput").addEventListener("input", function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
        let query = this.value.trim();

        if (query.length > 0) {
            fetchMovies(query);
        }
    }, 500);
});


function displayMovies(movies) {
    let container = document.getElementById("movies");
    container.innerHTML = "";

    if (!movies || movies.length === 0) {
        container.innerHTML = "<p>No movies found</p>";
        return;
    }

    movies.map(movie => {
        let div = document.createElement("div");
        div.className = "movie";

        div.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="${movie.poster_path ? IMG_URL + movie.poster_path : ''}">
            <p>${movie.release_date || "N/A"}</p>
            <button onclick="addFav(${movie.id})">❤️</button>
        `;

        container.appendChild(div);
    });
}

document.getElementById("filterType").addEventListener("change", function () {
    let type = this.value;

    let result;

    if (type === "") {
        result = [...allMovies];
    } else if (type === "recent") {
        result = allMovies.filter(m => m.release_date && m.release_date >= "2020");
    } else {
        result = [...allMovies];
    }

    filteredMovies = result;
    displayMovies(filteredMovies);
});


document.getElementById("sortType").addEventListener("change", function () {
    let type = this.value;

    let sorted = [...filteredMovies];

    if (type === "year") {
        sorted.sort((a, b) => (a.release_date || "").localeCompare(b.release_date || ""));
    } else if (type === "title") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    filteredMovies = sorted;
    displayMovies(filteredMovies);
});


function addFav(id) {
    let movie = allMovies.find(m => m.id === id);

    if (!favorites.some(f => f.id === id)) {
        favorites.push(movie);
        localStorage.setItem("fav", JSON.stringify(favorites));
        showFav();
    }
}


function showFav() {
    let container = document.getElementById("favorites");
    container.innerHTML = "";

    favorites.map(movie => {
        let div = document.createElement("div");
        div.className = "movie";

        div.innerHTML = `
            <h4>${movie.title}</h4>
            <img src="${movie.poster_path ? IMG_URL + movie.poster_path : ''}">
        `;

        container.appendChild(div);
    });
}


function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


showFav();
fetchMovies("avengers"); 