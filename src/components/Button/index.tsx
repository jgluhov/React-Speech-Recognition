import * as React from 'react';

interface ButtonProps {
    text: string;
    handleClick: () => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <button className="Button Button__counter" 
            onClick={props.handleClick}>
            {props.text}
        </button>
    );
};
