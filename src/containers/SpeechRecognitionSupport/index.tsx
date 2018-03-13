import * as React from 'react';
import { Jumbotron } from '@components';

interface SpeechRecognitionSupportState {
    supported: boolean;
}

export class SpeechRecognitionSupport extends React.Component<{}, SpeechRecognitionSupportState> {
    state = {
        supported: true
    };

    componentWillMount() {
        if ('SpeechRecognition' in window) {
            window['SpeechRecognition'] = SpeechRecognition;
        } else if ('webkitSpeechRecognition' in window) {
            window['SpeechRecognition'] = webkitSpeechRecognition;
        } else {
            return this.setState({ supported: false });
        }
        
        if ('SpeechGrammarList' in window) {
            window['SpeechGrammarList'] = SpeechGrammarList;
        } else if ('webkitSpeechGrammarList' in window) {
            window['SpeechGrammarList'] = webkitSpeechGrammarList;
        }
    }

    render() {
        return (
            this.state.supported ? this.props.children : 
                <Jumbotron message={'Your browser does not support SpeechRecognition API'} />
        );
    }
}