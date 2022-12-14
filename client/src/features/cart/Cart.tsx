import * as React from 'react';
import {
    Popover,
    Typography,
    IconButton,
    Button,
    Divider,
    Stack,
    useTheme,
    useMediaQuery,
    Badge,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectAll, checkout } from '../cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CartItem } from './CartItem';

export default function Cart() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );
    const [message, setMessage] = React.useState('Your cart is empty');

    const contents = useAppSelector(selectAll);
    const dispatch = useAppDispatch();

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMessage('Your cart is empty');
    };

    const handleCheckout = () => {
        setMessage('Order received. Thanks for shopping!');
        dispatch(checkout());
    };

    return (
        <div>
            <IconButton aria-label='Open cart' onClick={handleClick}>
                <Badge badgeContent={contents.length} color='primary'>
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                disableScrollLock={true}
                onClose={handleClose}
                marginThreshold={8}
                elevation={16}
                sx={{
                    '& .MuiPaper-root': {
                        maxWidth: 'calc(100% - 16px) !important',
                        minWidth: xs ? 'calc(100% - 16px) !important' : '',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={
                    md
                        ? { vertical: 0, horizontal: 'center' }
                        : { vertical: -24, horizontal: 'center' }
                }
            >
                <Stack paddingX={3} paddingY={4} spacing={2}>
                    <Typography variant='h4'>Cart</Typography>
                    <Divider
                        sx={{
                            marginLeft: '-24px !important',
                            marginRight: '-24px !important',
                        }}
                    />
                    {contents.length === 0 ? (
                        <Typography
                            color='secondary.dark'
                            fontWeight='bold'
                            paddingX={10}
                            paddingY={6}
                            align='center'
                        >
                            {message}
                        </Typography>
                    ) : (
                        <>
                            {contents.map(item => (
                                <CartItem key={item.id} item={item} />
                            ))}
                            <Button
                                variant='contained'
                                sx={{
                                    padding: { xs: '16px 0', md: '12px 0' },
                                    borderRadius: '10px',
                                    '&:hover': {
                                        backgroundColor: 'primary.light',
                                    },
                                }}
                                fullWidth={true}
                                onClick={handleCheckout}
                            >
                                Checkout
                            </Button>
                        </>
                    )}
                </Stack>
            </Popover>
        </div>
    );
}
