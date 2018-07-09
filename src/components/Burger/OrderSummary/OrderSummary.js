import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
//import classes from './Modal.css';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        });

    return (
        <Auxiliary>
            <h3>Yout order:</h3>
            <p>A delicious burger with the following ingredients:</p>

            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxiliary>
    )
}

export default orderSummary;