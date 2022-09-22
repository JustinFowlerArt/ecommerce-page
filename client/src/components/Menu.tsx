import * as React from 'react';
import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Drawer,
} from '@mui/material';

export default function Menu() {
    const [state, setState] = React.useState(false);

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState(open);
        };

    return (
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton onClick={toggleDrawer(true)}>
                <img src='images/icon-menu.svg' alt='open' />
            </IconButton>
            <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
                <Box
                    sx={{ width: 250 }}
                    role='presentation'
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem>
                            <ListItemButton onClick={toggleDrawer(false)} sx={{
                                marginBottom: '1rem'
                            }}>
                                <img src='images/icon-close.svg' alt='close' />
                            </ListItemButton>
                        </ListItem>
                        {[
                            'Collections',
                            'Men',
                            'Women',
                            'About',
                            'Contact',
                        ].map(text => (
                            <ListItem dense key={text}>
                                <ListItemButton href='#'>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
