import { FeatureGroup } from "react-leaflet";

interface GlobalData {
    "NewConfirmed": number,
    "TotalConfirmed": number,
    "NewDeaths": number,
    "TotalDeaths": number,
    "NewRecovered": number,
    "TotalRecovered": number
}

interface Summary {
    "updated": number,
    "cases": number,
    "todayCases": number,
    "deaths": number,
    "recovered": number,
    "todayRecovered": number,
    "active": number,
    "critical": number,
    "casesPerOneMillion": number,
    "deathsPerOneMillion": number,
    "tests": number,
    "testsPerOneMillion": number,
    "population": number,
    "oneCasePerPeople": number,
    "oneDeathPerPeople": number,
    "oneTestPerPeople": number,
    "activePerOneMillion": number,
    "recoveredPerOneMillion": number,
    "criticalPerOneMillion": number,
    "affectedCountries": number
}

interface Country {
    "updated": number,
    "country": string,
    "countryInfo": {
        "_id": string,
        "iso2": string,
        "iso3": string,
        "lat": number,
        "long": number,
        "flag": string
    },
    "cases": number,
    "todayCases": number,
    "deaths": number,
    "todayDeaths": number,
    "recovered": number,
    "todayRecovered": number,
    "active": number,
    "critical": number,
    "casesPerOneMillion": number,
    "deathsPerOneMillion": number,
    "tests": number,
    "testsPerOneMillion": number,
    "population": number,
    "continent": string,
    "oneCasePerPeople": number,
    "oneDeathPerPeople": number,
    "oneTestPerPeople": number,
    "activePerOneMillion": number,
    "recoveredPerOneMillion": number,
    "criticalPerOneMillion": number
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