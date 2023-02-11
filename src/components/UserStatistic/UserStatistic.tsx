import {useTranslation} from 'react-i18next';
import {Box, Button, Modal, TableCell, TableRow} from '@mui/material';
import {IUserData} from '../Api/Interface';
import {useState} from 'react';
import {WinStatistic} from '../MainPage/TextField/WinStatistic/WinStatistic';

interface IUserStatisticProps {
    gameInfo: IUserData
}

export const UserStatistic = ({gameInfo}: IUserStatisticProps) => {
    const {t} = useTranslation('common');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <TableRow key={`${gameInfo._id}key`}>
                <TableCell align="center">{gameInfo.date}</TableCell>
                <TableCell align="center">{gameInfo.text}</TableCell>
                <TableCell align="center">{gameInfo.correct_input}</TableCell>
                <TableCell align="center">{gameInfo.incorrect_input}</TableCell>
                <TableCell align="center">{gameInfo.percent}</TableCell>
                <TableCell align="center"><Button onClick={handleOpen}>{t('statistic.more')}</Button></TableCell>
            </TableRow>
            <Modal
                sx={{marginTop: '700px'}}
                open={open}
                onClose={handleClose}
            >
                <Box>
                    <WinStatistic startTime={gameInfo.result_time} endTime={null} length={gameInfo.text.length}
                                  errorChar={gameInfo.incorrect_input} correctChar={gameInfo.correct_input}
                                  text={gameInfo.text} currIndex={1} time={gameInfo.timer} isUserPage={true} closeModal={handleClose}/>
                </Box>
            </Modal>
        </>
    );
}