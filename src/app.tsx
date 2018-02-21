import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Messager = (props) => {
    return (
        <div>{props.text}</div>
    )
}

ReactDOM.render(
    <Messager text="Hello World" />,
    document.getElementById('app')
);
