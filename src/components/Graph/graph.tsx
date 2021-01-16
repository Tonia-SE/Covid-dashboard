import React from 'react';
import { Maximize } from '../MaximiseButton/maximiseButton';
import { Switcher } from '../Switcher/switcher';
import { CountryName } from '../CountryName/countryName';
import { initialClassNameCol1Graph } from '../../App';
import { Line } from 'react-chartjs-2';
import './graph.scss';
import { CountryDetails } from 'src/type';
import { Spinner } from '../Spinner/spinner';

interface Props {
    countryDetails: CountryDetails;
    updateTable1: (swithcerState: boolean) => void;
    changeValuesTable1: (swithcerState: boolean) => void;
    setClassNameCol1: (className: string) => void;
    setClassNameCol2: (className: string) => void;
    setClassNameCol3:(className: string) => void;
    setClassNameCol1Total: (className: string) => void;
    setClassNameCol1Table1: (className: string) => void;
    setClassNameCol1Graph: (className: string) => void;
    classNameCol1Graph: string;
    switchGroup1State: boolean,
    switchGroup2State: boolean,
    switchGroup1: (swithcerState: boolean) => void,
    switchGroup2: (swithcerState: boolean) => void,
    parameter: string;
    tableHead: {
        th1: string,
        th2: string,
        th3: string
    };
    tableData: {
        td1: string,
        td2: string,
        td3: string
    }
}

export class Graph extends React.Component<Props> {
    state = {
        loading:true,
        countryDetails: this.props.countryDetails,
        classNameCol1Graph: 'table-graph-wrapper',
        graphData: {},
        parameter: this.props.parameter
    }

    async updateData(parameter:string, url: string) {
        this.setState({loading: true });
        let data = await fetch(url).then(res => res.json());
        if (data['timeline'] !== undefined) {
            data = data['timeline'];
        }
        let newGraphData = {};
        if (data[parameter] !== undefined) {
            newGraphData = {
                fontColor: "white",
                labels: Object.keys(data[parameter]),
                datasets: [
                    {
                        label: `${parameter} in last 100 days`,
                        fill: false,
                        lineTension: 0,
                        backgroundColor: 'rgb(214, 29, 29)',
                        borderColor: "rgb(214, 29, 29)",
                        borderWidth: 0.5,
                        data: Object.values(data[parameter])
                    }
                ]
            };            
        } else {
            newGraphData = {datasets: [{ label: 'Sorry, no statistics data for this country'}]};
        }
        this.setState({ graphData: newGraphData, loading: false });
    }

    async componentDidUpdate(prevProps: Props) {
        if (prevProps.parameter !== this.props.parameter) {
            this.setState({parameter: this.props.parameter});
            await this.updateData(this.props.parameter, this.props.countryDetails.graphURL);
        }
        if (prevProps.countryDetails.graphURL !== this.props.countryDetails.graphURL) {
            this.setState({countryDetails: this.props.countryDetails});
            await this.updateData(this.props.parameter, this.props.countryDetails.graphURL);
        }
        if (prevProps.classNameCol1Graph !== this.props.classNameCol1Graph) {
            this.setState({classNameCol1Graph: this.props.classNameCol1Graph});
        }
    }

    async componentDidMount() {
        await this.updateData(this.props.parameter, this.props.countryDetails.graphURL);
    }

    render() {
        return (
        <>
            <div className={this.state.classNameCol1Graph}>
                    <div className="maximise-wrapper">
                        <CountryName countryName='' countryFlag={this.state.countryDetails.countryFlag} />
                        <div className="switcher-wrapper">
                            <Switcher onChange={this.props.updateTable1} switchGroupState={this.props.switchGroup1State} switchGroup={this.props.switchGroup1}/>
                            <Switcher onChange={this.props.changeValuesTable1} switchGroupState={this.props.switchGroup2State} switchGroup={this.props.switchGroup2}/>
                        </div>
                        <Maximize classNameCol1={'column col-md-6 d-md-block maximise-style bg-light table-countries'}
                                    classNameCol2={"column col-md-6 d-none pt-3"}
                                    classNameCol3={"column col-md-3 d-none bg-light1 table-countries"}
                                    setClassNameCol1={this.props.setClassNameCol1}
                                    setClassNameCol2={this.props.setClassNameCol2}
                                    setClassNameCol3={this.props.setClassNameCol3}
                                    classNameCol1Graph={initialClassNameCol1Graph}
                                    classNameCol1Total={'d-none'}
                                    classNameCol1Table1={'d-none'}
                                    setClassNameCol1Total={this.props.setClassNameCol1Total}
                                    setClassNameCol1Table1={this.props.setClassNameCol1Table1}
                                    setClassNameCol1Graph={this.props.setClassNameCol1Graph}/>
                    </div>
                <div className="graph">
                    {
                        this.state.loading && <div className="Loading"><Spinner /></div>
                    }
                    {
                        !this.state.loading &&
                        <Line data={this.state.graphData} height={165}
                            options={{
                                elements: {
                                    point: {
                                        radius: 2,
                                        hoverRadius: 7,
                                    },
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            fontColor: "rgb(255, 255, 255, 0.5)",
                                            labelString: "date",
                                            weight: 2,
                                            callback: function(value: string, index: number, values: string[]) {
                                                return `${(Number(value)/1000000).toFixed()}M`;
                                            }
                                        },
                                    }],
                                    xAxes: [{
                                        ticks: {
                                            fontColor: "rgb(255, 255, 255, 0.5)",
                                        },
                                    }],
                                },
                                title: {
                                    display:true,
                                    text: this.state.countryDetails.countryName,
                                    fontSize:20,
                                    fontColor: "white"
                                },
                                label: {
                                    fontColor: "white"
                                },
                                legend:{
                                    display:true,
                                    position:'top',
                                    labels: {
                                        fontColor: 'white',
                                        fontSize: 15,
                                    }
                                },
                            }}
                        />
                    }
                </div>
            </div>
        </>
        );
    }
}

