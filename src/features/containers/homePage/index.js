import React, { useEffect, useState } from 'react';
import StyledHomePage from './StyledHomePage';

import CardComponent from '../../components/cards/Card';
import FormControlComponent from '../../components/FormControlOrigin/FormControl';
import { 
    AppBar,
    Container,
    Grid,
    IconButton,
    InputBase,
    Pagination,
    Stack,
    styled,
    Toolbar,
    Typography,
    alpha,
    Box,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


import { fetchBreedsPage, fetchBreeds } from '../../../lib/catsFetcher';
import { findMatchingCats } from '../../../helpers/cats';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const HomePage = () => {

    const [ catsList, setCatsList ] = useState();
    const [ lastPage, setLastPage ] = useState();
    const [ selectedCatOrigin, setSelectedCatOrigin ] = useState([]);
    const [ filtered, setFiltered ] = useState();

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

    const onSelectCatOriginChange = (origins) => {
        setSelectedCatOrigin(origins);
        if (selectedCatOrigin.length !== 0 ) {
            const results = findMatchingCats(catsList, selectedCatOrigin);
            setCatsList(results);
        }
        console.log('selectedCatOrigin',selectedCatOrigin);
    }

    return (
        <StyledHomePage>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' className='appBar'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            CATS BREEDS
                        </Typography>
                        
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container fixed>
                <Box sx={{ mt: 2 }}>
                    <FormControlComponent 
                        selectedCatOrigin={selectedCatOrigin}
                        onSelectCatOriginChange={onSelectCatOriginChange}
                    />
                </Box>
                <Box sx={{ mt: 3 }}>
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
                        <Stack spacing={2} className='paginationStack'>
                            <Pagination 
                                count={lastPage} 
                                onChange={(e, value) => handleChangePage(e, value)}
                                className='pagination'
                            />
                        </Stack>
                    }
                </Box>
            </Container>
        </StyledHomePage>
    );
}

export default HomePage;