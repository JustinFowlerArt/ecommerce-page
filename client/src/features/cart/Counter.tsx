import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment } from './cartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Counter = () => {
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector(state => state.cart.value);
    const dispatch = useAppDispatch();

    return (
        <Box
            sx={{
                backgroundColor: 'secondary.light',
                borderRadius: '10px',
            }}
        >
            <Stack
                direction='row'
                spacing={2}
                justifyContent='space-between'
                alignItems='center'
            >
                <IconButton
                    color='primary'
                    onClick={() => dispatch(decrement())}
                >
                    <RemoveIcon />
                </IconButton>
                <Typography variant='h3'>{count}</Typography>
                <IconButton
                    color='primary'
                    onClick={() => dispatch(increment())}
                >
                    <AddIcon />
                </IconButton>
            </Stack>
        </Box>
    );
};
