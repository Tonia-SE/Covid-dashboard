import React from 'react';
// to do добавить логотип школы в футер
export class Footer extends React.Component {
    render() {
        return (
            <div className="page-footer font-small blue pt-4">
                <div className="footer-copyright text-right py-3">
                    <pre>
                        © 2020 Copyright: <a href="https://github.com/Tonia-SE" target="blank">https://github.com/Tonia-SE</a>  <a href="https://github.com/pannage" target="blank">https://github.com/pannage</a>  <a href="https://github.com/efando" target="blank">https://github.com/efando</a>
                    </pre>
                </div>
            </div>
        );
    }
}
