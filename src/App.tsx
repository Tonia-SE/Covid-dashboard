import React, {useState} from 'react';
import { Table1 } from './components/Table1/table1';
import { Graph } from './components/Graph/graph';
import { Map } from './components/Map/Map';
import { Table2 } from './components/Table2/table2';
import { Footer } from './components/Footer/footer';
import { TotalCases } from './components/TotalCases/total-cases';
import { CountryDetails, TableHeaders, TableDataPossibleAttrs } from './type';
import { allCountryUrl, graphUrl } from './consts';

const initialCountryDetails: CountryDetails = {
    countryUrl: allCountryUrl,
    graphURL: graphUrl,
    countryFlag: '',
    countryName: 'Global',
};

const table1PossibleHeaders: TableHeaders = {
    all: {
        th1: `Cases`,
        th2: `Deaths`,
        th3: `Recovered`
    },
    today: {
        th1: `Today's cases`,
        th2: `Today's deaths`,
        th3: `Today's recovered`
    },
    relativeAll: {
        th1: `Cases per   100 000`,
        th2: `Deaths per  100 000`,
        th3: `Recovered per  100 000`
    },
    relativeToday: {
        th1: `Today's cases per 100 000`,
        th2: `Today's deaths per 100 000`,
        th3: `Today's recovered per 100 000`
    },
};

const table1DataPossibleAttrs:TableDataPossibleAttrs = {
    all: {
        td1: `cases`,
        td2: `deaths`,
        td3: `recovered`
    },
    today: {
        td1: `todayCases`,
        td2: `todayDeaths`,
        td3: `todayRecovered`
    }
};

export const initialClassNameCol1 = 'column-1 col-xl-4 col-lg-4 col-md-7 col-sm-8 d-md-block bg-light table-countries ml-0 mr-0 pr-0 pl-0';
export const initialClassNameCol2 = 'column-2 col-xl-6 col-lg-6 col-md-12 col-sm-12 ml-0 mr-0 pr-2 pl-2';
export const initialClassNameCol3 = 'column-3 col-xl-2 col-lg-2 col-md-5 col-sm-4 d-md-block bg-light1 table-countries ml-0 mr-0 pr-0 pl-0 third';

export const initialClassNameCol1Total = 'total-cases-wrapper';
export const initialClassNameCol1Table1 = 'table-wrapper';
export const initialClassNameCol1Graph = 'table-graph-wrapper';

function App() {

    const [countryDetails, setCountryDetails] = useState(initialCountryDetails);
    const [isRelativeValues, changeValuesTable1] = useState(false);
    const [isToday, setToday] = useState(false);
    const [graphParameter, setGraphParameter] = useState(table1DataPossibleAttrs.all.td1);
    const [table1Head, setTable1Head] = useState(table1PossibleHeaders.all); 
    const [table1Data, setTable1Data] = useState(table1DataPossibleAttrs.all);
    const [classNameCol1, setClassNameCol1] = useState(initialClassNameCol1);
    const [classNameCol2, setClassNameCol2] = useState(initialClassNameCol2);
    const [classNameCol3, setClassNameCol3] = useState(initialClassNameCol3);
    const [classNameCol1Total, setClassNameCol1Total] = useState(initialClassNameCol1Total);
    const [classNameCol1Table1, setClassNameCol1Table1] = useState(initialClassNameCol1Table1);
    const [classNameCol1Graph, setClassNameCol1Graph] = useState(initialClassNameCol1Graph);
    const [countries, setCountries] = useState([{}]);

    const [switchGroup1State, swithcGroup1] = useState(false);
    const [switchGroup2State, swithcGroup2] = useState(false);

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
        }
    };

    const update2Table1 = (switcherState: boolean) => {
        changeValuesTable1(switcherState);
        if (!isRelativeValues) {
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
                                setClassNameCol1Graph={setClassNameCol1Graph}
                                switchGroup1State={switchGroup1State}
                                switchGroup2State={switchGroup2State}
                                switchGroup1={swithcGroup1}
                                switchGroup2={swithcGroup2}               
                        />
                        <Graph countryDetails={countryDetails}
                                classNameCol1Graph={classNameCol1Graph}
                                updateTable1={update1Table1}
                                changeValuesTable1={update2Table1}
                                setClassNameCol1={setClassNameCol1}
                                setClassNameCol2={setClassNameCol2}
                                setClassNameCol3={setClassNameCol3}
                                setClassNameCol1Total={setClassNameCol1Total}
                                setClassNameCol1Table1={setClassNameCol1Table1}
                                setClassNameCol1Graph={setClassNameCol1Graph}
                                tableHead={table1Head}
                                tableData={table1Data}
                                parameter={graphParameter}
                                switchGroup1State={switchGroup1State}
                                switchGroup2State={switchGroup2State}
                                switchGroup1={swithcGroup1}
                                switchGroup2={swithcGroup2}
                        />
                    </div>
                    <div className={classNameCol2}>
                        <Map countryDetails={countryDetails}
                            updateTable1={update1Table1}
                            tableData={table1Data}
                            changeValuesTable1={update2Table1}
                            setClassNameCol1={setClassNameCol1}
                            setClassNameCol2={setClassNameCol2}
                            setClassNameCol3={setClassNameCol3}
                            countries={countries}
                            setCountryDetails={setCountryDetails}
                            switchGroup1State={switchGroup1State}
                            switchGroup2State={switchGroup2State}
                            switchGroup1={swithcGroup1}
                            switchGroup2={swithcGroup2}    
                        />
                    </div>
                    <div className={classNameCol3}>
                        <Table2 setCountryDetails={setCountryDetails}
                            updateTable1={update1Table1}
                            changeValuesTable1={update2Table1}
                            setClassNameCol1={setClassNameCol1}
                            setClassNameCol2={setClassNameCol2}
                            setClassNameCol3={setClassNameCol3}
                            setCountries={setCountries}
                            countryDetails={countryDetails}
                            tableHead={table1Head}
                            tableData={table1Data}
                            isRelativeValues={isRelativeValues}
                            setGraphParameter={setGraphParameter}
                            switchGroup1State={switchGroup1State}
                            switchGroup2State={switchGroup2State}
                            switchGroup1={swithcGroup1}
                            switchGroup2={swithcGroup2}
                            />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
