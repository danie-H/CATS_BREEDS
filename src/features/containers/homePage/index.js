import React, { useEffect, useState } from 'react';
import StyledHomePage from './StyledHomePage';

import CardComponent from '../../components/cards/Card';
import { 
    Container,
    Grid,
    Pagination,
    Stack
} from '@mui/material';

import { fetchBreedsPage, fetchBreeds } from '../../../lib/catsFetcher';

const HomePage = () => {

    const [ catsList, setCatsList ] = useState();
    const [ lastPage, setLastPage ] = useState();

    useEffect(() => {
        setCatsList(fetchBreeds().data)
        handleChangePage();
        const getCatsList = async () => {
            const { data, last_page } = await fetchBreeds()
            setCatsList(data);
            setLastPage(last_page);
        }
        getCatsList();
    }, [])


    const handleChangePage = async (e, value) => {
        const { data } = await fetchBreedsPage(value);
        setCatsList(data)
        return catsList;
    }


    return (
        <StyledHomePage>
            <Container fixed>
                <Grid 
                    container
                    columns={{ xs: 1, sm: 4, md: 10 }}
                    spacing={2}
                >
                    {catsList && catsList.map(cat => (
                        <Grid 
                            item
                            xs={1}
                            sm={2}
                            md={2}
                            key={cat.breed}
                        >
                            <CardComponent 
                                cat={cat}
                            >
                            </CardComponent>
                        </Grid>
                    ))}
                </Grid>
                {lastPage &&
                    <Stack spacing={2} className='pagination'>
                        <Pagination 
                            count={lastPage}
                            color="primary" 
                            onChange={(e, value) => handleChangePage(e, value)}
                        />
                    </Stack>
                }
            </Container>
        </StyledHomePage>
    );
}

export default HomePage;