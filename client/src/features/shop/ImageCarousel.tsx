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
import { Image } from '../../types/shared/image';
import { NavigationButton } from '../../components/NavigationButton';
import { useEffect, useState } from 'react';

interface Props {
    images: Image[];
    imageIndex: number;
    open?: boolean;
    handleOpen?: (index: number) => void;
    handleClose?: () => void;
}

export const ImageCarousel = ({
    images,
    imageIndex,
    open,
    handleOpen,
    handleClose,
}: Props) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCurrentImageIndex(imageIndex);
    }, [imageIndex]);

    const previousSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        setCurrentImageIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        setCurrentImageIndex(index);
    };

    const selectSlide = (index: number) => {
        setCurrentImageIndex(index);
    };

    const theme = useTheme();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Box position='relative' width='100%'>
                <img
                    onClick={
                        handleOpen && md
                            ? () => handleOpen(currentImageIndex)
                            : undefined
                    }
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
                    src={`images/${images[currentImageIndex].url}`}
                    alt='sneakers'
                />
                <NavigationButton
                    open={open}
                    direction='left'
                    onClick={previousSlide}
                >
                    <KeyboardArrowLeftRoundedIcon
                        sx={{
                            color: 'secondary.contrastText',
                            '&:hover': {
                                color: 'primary.main',
                            },
                        }}
                    />
                </NavigationButton>
                <NavigationButton
                    open={open}
                    direction='right'
                    onClick={nextSlide}
                >
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
                    onClick={handleClose ? handleClose : undefined}
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
                    overflowY: 'visible',
                }}
                cols={4}
                gap={open ? 24 : 20}
                rowHeight='auto'
            >
                {images.map((item, index) => (
                    <ImageListItem
                        key={index}
                        sx={{
                            borderRadius: '10px',
                            outline:
                                index === currentImageIndex
                                    ? '2px solid hsl(26, 100%, 55%)'
                                    : 'none',
                            '&:hover': {
                                filter:
                                    index !== currentImageIndex
                                        ? 'contrast(50%) brightness(1.35)'
                                        : 'none',
                            },
                        }}
                    >
                        <img
                            onClick={() => selectSlide(index)}
                            style={{
                                borderRadius: '10px',
                                cursor: 'pointer',
                                filter:
                                    index === currentImageIndex
                                        ? 'contrast(25%) brightness(1.75)'
                                        : 'none',
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
