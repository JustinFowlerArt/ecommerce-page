import * as React from 'react';
import {
    Popover,
    Typography,
    IconButton,
    Button,
    Divider,
    Avatar,
    Stack,
    useTheme,
    useMediaQuery,
    Badge,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton aria-describedby={id} onClick={handleClick}>
                <Badge badgeContent={3} color='primary'>
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
                    <Typography variant='h4'>Cart </Typography>
                    <Divider
                        sx={{
                            marginLeft: '-24px !important',
                            marginRight: '-24px !important',
                        }}
                    />
                    <Stack
                        direction='row'
                        spacing={2}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Avatar
                            variant='rounded'
                            src='/images/image-product-1-thumbnail.jpg'
                            alt='shoes'
                            sx={{ width: '50px', height: '50px' }}
                        />
                        <Stack maxWidth={'60%'}>
                            <Typography noWrap={true}>
                                Fall Limited Edition Sneakers
                            </Typography>
                            <Typography>
                                $125.00 x 3{' '}
                                <Typography
                                    component='span'
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'secondary.contrastText',
                                    }}
                                >
                                    $375
                                </Typography>
                            </Typography>
                        </Stack>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
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
                    >
                        Checkout
                    </Button>
                </Stack>
            </Popover>
        </div>
    );
}
