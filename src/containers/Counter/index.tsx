import { Button } from '@components';
import * as React from 'react';

interface CounterState {
    count: number;
}

export class Counter extends React.Component<{}, CounterState> {
    state = {
        count: 0
    };

    public render() {
        return (
            <div>
                <div className="Counter__screen">
                    {this.state.count}
                </div>
                <div className="Counter__dashboard">
                    <Button text={'Increase'} handleClick={this.increase} />
                    <Button text={'Decrease'} handleClick={this.decrease} />
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