import { Typography, IconButton, Avatar, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { iProduct } from '../../types/shop/product';
import { removeProduct } from '../cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';

export const CartItem = ({ product }: {product: iProduct}) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(removeProduct(product.id));
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
                src={`images/${product.images[0].url}`}
                alt={product.images[0].title}
                sx={{ width: '50px', height: '50px' }}
            />
            <Stack maxWidth={'60%'}>
                <Typography noWrap={true}>{product.title}</Typography>
                <Typography>
                    ${product.salePrice} x {product.quantity} {' '}
                    <Typography
                        component='span'
                        sx={{
                            fontWeight: 'bold',
                            color: 'secondary.contrastText',
                        }}
                    >
                        ${product.salePrice * product.quantity}
                    </Typography>
                </Typography>
            </Stack>
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
};
