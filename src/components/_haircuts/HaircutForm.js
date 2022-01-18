import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ProductForm({ haircutInfo, onTextChange, onSubmitForm, error }) {
    const { name, description } = haircutInfo;

    return (
        <form onSubmit={event => onSubmitForm(event)} style={{ padding: 20 }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={12} sx={{ width: '100%' }}>
                    <TextField 
                        fullWidth
                        required
                        name="name" 
                        label="Haircut Name" 
                        variant="outlined"
                        value={name}
                        onChange={event => onTextChange(event)}
                    />
                </Grid>
                <Grid item sm={12} md={12} sx={{ width: '100%' }}>
                    <TextField 
                        fullWidth
                        required
                        multiline
                        rows={5}
                        name="description" 
                        label="Haircut Description" 
                        variant="outlined"
                        value={description}
                        onChange={event => onTextChange(event)}
                    />
                </Grid>
                {error !== null && (
                    <Grid item sm={12} md={12} sx={{ width: '100%' }}>
                        <Box component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#f294a5',
                                color: 'white',
                                height: 50,
                                width: '100%',
                                filter: 'brightness(85%)'
                            }}
                        >
                            <Typography variant="h5" align="center">Image is required!</Typography>
                        </Box>
                    </Grid>
                )}
                <Grid item sm={12} md={12} sx={{ width: '100%' }}>
                    <Button type="submit" variant="contained" fullWidth>Save Haircut</Button> 
                </Grid>
            </Grid>
        </form>
    )
}

export default ProductForm
