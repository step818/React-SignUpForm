import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.touched && props.invalid && props.shouldValidate) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                </select>
            );
            break;
        case ('radio'):
            inputElement = (
                <div>
                    {props.elementConfig.options.map(option => (
                        <label>
                            <input
                                type="radio"
                                value={option.value}
                                name="same"
                                onChange={props.changed}/>
                                {option.displayValue}
                        </label>
                    ))}
                </div>
            );
            break;
        case ('checkbox'):
            inputElement = <input
                type="checkbox"
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} />;
    }
    let validationError = null;
    if(props.invalid && props.touched) {
        validationError = <p
            className={classes.ValidationError}>Please enter a valid {props.key} !</p>;
    }

    return(
        <div className={classes.Input}>
        <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    );
};

export default input;