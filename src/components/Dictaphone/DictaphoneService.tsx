export class DictaphoneService {
    recongnition: SpeechRecognition;

    constructor() {
        if ('SpeechRecognition' in window) {
            this.recongnition = new SpeechRecognition();
        } else if ('webkitSpeechRecognition' in window) {
            this.recongnition = new webkitSpeechRecognition();
        }

        this.recongnition.addEventListener('result', this.handleResults);
    }

    handleResults = (e: Event) => {
        console.log(e);
    }

    startListening() {
        this.recongnition.start();
    }

    stopListening() {
        this.recongnition.stop();
    }
}