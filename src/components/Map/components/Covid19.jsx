import React, { useState, useEffect } from "react";
import CovidMap from "./CovidMap";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";
import { Spinner } from '../../Spinner';

const Covid19 = () => {
  const [countries, setCountries] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <div className="Loading"><Spinner /></div>
      ) : (
        <div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
