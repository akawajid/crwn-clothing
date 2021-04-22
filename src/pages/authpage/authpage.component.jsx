import React from 'react';
import SignIn from '../../components/sign-in/sigin-in.component';

import './authpage.styles.scss';

const AuthPage = () => {
    return (
        <div className="sign-in-and-sign-up-page">
            <SignIn/>
        </div>
    );
}

export default AuthPage;