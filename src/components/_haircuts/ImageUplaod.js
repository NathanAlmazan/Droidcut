import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageSearchTwoToneIcon from '@mui/icons-material/ImageSearchTwoTone';
import { styled } from '@mui/material/styles';

const ProductImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
  });

function ImageUpload({ imageFile, onImageChange, defaultImage }) {
    const [imageSource, setImageSource] = React.useState(null);

    React.useEffect(() => {
        if (imageFile !== null) {
            let reader = new FileReader();
            reader.readAsDataURL(imageFile);

            reader.onloadend = function (e) {
                setImageSource([reader.result]);
            };

        }
    }, [imageFile])

    return (
        <Box sx={{ pt: '100%', position: 'relative' }}>
            <ProductImgStyle 
                alt="product image" 
                src={!imageSource ? defaultImage : imageSource} 
            />
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<ImageSearchTwoToneIcon />}
                    sx={{
                        zIndex: 9,
                        bottom: 16,
                        right: 16,
                        position: 'absolute',
                        textTransform: 'uppercase'
                    }}
                >
                    Upload Image
                    <input 
                        type="file" 
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={event => onImageChange(event)}
                        hidden 
                    />
                </Button>
        </Box>
    )
}

export default ImageUpload
