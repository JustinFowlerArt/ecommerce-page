import { Typography, IconButton, Avatar, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeProduct } from '../cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import { iCartItem } from '../../types/cart/cartItem';

export const CartItem = ({ item  }: {item: iCartItem}) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(removeProduct(item.product.id));
    };

    return (
        <Stack
            direction='row'
            spacing={2}
            justifyContent='space-between'
            alignItems='center'
        >
            <Avatar
                variant='rounded'
                src={`images/${item.product.images[0].url}`}
                alt={item.product.images[0].title}
                sx={{ width: '50px', height: '50px' }}
            />
            <Stack maxWidth={'60%'}>
                <Typography noWrap={true}>{item.product.title}</Typography>
                <Typography>
                    ${item.product.salePrice} x {item.quantity} {' '}
                    <Typography
                        component='span'
                        sx={{
                            fontWeight: 'bold',
                            color: 'secondary.contrastText',
                        }}
                    >
                        ${item.product.salePrice * item.quantity}
                    </Typography>
                </Typography>
            </Stack>
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
};
