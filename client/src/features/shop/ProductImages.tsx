import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { ImageCarousel } from './ImageCarousel';
import { Image } from '../../types/shared/image';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    p: 4,
    '&:focus-visible': {
        outline: 0,
    },
};

interface Props {
    images: Image[];
}

export const ProductImages = ({ images }: Props) => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const handleOpen = (index: number) => {
        setImageIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <ImageCarousel
                images={images}
                imageIndex={imageIndex}
                handleOpen={handleOpen}
            />
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box sx={style}>
                        <ImageCarousel
                            images={images}
                            imageIndex={imageIndex}
                            open={open}
                            handleClose={handleClose}
                        />
                    </Box>
                </Modal>
            </div>
        </>
    );
};
