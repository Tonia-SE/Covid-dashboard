import React from 'react';
import { Switcher } from '../Switcher';
import { Maximise } from '../MaximiseButton';

export class Table1 extends React.Component {
    render() {
    return (
        <> 
        <div className='wrapper-toggles'>
            <Switcher />
            <Switcher />
            <Maximise />
        </div>
        <div className='table-responsive table1'>
            <table className="table table-striped table-sm table1">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    </tr>
                    <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    </tr>
                    <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    </tr>
                    <tr>
                    <td>1,001</td>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    </tr>
                    <tr>
                    <td>1,002</td>
                    <td>amet</td>
                    <td>consectetur</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>Integer</td>
                    <td>nec</td>
                    </tr>
                    <tr>
                    <td>1,003</td>
                    <td>libero</td>
                    <td>Sed</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );}
};
