import * as React from 'react';
import { connect } from 'react-redux';
import { MicrophoneButton, Input } from '@components';
import * as counterActions from '@actions';
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
    increase: () => void;
    decrease: () => void;
}

class RecognizerComponent extends React.Component<RecognizerProps, RecognizerState> {
    recognition: SpeechRecognition = new SpeechRecognition();
    speechRecognitionList: SpeechGrammarList = new SpeechGrammarList();
    availableCommands = [
        'increase',
        'decrease'
    ];
    grammar: string = `
        #JSGF V1.0; grammar actions; 
        public <action> = increase | decrease;
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

    handleResult = (event: SpeechRecognitionEvent) => {
        const list: SpeechRecognitionResultList = event.results;
        const action = list[0][0].transcript;
        
        if (this.availableCommands.includes(action)) {
            this.props[action]();
        }
    }

    handleStartRecording = () => {
        if (this.state.recognitionState === RecognitionStates.DISCONNECTED) {
            this.setState({
                recognitionState: RecognitionStates.CONNECTING
            });
            this.recognition.start();
        }
    }

    get isRecording() {
        return this.state.recognitionState === RecognitionStates.CONNECTED;
    }

    render() {
        return (
            <div className="Recognizer">
                <p className="Recognizer__message">
                    You can say any command by your voice!
                </p>
                <div className="Recognizer__dashboard">
                    <MicrophoneButton 
                        recording={this.isRecording}
                        onStart={this.handleStartRecording} />
                    <Input placeholder={this.props.welcome}
                        command={this.props.command} />
                </div>
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

const mapDispatchToProps = dispatch => {
    return {
        increase: () => dispatch(counterActions.increase()),
        decrease: () => dispatch(counterActions.decrease())
    };
};

export const Recognizer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecognizerComponent);