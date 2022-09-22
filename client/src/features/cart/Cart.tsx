import * as React from 'react';
import {
    Popover,
    Typography,
    IconButton,
    Button,
    Divider,
    Avatar,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/system';
import { truncate } from 'fs';

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

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton aria-describedby={id} onClick={handleClick}>
                <ShoppingCartOutlinedIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                anchorReference='anchorPosition'
                disableScrollLock={true}
                onClose={handleClose}
                marginThreshold={8}
                anchorPosition={{
                    top: 72,
                    left: 6,
                }}
                // anchorOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'center',
                // }}
                // transformOrigin={{
                //     vertical: -20,
                //     horizontal: 0,
                // }}
            >
                <Stack paddingX={3} paddingY={4} spacing={2}>
                    <Typography variant='h3'>Cart </Typography>
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
                            <Typography>$125.00 x 3 <Typography component='span' sx={{ fontWeight: 'bold', color: 'secondary.contrastText'}}>$375</Typography></Typography>
                        </Stack>
                        <IconButton >
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                    <Button
                        variant='contained'
                        sx={{ padding: '16px 0', borderRadius: '10px' }}
                        fullWidth={true}
                    >
                        Checkout
                    </Button>
                </Stack>
            </Popover>
        </div>
    );
}
