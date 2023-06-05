import React from 'react';
import { Footer, Navbar } from '../components';

const Management = () => {
  return (
      <>
          <Navbar />
          <div className="management-container">
              <div className="hm-management-title">
                  <h2>Lorem Ipsum</h2>
              </div>

              <div className="hm-management-intro">
                  <div className="hm-management-intro__image">
                  </div>

                  <div className="hm-management-intro__text">
                      <h4>Lorem Ipsum is</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nunc nisi aliquam nunc, nec aliquam nunc nunc nec nisi. Sed euismod, diam id tincidunt dapibus, nunc nisi aliquam nunc, nec aliquam nunc nunc nec nisi.</p>
                      <button type='button'><a href="/services/management">Read More</a></button>
                  </div>

                  <div className="hm-management-content">
                        <div className="hm-management-options-container">
                            <div className="hm-management-option__image">
                            </div>
                            <div className="hm-management-option__content">
                                <h3>Lorem Ipsum is</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis vero rem ducimus repellat, quasi architecto quibusdam. Quam adipisci veniam sed quaerat distinctio, deserunt incidunt. Dolore debitis nisi cum est?</p>
                            </div>
                        </div>
                        <div className="hm-management-options-container">
                            <div className="hm-management-option__image">
                            </div>
                            <div className="hm-management-option__content">
                                <h3>Lorem Ipsum is</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis vero rem ducimus repellat, quasi architecto quibusdam. Quam adipisci veniam sed quaerat distinctio, deserunt incidunt. Dolore debitis nisi cum est?</p>
                                <button type='button'><a href="/services/management">Read More</a></button>
                            </div>
                        </div>
                        <div className="hm-management-options-container">
                            <div className="hm-management-option__image">
                            </div>
                            <div className="hm-management-option__content">
                                <h3>Lorem Ipsum is</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facilis vero rem ducimus repellat, quasi architecto quibusdam. Quam adipisci veniam sed quaerat distinctio, deserunt incidunt. Dolore debitis nisi cum est?</p>
                            </div>
                        </div>
                  </div>
              </div>
              <div className="hm-management-footer">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
          </div>
          <Footer/>
      </>
  )
}

export default Management