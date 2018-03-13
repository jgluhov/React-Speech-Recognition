import * as React from 'react';
import './styles.scss';

interface JumbotronProps {
    message: string;
}

export function Jumbotron(props: JumbotronProps) {
    return (
        <div className="Jumbotron">
            <span className="Jumbotron__message">{props.message}</span>
        </div>
    );
}