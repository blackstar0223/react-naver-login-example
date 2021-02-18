import React, { useEffect } from 'react';

const NaverLogin = () => {
  const initializeNaverLogin = () => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000/login/naver/callback',
      isPopup: false,
      loginButton: {
        color: 'white',
        type: 1,
        height: 55,
      },
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <div>
      <h1>네아로</h1>
      <div className="naverIdLoginButtonContainer">
        <div id="naverIdLogin" />
      </div>
    </div>
  );
};

export default NaverLogin;
