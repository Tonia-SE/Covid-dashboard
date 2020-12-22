import React from 'react';
import { Maximize } from '../MaximiseButton';
import { Switcher } from '../Switcher';
import { CountryName } from '../CountryName';
import { initialClassNameCol1Graph } from '../../App';
import { Line } from 'react-chartjs-2';

import './graph.scss';
import { CountryDetails } from 'src/type';
import { throws } from 'assert';
import { Spinner } from '../Spinner';

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

    async updateData() {
        this.setState({loading: true });
        console.log(this.state.countryDetails.graphURL);
        const data = await fetch(this.state.countryDetails.graphURL).then(res => res.json());
        let cases = null;
        if (data['timeline'] === undefined) {
            cases = data;
        } else {
            cases = data['timeline'];
        }
        const newGraphData = {
            fontColor: "white",
            labels: Object.keys(cases[this.state.parameter]),
            datasets: [
                {
                    label: `Total ${this.state.parameter}`,
                    fill: false,
                    lineTension: 0,
                    backgroundColor: 'rgb(214, 29, 29)',
                    borderColor: "rgb(214, 29, 29)",
                    borderWidth: 0.5,
                    data: Object.values(cases[this.state.parameter])
                }
            ]
        };
        this.setState({graphData: newGraphData});
        this.setState({loading: false });
    }

    async componentDidUpdate(prevProps: Props) {
        if (prevProps.parameter !== this.props.parameter) {
            this.setState({parameter: this.props.parameter});
        }
        if (prevProps.countryDetails !== this.props.countryDetails) {
            this.setState({countryDetails: this.props.countryDetails});
            await this.updateData();
        }
        if (prevProps.classNameCol1Graph !== this.props.classNameCol1Graph) {
            this.setState({classNameCol1Graph: this.props.classNameCol1Graph});
        }
    }

    async componentDidMount() {
        await this.updateData();
        // this.setState({loading: true });
        // const data = await fetch(this.state.countryDetails.graphURL).then(res => res.json());
        // const newGraphData = {
        //     fontColor: "white",
        //     labels: Object.keys(data[this.state.parameter]),
        //     datasets: [
        //         {
        //             label: `Total ${this.state.parameter}`,
        //             fill: false,
        //             lineTension: 0,
        //             backgroundColor: 'rgb(214, 29, 29)',
        //             borderColor: "rgb(214, 29, 29)",
        //             borderWidth: 0.5,
        //             data: Object.values(data[this.state.parameter])
        //         }
        //     ]
        // };
        // this.setState({graphData: newGraphData});
        // this.setState({loading: false });
    }

    render() {
        return (
        <>
            <div className={this.state.classNameCol1Graph}>
                    <div className="maximise-wrapper">
                        <CountryName countryName='' countryFlag={this.state.countryDetails.countryFlag} />
                        <div className="switcher-wrapper">
                            <Switcher onChange={this.props.updateTable1} />
                            <Switcher onChange={this.props.changeValuesTable1}/>
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

