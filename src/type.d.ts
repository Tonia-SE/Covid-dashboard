import { FeatureGroup } from "react-leaflet";

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
    [key: string]: number
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

interface CountryDetails {
    countryUrl: string,
    countryFlag: string,
    countryName: string,
    graphURL: string,
}

interface TimelineData {
    cases: Array<Object>,
    deaths: Array<Object>,
    recovered: Array<Object>
}

interface Features {
    type: FeatureGroup,
    features: [
        {type: string,
        properties: {
            ADMIN: string,
            ISO_A3: string,
            cases : string;
            casesColor : string;
            todayCases : string;
            todayCasesColor : string;
            deaths : string;
            deathsColor : string;
            todayDeaths : string;
            todayDeathsColor : string;
            recovered : string;
            recoveredColor : string;
            todayRecovered : string;
            todayRecoveredColor : string;
            flag: string;

        }
        geometry: {
            type: string
            coordinates: Array<Array<Array<number>>>
        }}
    ]
}