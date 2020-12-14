import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3" id="text-column-1">
                            <h5>COVID-19 Dashboard</h5>
                            <p>This simple application shows you actual statistics about COVID-19 in whole world</p>
                        </div>
                        <div className="clearfix w-100 d-md-none pb-3">
                            <div className="col-md-3 mb-md-0 mb-3" id="text-column-2"></div>
                            <div className="col-md-3 mb-md-0 mb-3" id="text-column-3">
                                <ul className="footer-ul">
                                    <li>
                                        <a href="https://rs.school/js/" target="blanck">
                                            <img id="logo" src="https://rs.school/images/rs_school_js.svg" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://rs.school/js/" target="blank">
                                            https://rs.school/js/
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-right py-3">
                    <p>© 2020 Copyright:</p>
                    <a href="https://github.com/Tonia-SE" target="blank">
                        https://github.com/Tonia-SE
                        <br />
                    </a>
                    <a href="https://github.com/Tonia-SE" target="blank">
                        https://github.com/pannage
                        <br />
                    </a>
                    <a href="https://github.com/Tonia-SE" target="blank">
                        https://github.com/efando
                    </a>
                </div>
            </div>
        );
    }
}
