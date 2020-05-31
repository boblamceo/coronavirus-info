import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 280,
    },
    roboto: {
        fontFamily: 'Roboto Mono',
        fontSize: 12,
    },
    title: {
        fontFamily: 'Roboto Mono',
        fontSize: 19,
    },
});

const NewsCard = ({ title, content, date, source }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                /> */}
                <CardContent>
                    <a href={source}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                    </a>
                    <Typography style={{ textAlign: 'center' }} className={classes.roboto}>
                        {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.roboto}>
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default NewsCard;
