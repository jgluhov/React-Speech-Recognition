if ('SpeechRecognition' in window) {
    window['SpeechRecognition'] = SpeechRecognition;
} else if ('webkitSpeechRecognition' in window) {
    window['SpeechRecognition'] = webkitSpeechRecognition;
} else {
    throw new Error('Your browser does not support SpeechRecognition API');
}

if ('SpeechGrammarList' in window) {
    window['SpeechGrammarList'] = SpeechGrammarList;
} else if ('webkitSpeechGrammarList' in window) {
    window['SpeechGrammarList'] = webkitSpeechGrammarList;
} else {
    throw new Error('Your browser does not support SpeechRecognition API');
}
