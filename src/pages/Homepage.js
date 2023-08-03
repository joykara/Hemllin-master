/* eslint-disable no-script-url */
import React, {useEffect} from 'react';
import ReactGA from 'react-ga'; // Import react-ga
import { useCookies } from 'react-cookie';
import { Header, Navbar2, Features, Articles, Footer, CookieConsent, ScrollToTop } from '../components';

function Homepage() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Navbar2 />
      <Header />
      <Features />
      <Articles />
      <Footer />
      <ScrollToTop />
      {!cookies['cookieConsent'] && <CookieConsent />}
    </div>
  );
}

export default Homepage;