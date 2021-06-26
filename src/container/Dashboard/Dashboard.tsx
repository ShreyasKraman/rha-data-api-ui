import React, {useEffect, useState} from 'react';
import axios from 'axios'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import DougnutChart from '../../components/Charts/Dougnut/Dougnut';

const DashboardContainer = () => {

    const [countryData, setCountryData] = useState({});
    
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
                const {data} = response;
                const continents = {};
                data.map(country=>{
                    if(country.region){
                        if(continents[country.region] !== undefined) continents[country.region]++;
                        else continents[country.region] = 0;
                    }
                })
                setCountryData(continents);
            })
            .catch(error=>console.log(error));
    },[])

    return(
        <Container maxWidth="lg">
            <Typography variant='h4' align='center'>
                Welcome to Robinhood Dashboard
            </Typography>
            <DougnutChart data={countryData}/>
        </Container>
    )

}

export default DashboardContainer;