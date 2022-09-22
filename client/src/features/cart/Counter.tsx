import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment } from './cartSlice';

export const Counter = () => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(state => state.cart.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}
