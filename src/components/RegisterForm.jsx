import { Formik } from 'formik';
import React from 'react';

import LoadingIcon from '../constants/icons/LoadingIcon';
import { RegisterSchema } from '../constants/yupSchemas/registerSchema';

function RegisterForm({ darkMode, loading, setLoading, setRegister }) {

    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                username: '',
                password: '',
                repassword: '',
                contract: false,
            }}
            validationSchema={RegisterSchema}
            onSubmit={auth => {
                setLoading(true);
                setRegister(auth)
            }}
        >
            {
                ({ values, handleChange, handleSubmit, errors }) =>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='nameSurnameDiv'>
                            <div>
                                <label className={`${darkMode && 'darkText'}`}>İSİM </label>
                                <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="İsmini gir" />
                            </div>
                            <div>
                                <label className={`${darkMode && 'darkText'}`}>SOYİSİM</label>
                                <input type="text" name="surname" value={values.surname} onChange={handleChange} placeholder="Soyismini gir" />

                            </div>
                        </div>

                        <div>
                            <label className={`required ${darkMode && 'darkText'}`} htmlFor="">E-POSTA</label>
                            <input type="text" name="email" value={values.email} onChange={handleChange} placeholder="E-posta adresini gir" />
                            <label className='errorMessage'>{errors.email}</label>
                        </div>
                        <div>
                            <label className={`required ${darkMode && 'darkText'}`} htmlFor="">KULLANICI ADI</label>
                            <input type="text" name="username" value={values.username} onChange={handleChange} placeholder="Kullanıcı adını gir" />
                            <label className='errorMessage'>{errors.username}</label>
                        </div>
                        <div>
                            <label className={`required ${darkMode && 'darkText'}`} htmlFor="">ŞİFRE</label>
                            <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Şifreni gir" />
                            <label className='errorMessage'>{errors.password}</label>
                        </div>
                        <div>
                            <label className={`required ${darkMode && 'darkText'}`} htmlFor="">ŞİFRENİ TEKRAR GİR</label>
                            <input type="password" name="repassword" value={values.repassword} onChange={handleChange} placeholder="Şifreni doğrula" />
                            <label className='errorMessage'>{errors.repassword}</label>
                        </div>
                        <div className='checkboxDiv'>
                            <div>
                                <input type="checkbox" name="contract" value={values.contract} onChange={handleChange} />
                                <label htmlFor="">Sözleşmeyi kabul ediyorum.</label>
                            </div>
                            <label className='errorMessage'>{errors.contract}</label>
                        </div>
                        <button type='submit' disabled={loading && true} className={`${loading && 'loading'} ${darkMode && 'darkButton'}`} >
                            {
                                loading ? <LoadingIcon size={50} /> : 'KAYIT OL'
                            }
                        </button>
                    </form>
            }
        </Formik>
    )
}

export default RegisterForm