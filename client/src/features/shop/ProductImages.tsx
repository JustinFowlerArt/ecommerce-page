import {
    ImageList,
    ImageListItem,
    useTheme,
    useMediaQuery,
    Box,
    IconButton,
} from '@mui/material';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Images } from './Product';
import { NavigationButton } from './NavigationButton';

interface Props {
    images: Images[];
    handleOpen: () => void;
    handleClose?: () => void;
    open?: boolean;
}

export const ProductImages = ({
    images,
    handleOpen,
    handleClose,
    open,
}: Props) => {
    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box position='relative' width='100%'>
                <img
                    onClick={!open && md ? handleOpen : undefined}
                    style={
                        md
                            ? {
                                  borderRadius: '10px',
                                  cursor: !open ? 'pointer' : 'default',
                              }
                            : {
                                  height: '300px',
                                  objectFit: 'cover',
                              }
                    }
                    width='100%'
                    src={`images/${images[0].url}`}
                    alt='sneakers'
                />
                <NavigationButton open={open} direction='left'>
                    <KeyboardArrowLeftRoundedIcon
                        sx={{
                            color: 'secondary.contrastText',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </NavigationButton>
                <NavigationButton open={open} direction='right'>
                    <KeyboardArrowRightRoundedIcon
                        sx={{
                            color: 'secondary.contrastText',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </NavigationButton>
                <IconButton
                    onClick={handleClose}
                    sx={{
                        display: open ? '' : 'none',
                        position: 'absolute',
                        top: -40,
                        right: -12,
                    }}
                >
                    <CloseIcon
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </IconButton>
            </Box>
            <ImageList
                sx={{
                    width: '100%',
                    padding: open ? '8px 32px' : '',
                    display: { xs: 'none', md: 'grid' },
                }}
                cols={4}
                gap={open ? 24 : 20}
                rowHeight='auto'
            >
                {images.map(item => (
                    <ImageListItem
                        key={item.title}
                        sx={{
                            '&:active': {
                                filter: 'contrast(25%) brightness(1.75)',
                                border: '2px solid hsl(26, 100%, 55%)',
                                borderRadius: '10px',
                            },
                            '&:hover': {
                                filter: 'contrast(50%) brightness(1.35)',
                            },
                        }}
                    >
                        <img
                            style={{
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                            src={`images/${item.url}?w=50&h=50&fit=crop&auto=format`}
                            alt={item.title}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
};
