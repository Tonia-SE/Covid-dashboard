import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-toggle/css/bootstrap-toggle.min.css';
import 'bootstrap-toggle';

import './assets/styles/index.scss';

import { header } from './components/header';
import { graph } from './components/graph';
import { controls } from './components/table1/controls';
import { table1 } from './components/table1';
import { table2 } from './components/table2';
import { map } from './components/map';
import { footer } from './components/footer';
//import { total } from './components/data';

const bootstrapContainer = document.createElement('div')
bootstrapContainer.className = 'container-fluid'
const row = document.createElement('row')
row.className = 'row'

const col1 = document.createElement('div');
col1.className = 'col-md-3 d-none d-md-block bg-light';

col1.append(controls, table1);

const col2 = document.createElement('div');
col2.className = 'col-md-7 pt-3';
col2.append(map);

const col3 = document.createElement('div');
col3.className = 'col-md-2 d-none d-md-block bg-light';
col3.append(table2);

row.append(col1, col2, col3);
bootstrapContainer.append(row);

window.addEventListener('DOMContentLoaded', function () {
    document.body.append(header, bootstrapContainer, footer);
});