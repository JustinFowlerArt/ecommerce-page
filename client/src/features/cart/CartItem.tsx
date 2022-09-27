import { Typography, IconButton, Avatar, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem } from '../cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import { iProduct } from '../../types/shop/product';

export const CartItem = ({ item  }: {item: iProduct}) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(removeItem(item.id));
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
                src={`images/${item.images[0].url}`}
                alt={item.images[0].title}
                sx={{ width: '50px', height: '50px' }}
            />
            <Stack maxWidth={'60%'}>
                <Typography noWrap={true}>{item.title}</Typography>
                <Typography>
                    {item.quantity > 1 && `$${item.salePrice} x ${item.quantity} `}
                    <Typography
                        component='span'
                        sx={{
                            fontWeight: 'bold',
                            color: 'secondary.contrastText',
                        }}
                    >
                        ${item.salePrice * item.quantity}
                    </Typography>
                </Typography>
            </Stack>
            <IconButton onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
};
