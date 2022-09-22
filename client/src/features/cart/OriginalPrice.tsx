import { styled } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export const OriginalPrice = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
        fontWeight: 'bold',
        color: theme.palette.secondary.main,
        textDecoration: 'line-through'
    })
);
