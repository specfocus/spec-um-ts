import { KeyPath, State } from '@um/base/types';

export default (keys: KeyPath, state: State, amount?: number): State => {
    const value: number = state.getIn(keys);

    if (typeof value !== 'number') {
        return state;
    }

    return state.setIn(keys, value - (amount || 1));
};