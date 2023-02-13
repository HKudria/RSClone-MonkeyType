import {useTranslation} from 'react-i18next';
import {
    Alert,
    Box,
    CircularProgress,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer, TableHead,
    TableRow
} from '@mui/material';
import {IUserData} from '../Api/Interface';
import React, {useEffect, useState} from 'react';
import {API_URL} from '../Api/ApiHelper';
import {UserStatistic} from '../UserStatistic/UserStatistic';

export const LeaderBoard = () => {
    const {t} = useTranslation('common');
    const [usersData, setUsersData] = useState<IUserData[]>()
    const [errors, setErrors] = useState('');
    const [preloader, setPreloader] = useState(true);

    const parseUserData = () => {
        fetch(`${API_URL}/getLeaders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then((data) => {
                if (data.error) {
                    setErrors(data.error)
                    setTimeout(() => setErrors(''), 10000)
                } else {
                    setUsersData(data)
                }
                setPreloader(false)
            }).catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        parseUserData()
    }, [])

    return (
        <>
            {errors&&<Alert severity="error" sx={{mb: 2}}>{t(errors)}</Alert>}
            {preloader ?
                <CircularProgress/>
                :
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
                    {usersData &&
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 700}} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">#</TableCell>
                                        <TableCell align="center">{t('statistic.name')}</TableCell>
                                        <TableCell align="center">{t('statistic.text')}</TableCell>
                                        <TableCell align="center">{t('statistic.correct')}</TableCell>
                                        <TableCell align="center">{t('statistic.incorrect')}</TableCell>
                                        <TableCell align="center">{t('statistic.percent')}</TableCell>
                                        <TableCell align="center">---</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {usersData.map((userData, index) => <UserStatistic gameInfo={userData} key={userData._id} isLeaders={true} index={index + 1}/>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                </Box>}
        </>
    );
}