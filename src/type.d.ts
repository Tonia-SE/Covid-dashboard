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
    "country": string,
    "countryInfo": {
        "_id": string,
        "iso2": string,
        "iso3": string,
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

type ChooseCountry = (country: Country) => void;

interface Table1Head  {
    th1: string,
    th2: string,
    th3: string
}

interface Table1DataAttrs {
    td1: string,
    td2: string,
    td3: string
}

interface TableHeaders {
    all: Table1Head,
    today: Table1Head,
    relativeAll: Table1Head,
    relativeToday: Table1Head
}

interface TableDataPossibleAttrs {
    all: Table1DataAttrs,
    today: Table1DataAttrs,
}
