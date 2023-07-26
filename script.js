// Fetch data from the API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Get all countries from Asia continent using Filter function
    const countriesInAsia = data.filter(country => country.continents.includes("Asia"));
    console.log("Countries in Asia:", countriesInAsia);

    // Get all countries with a population of less than 2 lakhs using Filter function
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with less than 2 lakhs population:", countriesWithLessPopulation);

    // Print the following details name, capital, flag using forEach function
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
    });

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of countries:", totalPopulation);

    // Print the country which uses US Dollars as currency
    const countryWithUSDollar = data.find(country => country.currencies && country.currencies.USD);
    console.log("Country that uses US Dollars:", countryWithUSDollar);
  })
  .catch(error => console.log("Error fetching data:", error));
