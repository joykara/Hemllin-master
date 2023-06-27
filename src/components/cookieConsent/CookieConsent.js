import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);

  useEffect(() => {
    const consentCookie = cookies['cookieConsent'];

    if (consentCookie) {
      // User has given consent, hide the cookie consent block
      document.getElementById('cookiesblock').style.display = 'none';
    }
  }, [cookies]);

  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  const setCookies = () => {
    document.getElementById('cookiesblock').style.display = 'none';
  };

  return (
    <>
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