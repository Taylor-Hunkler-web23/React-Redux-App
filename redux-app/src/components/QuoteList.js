import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Quote from './Quote.js'
import {fetchQuote} from '../actions/index.js'



const QuoteList = (props) => {
    console.log(props,"p")

    useEffect (() => {
        props.fetchQuote();
    }, [])

    if (props.loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            <h1>Breaking Bad Quotes</h1>
            {props.quotes.map(quote => (
                <Quote quote={quote} />
    ))}

        </div>
    );
}


const mapStateToProps = state => {
    return {
        quotes: state.quotes,
        loading: state.loading,
        error: state.error
    }
}


export default connect(mapStateToProps, {fetchQuote})(QuoteList);