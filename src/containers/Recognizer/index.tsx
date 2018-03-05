import * as React from 'react';
import { connect } from 'react-redux';
import { MicrophoneButton, Input } from '@components';
import './styles.scss';

enum RecognitionStates {
    DISCONNECTED,
    CONNECTING,
    CONNECTED
}

interface RecognizerState {
    recognitionState: RecognitionStates;
}

interface RecognizerProps {
    command: string;
    welcome: string;
}

class RecognizerComponent extends React.Component<RecognizerProps, RecognizerState> {
    recognition: SpeechRecognition = new SpeechRecognition();
    speechRecognitionList: SpeechGrammarList = new SpeechGrammarList();
    grammar: string = `
        #JSGF V1.0; grammar actions; 
        public <action> = decrease | increase;
    `;
    state: RecognizerState = {
        recognitionState: RecognitionStates.DISCONNECTED
    };

    componentDidMount() {
        this.speechRecognitionList.addFromString(this.grammar, 1);
        this.recognition.grammars = this.speechRecognitionList;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;
        this.recognition.onend = this.handleEnd;
        this.recognition.onstart = this.handleStart;
        this.recognition.onresult = this.handleResult;
    }

    handleStart = () => {
        this.setState({
            recognitionState: RecognitionStates.CONNECTED
        });
    }

    handleEnd = (e) => {
        this.setState({
            recognitionState: RecognitionStates.DISCONNECTED
        });
    }

    handleResult = (e) => {
        console.log(e);
    }

    handleStartRecording = () => {
        if (this.state.recognitionState === RecognitionStates.DISCONNECTED) {
            this.setState({
                recognitionState: RecognitionStates.CONNECTING
            });
            this.recognition.start();
        }
    }

    handleStopRecording = () => {
        if (this.state.recognitionState === RecognitionStates.CONNECTED) {
            this.recognition.stop();
        }
    }

    get isRecording() {
        return this.state.recognitionState === RecognitionStates.CONNECTED;
    }

    render() {
        return (
            <div className="Recognizer">
                <MicrophoneButton 
                    recording={this.isRecording}
                    onStart={this.handleStartRecording} 
                    onStop={this.handleStopRecording} />
                <Input placeholder={this.props.welcome}
                    command={this.props.command} />
            </div>
        );
    }
}

const mapStateToProps = ({recognizer: recognizerState}) => {
    const { welcome, command } = recognizerState;
    
    return {
        welcome, 
        command
    };
};

export const Recognizer = connect(
    mapStateToProps
)(RecognizerComponent);