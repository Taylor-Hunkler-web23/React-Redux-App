import React from 'react';

const Quote = props => {
    console.log(props)

    return(

        <div>
            <h1>{props.quote.author} says:</h1>
            <h1>{props.quote.quote}</h1>
        </div>
    )
}

export default Quote;