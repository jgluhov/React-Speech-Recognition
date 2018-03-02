import * as React from 'react';
import * as classNames from 'classnames';
import './styles.scss';

interface ButtonProps {
    text: string;
    type: string;
    handleClick: () => void;
}

export const CounterButton = (props: ButtonProps) => {
    const btnClass = classNames({
        'Button': true,
        [`Button--${props.type}`]: true
    });

    return (
        <button className={btnClass}
            onClick={props.handleClick}>
            {props.text}
        </button>
    );
};
