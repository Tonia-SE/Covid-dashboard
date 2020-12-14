import React from 'react';
import { Header } from './components/Header';
import { Table1 } from './components/Table1';
import { Graph } from './components/Graph';
import { Map } from './components/Map';
import { Table2 } from './components/Table2';
import { Footer } from './components/Footer';
import { TotalCases } from './components/TotalCases';

function App() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 d-none d-md-block bg-light">
                        <TotalCases/>
                        <Table1 />
                        <Graph />
                    </div>
                    <div className="col-md-7 pt-3">
                        <Map />
                    </div>
                    <div className="col-md-2 d-none d-md-block bg-light">
                        <Table2 />
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
