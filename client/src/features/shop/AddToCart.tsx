import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, Stack } from '@mui/material';
import { Counter } from '../cart/Counter';
import { iProduct } from './Product';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useState } from 'react';

interface Props {
    product: iProduct;
}
export const AddToCart = ({ product }: Props) => {
    const [count, setCount] = useState(0);
    // The `state` arg is correctly typed as `RootState` already
    //  const count = useAppSelector(state => state.cart.value);
    //  const dispatch = useAppDispatch();

    const handleClick = (value: number) => {
        if (count + value < 0) return;
        setCount(count + value);
    };

    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent='space-between'
            alignItems='center'
        >
            <Counter count={count} handleClick={handleClick} />
            <Button
                variant='contained'
                startIcon={<ShoppingCartOutlinedIcon />}
                fullWidth={true}
                sx={{
                    padding: { xs: '16px 0', md: '12px 0' },
                    borderRadius: '10px',
                    boxShadow: '0 15px 30px 10px hsla(26 100% 55% / 25%)',
                    '&:hover': {
                        backgroundColor: 'primary.light',
                        boxShadow: '0 15px 30px 10px hsla(26 100% 55% / 25%)',
                    },
                }}
                
            >
                Add to cart
            </Button>
        </Stack>
    );
};
