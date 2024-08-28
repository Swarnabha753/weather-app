import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {

    const INIT_URL = "https://media.istockphoto.com/id/1135335888/photo/bad-air-with-pm-2-5-dust-in-the-atmosphere-in-the-city.jpg?s=2048x2048&w=is&k=20&c=4ncF4MX5OtjVjTSMYc__X68z4_aDufchdT29In8Aap8=";
    
    const HOT_URL = "https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/0FpL4PYE05/uq-contact-el-nino-summer-weather-headline-2560x1440.jpg";
    const COLD_URL = "https://cdn.pixabay.com/photo/2023/11/08/05/46/winter-8373941_640.jpg";
    const RAINY_URL = "https://wallpapers.com/images/hd/rain-4k-7dp169yp1o1sf3yx.jpg";

    return (
    <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
    <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h3>{info.city}
            {
                info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon />: <AcUnitIcon />
            }
        </h3>
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature : {info.temp}&deg;C</p>
        <p>Humidity : {info.humidity}</p>
        <p>Min Temp : {info.tempMin}&deg;C</p>
        <p>Max Temp : {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
    </CardContent>
    </Card>
        </div>
    </div>
    );
}