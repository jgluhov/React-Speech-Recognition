import * as React from 'react';
import './styles.scss';
import { DictaphoneService } from './DictaphoneService';
import { DictaphoneButton } from './DictaphoneButton';

interface DictaphoneProps {}

export class Dictaphone extends React.Component<DictaphoneProps, {}> {
    dictaphone: DictaphoneService = new DictaphoneService();

    constructor(props: DictaphoneProps) {
        super(props);
    }

    handleStart = () => {
        this.dictaphone.startListening();
    }

    handleStop = () => {
        this.dictaphone.stopListening();
    }

    render() {
        return (
            <div className="Dictaphone">
                <DictaphoneButton 
                    handleStart={this.handleStart}
                    handleStop={this.handleStop} />
            </div>
        );
    }
}