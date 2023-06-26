import React from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
    // setCookies function
  function setCookies() {
    document.getElementById('cookiesblock').style.display='none';
    localStorage.setItem('cookies', 'true');
  }
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <>
        <div class="cookiesblock" id="cookiesblock">
            <div class="cookies-container">
            <div class="row align-items-center">
                <div class="col-dets">
                <p>This website uses cookies to ensure you get the best experience on our website. Read our&nbsp;<span><a href={"/privacy-policy"}>Cookie Policy</a></span>&nbsp;to learn more</p><p></p>
                </div>
                <div class="col-dets">
                <div class="cookiesbtn">
                    <ul>
                        <li><button onClick={giveCookieConsent} data-button="true" aria-label="Accept usage of cookie">Accept</button></li>
                        <li><button onClick={setCookies} aria-label="Dismiss usage of cookie">Dismiss</button></li>
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
