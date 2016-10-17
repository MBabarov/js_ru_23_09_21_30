import React, { Component, PropTypes } from 'react'
import DatePicker from './DatePicker'
import SelectFilter from './SelectFilter'
import { connect } from 'react-redux'

class Filter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const {articles} = this.props;
        return (
            <div>
                <DatePicker />
                <SelectFilter articles = {articles} />
            </div>
        )
    }
}
export default Filter