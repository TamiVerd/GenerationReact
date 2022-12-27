import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Paper from '@mui/material/Paper';

import '../hojasDeEstilo/OtraTarjeta.css';

import { TagsComponent } from '.';

import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




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

export default function OtraTarjetaComponent() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        P
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Veterinaria Los Pillines"
                subheader="Comuna_____"
            />

            <div className='imagenVet'>
                <img
                height="230"
                src={require('../image/beagle-3.jpg')}
                alt='imagenVeterinaria' />
            </div>

            <CardContent>

                <Typography variant="body2" color="text.secondary">
                    Presentacion veterinaria
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Ver mas"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <div className='contenedorInfo'>


                        <Item>
                            <TagsComponent />
                        </Item>


                    </div>

                    <div className='contenedorInfo'>

                                <IconButton aria-label="Ubicacion">
                                    <MapIcon />
                                </IconButton>
                                <Typography paragraph>
                                    Vicuña Mackenna #445, La Florida
                                </Typography>
                        
                    </div>

                    <div className='contenedorInfo'>

                        
                                <IconButton aria-label="Horario">
                                    <AccessTimeIcon />
                                </IconButton>
                                <Typography paragraph>
                                    Lunes a domingo: 06:00 a 14:00 / 15:00 a 20:00 hrs
                                </Typography>
                            

                    </div>

                    <div className='contenedorInfo'>

                        <IconButton aria-label="Ubicacion">
                            <PermContactCalendarIcon />
                        </IconButton>
                        <Typography paragraph>
                            Telefono: +56 9 823 56782 / 2 456 67414
                            Correo: los.pillinesvet@gmail.com
                        </Typography>

                    </div>


                    <div className='contenedorInfo'>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur...
                    </Typography>
                    </div>
                    <button
                        type="button"
                        class="btn btn-success"
                    >
                        Ver mas
                    </button>
                </CardContent>
            </Collapse>
        </Card>
    );
};

