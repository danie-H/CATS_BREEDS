import React, { useEffect, useState } from 'react';
import { StyledFormControlComponent } from './StyledFormControl';

import { Box, styled } from '@mui/system';
import { CAT_ORIGIN } from '../../../constants/cats';

import { 
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Stack
} from '@mui/material'


const FormControlComponent = ({ selectedCatOrigin, onSelectCatOriginChange }) => {

    const [origins, setOrigins] = useState([]);

    useEffect(() => {
        onSelectCatOriginChange(origins);
    }, [origins]);

    const handleOriginSelection = (event) => {
        if(event.target.checked) {
            setOrigins((origins) => [...origins, event.target.value]);
        } else {
            setOrigins((origins) => origins.filter((origin) => origin !== event.target.value));
        }
    }

    return (
        <StyledFormControlComponent>
            <Box>
                <Stack direction="row" spacing={2}>
                    <FormGroup row>
                        {CAT_ORIGIN.map((origin) => (
                            <FormControlLabel
                                label={origin}
                                key={origin}
                                onChange={(event) => handleOriginSelection(event)}
                                value={origin}
                                size="small"
                                sx={{ whiteSpace: "nowrap" }}
                                control={<Checkbox value={origin} name={origin} />}
                            >
                            </FormControlLabel>
                        ))}
                    </FormGroup>
                </Stack>
            </Box>
        </StyledFormControlComponent>
    );
}

export default FormControlComponent;