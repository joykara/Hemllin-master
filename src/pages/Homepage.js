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
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-8 col-md-12">
                <p></p><p>This website uses cookies to ensure you get the best experience on our website. Read our&nbsp;<span><a data-toggle="modal" data-target="#cookiemodal">Cookie Policy</a></span>&nbsp;to learn more</p><p></p>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="cookiesbtn">
                  <ul>
                    
                      <li><button  onclick="setCookies()">Accept</button></li>
                      <li><a href="/" onClick={setCookies}>Accept</a></li>

                    
                      <li><button  onclick="setCookies()">Dismiss</button></li>
                      <li><a href="/" onClick={setCookies}>Dismiss</a></li>

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