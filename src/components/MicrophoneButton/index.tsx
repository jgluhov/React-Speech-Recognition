import * as React from 'react';
import * as classNames from 'classnames';
import './styles.scss';
import * as microphoneUrl from './img/microphone.png';

interface MicrophoneState {
    pressed: boolean;
}

interface MicrophoneProps {
    recording: boolean;
    onStart: () => void;
    onStop: () => void;
}

export class MicrophoneButton extends React.Component<MicrophoneProps, MicrophoneState> {
    state: MicrophoneState = {
        pressed: false
    };

    handlePress = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();

        this.setState({
            pressed: !this.state.pressed
        });

        !this.state.pressed ?
            this.props.onStart() : this.props.onStop();
    }

    get btnClass() {
        return classNames({
            'MicrophoneButton': true,
            'MicrophoneButton--pressed': this.state.pressed
        });
    }

    get badgeClass() {
        return classNames({
            'MicrophoneButton__badge': true,
            'MicrophoneButton__badge--recording': this.props.recording
        });
    }

    get imageClass() {
        return classNames({
            'MicrophoneButton__image': true,
            'MicrophoneButton__image--pressed': this.state.pressed
        });
    }

    render() {
        return (
            <div className="MicrophoneButton">   
                <span className={this.badgeClass} />
                <img src={`${microphoneUrl}`} 
                    className={this.imageClass}
                    onMouseDown={this.handlePress}
                    onMouseUp={this.handlePress} />
            </div>
        );
    }
}