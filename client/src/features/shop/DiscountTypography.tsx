import { styled } from '@mui/material/styles';
import { Typography, TypographyProps } from '@mui/material';

export const DiscountTypography = styled(Typography)<TypographyProps>(
    ({ theme }) => ({
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        padding: '4px 8px',
        borderRadius: '8px',
        [theme.breakpoints.up('md')]: {
            fontSize: '.75rem'
        }
    })
);
