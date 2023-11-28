const name = document.querySelector('#name');
const capital = document.querySelector('#capital');
const languages = document.querySelector('#languages');
const population = document.querySelector('#population');
const flag = document.querySelector('img');



const apiUri = "https://restcountries.com/v3.1/name/"

const countryNames = [];


const fetchCountryNames = async () => {
    
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    data.forEach(country => {
        let name = country.name.common;
        // name = name.replace(/\s+/g, '-').toLowerCase();
        countryNames.push(name);
    });

    console.log(countryNames);
    console.log(countryNames[20]);
    console.log(countryNames[135]);
}




const getCountryByName = async (countryName) => {
    const response = await fetch(apiUri + countryName);
    const data = await response.json();

    console.log(data[0])
    name.innerText = "Name: " + data[0].name.common;
    capital.innerText = "Capital: " + data[0].capital;
    let getLanguages = Object.values(data[0].languages).join(", ");
    languages.innerText = "Languages: " + getLanguages;
    population.innerText = "Population: " + data[0].population;  
    flag.src = data[0].flags.svg;
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





