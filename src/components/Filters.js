import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css"

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selected: null,
        from: null,
        to: null
    };

    handleChange = selected => this.setState({ selected });

    handleDayClick = (e, day) =>{
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        });
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        const range = {
            from: new Date(2015, 5, 14),
            to: new Date(2015, 5, 18)
        };

        //const newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);
        const { from, to } = this.state;
        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />
                <DayPicker
                    ref="daypicker"
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                <p style={{textAlign: 'center'}}>
                    You chose from { moment(from).format('dddd, MMMM Do YYYY') } to { moment(to).format('dddd, MMMM Do YYYY') }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                </p>
            </div>
        )
    }
}

export default Filters