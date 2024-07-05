import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import SignInButton from '../Goolge/SingInButton';
import { observer } from 'mobx-react';
import { useContext } from 'react';
import { userContext } from '../../store/userStore';
import { Button } from '@mui/material';

const PrimarySearchAppBar = () => {

    const UserStore = useContext(userContext);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#5d6f78' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: "#fff" }}>
                            <Typography>🚗 PlateCM</Typography>
                        </Link>
                    </Typography>
                    <SearchBar />
                    <Box sx={{ flexGrow: 1 }} />
                    {UserStore.isLoggedIn ?
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                         <Button onClick={UserStore.LogOutWithGoogleBtn} sx={{color: "#fff"}}>Log Out</Button>
                        </Box>
                        :
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <SignInButton />
                        </Box>
                    }


                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default observer(PrimarySearchAppBar); 