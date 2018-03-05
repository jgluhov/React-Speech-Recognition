import * as React from 'react';
import './styles.scss';

interface InputProps {
    command: string;
    placeholder: string;
}

export function Input(props: InputProps) {
    return (
        <input type="text" 
            className="Input" 
            readOnly={true} 
            placeholder={props.placeholder}
            value={props.command} />
    );
}