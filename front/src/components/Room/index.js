import { Button, Card, CardActionArea, CardContent, CardMedia, Typography, CardActions } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "../Carousel";

const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        margin: 10
    },
});

function Room({ thumbs, title, description, price }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Carousel thumbs={thumbs}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    Preço:
                </Button>
                <Button size="small" color="primary">
                    {price}
                </Button>
            </CardActions>
        </Card>
    );
}

export default Room;