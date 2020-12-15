import React, {useState} from 'react';
import { Table1 } from './components/Table1';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Table2 } from './components/Table2';
import { Footer } from './components/Footer';
import { TotalCases } from './components/TotalCases';

const initialUrl: string = "https://disease.sh/v3/covid-19/all";
const initialTable1Head = {
    th1: 'Total cases',
    th2: 'Total deaths',
    th3: 'Total recovered'
};
const initialTable1Data = {
    td1: 'cases',
    td2: 'deaths',
    td3: 'recovered'
};

function App() {
    const [countryUrl, setCountryUrl] = useState(initialUrl);
    const [table1Head, setTable1Head] = useState(initialTable1Head);
    const [table1Data, setTable1Data] = useState(initialTable1Data);

    const chooseCountry = (selectedCountry: Country) => {
        setCountryUrl(`https://disease.sh/v3/covid-19/countries/${selectedCountry.countryInfo.iso3}`);
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block bg-light">
                        <TotalCases/>
                        <Table1 countryUrl={countryUrl} tableHead={table1Head} tableData={table1Data} />
                        <Graph />
                    </div>
                    <div className="col-md-7 pt-3">
                        <Map />
                    </div>
                    <div className="col-md-2 d-none d-md-block bg-light1">
                        <Table2 chooseCountry={chooseCountry}/>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
