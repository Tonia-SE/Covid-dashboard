import React, {useState} from 'react';
import { Table1 } from './components/Table1';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Table2 } from './components/Table2';
import { Footer } from './components/Footer';
import { TotalCases } from './components/TotalCases';

//const initialUrl: string = "https://disease.sh/v3/covid-19/all";

const initialCountryDetails:CountryDetails = {
    countryUrl: "https://disease.sh/v3/covid-19/all",
    countryFlag: '',
    countryName: '',
};

const table1PossibleHeaders:TableHeaders = {
    // Текст заголовков таблицы, можно менять на свое усмотрение
    all: {
        th1: 'Total cases',
        th2: 'Total deaths',
        th3: 'Total healed'
    },
    // Текст заголовков таблицы, можно менять на свое усмотрение
    today: {
        th1: 'Today\'s cases',
        th2: 'Today\'s deaths',
        th3: 'Today\'s healed'
    },
    // Текст заголовков таблицы, можно менять на свое усмотрение
    relativeAll: {
        th1: 'Cases per   100 000',
        th2: 'Deaths per  100 000',
        th3: 'Healed per  100 000'
    },
    // Текст заголовков таблицы, можно менять на свое усмотрение
    relativeToday: {
        th1: 'Today\'s cases per 100 000',
        th2: 'Today\'s deaths per 100 000',
        th3: 'Today\'s healed per 100 000'
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

    const [countryDetails, setCountryDetails] = useState(initialCountryDetails);
    const [isRelativeValues, changeValuesTable1] = useState(false);
    const [isToday, setToday] = useState(false);
    const [switch1State, swithcGroup1] = useState(false);
    const [table1Head, setTable1Head] = useState(table1PossibleHeaders.all); // setTable1Head - коллбек, который делает реакт
    const [table1Data, setTable1Data] = useState(table1DataPossibleAttrs.all);

    const chooseCountry = (selectedCountry: Country) => {
        setCountryDetails({
            countryUrl: `https://disease.sh/v3/covid-19/countries/${selectedCountry.countryInfo.iso3}`,
            countryFlag: selectedCountry.countryInfo.flag,
            countryName: selectedCountry.country,
        });
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
                    <div className="col-md-3 d-md-block bg-light table-countries">
                        <TotalCases/>
                        <Table1 countryDetails={countryDetails}
                                tableHead={table1Head}
                                tableData={table1Data}
                                isRelativeValues={isRelativeValues}
                                updateTable1={update1Table1}
                                changeValuesTable1={update2Table1} />
                        <Graph countryDetails={countryDetails}
                                updateTable1={update1Table1}
                                changeValuesTable1={update2Table1}/>
                    </div>
                    <div className="col-md-7 pt-3">
                        <Map countryDetails={countryDetails}
                            updateTable1={update1Table1}
                            changeValuesTable1={update2Table1} />
                    </div>
                    <div className="col-md-2 d-md-block bg-light1 table-countries">
                        <Table2 chooseCountry={chooseCountry}
                            updateTable1={update1Table1}
                            changeValuesTable1={update2Table1}/>
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
