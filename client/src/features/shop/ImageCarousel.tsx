import * as React from 'react';
import { Box, Modal } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    p: 4,
    '&:focus-visible': {
        outline: 0,
    }
};

import { Images } from './Product';
import { ProductImages } from './ProductImages';

interface Props {
    images: Images[];
}

export const ImageCarousel = ({ images }: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ProductImages
                images={images}
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
                        <ProductImages
                            images={images}
                            open={open}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                        />
                    </Box>
                </Modal>
            </div>
        </>
    );
};
