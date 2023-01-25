import React, { useEffect, useState } from "react";
import "../App";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
const navigate = useNavigate(); 


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url,
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return ( 
    <Container fixed>
      {loading ? (
        <div className="progress">
          {" "}
          <LinearProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            
          </Grid>
          {data.map((country) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              key={country.name.common} {...country}
            >
            <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt={country.name.common}
        image={country.flags.png}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {country.name.common}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {`Population :${country.population}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {`Languages :${country.languages}`}
        </Typography>
        {/* Learn more button */}
        <Button color="primary"  onClick={()=>{navigate("/CountryInfoPage")}} >
              Learn more
          </Button> 
      </CardContent>
    </Card>    
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  

  );
};

export default Countries;
