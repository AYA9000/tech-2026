const countries = [
"Sweden","Norway","Denmark","Finland","Iceland",
"Germany","France","Spain","Italy","Portugal",
"USA","Canada","Brazil","Japan","China","India","Australia"
];

const languages = [
"Swedish","English","Norwegian","Danish","Finnish",
"German","French","Spanish","Italian","Portuguese",
"Japanese","Chinese","Hindi"
];

let selectedCountry = "";
let selectedLanguage = "";

// 🌍 LAND
function filterCountries() {
    let search = document.getElementById("countrySearch").value.toLowerCase();
    let list = document.getElementById("countryList");

    list.innerHTML = "";

    countries
    .filter(c => c.toLowerCase().includes(search))
    .forEach(c => {
        let div = document.createElement("div");
        div.className = "item";
        div.textContent = c;

        div.onclick = () => {
            selectedCountry = c;
            highlight("countryList", c);
        };

        list.appendChild(div);
    });
}

// 🗣 SPRÅK
function filterLanguages() {
    let search = document.getElementById("languageSearch").value.toLowerCase();
    let list = document.getElementById("languageList");

    list.innerHTML = "";

    languages
    .filter(l => l.toLowerCase().includes(search))
    .forEach(l => {
        let div = document.createElement("div");
        div.className = "item";
        div.textContent = l;

        div.onclick = () => {
            selectedLanguage = l;
            highlight("languageList", l);
        };

        list.appendChild(div);
    });
}

// ✨ highlight
function highlight(listId, value) {
    let items = document.querySelectorAll("#" + listId + " .item");

    items.forEach(i => {
        if (i.textContent === value) {
            i.classList.add("selected");
        } else {
            i.classList.remove("selected");
        }
    });
}

// 🚀 START SPEL
function startGame() {
    let username = document.getElementById("username").value;
    let message = document.getElementById("message");

    if (!username) {
        message.textContent = "Skriv användarnamn!";
        message.style.color = "red";
        return;
    }

    if (!selectedCountry) {
        message.textContent = "Välj ett land!";
        message.style.color = "red";
        return;
    }

    if (!selectedLanguage) {
        message.textContent = "Välj ett språk!";
        message.style.color = "red";
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("country", selectedCountry);
    localStorage.setItem("language", selectedLanguage);

    message.style.color = "green";
    message.textContent =
        `Välkommen ${username} från ${selectedCountry} (${selectedLanguage})`;
}

// init
filterCountries();
filterLanguages();