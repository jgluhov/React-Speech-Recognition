import * as React from 'react';
import * as classNames from 'classnames';
import './styles.scss';
import * as microphoneUrl from './img/microphone.png';

interface MicrophoneProps {
    recording: boolean;
    onStart: () => void;
}

export class MicrophoneButton extends React.Component<MicrophoneProps, {} > {
    handlePress = (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();

        if (!this.props.recording) {
            this.props.onStart();
        }
    }

    get btnClass() {
        return classNames({
            'MicrophoneButton': true,
            'MicrophoneButton--pressed': this.props.recording
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
            'MicrophoneButton__image--pressed': this.props.recording
        });
    }

    render() {
        return (
            <div className="MicrophoneButton">   
                <span className={this.badgeClass} />
                <img src={`${microphoneUrl}`} 
                    className={this.imageClass}
                    onMouseDown={this.handlePress} />
            </div>
        );
    }
}