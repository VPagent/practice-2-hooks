import { Component } from 'react';

export class SearchForm extends Component {
    state = {
        value: '',
    };

    handlerInput = (event) => {
        this.setState({value: event.target.value})
        console.log(event);

    }

    formSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.value);

   
    console.log(event);
    // this.satState({request: })
  }

    render() {
        return (
            <form action="" onSubmit={this.formSubmit}>
                <label htmlFor="">
                    Уведіть ім'я персонажа
                    <input type="text" value={this.state.value} onChange={this.handlerInput} />
                </label>
                <button type='submit'>Search</button>
            </form>
        )
    }
}