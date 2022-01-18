import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

//firebase 
import { useFirebaseApp } from '../../contexts/FirebaseProvider';
import { ref, set, onValue } from "firebase/database";
import HaircutModel from '../../models/HaircutModel';

//icons
import CloseIcon from '@mui/icons-material/Close';

//components
import Page from '../../components/Page';
import ImageUpload from '../../components/_haircuts/ImageUplaod';
import HaircutForm from '../../components/_haircuts/HaircutForm';

function EditHaircut() {
    const { uid } = useParams();
    const [newHaircut, setNewHaircut] = useState({
        name: '',
        description: '',
        image: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [defaultImage, setDefaultImage] = useState("https://res.cloudinary.com/nathanalz/image/upload/v1642060063/DroidCut/haircut_urvpvs.png");
    const [errors, setErrors] = useState(null);
    const { database } = useFirebaseApp();
    const navigate = useNavigate();

    useEffect(() => {
        const haircutRef = ref(database, 'Haircuts/' + uid);
        onValue(haircutRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const currentHaircut = new HaircutModel(data.name, data.description);
                currentHaircut.setImage(data.image);

                setNewHaircut(state => currentHaircut.getHaircut());
                setDefaultImage(state => data.image);
            } else {
                navigate('/404');
            }
        })
    }, [database, uid, navigate])

    function onTextChange(event) {
        setNewHaircut({ ...newHaircut, [event.target.name]: event.target.value });
    }

    function onImageChange(event) {
        setErrors(null);
        setImageFile(event.target.files[0]);
    }

    async function uploadProductImage() {
        const data = new FormData();
        data.append('file', imageFile);
        data.append('upload_preset', 'yys2sx1c');
        data.append('cloud_name', 'nathanalz');

        const response = await axios.post('https://api.cloudinary.com/v1_1/nathanalz/image/upload', data);
        const imageUrl = response.data.url;
        
        return imageUrl;
    }

    async function onSubmitForm(event) {
        event.preventDefault();

        const haircutData = new HaircutModel(newHaircut.name, newHaircut.description);

        if (!imageFile) {
            haircutData.setImage(defaultImage);
        } else {
            const imageUrl = await uploadProductImage();
            haircutData.setImage(imageUrl);
        }

        set(ref(database, 'Haircuts/' + uid), haircutData.getHaircut()).then(response => {
            navigate('/dashboard/app');
        }).catch(error => {
            console.log(error.message);
        });
    }

    function deleteHaircut() {
        set(ref(database, 'Haircuts/' + uid), null).then(response => {
            navigate('/dashboard/app');
        }).catch(error => {
            console.log(error.message);
        });
    }

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Page title="Haircut | Edit">
            <Container sx={{ mb: 5 }}>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 3
                    }}>
                        <Typography variant="h4" color="primary">Create Haircut</Typography>
                       <Stack direction="row" spacing={2}>
                        {!matches ? 
                            <IconButton onClick={event => navigate('/dashboard/app')} color="error">
                                <CloseIcon />
                            </IconButton>
                            :
                            <Button variant="contained" color="error" startIcon={<CloseIcon />} onClick={event => navigate('/dashboard/app')}>
                                Cancel
                            </Button> 
                            }

                            {!matches ? 
                            <IconButton onClick={event => deleteHaircut()} color="error">
                                <DeleteIcon />
                            </IconButton>
                            :
                            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={event => deleteHaircut()}>
                                Delete
                            </Button> 
                            }
                       </Stack>
                        
                    </Box>
                    <Card sx={{ width: '100%' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={5}>
                            <ImageUpload
                                imageFile={imageFile} 
                                onImageChange={event => onImageChange(event)} 
                                defaultImage={defaultImage}
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <HaircutForm
                                haircutInfo={newHaircut} 
                                onTextChange={event => onTextChange(event)} 
                                onSubmitForm={event => onSubmitForm(event)}
                                error={errors}
                            />
                        </Grid>
                    </Grid>
                    </Card>
                
            </Container>
        </Page>
    )
}

export default EditHaircut
