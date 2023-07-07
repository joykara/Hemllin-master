/* eslint-disable no-script-url */
import React from 'react';
import { useCookies } from 'react-cookie';
import { Header, Navbar2, Features, Articles, Footer, CookieConsent } from '../components';

function Homepage() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  return (
    <div>
      <Navbar2 />
      <Header />
      <Features />
      <Articles />
      <Footer />
      {!cookies['cookieConsent'] && <CookieConsent />}
    </div>
  );
}

export default Homepage;