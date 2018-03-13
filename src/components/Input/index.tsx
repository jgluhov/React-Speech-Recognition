import * as React from 'react';
import './styles.scss';

interface InputProps {
    command: string;
    placeholder: string;
}

export function Input(props: InputProps) {
    const command: string = props.command && `You've just said "${props.command}"` || '';
    
    return (
        <input type="text" 
            className="Input" 
            readOnly={true} 
            placeholder={props.placeholder}
            value={command} />
    );
}