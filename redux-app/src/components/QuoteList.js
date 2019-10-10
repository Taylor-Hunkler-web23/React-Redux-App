import React from 'react'
import {connect} from 'react-redux';

const QuoteList = (props) => {

    return(
        <div>
            <h1>Quotes</h1>

        </div>
    );
}


const mapStateToProps = state => {
    return{
        quotes: state.quotes,
    }
}


export default connect (mapStateToProps, {}) (QuoteList);