import {ChangeEvent, FormEvent, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {IRegisterFormErrors} from '../../Helper/Interfaces';
import {validateField} from '../../Helper/Validator';
import {API_URL} from '../../Api/ApiHelper';
import {IUser} from '../../Api/Interface';

export const Register = () => {
    const {t} = useTranslation('common');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const initialErrors = {
        email: '',
        fName: '',
        lName: '',
        password: '',
        repeatPassword: ''
    }

    const [errors, setErrors] = useState<IRegisterFormErrors>(initialErrors);
    const [responseError, setResponseError] = useState<string[]>();

    const onSubmit = (event: FormEvent) => {
        event.preventDefault()

        const emailError = validateField('email', email)
        const fNameError = validateField('fName', fName)
        const lNameError = validateField('lName', lName)
        const passwordError = validateField('password', password)
        const repeatPasswordError = repeatPassword !== password || repeatPassword.length === 0 ? 'errors.passwordNoMuch' : ''

        setErrors({
            email: emailError,
            fName: fNameError,
            lName: lNameError,
            password: passwordError,
            repeatPassword: repeatPasswordError
        })

        if (!fNameError && !lNameError && !emailError && !passwordError && !repeatPasswordError) {
            console.log('here')
            const user: IUser = {
                full_name: fName,
                last_name: lName,
                password,
                email
            }
            fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                }).catch((error) => {
                console.log(error.message)
            })
        }
    }

    const onChangeFName = (event: ChangeEvent<HTMLInputElement>) => {
        setFName(event.target.value)
    }

    const onChangeLName = (event: ChangeEvent<HTMLInputElement>) => {
        setLName(event.target.value)
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const onChangeRepeatPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                {t('register.firstName')}:
                <input type="text" name="fName" value={fName} onChange={onChangeFName}/>
                {errors.fName && <p>{t(errors.fName)}</p>}
            </label>
            <label>
                {t('register.lastName')}:
                <input type="text" name="lName" value={lName} onChange={onChangeLName}/>
                {errors.lName && <p>{t(errors.lName)}</p>}
            </label>
            <label>
                {t('register.email')}:
                <input type="email" name="email" value={email} onChange={onChangeEmail}/>
                {errors.email && <p>{t(errors.email)}</p>}
            </label>
            <label>
                {t('register.password')}:
                <input type="password" name="password" value={password} onChange={onChangePassword}/>
                {errors.password && <p>{t(errors.password)}</p>}
            </label>
            <label>
                {t('register.repeatPassword')}:
                <input type="password" name="repeatPassword" value={repeatPassword} onChange={onChangeRepeatPassword}/>
                {errors.repeatPassword && <p>{t(errors.repeatPassword)}</p>}
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}
