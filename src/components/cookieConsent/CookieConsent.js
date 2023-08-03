import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';


const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  useEffect(() => {
    const consentCookie = cookies['cookieConsent'];

    if (consentCookie) {
      // User has given consent, hide the cookie consent block
      document.getElementById('cookiesblock').style.display = 'none';

      // Initialize Google Analytics
      ReactGA.initialize('G-GF16SJCMHV');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [cookies]);

  const giveCookieConsent = () => {
      // Calculate the expiry date
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

    setCookie("cookieConsent", true, { path: "/", expires: sixMonthsFromNow });

    ReactGA.event({
      category: 'Cookie Button',
      action: 'Click',
      label: 'Button Clicked',
    });
  };

  const setCookies = () => {
    document.getElementById('cookiesblock').style.display = 'none';
  };

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DEH0JXNN56"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-GF16SJCMHV');
          `}
        </script>
      </Helmet>
      <div className="cookiesblock" id="cookiesblock">
        <div className="cookies-container">
          <div className="row align-items-center">
            <div className="col-dets">
              <p>
                This website uses cookies to ensure you get the best experience on our website. Read our&nbsp;
                <span><a href={"/privacy-policy"}>Cookie Policy</a></span>&nbsp;to learn more
              </p>
              <p></p>
            </div>
            <div className="col-dets">
              <div className="cookiesbtn">
                <ul>
                  {!cookies['cookieConsent'] && (
                    <li>
                      <button onClick={giveCookieConsent} data-button="true" aria-label="Accept usage of cookie">
                        Accept
                      </button>
                    </li>
                  )}
                  {!cookies['cookieConsent'] && (
                    <li>
                      <button onClick={setCookies} data-button="true" aria-label="Dismiss usage of cookie">
                        Dismiss
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;