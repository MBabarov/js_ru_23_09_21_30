import React, { Component, PropTypes } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { updateRange, resetRange } from '../AC/datePicker'
import { filterArticleByPeriod } from '../AC/articles'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css';

class DatePicker extends Component {
    static propTypes = {
        //from selectFilter reducer
        range: PropTypes.shape({
            from: PropTypes.date,
            to: PropTypes.date
        }),
        updateRange: PropTypes.func.isRequired,
        resetRange: PropTypes.func,
        filterArticleByPeriod: PropTypes.func
    };

    handleDayClick = (e, day) => {
        const { updateRange, range} = this.props;
        const newRange = DateUtils.addDayToRange(day, range);
        updateRange(newRange);
    };

    resetRange = (e) =>{
        this.props.resetRange();
    }

    componentDidUpdate(prevProps){
        const { filterArticleByPeriod, range } = this.props;
        if(prevProps.range != range) filterArticleByPeriod(range);
    };

    render() {
        const { range } = this.props;
        const selectedRange = range.from && range.to && `${range.from.toDateString()} - ${range.to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    initialMonth={ new Date(2016, 5) }
                    selectedDays={ day => DateUtils.isDayInRange(day, range ) }
                    onDayClick={ this.handleDayClick }
                />
                <button style={{margin: '20px auto', display: 'block'}} onClick={ this.resetRange }>Reset period</button>
                {selectedRange}

            </div>
        );
    }

}

export default connect(state => ({
    range: state.range
}), {updateRange, resetRange, filterArticleByPeriod})(DatePicker)