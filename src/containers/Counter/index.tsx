import { connect } from 'react-redux';
import { CounterButton } from '@components';
import * as React from 'react';
import * as counterActions from '@actions';
import './styles.scss';

interface CounterProps {
    count: number;
    increaseCounter: () => void;
    decreaseCounter: () => void;
}

class CounterComponent extends React.Component<CounterProps, {}> {
    public render() {
        return (
            <div className="Counter">
                <div className="Counter__screen">
                    {this.props.count}
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
        this.props.increaseCounter();
    }

    private decrease = () => {
        this.props.decreaseCounter();
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(counterActions.increase()),
        decreaseCounter: () => dispatch(counterActions.decrease())
    };
};

export const Counter = connect(
    mapStateToProps, 
    mapDispatchToProps
)(CounterComponent);