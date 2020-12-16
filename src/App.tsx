import React, {useState} from 'react';
import { Table1 } from './components/Table1';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Table2 } from './components/Table2';
import { Footer } from './components/Footer';
import { TotalCases } from './components/TotalCases';

const initialUrl: string = "https://disease.sh/v3/covid-19/all";

const table1PossibleHeaders:TableHeaders = {
    // Текст заголовков таблицы, можно менять на свое усмотрение
    all: {
        th1: 'Total cases',
        th2: 'Total deaths',
        th3: 'Total recovered'
    },
    // Текст заголовков таблицы, можно менять на свое усмотрение
    today: {
        th1: 'Today\'s cases',
        th2: 'Today\'s deaths',
        th3: 'Today\'s recovered'
    },
    // Текст заголовков таблицы, можно менять на свое усмотрение
    relativeAll: {
        th1: 'Total cases per 100 000 population',
        th2: 'Total deaths per 100 000 population',
        th3: 'Total recovered per 100 000 population'
    },
    // Текст заголовков таблицы, можно менять на свое усмотрение
    relativeToday: {
        th1: 'Today\'s cases per 100 000 population',
        th2: 'Today\'s deaths per 100 000 population',
        th3: 'Today\'s recovered per 100 000 population'
    },
};

const table1DataPossibleAttrs:TableDataPossibleAttrs = {
    all: {
        td1: 'cases',
        td2: 'deaths',
        td3: 'recovered'
    },
    today: {
        td1: 'todayCases',
        td2: 'todayDeaths',
        td3: 'todayRecovered'
    }
};

function App() { 

    const [countryUrl, setCountryUrl] = useState(initialUrl);
    const [isRelativeValues, changeValuesTable1] = useState(false);
    const [isToday, setToday] = useState(false);
    const [table1Head, setTable1Head] = useState(table1PossibleHeaders.all); // setTable1Head - коллбек, который делает реакт
    const [table1Data, setTable1Data] = useState(table1DataPossibleAttrs.all);
    //let isToday = false;

    const chooseCountry = (selectedCountry: Country) => {
        setCountryUrl(`https://disease.sh/v3/covid-19/countries/${selectedCountry.countryInfo.iso3}`);
    };

    const update1Table1 = (switcherState: boolean) => {
        if (!switcherState) {
            if (isRelativeValues) {
                setTable1Head(table1PossibleHeaders.relativeAll);
            } else {
                setTable1Head(table1PossibleHeaders.all);
            }
            setTable1Data(table1DataPossibleAttrs.all);            
            setToday(false);
        } else {
            if (isRelativeValues) {
                setTable1Head(table1PossibleHeaders.relativeToday);
            } else {
                setTable1Head(table1PossibleHeaders.today);
            }
            setTable1Data(table1DataPossibleAttrs.today);            
            setToday(true);
            console.log(isToday);
        }
    };

    const update2Table1 = (switcherState: boolean) => {        
        changeValuesTable1(switcherState);
        if (!isRelativeValues) {            
            console.log(isToday);
            if(isToday) {
                setTable1Head(table1PossibleHeaders.relativeToday);
            } else {
                setTable1Head(table1PossibleHeaders.relativeAll);
                setToday(false);
            }
        } else {
            if(isToday) {
                setTable1Head(table1PossibleHeaders.today);
            } else {
                setTable1Head(table1PossibleHeaders.all);
                setToday(false);
            }
        }        
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block bg-light">
                        <TotalCases/>
                        <Table1 countryUrl={countryUrl}
                                tableHead={table1Head}
                                tableData={table1Data}
                                isRelativeValues={isRelativeValues}
                                updateTable1={update1Table1}
                                changeValuesTable1={update2Table1} />
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
