import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const NavigationButton = styled(IconButton, {
    shouldForwardProp: prop => prop !== 'open' && prop !== 'direction',
})<{ open?: boolean; direction?: string }>(({ theme, open, direction }) => ({
    display: open ? '' : 'none',
    position: 'absolute',
    left: direction === 'right' ? '' : 0,
    right: direction === 'left' ? '' : 0,
    top: '50%',
    transform: `translate(${direction === 'right' ? '50%' : '-50%'}, -50%)`,
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: 'white',
    },
})) as typeof IconButton;


