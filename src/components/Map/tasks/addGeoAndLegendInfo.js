
import legendItems from "../entities/LegendItems";
import { features } from '../data/countries.json';

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function addGeoAndLegendInfo (covidCountries) {

  for (let i = 0; i < features.length; i++) {
    const country = features[i];
    const covidCountry = covidCountries.find(
      (covidCountry) => country.properties.ISO_A3 === covidCountry.countryInfo.iso3
    );
    
    country.properties.cases = 0;
    country.properties.casesColor = 0;
    country.properties.todayCases = 0;
    country.properties.todayCasesColor = 0;
    country.properties.deaths = 0;
    country.properties.deathsColor = 0;
    country.properties.todayDeaths = 0;
    country.properties.todayDeathsColor = 0;
    country.properties.recovered = 0;
    country.properties.recoveredColor = 0;
    country.properties.todayRecovered = 0;
    country.properties.todayRecoveredColor = 0;
    country.properties.flag = '';
    let cases = 0;
    let todayCases = 0;
    let deaths = 0;
    let todayDeaths = 0;
    let recovered = 0;
    let todayRecovered = 0;

    if (covidCountry != null) {
      country.properties.cases = formatNumberWithCommas(Number(covidCountry.cases));
      country.properties.todayCases = formatNumberWithCommas(Number(covidCountry.todayCases));
      country.properties.deaths = formatNumberWithCommas(Number(covidCountry.deaths));
      country.properties.todayDeaths = formatNumberWithCommas(Number(covidCountry.todayDeaths));
      country.properties.recovered = formatNumberWithCommas(Number(covidCountry.recovered));
      country.properties.todayRecovered = formatNumberWithCommas(Number(covidCountry.todayRecovered));
      country.properties.confirmedText = formatNumberWithCommas(Number(covidCountry.cases));
      cases = covidCountry.cases;
      todayCases = covidCountry.todayCases;
      deaths = covidCountry.deaths;
      todayDeaths = covidCountry.todayDeaths;
      recovered = covidCountry.recovered;
      todayRecovered = covidCountry.todayRecovered;
      country.properties.flag = covidCountry.countryInfo.flag;
    }

    const legendCases = legendItems.find((item) =>
      item.isFor(cases)
    );
    const legendTodayCases = legendItems.find((item) =>
      item.isFor(todayCases)
    );
    const legendDeaths = legendItems.find((item) =>
      item.isFor(deaths)
    );
    const legendTodayDeaths = legendItems.find((item) =>
      item.isFor(todayDeaths)
    );
    const legendRecovered = legendItems.find((item) =>
      item.isFor(recovered)
    );
    const legendTodayRecovered = legendItems.find((item) =>
      item.isFor(todayRecovered)
    );

    if (legendCases != null) country.properties.casesColor = legendCases.color;
    if (legendTodayCases != null) country.properties.todayCasesColor = legendTodayCases.color;
    if (legendDeaths != null) country.properties.deathsColor = legendDeaths.color;
    if (legendTodayDeaths != null) country.properties.todayDeathsColor = legendTodayDeaths.color;
    if (legendRecovered != null) country.properties.recoveredColor = legendRecovered.color;
    if (legendTodayRecovered != null) country.properties.todayRecoveredColor = legendTodayRecovered.color;
  }

  return features;
}