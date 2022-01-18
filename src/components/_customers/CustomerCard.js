import React from 'react';
import { capitalCase } from 'change-case';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
}));

function CustomerCard({ customer }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: '90%' }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {capitalCase(customer.user[0])}
                </Avatar>
                }
                title={capitalCase(customer.user)}
                subheader={customer.email}
            />
            <CardActions disableSpacing>
                <Typography variant="body2">Expand to read {capitalCase(customer.user.split(' ')[0])}'s feedbacks</Typography>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {customer.feedbacks.map((feedback, index) =>
                        <Box key={index}>
                            <Typography paragraph><strong>Feedback</strong></Typography>
                            <Typography paragraph>
                                {feedback.message}
                            </Typography>
                        </Box>    
                    )}
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default CustomerCard
