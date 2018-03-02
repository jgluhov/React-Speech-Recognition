import { CounterButton } from '@components';
import * as React from 'react';
import './styles.scss';

interface CounterState {
    count: number;
}

export class Counter extends React.Component<{}, CounterState> {
    state = {
        count: 0
    };

    public render() {
        return (
            <div className="Counter">
                <div className="Counter__screen">
                    {this.state.count}
                </div>
                <div className="Counter__dashboard">
                    <CounterButton text={'Decrease'} 
                        type={'decrease'} 
                        handleClick={this.decrease} />
                    <CounterButton text={'Increase'} 
                        type={'increase'} 
                        handleClick={this.increase} />
                </div>
            </div>
        );
    }

    private increase = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    private decrease = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
}