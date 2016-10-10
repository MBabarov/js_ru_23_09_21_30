import React, { Component, PropTypes } from 'react'
import { updateSelect } from '../AC/selectFilter'
import { filterArticleByName } from '../AC/articles'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from selectFilter reducer
        filterArticleByName: PropTypes.func.isRequired,
        selectFilter: PropTypes.array
    };

    handleChange = selectFilter => {
        this.props.updateSelect(selectFilter);
    };

    componentDidUpdate(prevProps){
        const { filterArticleByName, selectFilter } = this.props;
        if(prevProps.selectFilter != selectFilter) filterArticleByName(selectFilter);
    };

    render() {
        const { articles, selectFilter } = this.props
        //const { selected } = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selectFilter}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

//export default SelectFilter
export default connect(state => ({
    selectFilter: state.selectFilter
}), {updateSelect, filterArticleByName})(SelectFilter)