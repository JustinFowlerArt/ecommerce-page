import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, Stack } from '@mui/material';
import { Counter } from './Counter';
import { iProduct } from '../../types/shop/product';
import { useAppDispatch } from '../../app/hooks';
import { useState } from 'react';
import { addItem } from './cartSlice';

export const AddToCart = ({ product }: {product: iProduct}) => {
    const [count, setCount] = useState(0);

    const dispatch = useAppDispatch();

    const handleClick = (value: number) => {
        if (count + value < 0) return;
        setCount(count + value);
    };

    const handleSubmit = () => {
        const addedItem = {...product}
        addedItem.quantity = count;
        dispatch(addItem(addedItem));
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
                onClick={handleSubmit}
                disabled={count === 0}
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
