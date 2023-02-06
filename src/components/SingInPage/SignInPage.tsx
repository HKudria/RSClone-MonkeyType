import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Register} from './Register/Register';
import {Login} from './Login/Login';
import {Box, Button} from '@mui/material';

export const SignInPage = () => {
    const {t} = useTranslation('common');
    const [isLogin, setIsLogin] = useState(true);

    return (
        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <h1>{t('login.title')}</h1>
            <Box sx={{display: 'flex', justifyContent: 'center', mb: 2}}>
                {isLogin ? <Login/> : <Register/>}
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                {isLogin ? <Button variant="contained" onClick={() => setIsLogin(false)}>{t('button.register')}</Button>
                    : <Button variant="contained" onClick={() => setIsLogin(true)}>{t('button.login')}</Button>}

            </Box>
        </Box>
    )
}