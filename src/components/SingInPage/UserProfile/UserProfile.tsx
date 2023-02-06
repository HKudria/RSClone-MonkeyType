import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {API_URL} from '../../Api/ApiHelper';
import {Alert, Box, Button} from '@mui/material';
import {useCookies} from 'react-cookie'

interface IUserProfileProps {
    toSingPage: () => void
}

export const UserProfile = ({toSingPage}: IUserProfileProps) => {
    const {t} = useTranslation('common');
    const [cookies, setCookie] = useCookies(['access_token'])
    const [someData, setSomeData] = useState('')
    const [errors, setErrors] = useState('');

    const parseUserData = () => {
        fetch(`${API_URL}/userData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': cookies.access_token
            },
        })
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    setErrors(data.error)
                    setTimeout(() => toSingPage(), 10000)
                } else {
                    setSomeData(data.message)
                }
            }).catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(()=> {
        parseUserData()
    }, [])

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            background: 'white',
            width: 'fit-content',
            padding: 2,
            flexDirection: 'column',
            borderRadius: '25px'
        }}>
            <h1>{t('user.title')}</h1>
            <h3>{someData}</h3>
            {errors && <Alert severity="error">{t(errors)}</Alert>}
            <Button variant="contained" onClick={toSingPage}>{t('button.logout')}</Button>
        </Box>

    );
}