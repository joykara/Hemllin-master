/* eslint-disable no-script-url */
import React from 'react'
import { Header, Navbar2, Features, Articles, Footer} from '../components';

function Homepage() {
  // setCookies function
  function setCookies() {
    document.getElementById('cookiesblock').style.display='none';
    localStorage.setItem('cookies', 'true');
  }
  // checkCookies function
  // function checkCookies() {
  //   if (localStorage.getItem('cookies') === 'true') {
  //     document.getElementById('cookiesblock').style.display='none';
  //   }
  // }
  
  return (
    <div>
         <Navbar2 />
         <Header />
         <Features />
         <Articles />
         <Footer />
         
         <div class="cookiesblock" id="cookiesblock">
            <div class="cookies-container">
              <div class="row align-items-center">
                <div class="col-dets">
                  <p>This website uses cookies to ensure you get the best experience on our website. Read our&nbsp;<span><a href='/'>Cookie Policy</a></span>&nbsp;to learn more</p><p></p>
                </div>
                <div class="col-dets">
                  <div class="cookiesbtn">
                    <ul>
                        <li><button onClick={setCookies}>Accept</button></li>
                        <li><button onClick={setCookies}>Dismiss</button></li>
                    </ul>
                    <button class="cookiesclose" onclick="document.getElementById('cookiesblock').style.display='none'"><i class="icofont-close-line"></i></button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage