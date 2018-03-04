import * as React from 'react';
import * as classNames from 'classnames';
import * as microphoneUrl from './img/microphone.png';

interface DictaphoneState {
    pressed: boolean;
}

interface DictaphoneProps {
    handleStart: () => void;
    handleStop: () => void;
}

export class DictaphoneButton extends React.Component<DictaphoneProps, DictaphoneState> {
    state: DictaphoneState;

    constructor(props: DictaphoneProps) {
        super(props);

        this.state = {
            pressed: false
        };
    }

    togglePressed = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();

        this.setState({
            pressed: !this.state.pressed
        });

        !this.state.pressed ?
            this.props.handleStart() : this.props.handleStop();
    }

    get btnClass() {
        return classNames({
            'DictaphoneButton': true,
            'DictaphoneButton--pressed': this.state.pressed
        });
    }

    render() {
        return (
            <div className={this.btnClass}>   
                <span className="DictaphoneButton__badge" />
                <img src={`${microphoneUrl}`} 
                    className="DictaphoneButton__image"
                    onMouseDown={this.togglePressed}
                    onMouseUp={this.togglePressed} />
            </div>
            
        );
    }
}