import {useTranslation} from 'react-i18next';
import {
    Alert,
    Box,
    CircularProgress,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer, TableHead,
    TableRow, TextField
} from '@mui/material';
import {IUserData} from '../Api/Interface';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {API_URL} from '../Api/ApiHelper';
import {UserStatistic} from '../UserStatistic/UserStatistic';
import ReactPaginate from 'react-paginate';
import s from './LeaderBoaerd.module.css'

export const LeaderBoard = () => {
    const {t} = useTranslation('common');
    const [usersData, setUsersData] = useState<IUserData[]>([])
    const [errors, setErrors] = useState('');
    const [preloader, setPreloader] = useState(true);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const endOffset = itemOffset + itemsPerPage;


    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % usersData.length;
        setItemOffset(newOffset);
    };

    const onChangePageNumber = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const pages = parseInt(event.target.value)
        if (pages >= 1) {
            setItemsPerPage(pages)
        } else {
            setItemsPerPage(1)
        }
    }


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

    const currentItems = usersData.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(usersData.length / itemsPerPage);

    return (
        <div className={s.container}>
            {errors && <Alert severity="error" sx={{mb: 2}}>{t(errors)}</Alert>}
            {preloader ?
                <CircularProgress/>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'black',
                    background: 'white',
                    width: 'fit-content',
                    padding: 2,
                    flexDirection: 'column',
                    borderRadius: '25px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <h1>{t('statistic.leader')}</h1>
                        <TextField
                            id="filled-number"
                            label={t('pagination.pages')}
                            type="number"
                            value={itemsPerPage}
                            onChange={onChangePageNumber}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            sx={{maxWidth: '250px'}}
                        /></Box>
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
                                    {currentItems.map((userData, index) => <UserStatistic gameInfo={userData}
                                                                                          key={userData._id}
                                                                                          isLeaders={true}
                                                                                          index={itemOffset + index + 1}/>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                    <ReactPaginate
                        activeClassName={`${s.item} ${s.active}`}
                        breakClassName={`${s.item} ${s.breakMe}`}
                        breakLabel={'...'}
                        nextLabel={t('pagination.next')}
                        previousLabel={t('pagination.previous')}
                        containerClassName={s.pagination}
                        disabledClassName={s.disabledPage}
                        marginPagesDisplayed={2}
                        nextClassName={`${s.item} ${s.next}`}
                        onPageChange={handlePageClick}
                        pageCount={pageCount}
                        pageClassName={`${s.item} ${s.paginationPage}`}
                        pageRangeDisplayed={5}
                        previousClassName={`${s.item} ${s.previous}`}
                    />
                </Box>}
        </div>
    );
}