const API_KEY = "lFhxSX8nO3WNXu9UZvnmi0lzCibioiOAoxX1lA1I"; 
const API_URL = "https://api.nasa.gov/planetary/apod";

const apodImage = document.getElementById("apod-image");
const apodTitle = document.getElementById("apod-title");
const apodDescription = document.getElementById("apod-description");
const selectedDate = document.getElementById("selected-date");
const saveFavouriteBtn = document.getElementById("save-favourite");

const homeSection = document.getElementById("home-section");
const favouritesSection = document.getElementById("favourites-section");
const favouritesGrid = document.getElementById("favourites-grid");

const btnGoToFav = document.getElementById("go-to-favourites");

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    fetchAPOD(today);
});

async function fetchAPOD(date) {
    try {
        const res = await fetch(`${API_URL}?api_key=${API_KEY}&date=${date}`);
        const data = await res.json();

        if (data.code === 400) {
            apodTitle.textContent = "Invalid Date";
            apodDescription.textContent = "Please choose another date.";
            return;
        }

        apodTitle.textContent = data.title;
        apodDescription.textContent = data.explanation;
        apodImage.src = data.url;
        apodImage.alt = data.title;

        selectedDate.textContent = formatDateDisplay(date);

        currentAPOD = {
            date: date,
            title: data.title,
            explanation: data.explanation,
            url: data.url
        };

    } catch (error) {
        apodTitle.textContent = "Error Loading Image";
        apodDescription.textContent = "Please try again later.";
        console.error(error);
    }
}

function formatDateDisplay(dateStr) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

let currentAPOD = null;

saveFavouriteBtn.addEventListener("click", () => {
    if (!currentAPOD) return;

    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    // Prevent duplicates
    if (!favs.some(item => item.date === currentAPOD.date)) {
        favs.push(currentAPOD);
        localStorage.setItem("favourites", JSON.stringify(favs));
        alert("Saved to favourites!");
    } else {
        alert("Already in favourites.");
    }
});

function loadFavourites() {
    favouritesGrid.innerHTML = "";

    const favs = JSON.parse(localStorage.getItem("favourites")) || [];

    favs.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("fav-card");

        card.innerHTML = `
            <img src="${item.url}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.date}</p>
            <button class="remove-fav-btn">Unfavourite</button>
        `;

         card.querySelector(".remove-fav-btn").addEventListener("click", () => {
            removeFavourite(item.date);
        });

        favouritesGrid.appendChild(card);
    });
}

function removeFavourite(date) {
    let favs = JSON.parse(localStorage.getItem("favourites")) || [];

    favs = favs.filter(item => item.date !== date);

    localStorage.setItem("favourites", JSON.stringify(favs));

    loadFavourites();
}

function showHome() {
    homeSection.classList.remove("hidden");
    favouritesSection.classList.add("hidden");
}

function showFavourites() {
    loadFavourites();
    homeSection.classList.add("hidden");
    favouritesSection.classList.remove("hidden");
}

btnGoToFav.addEventListener("click", showFavourites);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("date-picker").addEventListener("click", () => {
        const date = prompt("Enter a date (YYYY-MM-DD):");
        if (date) fetchAPOD(date);
    });
});