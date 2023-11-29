const name = document.querySelector('#name');
const capital = document.querySelector('#capital');
const languages = document.querySelector('#languages');
const population = document.querySelector('#population');
const flag = document.querySelector('img');
const submitButton = document.querySelector("submit-button");
const guessForm = document.querySelector("#guess-form");
const guessCounter = document.querySelector('#guess-counter')
const nextButton = document.querySelector('.next');
const revealButton = document.querySelector('.reveal-capital');

let counter = 0;

let country = null;

const apiUri = "https://restcountries.com/v3.1/name/"

const countryNames = [];


const fetchCountryNames = async () => {
    try{
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    data.forEach(country => {
        let name = country.name.common;
        countryNames.push(name);
    });
} catch (error) {
    alert(`Error connecting the endpoint ${error}`);
}

}




const getCountryByName = async (countryName) => {
    const response = await fetch(apiUri + countryName);
    const data = await response.json();

    country = data;

    // console.log(data[0])
    name.innerText = "Name: " + data[0].name.common;
    capital.innerText = "Capital: Hidden";
    let getLanguages = Object.values(data[0].languages).join(", ");
    languages.innerText = "Languages: " + getLanguages;
    population.innerText = "Population: " + data[0].population;  
    flag.src = data[0].flags.svg;
    console.log(data[0].capital);
}



// getCountryByName("USA");

// const getRandomCountry = () => {
//     countryNames[Math.random() * countryNames.length];
// }

const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countryNames.length);
    console.log(countryNames[randomIndex])
    return countryNames[randomIndex];
}

fetchCountryNames().then(() => {
    const randomCountryName = getRandomCountry();
    getCountryByName(randomCountryName);
});

const compareGuess = (country, guess) => {
    if (country[0].capital == guess || country[0].capital.includes(guess)){
        counter++;
        capital.innerText = "Capital: " + country[0].capital + " Correct!";
        guessCounter.innerText = "Points: " + counter;
        //sets the button to false once selected so cant be submitted again for extra points.
        document.querySelector('.submit').disabled = true;
    }
    if (country[0].capital != guess || !country[0].capital.includes(guess)){
        capital.innerText = "Capital: " + "incorrect, guess again or move on."
    }
}


nextButton.addEventListener("click", () => {
    document.querySelector('.submit').disabled = false;
    fetchCountryNames().then(() => {
        const randomCountryName = getRandomCountry();
        getCountryByName(randomCountryName);
    });
})

guessForm.addEventListener("submit", (event) => {
    event.preventDefault();
    guess = document.querySelector('#guess').value;
    console.log(guess);
    compareGuess(country, guess);
})

revealButton.addEventListener("click", (event) => {
    document.querySelector('.submit').disabled = true;
    capital.innerText = "Capital: " + country[0].capital;
} )








