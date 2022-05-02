import React, { useState } from 'react';
import { StyledCardComponent } from './StyledCards';

import { styled } from '@mui/system';
import { fetchRandomFact } from '../../../lib/catsFetcher';
import { 
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Tooltip
} from '@mui/material'

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className}}/>
))`
& .MuiTooltip-tooltip {
  background: gray;
}
`;
const CardComponent = ({ cat }) => {
    
    const [ randomFact, setRandomFact ] = useState('');

    const showRandomFact = async () => {
        const { fact } = await fetchRandomFact();
        setRandomFact(fact);
        return randomFact;
    }

    return (
        <StyledCardComponent>
            <StyledTooltip 
                title={randomFact}
                onOpen={() => showRandomFact()}
                arrow
            >
                <Card sx={{ maxWidth: 345 }} className='card'>
                    <CardActionArea className='cardArea'>
                        <CardContent className='cardContent'>
                            <Typography 
                                variant="h5"
                                component="div"
                                align='center'
                            >
                                {cat.breed}
                            </Typography>
                            <Typography 
                                variant='subtitle2'
                                align='center'
                                component="div"
                            >
                                {cat.country}
                            </Typography>
                            <Typography 
                                variant='body2'
                                align='center'
                            >
                                {cat.origin}
                            </Typography>
                            <Typography
                                variant='overline'
                                display='block'
                                align='center'
                            >
                                {cat.coat}
                            </Typography>
                            <Typography 
                                variant='caption'
                                display='block'
                                align='center' 
                            >
                                {cat.pattern}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledTooltip>
        </StyledCardComponent>
    );
}

export default CardComponent;