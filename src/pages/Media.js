import React from 'react'
import AboutNavbar from '../components/aboutnav/AboutNavbar'
import Footer from '../components/footer/Footer';
import arrow from '../assets/arrow.png'


const Media = () => {
  return (
    <>
        <AboutNavbar/>
        <div className='hm-media-container'>
            <div className='hm-media-title'>
              <h3>Media Center</h3>
            </div>

            <div className='hm-media-intro'>
              <div className='hm-media-intro__text'>
                <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit. Qui omnis reiciendis rem dolore voluptatibus 33 temporibus excepturi est repudiandae nobis rem blanditiis obcaecati et suscipit placeat. Ut atque totam aut cumque quia quo quidem molestiae qui cupiditate debitis sed animi soluta!Ut quaerat maxime aut officiis illo in cupiditate expedita sed iusto explicabo! Aut totam iure non perspiciatis pariatur sed voluptatem praesentium ut expedita quia sit deserunt aspernatur At officiis facere. </p>
              </div>

              <div className='hm-media-intro__content'>
                <div className='hm-media-intro__content-title'>
                  <h4>LOREM IPSUM</h4>
                </div>

                <div className='hm-media-intro__content-text'>
                  <div className='details'>
                    <h4>lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                    <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                  </div>
                  <div className='details'>
                    <h4>lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                    <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                  </div>
                  <div className='details'>
                    <h4>lorem ipsum</h4>
                    <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                    <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                  </div>
                </div>
              </div>
            </div>

            <div className='hm-media-intro__other-content'>
              <div className='hm-media-intro__content-title'>
                <h4>LOREM IPSUM</h4>
                  <h4>lorem ipsum</h4>
              </div>
              <div className='hm-media-intro__content-text'>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                  <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                </div>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                  <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                </div>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                  <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                </div>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                  <button type='button'><a href="/">Careers <span className='arrow'><img src={arrow} alt="arrow nav" /></span></a></button>
                </div>
              </div>
            </div>
          
            <div className='hm-media-intro__other-content'>
              <div className='hm-media-intro__content-title'>
                <h4>LOREM IPSUM</h4>
                  <h4>lorem ipsum</h4>
              </div>
              <div className='hm-media-intro__content-text'>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
                <div className='details'>
                  <div className='hm-media-content-image'></div>
                  <h4>lorem ipsum</h4>
                  <p>Lorem ipsum dolor sit amet. Rem reprehenderit nisi non quae iste qui architecto cumque vel iure corporis et ducimus perferendis ut ipsa velit.</p>
                </div>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Media