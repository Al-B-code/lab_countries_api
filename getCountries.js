const fs = require('fs');


countryNames = [];


const fetchCountryNames = async () => {
    
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    data.forEach(country => {
        let name = country.name.common;
        // name = name.replace(/\s+/g, '-').toLowerCase();
        countryNames.push(name);
    });



    // let csvContent = "data:text/csv;charset=utf-8,";
    let csvContent = "CountryName\n"; // header



    // Add data
    countryNames.forEach(name => {
        csvContent += `${name}\n`;
    });
    console.log(countryNames)
    fs.writeFileSync('countries.csv', csvContent, 'utf-8');

}

fetchCountryNames();









// const csv = require('csv-parser')
// const fs = require('fs')
// const results = [];

// fs.createReadStream('countries.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//     // [
//     //   { NAME: 'Daffy Duck', AGE: '24' },
//     //   { NAME: 'Bugs Bunny', AGE: '22' }
//     // ]
//   });