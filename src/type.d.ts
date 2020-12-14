interface GlobalData {
    "NewConfirmed": Number,
    "TotalConfirmed": Number,
    "NewDeaths": Number,
    "TotalDeaths": Number,
    "NewRecovered": Number,
    "TotalRecovered": Number
}

interface Summary {
    "updated": Number,
    "cases": Number,
    "todayCases": Number,
    "deaths": Number,
    "recovered": Number,
    "todayRecovered": Number,
    "active": Number,
    "critical": Number,
    "casesPerOneMillion": Number,
    "deathsPerOneMillion": Number,
    "tests": Number,
    "testsPerOneMillion": Number,
    "population": Number,
    "oneCasePerPeople": Number,
    "oneDeathPerPeople": Number,
    "oneTestPerPeople": Number,
    "activePerOneMillion": Number,
    "recoveredPerOneMillion": Number,
    "criticalPerOneMillion": Number,
    "affectedCountries": Number
}

interface Country {
    "updated": Number,
    "country": String,
    "countryInfo": {
        "_id": string,
        "iso2": String,
        "iso3": String,
        "lat": Number,
        "long": Number,
        "flag": string
    },
    "cases": Number,
    "todayCases": Number,
    "deaths": Number,
    "todayDeaths": Number,
    "recovered": Number,
    "todayRecovered": Number,
    "active": Number,
    "critical": Number,
    "casesPerOneMillion": Number,
    "deathsPerOneMillion": Number,
    "tests": Number,
    "testsPerOneMillion": Number,
    "population": Number,
    "continent": String,
    "oneCasePerPeople": Number,
    "oneDeathPerPeople": Number,
    "oneTestPerPeople": Number,
    "activePerOneMillion": Number,
    "recoveredPerOneMillion": Number,
    "criticalPerOneMillion": Number
}

// interface Country {
//     "Country": String,
//     "CountryCode": String,
//     "Slug": String,
//     "NewConfirmed": Number,
//     "TotalConfirmed": Number,
//     "NewDeaths": Number,
//     "TotalDeaths": Number,
//     "NewRecovered": Number,
//     "TotalRecovered": Number,
//     "Date": String,
//     "Premium": Object
// }
// interface HeaderH1 {
//     text: string;
// }
// type ToggleTodo = (selectedTodo: Todo) => void;

// type AddTodo = (text: string) => void;

// type CloseTodo = (selectedTodo: Todo) => void;