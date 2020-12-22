import React from 'react';
import './footer.scss';
// to do добавить логотип школы в футер
export class Footer extends React.Component {
    render() {
        return (
            <div className="row footer font-small blue">
                <a className="link-rs" href="https://rs.school/js/"></a>
                <div className="footer-copyright text-right">
                    <span className="copyright-title">© 2020 Copyright:</span>
                    <div><a className="link-gh" href="https://github.com/Tonia-SE" target="blank">Tonia-SE</a></div>
                    <div><a className="link-gh"href="https://github.com/pannage" target="blank">pannage</a></div>
                    <div><a className="link-gh"href="https://github.com/efandor" target="blank">efandor</a></div>
                </div>
            </div>
        );
    }
}
