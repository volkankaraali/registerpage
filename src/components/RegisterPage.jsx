
import React, { useState } from 'react';

import DarkModeIcon from '../constants/icons/DarkModeIcon'
import LightModeIcon from '../constants/icons/LightModeIcon';

import patikaLogo from '../images/patikaLogo.png'
import RegisterForm from './RegisterForm';

function Register() {

    const [darkMode, setDarkMode] = useState(false);

    //for after form submit
    const [loading, setLoading] = useState(false);

    // registration will be here after the form is submitted  
    const setRegister = (auth) => {
        setTimeout(() => {
            setLoading(false)
            alert(auth.username + " başarıyla kayıt oldunuz. ")
        }, 2000);
    }


    // dark/light mode button toggle
    const changeDarkMode = () => {
        setDarkMode(prev => !prev)
    }

    return (
        <div className='register'>
            <div className={` leftSidebar ${darkMode && 'darkLeftSideBg'}`}>
                <img src={patikaLogo} alt="patikalogo" />
                <h1 className={`title ${darkMode && 'darkText'}`}>YAZILIM PATİKALARI</h1>
                <p className={`text ${darkMode && 'darkText'}`}>Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
                <div className='rectangles'>
                    <div className={`rect1 ${darkMode && 'darkButton'}`}></div>
                    <div className={`rect2 ${darkMode && 'darkButton'}`}></div>
                </div>
            </div>
            <div className={`rightSidebar ${darkMode && 'darkRightSideBg'}`}>
                <div className='register'>

                    <div className="darkModeIcons" onClick={() => changeDarkMode()} >
                        {

                            darkMode ? <LightModeIcon /> : <DarkModeIcon />
                        }
                    </div>
                    <h1 className={`title ${darkMode && 'darkText'}`}>Kayıt</h1>

                    <hr className={`titleDivider ${darkMode && 'darkDivider'}`} />

                    <RegisterForm darkMode={darkMode} loading={loading} setLoading={setLoading} setRegister={setRegister} />

                </div>
            </div>

        </div>
    )
}

export default Register