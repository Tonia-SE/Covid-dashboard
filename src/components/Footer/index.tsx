import React from 'react';
import './footer.scss';
// to do добавить логотип школы в футер
export class Footer extends React.Component {
    render() {
        return (
            <div className="row footer font-small blue">
                <div className="footer-logo"></div>
                <div className="footer-copyright text-right">
                    <div className="copyright-title">© 2020 Copyright:</div>
                    <div><a href="https://github.com/Tonia-SE" target="blank">https://github.com/Tonia-SE</a></div>
                    <div><a href="https://github.com/pannage" target="blank">https://github.com/pannage</a></div>
                    <div><a href="https://github.com/efando" target="blank">https://github.com/efando</a></div>
                </div>
            </div>
        );
    }
}
