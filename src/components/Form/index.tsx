import React from 'react';
import './form.scss';

interface Props {
    onfilterchange: (value: string) => void
}
export class Form extends React.Component<Props> {
    state = {
        value: ''
      };

      onInputChange (event: any) {
        this.setState({value: event.target.value});
        this.props.onfilterchange(event.target.value);
      };

      render () {
        return (
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={this.state.value} onChange={(event) => this.onInputChange(event)} />
        </div>
        );
      }
}
