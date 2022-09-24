import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const NavigationButton = styled(IconButton, {
    shouldForwardProp: prop => prop !== 'open' && prop !== 'direction',
})<{ open?: boolean; direction?: string }>(({ theme, open, direction }) => ({
    position: 'absolute',
    left: direction === 'right' ? '' : 35,
    right: direction === 'left' ? '' : 35,
    top: '50%',
    transform: `translate(${direction === 'right' ? '50%' : '-50%'}, -50%)`,
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: 'white',
    },
    [theme.breakpoints.up('md')]: {
        display: open ? '' : 'none',
        left: direction === 'right' ? '' : 0,
        right: direction === 'left' ? '' : 0,
    }
})) as typeof IconButton;


