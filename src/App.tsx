import React, {useState} from 'react';
import { Table1 } from './components/Table1';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Table2 } from './components/Table2';
import { Footer } from './components/Footer';
import { TotalCases } from './components/TotalCases';

//const initialUrl: string = "https://disease.sh/v3/covid-19/all";

const initialCountryDetails: CountryDetails = {
    countryUrl: "https://disease.sh/v3/covid-19/all",
    countryFlag: '',
    countryName: '',
};

const table1PossibleHeaders: TableHeaders = {
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

export const initialClassNameCol1 = 'column col-md-3 d-md-block bg-light table-countries';
export const initialClassNameCol2 = 'column col-md-6 pt-3';
export const initialClassNameCol3 = 'column col-md-3 d-md-block bg-light1 table-countries';

export const initialClassNameCol1Total = 'total-cases-wrapper';
export const initialClassNameCol1Table1 = 'table-wrapper';
export const initialClassNameCol1Graph = 'table-graph-wrapper';


// async componentDidUpdate(prevProps: SwitcherProps) {
//         if (prevProps.isGroupSwitched !== this.props.isGroupSwitched) {
//             this.toggleStatus();
//         }
//     }

function App() {

    const [countryDetails, setCountryDetails] = useState(initialCountryDetails);
    const [isRelativeValues, changeValuesTable1] = useState(false);
    const [isToday, setToday] = useState(false);
    // const [switch1State, swithcGroup1] = useState(false);
    const [table1Head, setTable1Head] = useState(table1PossibleHeaders.all); // setTable1Head - коллбек, который делает реакт
    const [table1Data, setTable1Data] = useState(table1DataPossibleAttrs.all);
    const [classNameCol1, setClassNameCol1] = useState(initialClassNameCol1);
    const [classNameCol2, setClassNameCol2] = useState(initialClassNameCol2);
    const [classNameCol3, setClassNameCol3] = useState(initialClassNameCol3);
    const [classNameCol1Total, setClassNameCol1Total] = useState(initialClassNameCol1Total);
    const [classNameCol1Table1, setClassNameCol1Table1] = useState(initialClassNameCol1Table1);
    const [classNameCol1Graph, setClassNameCol1Graph] = useState(initialClassNameCol1Graph);

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
                    <div className={classNameCol1}>
                        <TotalCases classNameCol1Total={classNameCol1Total}/>
                        <Table1 countryDetails={countryDetails}
                                tableHead={table1Head}
                                tableData={table1Data}
                                isRelativeValues={isRelativeValues}
                                classNameCol1Table1={classNameCol1Table1}
                                updateTable1={update1Table1}
                                changeValuesTable1={update2Table1}
                                setClassNameCol1={setClassNameCol1}
                                setClassNameCol2={setClassNameCol2}
                                setClassNameCol3={setClassNameCol3}
                                setClassNameCol1Total={setClassNameCol1Total}
                                setClassNameCol1Table1={setClassNameCol1Table1}
                                setClassNameCol1Graph={setClassNameCol1Graph}/>
                        <Graph countryDetails={countryDetails}
                                classNameCol1Graph={classNameCol1Graph}
                                updateTable1={update1Table1}
                                changeValuesTable1={update2Table1}
                                setClassNameCol1={setClassNameCol1}
                                setClassNameCol2={setClassNameCol2}
                                setClassNameCol3={setClassNameCol3}
                                setClassNameCol1Total={setClassNameCol1Total}
                                setClassNameCol1Table1={setClassNameCol1Table1}
                                setClassNameCol1Graph={setClassNameCol1Graph}/>
                    </div>
                    <div className={classNameCol2}>
                        <Map countryDetails={countryDetails}
                            updateTable1={update1Table1}
                            changeValuesTable1={update2Table1}
                            setClassNameCol1={setClassNameCol1}
                            setClassNameCol2={setClassNameCol2}
                            setClassNameCol3={setClassNameCol3}/>
                    </div>
                    <div className={classNameCol3}>
                        <Table2 chooseCountry={chooseCountry}
                            updateTable1={update1Table1}
                            changeValuesTable1={update2Table1}
                            setClassNameCol1={setClassNameCol1}
                            setClassNameCol2={setClassNameCol2}
                            setClassNameCol3={setClassNameCol3}/>
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
