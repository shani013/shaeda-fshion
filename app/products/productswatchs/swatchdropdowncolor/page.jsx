"use client"
import Footer2 from '@/app/component/footer2'
import Header2 from '@/app/component/header2'
import React from 'react'

import { useEffect, useState } from'react';

export default function page() {
  const [time, setTime] = useState(950400); // Default countdown time in seconds (1 hour)
      useEffect(() => {
        if (time > 0) {
          const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1000);
          return () => clearInterval(interval);
        }
      }, [time]);
  return (
    <div>
      <Header2 />
      <div id="wrapper">
        {/* breadcrumb */}
        <div className="tf-breadcrumb">
          <div className="container">
            <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
              <div className="tf-breadcrumb-list">
                <a href="index.html" className="text">
                  Home
                </a>
                <i className="icon icon-arrow-right" />
                <a href="#" className="text">
                  Women
                </a>
                <i className="icon icon-arrow-right" />
                <span className="text">Cotton jersey top</span>
              </div>
              <div className="tf-breadcrumb-prev-next">
                <a href="#" className="tf-breadcrumb-prev hover-tooltip center">
                  <i className="icon icon-arrow-left" />
                </a>
                <a href="#" className="tf-breadcrumb-back hover-tooltip center">
                  <i className="icon icon-shop" />
                </a>
                <a href="#" className="tf-breadcrumb-next hover-tooltip center">
                  <i className="icon icon-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /breadcrumb */}
        {/* default */}
        <section className="flat-spacing-4 pt_0">
          <div className="tf-main-product section-image-zoom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="tf-product-media-wrap sticky-top">
                    <div className="thumbs-slider">
                      <div
                        dir="ltr"
                        className="swiper tf-product-media-thumbs other-image-zoom"
                        data-direction="vertical"
                      >
                        <div className="swiper-wrapper stagger-wrap">
                          {/* beige */}
                          <div
                            className="swiper-slide stagger-item"
                            data-color="beige"
                          >
                            <div className="item">
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/beige.jpg"
                                src="/assets/images/products/beige.jpg"
                                alt="img-product"
                              />
                            </div>
                          </div>
                          {/* pink */}
                          <div
                            className="swiper-slide stagger-item"
                            data-color="pink"
                          >
                            <div className="item">
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/pink-2.jpg"
                                src="/assets/images/products/pink-2.jpg"
                                alt="img-product"
                              />
                            </div>
                          </div>
                          {/* blue */}
                          <div
                            className="swiper-slide stagger-item"
                            data-color="blue"
                          >
                            <div className="item">
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/blue.jpg"
                                src="/assets/images/products/blue.jpg"
                                alt="img-product"
                              />
                            </div>
                          </div>
                          {/* brown */}
                          <div
                            className="swiper-slide stagger-item"
                            data-color="brown"
                          >
                            <div className="item">
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/brown-2.jpg"
                                src="/assets/images/products/brown-2.jpg"
                                alt="img-product"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        dir="ltr"
                        className="swiper tf-product-media-main"
                        id="gallery-swiper-started"
                      >
                        <div className="swiper-wrapper">
                          {/* beige */}
                          <div className="swiper-slide" data-color="beige">
                            <a
                              href="images/products/beige.jpg"
                              target="_blank"
                              className="item"
                              data-pswp-width="770px"
                              data-pswp-height="1075px"
                            >
                              <img
                                className="tf-image-zoom lazyload"
                                data-zoom="images/products/beige.jpg"
                                data-src="/assets/images/products/beige.jpg"
                                src="/assets/images/products/beige.jpg"
                                alt="img-product"
                              />
                            </a>
                          </div>
                          {/* pink */}
                          <div className="swiper-slide" data-color="pink">
                            <a
                              href="images/products/pink-2.jpg"
                              target="_blank"
                              className="item"
                              data-pswp-width="770px"
                              data-pswp-height="1075px"
                            >
                              <img
                                className="tf-image-zoom lazyload"
                                data-zoom="images/products/pink-2.jpg"
                                data-src="/assets/images/products/pink-2.jpg"
                                src="/assets/images/products/pink-2.jpg"
                                alt="img-product"
                              />
                            </a>
                          </div>
                          {/* blue */}
                          <div className="swiper-slide" data-color="blue">
                            <a
                              href="images/products/blue.jpg"
                              target="_blank"
                              className="item"
                              data-pswp-width="770px"
                              data-pswp-height="1075px"
                            >
                              <img
                                className="tf-image-zoom lazyload"
                                data-zoom="images/products/blue.jpg"
                                data-src="/assets/images/products/blue.jpg"
                                src="/assets/images/products/blue.jpg"
                                alt="img-product"
                              />
                            </a>
                          </div>
                          {/* brown */}
                          <div className="swiper-slide" data-color="brown">
                            <a
                              href="images/products/brown-2.jpg"
                              target="_blank"
                              className="item"
                              data-pswp-width="770px"
                              data-pswp-height="1075px"
                            >
                              <img
                                className="tf-image-zoom lazyload"
                                data-zoom="images/products/brown-2.jpg"
                                data-src="/assets/images/products/brown-2.jpg"
                                src="/assets/images/products/brown-2.jpg"
                                alt="img-product"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="swiper-button-next button-style-arrow thumbs-next" />
                        <div className="swiper-button-prev button-style-arrow thumbs-prev" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="tf-product-info-wrap position-relative">
                    <div className="tf-zoom-main" />
                    <div className="tf-product-info-list other-image-zoom">
                      <div className="tf-product-info-title">
                        <h5>Cotton jersey top</h5>
                      </div>
                      <div className="tf-product-info-badges">
                        <div className="badges">Best seller</div>
                        <div className="product-status-content">
                          <i className="icon-lightning" />
                          <p className="fw-6">
                            Selling fast! 56 people have this in their carts.
                          </p>
                        </div>
                      </div>
                      <div className="tf-product-info-price">
                        <div className="price-on-sale">$8.00</div>
                        <div className="compare-at-price">$20.00</div>
                        <div className="badges-on-sale">
                          <span>20</span>% OFF
                        </div>
                      </div>
                      <div className="tf-product-info-liveview">
                        <div className="liveview-count">20</div>
                        <p className="fw-6">
                          People are viewing this right now
                        </p>
                      </div>
                      <div className="tf-product-info-countdown">
                        <div className="countdown-wrap">
                          <div className="countdown-title">
                            <i className="icon-time tf-ani-tada" />
                            <p>HURRY UP! SALE ENDS IN:</p>
                          </div>
                          <div
                            style={{
                              color: "red",
                              fontSize: "18px",
                              letterSpacing: "1px",
                            }}
                          >
                            <strong>
                              {time > 0
                                ? `${Math.floor(
                                    time / 86400
                                  )} Days : ${Math.floor(
                                    (time % 86400) / 3600
                                  )} Hours : ${Math.floor(
                                    (time % 3600) / 60
                                  )} Mins : ${time % 60} Secs`
                                : "Sale Ended!"}
                            </strong>
                          </div>
                        </div>
                      </div>
                      <div className="tf-product-info-variant-picker">
                        <div className="variant-picker-item">
                          <div className="variant-picker-label">
                            Color:{" "}
                            <span className="fw-6 variant-picker-label-value value-currentColor">
                              Beige
                            </span>
                          </div>
                          <div
                            className="tf-dropdown-sort full position-relative has-color"
                            data-bs-toggle="dropdown"
                          >
                            <div className="btn-select">
                              <span className="text-sort-value select-currentColor">
                                Beige
                              </span>
                              <span className="icon icon-arrow-down" />
                            </div>
                            <div className="dropdown-menu">
                              <div
                                className="select-item active color-btn"
                                data-color="beige"
                              >
                                <span className="box-color d-inline-block rounded-full bg_beige" />
                                <span className="text-value-item">Beige</span>
                              </div>
                              <div
                                className="select-item color-btn"
                                data-color="pink"
                                data-price={10}
                              >
                                <span className="box-color d-inline-block rounded-full bg_pink" />
                                <span className="text-value-item">Pink</span>
                              </div>
                              <div
                                className="select-item color-btn"
                                data-color="blue"
                                data-price={12}
                              >
                                <span className="box-color d-inline-block rounded-full bg_blue" />
                                <span className="text-value-item">Blue</span>
                              </div>
                              <div
                                className="select-item color-btn"
                                data-color="brown"
                                data-price={14}
                              >
                                <span className="box-color d-inline-block rounded-full bg_brown" />
                                <span className="text-value-item">Brown</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="variant-picker-item">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="variant-picker-label">
                              Size:{" "}
                              <span className="fw-6 variant-picker-label-value">
                                M
                              </span>
                            </div>
                            <a
                              href="#find_size"
                              data-bs-toggle="modal"
                              className="find-size fw-6"
                            >
                              Find your size
                            </a>
                          </div>
                          <div
                            className="tf-dropdown-sort full position-relative"
                            data-bs-toggle="dropdown"
                          >
                            <div className="btn-select">
                              <span className="text-sort-value">M</span>
                              <span className="icon icon-arrow-down" />
                            </div>
                            <div className="dropdown-menu">
                              <div
                                className="select-item select-size size-btn active"
                                data-value="M"
                              >
                                <span className="text-value-item">M</span>
                              </div>
                              <div
                                className="select-item select-size size-btn"
                                data-price={14}
                                data-value="L"
                              >
                                <span className="text-value-item">L</span>
                              </div>
                              <div
                                className="select-item select-size size-btn"
                                data-price={16}
                                data-value="XL"
                              >
                                <span className="text-value-item">XL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-product-info-quantity">
                        <div className="quantity-title fw-6">Quantity</div>
                        <div className="wg-quantity">
                          <span className="btn-quantity btn-decrease">-</span>
                          <input
                            type="text"
                            className="quantity-product"
                            name="number"
                            defaultValue={1}
                          />
                          <span className="btn-quantity btn-increase">+</span>
                        </div>
                      </div>
                      <div className="tf-product-info-buy-button">
                        <form className>
                          <a
                            href="javascript:void(0);"
                            className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                          >
                            <span>Add to cart -&nbsp;</span>
                            <span className="tf-qty-price total-price">
                              $8.00
                            </span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <div className="w-100">
                            <a href="#" className="btns-full">
                              Buy with{" "}
                              <img
                                src="/assets/images/payments/paypal.png"
                                alt
                              />
                            </a>
                            <a href="#" className="payment-more-option">
                              More payment options
                            </a>
                          </div>
                        </form>
                      </div>
                      <div className="tf-product-info-extra-link">
                        <a
                          href="#compare_color"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <img src="/assets/images/item/compare.svg" alt />
                          </div>
                          <div className="text fw-6">Compare color</div>
                        </a>
                        <a
                          href="#ask_question"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <i className="icon-question" />
                          </div>
                          <div className="text fw-6">Ask a question</div>
                        </a>
                        <a
                          href="#delivery_return"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <svg
                              className="d-inline-block"
                              xmlns="http://www.w3.org/2000/svg"
                              width={22}
                              height={18}
                              viewBox="0 0 22 18"
                              fill="currentColor"
                            >
                              <path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z" />
                            </svg>
                          </div>
                          <div className="text fw-6">Delivery &amp; Return</div>
                        </a>
                        <a
                          href="#share_social"
                          data-bs-toggle="modal"
                          className="tf-product-extra-icon"
                        >
                          <div className="icon">
                            <i className="icon-share" />
                          </div>
                          <div className="text fw-6">Share</div>
                        </a>
                      </div>
                      <div className="tf-product-info-delivery-return">
                        <div className="row">
                          <div className="col-xl-6 col-12">
                            <div className="tf-product-delivery">
                              <div className="icon">
                                <i className="icon-delivery-time" />
                              </div>
                              <p>
                                Estimate delivery times:{" "}
                                <span className="fw-7">12-26 days</span>{" "}
                                (International),{" "}
                                <span className="fw-7">3-6 days</span> (United
                                States).
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-12">
                            <div className="tf-product-delivery mb-0">
                              <div className="icon">
                                <i className="icon-return-order" />
                              </div>
                              <p>
                                Return within{" "}
                                <span className="fw-7">30 days</span> of
                                purchase. Duties &amp; taxes are non-refundable.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-product-info-trust-seal">
                        <div className="tf-product-trust-mess">
                          <i className="icon-safe" />
                          <p className="fw-6">
                            Guarantee Safe <br /> Checkout
                          </p>
                        </div>
                        <div className="tf-payment">
                          <img src="/assets/images/payments/visa.png" alt />
                          <img src="/assets/images/payments/img-1.png" alt />
                          <img src="/assets/images/payments/img-2.png" alt />
                          <img src="/assets/images/payments/img-3.png" alt />
                          <img src="/assets/images/payments/img-4.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tf-sticky-btn-atc">
            <div className="container">
              <div className="tf-height-observer w-100 d-flex align-items-center">
                <div className="tf-sticky-atc-product d-flex align-items-center">
                  <div className="tf-sticky-atc-img">
                    <img
                      className="lazyloaded"
                      data-src="/assets/images/shop/products/p-d1.png"
                      alt
                      src="/assets/images/shop/products/p-d1.png"
                    />
                  </div>
                  <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
                    Cotton jersey top
                  </div>
                </div>
                <div className="tf-sticky-atc-infos">
                  <form className>
                    <div className="tf-sticky-atc-variant-price text-center">
                      <select className="tf-select">
                        <option selected="selected">Beige / S - $8.00</option>
                        <option>Beige / M - $8.00</option>
                        <option>Beige / L - $8.00</option>
                        <option>Beige / XL - $8.00</option>
                        <option>Black / S - $8.00</option>
                        <option>Black / M - $8.00</option>
                        <option>Black / L - $8.00</option>
                        <option>Black / XL - $8.00</option>
                        <option>Blue / S - $8.00</option>
                        <option>Blue / M - $8.00</option>
                        <option>Blue / L - $8.00</option>
                        <option>Blue / XL - $8.00</option>
                        <option>White / S - $8.00</option>
                        <option>White / M - $8.00</option>
                        <option>White / L - $8.00</option>
                        <option>White / XL - $8.00</option>
                      </select>
                    </div>
                    <div className="tf-sticky-atc-btns">
                      <div className="tf-product-info-quantity">
                        <div className="wg-quantity">
                          <span className="btn-quantity minus-btn">-</span>
                          <input type="text" name="number" defaultValue={1} />
                          <span className="btn-quantity plus-btn">+</span>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn btn-add-to-cart"
                      >
                        <span>Add to cart</span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /default */}
        {/* tabs */}
        <section className="flat-spacing-17 pt_0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="widget-tabs style-has-border">
                  <ul className="widget-menu-tab">
                    <li className="item-title active">
                      <span className="inner">Description</span>
                    </li>
                    <li className="item-title">
                      <span className="inner">Additional Information</span>
                    </li>
                    <li className="item-title">
                      <span className="inner">Review</span>
                    </li>
                    <li className="item-title">
                      <span className="inner">Shipping</span>
                    </li>
                    <li className="item-title">
                      <span className="inner">Return Policies</span>
                    </li>
                  </ul>
                  <div className="widget-content-tab">
                    <div className="widget-content-inner active">
                      <div className>
                        <p className="mb_30">
                          Button-up shirt sleeves and a relaxed silhouette. It’s
                          tailored with drapey, crinkle-texture fabric that’s
                          made from LENZING™ ECOVERO™ Viscose — responsibly
                          sourced wood-based fibres produced through a process
                          that reduces impact on forests, biodiversity and water
                          supply.
                        </p>
                        <div className="tf-product-des-demo">
                          <div className="right">
                            <h3 className="fs-16 fw-5">Features</h3>
                            <ul>
                              <li>Front button placket</li>
                              <li> Adjustable sleeve tabs</li>
                              <li>
                                Babaton embroidered crest at placket and hem
                              </li>
                            </ul>
                            <h3 className="fs-16 fw-5">Materials Care</h3>
                            <ul className="mb-0">
                              <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                              <li>Care: Hand wash</li>
                              <li>Imported</li>
                            </ul>
                          </div>
                          <div className="left">
                            <h3 className="fs-16 fw-5">Materials Care</h3>
                            <div className="d-flex gap-10 mb_15 align-items-center">
                              <div className="icon">
                                <i className="icon-machine" />
                              </div>
                              <span>Machine wash max. 30ºC. Short spin.</span>
                            </div>
                            <div className="d-flex gap-10 mb_15 align-items-center">
                              <div className="icon">
                                <i className="icon-iron" />
                              </div>
                              <span>Iron maximum 110ºC.</span>
                            </div>
                            <div className="d-flex gap-10 mb_15 align-items-center">
                              <div className="icon">
                                <i className="icon-bleach" />
                              </div>
                              <span>Do not bleach/bleach.</span>
                            </div>
                            <div className="d-flex gap-10 mb_15 align-items-center">
                              <div className="icon">
                                <i className="icon-dry-clean" />
                              </div>
                              <span>Do not dry clean.</span>
                            </div>
                            <div className="d-flex gap-10 align-items-center">
                              <div className="icon">
                                <i className="icon-tumble-dry" />
                              </div>
                              <span>Tumble dry, medium hear.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-inner">
                      <table className="tf-pr-attrs">
                        <tbody>
                          <tr className="tf-attr-pa-color">
                            <th className="tf-attr-label">Color</th>
                            <td className="tf-attr-value">
                              <p>White, Pink, Black</p>
                            </td>
                          </tr>
                          <tr className="tf-attr-pa-size">
                            <th className="tf-attr-label">Size</th>
                            <td className="tf-attr-value">
                              <p>S, M, L, XL</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="widget-content-inner">
                      <div className="tab-reviews write-cancel-review-wrap">
                        <div className="tab-reviews-heading">
                          <div className="top">
                            <div className="text-center">
                              <h1 className="number fw-6">4.8</h1>
                              <div className="list-star">
                                <i className="icon icon-star" />
                                <i className="icon icon-star" />
                                <i className="icon icon-star" />
                                <i className="icon icon-star" />
                                <i className="icon icon-star" />
                              </div>
                              <p>(168 Ratings)</p>
                            </div>
                            <div className="rating-score">
                              <div className="item">
                                <div className="number-1 text-caption-1">5</div>
                                <i className="icon icon-star" />
                                <div className="line-bg">
                                  <div style={{ width: "94.67%" }} />
                                </div>
                                <div className="number-2 text-caption-1">
                                  59
                                </div>
                              </div>
                              <div className="item">
                                <div className="number-1 text-caption-1">4</div>
                                <i className="icon icon-star" />
                                <div className="line-bg">
                                  <div style={{ width: "60%" }} />
                                </div>
                                <div className="number-2 text-caption-1">
                                  46
                                </div>
                              </div>
                              <div className="item">
                                <div className="number-1 text-caption-1">3</div>
                                <i className="icon icon-star" />
                                <div className="line-bg">
                                  <div style={{ width: "0%" }} />
                                </div>
                                <div className="number-2 text-caption-1">0</div>
                              </div>
                              <div className="item">
                                <div className="number-1 text-caption-1">2</div>
                                <i className="icon icon-star" />
                                <div className="line-bg">
                                  <div style={{ width: "0%" }} />
                                </div>
                                <div className="number-2 text-caption-1">0</div>
                              </div>
                              <div className="item">
                                <div className="number-1 text-caption-1">1</div>
                                <i className="icon icon-star" />
                                <div className="line-bg">
                                  <div style={{ width: "0%" }} />
                                </div>
                                <div className="number-2 text-caption-1">0</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="tf-btn btn-outline-dark fw-6 btn-comment-review btn-cancel-review">
                              Cancel Review
                            </div>
                            <div className="tf-btn btn-outline-dark fw-6 btn-comment-review btn-write-review">
                              Write a review
                            </div>
                          </div>
                        </div>
                        <div className="reply-comment cancel-review-wrap">
                          <div className="d-flex mb_24 gap-20 align-items-center justify-content-between flex-wrap">
                            <h5 className>03 Comments</h5>
                            <div className="d-flex align-items-center gap-12">
                              <div className="text-caption-1">Sort by:</div>
                              <div
                                className="tf-dropdown-sort"
                                data-bs-toggle="dropdown"
                              >
                                <div className="btn-select">
                                  <span className="text-sort-value">
                                    Most Recent
                                  </span>
                                  <span className="icon icon-arrow-down" />
                                </div>
                                <div className="dropdown-menu">
                                  <div className="select-item active">
                                    <span className="text-value-item">
                                      Most Recent
                                    </span>
                                  </div>
                                  <div className="select-item">
                                    <span className="text-value-item">
                                      Oldest
                                    </span>
                                  </div>
                                  <div className="select-item">
                                    <span className="text-value-item">
                                      Most Popular
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="reply-comment-wrap">
                            <div className="reply-comment-item">
                              <div className="user">
                                <div className="image">
                                  <img
                                    src="/assets/images/collections/collection-circle-9.jpg"
                                    alt
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#" className="link">
                                      Superb quality apparel that exceeds
                                      expectations
                                    </a>
                                  </h6>
                                  <div className="day text_black-2">
                                    1 days ago
                                  </div>
                                </div>
                              </div>
                              <p className="text_black-2">
                                Great theme - we were looking for a theme with
                                lots of built in features and flexibility and
                                this was perfect. We expected to need to employ
                                a developer to add a few finishing touches. But
                                we actually managed to do everything ourselves.
                                We did have one small query and the support
                                given was swift and helpful.
                              </p>
                            </div>
                            <div className="reply-comment-item type-reply">
                              <div className="user">
                                <div className="image">
                                  <img
                                    src="/assets/images/collections/collection-circle-10.jpg"
                                    alt
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#" className="link">
                                      Reply from Modave
                                    </a>
                                  </h6>
                                  <div className="day text_black-2">
                                    1 days ago
                                  </div>
                                </div>
                              </div>
                              <p className="text_black-2">
                                We love to hear it! Part of what we love most
                                about Modave is how much it empowers store
                                owners like yourself to build a beautiful
                                website without having to hire a developer :)
                                Thank you for this fantastic review!
                              </p>
                            </div>
                            <div className="reply-comment-item">
                              <div className="user">
                                <div className="image">
                                  <img
                                    src="/assets/images/collections/collection-circle-9.jpg"
                                    alt
                                  />
                                </div>
                                <div>
                                  <h6>
                                    <a href="#" className="link">
                                      Superb quality apparel that exceeds
                                      expectations
                                    </a>
                                  </h6>
                                  <div className="day text_black-2">
                                    1 days ago{" "}
                                  </div>
                                </div>
                              </div>
                              <p className="text_black-2">
                                Great theme - we were looking for a theme with
                                lots of built in features and flexibility and
                                this was perfect. We expected to need to employ
                                a developer to add a few finishing touches. But
                                we actually managed to do everything ourselves.
                                We did have one small query and the support
                                given was swift and helpful.
                              </p>
                            </div>
                          </div>
                        </div>
                        <form className="form-write-review write-review-wrap">
                          <div className="heading">
                            <h5>Write a review:</h5>
                            <div className="list-rating-check">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                defaultValue={5}
                              />
                              <label htmlFor="star5" title="text" />
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                defaultValue={4}
                              />
                              <label htmlFor="star4" title="text" />
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                defaultValue={3}
                              />
                              <label htmlFor="star3" title="text" />
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                defaultValue={2}
                              />
                              <label htmlFor="star2" title="text" />
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                defaultValue={1}
                              />
                              <label htmlFor="star1" title="text" />
                            </div>
                          </div>
                          <div className="form-content">
                            <fieldset className="box-field">
                              <label className="label">Review Title</label>
                              <input
                                type="text"
                                placeholder="Give your review a title"
                                name="text"
                                tabIndex={2}
                                defaultValue
                                aria-required="true"
                                required
                              />
                            </fieldset>
                            <fieldset className="box-field">
                              <label className="label">Review</label>
                              <textarea
                                rows={4}
                                placeholder="Write your comment here"
                                tabIndex={2}
                                aria-required="true"
                                required
                                defaultValue={""}
                              />
                            </fieldset>
                            <div className="box-field group-2">
                              <fieldset>
                                <input
                                  type="text"
                                  placeholder="You Name (Public)"
                                  name="text"
                                  tabIndex={2}
                                  defaultValue
                                  aria-required="true"
                                  required
                                />
                              </fieldset>
                              <fieldset>
                                <input
                                  type="email"
                                  placeholder="Your email (private)"
                                  name="email"
                                  tabIndex={2}
                                  defaultValue
                                  aria-required="true"
                                  required
                                />
                              </fieldset>
                            </div>
                            <div className="box-check">
                              <input
                                type="checkbox"
                                name="availability"
                                className="tf-check"
                                id="check1"
                              />
                              <label className="text_black-2" htmlFor="check1">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </div>
                          </div>
                          <div className="button-submit">
                            <button
                              className="tf-btn btn-fill animate-hover-btn"
                              type="submit"
                            >
                              Submit Reviews
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="widget-content-inner">
                      <div className="tf-page-privacy-policy">
                        <div className="title">
                          The Company Private Limited Policy
                        </div>
                        <p>
                          The Company Private Limited and each of their
                          respective subsidiary, parent and affiliated companies
                          is deemed to operate this Website (“we” or “us”)
                          recognizes that you care how information about you is
                          used and shared. We have created this Privacy Policy
                          to inform you what information we collect on the
                          Website, how we use your information and the choices
                          you have about the way your information is collected
                          and used. Please read this Privacy Policy carefully.
                          Your use of the Website indicates that you have read
                          and accepted our privacy practices, as outlined in
                          this Privacy Policy.
                        </p>
                        <p>
                          Please be advised that the practices described in this
                          Privacy Policy apply to information gathered by us or
                          our subsidiaries, affiliates or agents: (i) through
                          this Website, (ii) where applicable, through our
                          Customer Service Department in connection with this
                          Website, (iii) through information provided to us in
                          our free standing retail stores, and (iv) through
                          information provided to us in conjunction with
                          marketing promotions and sweepstakes.
                        </p>
                        <p>
                          We are not responsible for the content or privacy
                          practices on any websites.
                        </p>
                        <p>
                          We reserve the right, in our sole discretion, to
                          modify, update, add to, discontinue, remove or
                          otherwise change any portion of this Privacy Policy,
                          in whole or in part, at any time. When we amend this
                          Privacy Policy, we will revise the “last updated” date
                          located at the top of this Privacy Policy.
                        </p>
                        <p>
                          If you provide information to us or access or use the
                          Website in any way after this Privacy Policy has been
                          changed, you will be deemed to have unconditionally
                          consented and agreed to such changes. The most current
                          version of this Privacy Policy will be available on
                          the Website and will supersede all previous versions
                          of this Privacy Policy.
                        </p>
                        <p>
                          If you have any questions regarding this Privacy
                          Policy, you should contact our Customer Service
                          Department by email at marketing@company.com
                        </p>
                      </div>
                    </div>
                    <div className="widget-content-inner">
                      <ul className="d-flex justify-content-center mb_18">
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M8.7 30.7h22.7c.3 0 .6-.2.7-.6l4-25.3c-.1-.4-.3-.7-.7-.8s-.7.2-.8.6L34 8.9l-3-1.1c-2.4-.9-5.1-.5-7.2 1-2.3 1.6-5.3 1.6-7.6 0-2.1-1.5-4.8-1.9-7.2-1L6 8.9l-.7-4.3c0-.4-.4-.7-.7-.6-.4.1-.6.4-.6.8l4 25.3c.1.3.3.6.7.6zm.8-21.6c2-.7 4.2-.4 6 .8 1.4 1 3 1.5 4.6 1.5s3.2-.5 4.6-1.5c1.7-1.2 4-1.6 6-.8l3.3 1.2-3 19.1H9.2l-3-19.1 3.3-1.2zM32 32H8c-.4 0-.7.3-.7.7s.3.7.7.7h24c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm0 2.7H8c-.4 0-.7.3-.7.7s.3.6.7.6h24c.4 0 .7-.3.7-.7s-.3-.6-.7-.6zm-17.9-8.9c-1 0-1.8-.3-2.4-.6l.1-2.1c.6.4 1.4.6 2 .6.8 0 1.2-.4 1.2-1.3s-.4-1.3-1.3-1.3h-1.3l.2-1.9h1.1c.6 0 1-.3 1-1.3 0-.8-.4-1.2-1.1-1.2s-1.2.2-1.9.4l-.2-1.9c.7-.4 1.5-.6 2.3-.6 2 0 3 1.3 3 2.9 0 1.2-.4 1.9-1.1 2.3 1 .4 1.3 1.4 1.3 2.5.3 1.8-.6 3.5-2.9 3.5zm4-5.5c0-3.9 1.2-5.5 3.2-5.5s3.2 1.6 3.2 5.5-1.2 5.5-3.2 5.5-3.2-1.6-3.2-5.5zm4.1 0c0-2-.1-3.5-.9-3.5s-1 1.5-1 3.5.1 3.5 1 3.5c.8 0 .9-1.5.9-3.5zm4.5-1.4c-.9 0-1.5-.8-1.5-2.1s.6-2.1 1.5-2.1 1.5.8 1.5 2.1-.5 2.1-1.5 2.1zm0-.8c.4 0 .7-.5.7-1.2s-.2-1.2-.7-1.2-.7.5-.7 1.2.3 1.2.7 1.2z"
                            ></path>
                          </svg>
                        </li>
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M36.7 31.1l-2.8-1.3-4.7-9.1 7.5-3.5c.4-.2.6-.6.4-1s-.6-.5-1-.4l-7.5 3.5-7.8-15c-.3-.5-1.1-.5-1.4 0l-7.8 15L4 15.9c-.4-.2-.8 0-1 .4s0 .8.4 1l7.5 3.5-4.7 9.1-2.8 1.3c-.4.2-.6.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l1-.4-1.5 2.8c-.1.2-.1.5 0 .8.1.2.4.3.7.3h31.7c.3 0 .5-.1.7-.4.1-.2.1-.5 0-.8L35.1 32l1 .4c.1 0 .2.1.3.1.3 0 .6-.2.7-.4.1-.3 0-.8-.4-1zm-5.1-2.3l-9.8-4.6 6-2.8 3.8 7.4zM20 6.4L27.1 20 20 23.3 12.9 20 20 6.4zm-7.8 15l6 2.8-9.8 4.6 3.8-7.4zm22.4 13.1H5.4L7.2 31 20 25l12.8 6 1.8 3.5z"
                            ></path>
                          </svg>
                        </li>
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M5.9 5.9v28.2h28.2V5.9H5.9zM19.1 20l-8.3 8.3c-2-2.2-3.2-5.1-3.2-8.3s1.2-6.1 3.2-8.3l8.3 8.3zm-7.4-9.3c2.2-2 5.1-3.2 8.3-3.2s6.1 1.2 8.3 3.2L20 19.1l-8.3-8.4zM20 20.9l8.3 8.3c-2.2 2-5.1 3.2-8.3 3.2s-6.1-1.2-8.3-3.2l8.3-8.3zm.9-.9l8.3-8.3c2 2.2 3.2 5.1 3.2 8.3s-1.2 6.1-3.2 8.3L20.9 20zm8.4-10.2c-1.2-1.1-2.6-2-4.1-2.6h6.6l-2.5 2.6zm-18.6 0L8.2 7.2h6.6c-1.5.6-2.9 1.5-4.1 2.6zm-.9.9c-1.1 1.2-2 2.6-2.6 4.1V8.2l2.6 2.5zM7.2 25.2c.6 1.5 1.5 2.9 2.6 4.1l-2.6 2.6v-6.7zm3.5 5c1.2 1.1 2.6 2 4.1 2.6H8.2l2.5-2.6zm18.6 0l2.6 2.6h-6.6c1.4-.6 2.8-1.5 4-2.6zm.9-.9c1.1-1.2 2-2.6 2.6-4.1v6.6l-2.6-2.5zm2.6-14.5c-.6-1.5-1.5-2.9-2.6-4.1l2.6-2.6v6.7z"
                            ></path>
                          </svg>
                        </li>
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M35.1 33.6L33.2 6.2c0-.4-.3-.7-.7-.7H13.9c-.4 0-.7.3-.7.7s.3.7.7.7h18l.7 10.5H20.8c-8.8.2-15.9 7.5-15.9 16.4 0 .4.3.7.7.7h28.9c.2 0 .4-.1.5-.2s.2-.3.2-.5v-.2h-.1zm-28.8-.5C6.7 25.3 13 19 20.8 18.9h11.9l1 14.2H6.3zm11.2-6.8c0 1.2-1 2.1-2.1 2.1s-2.1-1-2.1-2.1 1-2.1 2.1-2.1 2.1 1 2.1 2.1zm6.3 0c0 1.2-1 2.1-2.1 2.1-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1z"
                            ></path>
                          </svg>
                        </li>
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M20 33.8c7.6 0 13.8-6.2 13.8-13.8S27.6 6.2 20 6.2 6.2 12.4 6.2 20 12.4 33.8 20 33.8zm0-26.3c6.9 0 12.5 5.6 12.5 12.5S26.9 32.5 20 32.5 7.5 26.9 7.5 20 13.1 7.5 20 7.5zm-.4 15h.5c1.8 0 3-1.1 3-3.7 0-2.2-1.1-3.6-3.1-3.6h-2.6v10.6h2.2v-3.3zm0-5.2h.4c.6 0 .9.5.9 1.7 0 1.1-.3 1.7-.9 1.7h-.4v-3.4z"
                            ></path>
                          </svg>
                        </li>
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M30.2 29.3c2.2-2.5 3.6-5.7 3.6-9.3s-1.4-6.8-3.6-9.3l3.6-3.6c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0l-3.6 3.6c-2.5-2.2-5.7-3.6-9.3-3.6s-6.8 1.4-9.3 3.6L7.1 6.2c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 .9l3.6 3.6c-2.2 2.5-3.6 5.7-3.6 9.3s1.4 6.8 3.6 9.3l-3.6 3.6c-.3.3-.3.7 0 .9.1.1.3.2.5.2s.3-.1.5-.2l3.6-3.6c2.5 2.2 5.7 3.6 9.3 3.6s6.8-1.4 9.3-3.6l3.6 3.6c.1.1.3.2.5.2s.3-.1.5-.2c.3-.3.3-.7 0-.9l-3.8-3.6z"
                            ></path>
                          </svg>
                        </li>
                        <li className>
                          <svg
                            viewBox="0 0 40 40"
                            width="35px"
                            height="35px"
                            color="#222"
                            margin="5px"
                          >
                            <path
                              fill="currentColor"
                              d="M34.1 34.1H5.9V5.9h28.2v28.2zM7.2 32.8h25.6V7.2H7.2v25.6zm13.5-18.3a.68.68 0 0 0-.7-.7.68.68 0 0 0-.7.7v10.9a.68.68 0 0 0 .7.7.68.68 0 0 0 .7-.7V14.5z"
                            ></path>
                          </svg>
                        </li>
                      </ul>
                      <p className="text-center text-paragraph">
                        LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic
                        900 Grms/mt
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /tabs */}
        {/* product */}
        <section className="flat-spacing-1 pt_0">
          <div className="container">
            <div className="flat-title">
              <span className="title">People Also Bought</span>
            </div>
            <div className="hover-sw-nav hover-sw-2">
              <div
                dir="ltr"
                className="swiper tf-sw-product-sell wrap-sw-over"
                data-preview={4}
                data-tablet={3}
                data-mobile={2}
                data-space-lg={30}
                data-space-md={15}
                data-pagination={2}
                data-pagination-md={3}
                data-pagination-lg={3}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/orange-1.jpg"
                            src="/assets/images/products/orange-1.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/white-1.jpg"
                            src="/assets/images/products/white-1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Ribbed Tank Top
                        </a>
                        <span className="price">$16.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Orange</span>
                            <span className="swatch-value bg_orange-3" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/orange-1.jpg"
                              src="/assets/images/products/orange-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/black-1.jpg"
                              src="/assets/images/products/black-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-1.jpg"
                              src="/assets/images/products/white-1.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/brown.jpg"
                            src="/assets/images/products/brown.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/purple.jpg"
                            src="/assets/images/products/purple.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                        <div className="on-sale-wrap">
                          <div className="on-sale-item">-33%</div>
                        </div>
                        <div className="countdown-box">
                          <div
                            className="js-countdown"
                            data-timer={1007500}
                            data-labels="d :,h :,m :,s"
                          />
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Ribbed modal T-shirt
                        </a>
                        <span className="price">From $18.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Brown</span>
                            <span className="swatch-value bg_brown" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/brown.jpg"
                              src="/assets/images/products/brown.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Light Purple</span>
                            <span className="swatch-value bg_purple" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/purple.jpg"
                              src="/assets/images/products/purple.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Light Green</span>
                            <span className="swatch-value bg_light-green" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/green.jpg"
                              src="/assets/images/products/green.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/white-3.jpg"
                            src="/assets/images/products/white-3.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/white-4.jpg"
                            src="/assets/images/products/white-4.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Add to cart</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Oversized Printed T-shirt
                        </a>
                        <span className="price">$10.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/white-2.jpg"
                            src="/assets/images/products/white-2.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/pink-1.jpg"
                            src="/assets/images/products/pink-1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title">
                          Oversized Printed T-shirt
                        </a>
                        <span className="price">$16.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-2.jpg"
                              src="/assets/images/products/white-2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Pink</span>
                            <span className="swatch-value bg_purple" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/pink-1.jpg"
                              src="/assets/images/products/pink-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/black-2.jpg"
                              src="/assets/images/products/black-2.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/brown-2.jpg"
                            src="/assets/images/products/brown-2.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/brown-3.jpg"
                            src="/assets/images/products/brown-3.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          V-neck linen T-shirt
                        </a>
                        <span className="price">$114.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Brown</span>
                            <span className="swatch-value bg_brown" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/brown-2.jpg"
                              src="/assets/images/products/brown-2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-5.jpg"
                              src="/assets/images/products/white-5.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/light-green-1.jpg"
                            src="/assets/images/products/light-green-1.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/light-green-2.jpg"
                            src="/assets/images/products/light-green-2.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn absolute-2">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Loose Fit Sweatshirt
                        </a>
                        <span className="price">$10.00</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Light Green</span>
                            <span className="swatch-value bg_light-green" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/light-green-1.jpg"
                              src="/assets/images/products/light-green-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/black-3.jpg"
                              src="/assets/images/products/black-3.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Blue</span>
                            <span className="swatch-value bg_blue-2" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/blue.jpg"
                              src="/assets/images/products/blue.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Dark Blue</span>
                            <span className="swatch-value bg_dark-blue" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/dark-blue.jpg"
                              src="/assets/images/products/dark-blue.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-6.jpg"
                              src="/assets/images/products/white-6.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Light Grey</span>
                            <span className="swatch-value bg_light-grey" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/light-grey.jpg"
                              src="/assets/images/products/light-grey.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round">
                <span className="icon icon-arrow-right" />
              </div>
              <div className="sw-dots style-2 sw-pagination-product justify-content-center" />
            </div>
          </div>
        </section>
        {/* /product */}
        {/* recent */}
        <section className="flat-spacing-4 pt_0">
          <div className="container">
            <div className="flat-title">
              <span className="title">Recently Viewed</span>
            </div>
            <div className="hover-sw-nav hover-sw-2">
              <div
                dir="ltr"
                className="swiper tf-sw-recent wrap-sw-over"
                data-preview={4}
                data-tablet={3}
                data-mobile={2}
                data-space-lg={30}
                data-space-md={30}
                data-space={15}
                data-pagination={1}
                data-pagination-md={1}
                data-pagination-lg={1}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/light-green-1.jpg"
                            src="/assets/images/products/light-green-1.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/light-green-2.jpg"
                            src="/assets/images/products/light-green-2.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn absolute-2">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Loose Fit Sweatshirt
                        </a>
                        <span className="price">$10.00</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Light Green</span>
                            <span className="swatch-value bg_light-green" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/light-green-1.jpg"
                              src="/assets/images/products/light-green-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/black-3.jpg"
                              src="/assets/images/products/black-3.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Blue</span>
                            <span className="swatch-value bg_blue-2" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/blue.jpg"
                              src="/assets/images/products/blue.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Dark Blue</span>
                            <span className="swatch-value bg_dark-blue" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/dark-blue.jpg"
                              src="/assets/images/products/dark-blue.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-6.jpg"
                              src="/assets/images/products/white-6.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Light Grey</span>
                            <span className="swatch-value bg_light-grey" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/light-grey.jpg"
                              src="/assets/images/products/light-grey.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/brown-2.jpg"
                            src="/assets/images/products/brown-2.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/brown-3.jpg"
                            src="/assets/images/products/brown-3.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          V-neck linen T-shirt
                        </a>
                        <span className="price">$114.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Brown</span>
                            <span className="swatch-value bg_brown" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/brown-2.jpg"
                              src="/assets/images/products/brown-2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-5.jpg"
                              src="/assets/images/products/white-5.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/white-2.jpg"
                            src="/assets/images/products/white-2.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/pink-1.jpg"
                            src="/assets/images/products/pink-1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title">
                          Oversized Printed T-shirt
                        </a>
                        <span className="price">$16.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-2.jpg"
                              src="/assets/images/products/white-2.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Pink</span>
                            <span className="swatch-value bg_purple" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/pink-1.jpg"
                              src="/assets/images/products/pink-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/black-2.jpg"
                              src="/assets/images/products/black-2.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/white-3.jpg"
                            src="/assets/images/products/white-3.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/white-4.jpg"
                            src="/assets/images/products/white-4.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#shoppingCart"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Add to cart</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Oversized Printed T-shirt
                        </a>
                        <span className="price">$10.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/brown.jpg"
                            src="/assets/images/products/brown.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/purple.jpg"
                            src="/assets/images/products/purple.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                        <div className="on-sale-wrap">
                          <div className="on-sale-item">-33%</div>
                        </div>
                        <div className="countdown-box">
                          <div
                            className="js-countdown"
                            data-timer={1007500}
                            data-labels="d :,h :,m :,s"
                          />
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Ribbed modal T-shirt
                        </a>
                        <span className="price">From $18.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Brown</span>
                            <span className="swatch-value bg_brown" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/brown.jpg"
                              src="/assets/images/products/brown.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Light Purple</span>
                            <span className="swatch-value bg_purple" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/purple.jpg"
                              src="/assets/images/products/purple.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Light Green</span>
                            <span className="swatch-value bg_light-green" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/green.jpg"
                              src="/assets/images/products/green.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" lazy="true">
                    <div className="card-product">
                      <div className="card-product-wrapper">
                        <a href="product-detail.html" className="product-img">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/products/orange-1.jpg"
                            src="/assets/images/products/orange-1.jpg"
                            alt="image-product"
                          />
                          <img
                            className="lazyload img-hover"
                            data-src="/assets/images/products/white-1.jpg"
                            src="/assets/images/products/white-1.jpg"
                            alt="image-product"
                          />
                        </a>
                        <div className="list-product-btn">
                          <a
                            href="#quick_add"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quick-add tf-btn-loading"
                          >
                            <span className="icon icon-bag" />
                            <span className="tooltip">Quick Add</span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            className="box-icon bg_white wishlist btn-icon-action"
                          >
                            <span className="icon icon-heart" />
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete" />
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare" />
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check" />
                          </a>
                          <a
                            href="#quick_view"
                            data-bs-toggle="modal"
                            className="box-icon bg_white quickview tf-btn-loading"
                          >
                            <span className="icon icon-view" />
                            <span className="tooltip">Quick View</span>
                          </a>
                        </div>
                        <div className="size-list">
                          <span>S</span>
                          <span>M</span>
                          <span>L</span>
                          <span>XL</span>
                        </div>
                      </div>
                      <div className="card-product-info">
                        <a href="product-detail.html" className="title link">
                          Ribbed Tank Top
                        </a>
                        <span className="price">$16.95</span>
                        <ul className="list-color-product">
                          <li className="list-color-item color-swatch active">
                            <span className="tooltip">Orange</span>
                            <span className="swatch-value bg_orange-3" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/orange-1.jpg"
                              src="/assets/images/products/orange-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">Black</span>
                            <span className="swatch-value bg_dark" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/black-1.jpg"
                              src="/assets/images/products/black-1.jpg"
                              alt="image-product"
                            />
                          </li>
                          <li className="list-color-item color-swatch">
                            <span className="tooltip">White</span>
                            <span className="swatch-value bg_white" />
                            <img
                              className="lazyload"
                              data-src="/assets/images/products/white-1.jpg"
                              src="/assets/images/products/white-1.jpg"
                              alt="image-product"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round">
                <span className="icon icon-arrow-right" />
              </div>
              <div className="sw-dots style-2 sw-pagination-recent justify-content-center" />
            </div>
          </div>
        </section>
        {/* /recent */}
      </div>
      <Footer2 />
      {/* modal compare_color */}
      <div
        className="modal fade modalDemo tf-product-modal modal-part-content"
        id="compare_color"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Compare color</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-compare-color-wrapp">
              <div className="tf-compare-color-grid">
                <input
                  type="checkbox"
                  className="sr-only"
                  id="remove-compare-color-beige-1"
                />
                <div className="tf-compare-color-item">
                  <div className="tf-compare-color-top">
                    <label
                      htmlFor="remove-compare-color-beige-1"
                      className="tf-compare-color-remove"
                    >
                      Remove
                    </label>
                    <img
                      className="lazyload"
                      data-src="/assets/images/shop/products/hmgoepprod2.jpg"
                      src="/assets/images/shop/products/hmgoepprod2.jpg"
                      alt="img-compare"
                    />
                  </div>
                  <div className="tf-compare-color-bottom">
                    <div className="tf-compare-color-color">
                      <span className="tf-color-list-color bg-color-beige" />
                      <span>Beige</span>
                    </div>
                    <form className>
                      <select className="tf-select" name="id">
                        <option value={46633906045232} selected>
                          S - $8.00
                        </option>
                        <option value={47256262738224}>M - $8.00</option>
                        <option value={47256262770992}>L - $8.00</option>
                        <option value={47256262803760}>XL - $8.00</option>
                      </select>
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                      >
                        <span>Add to cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  id="remove-compare-color-beige-2"
                />
                <div className="tf-compare-color-item">
                  <div className="tf-compare-color-top">
                    <label
                      htmlFor="remove-compare-color-beige-2"
                      className="tf-compare-color-remove"
                    >
                      Remove
                    </label>
                    <img
                      className="lazyload"
                      data-src="/assets/images/shop/products/hmgoepprod12.jpg"
                      src="/assets/images/shop/products/hmgoepprod12.jpg"
                      alt
                    />
                  </div>
                  <div className="tf-compare-color-bottom">
                    <div className="tf-compare-color-color">
                      <span className="tf-color-list-color bg-color-blue" />
                      <span>Blue</span>
                    </div>
                    <form className>
                      <select className="tf-select" name="id">
                        <option value={46633906045232} selected>
                          S - $8.00
                        </option>
                        <option value={47256262738224}>M - $8.00</option>
                        <option value={47256262770992}>L - $8.00</option>
                        <option value={47256262803760}>XL - $8.00</option>
                      </select>
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                      >
                        <span>Add to cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  id="remove-compare-color-beige-3"
                />
                <div className="tf-compare-color-item">
                  <div className="tf-compare-color-top">
                    <label
                      htmlFor="remove-compare-color-beige-3"
                      className="tf-compare-color-remove"
                    >
                      Remove
                    </label>
                    <img
                      className="lazyload"
                      data-src="/assets/images/shop/products/hmgoepprod7.jpg"
                      src="/assets/images/shop/products/hmgoepprod7.jpg"
                      alt
                    />
                  </div>
                  <div className="tf-compare-color-bottom">
                    <div className="tf-compare-color-color">
                      <span className="tf-color-list-color bg-color-black" />
                      <span>Black</span>
                    </div>
                    <form className>
                      <select className="tf-select" name="id">
                        <option value={46633906045232} selected>
                          S - $8.00
                        </option>
                        <option value={47256262738224}>M - $8.00</option>
                        <option value={47256262770992}>L - $8.00</option>
                        <option value={47256262803760}>XL - $8.00</option>
                      </select>
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                      >
                        <span>Add to cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  id="remove-compare-color-beige-4"
                />
                <div className="tf-compare-color-item">
                  <div className="tf-compare-color-top">
                    <label
                      htmlFor="remove-compare-color-beige-4"
                      className="tf-compare-color-remove"
                    >
                      Remove
                    </label>
                    <img
                      className="lazyload"
                      data-src="/assets/images/shop/products/hmgoepprod14.jpg"
                      src="/assets/images/shop/products/hmgoepprod14.jpg"
                      alt
                    />
                  </div>
                  <div className="tf-compare-color-bottom">
                    <div className="tf-compare-color-color">
                      <span className="tf-color-list-color bg-color-white" />
                      <span>White</span>
                    </div>
                    <form className>
                      <select className="tf-select" name="id">
                        <option value={46633906045232} selected>
                          S - $8.00
                        </option>
                        <option value={47256262738224}>M - $8.00</option>
                        <option value={47256262770992}>L - $8.00</option>
                        <option value={47256262803760}>XL - $8.00</option>
                      </select>
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn btn-add-to-cart"
                      >
                        <span>Add to cart</span>
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal compare_color */}
      {/* modal ask_question */}
      <div
        className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
        id="ask_question"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Ask a question</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="overflow-y-auto">
              <form className>
                <fieldset className>
                  <label htmlFor>Name *</label>
                  <input
                    type="text"
                    placeholder
                    className
                    name="text"
                    tabIndex={2}
                    defaultValue
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className>
                  <label htmlFor>Email *</label>
                  <input
                    type="email"
                    placeholder
                    className
                    name="text"
                    tabIndex={2}
                    defaultValue
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className>
                  <label htmlFor>Phone number</label>
                  <input
                    type="number"
                    placeholder
                    className
                    name="text"
                    tabIndex={2}
                    defaultValue
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className>
                  <label htmlFor>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder
                    className
                    tabIndex={2}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="tf-btn w-100 btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn"
                >
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /modal ask_question */}
      {/* modal delivery_return */}
      <div
        className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
        id="delivery_return"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Shipping &amp; Delivery</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="overflow-y-auto">
              <div className="tf-product-popup-delivery">
                <div className="title">Delivery</div>
                <p className="text-paragraph">
                  All orders shipped with UPS Express.
                </p>
                <p className="text-paragraph">
                  Always free shipping for orders over US $250.
                </p>
                <p className="text-paragraph">
                  All orders are shipped with a UPS tracking number.
                </p>
              </div>
              <div className="tf-product-popup-delivery">
                <div className="title">Returns</div>
                <p className="text-paragraph">
                  Items returned within 14 days of their original shipment date
                  in same as new condition will be eligible for a full refund or
                  store credit.
                </p>
                <p className="text-paragraph">
                  Refunds will be charged back to the original form of payment
                  used for purchase.
                </p>
                <p className="text-paragraph">
                  Customer is responsible for shipping charges when making
                  returns and shipping/handling fees of original purchase is
                  non-refundable.
                </p>
                <p className="text-paragraph">
                  All sale items are final purchases.
                </p>
              </div>
              <div className="tf-product-popup-delivery">
                <div className="title">Help</div>
                <p className="text-paragraph">
                  Give us a shout if you have any other questions and/or
                  concerns.
                </p>
                <p className="text-paragraph">
                  Email:{" "}
                  <a
                    href="mailto:contact@domain.com"
                    aria-describedby="a11y-external-message"
                  >
                    <span className="__cf_email__">contact@domain.com</span>
                  </a>
                </p>
                <p className="text-paragraph mb-0">Phone: +1 (23) 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal delivery_return */}
      {/* modal share social */}
      <div
        className="modal modalCentered fade modalDemo tf-product-modal modal-part-content"
        id="share_social"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Share</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="overflow-y-auto">
              <ul className="tf-social-icon d-flex gap-10">
                <li>
                  <a href="#" className="box-icon social-facebook bg_line">
                    <i className="icon icon-fb" />
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon social-twiter bg_line">
                    <i className="icon icon-Icon-x" />
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon social-instagram bg_line">
                    <i className="icon icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon social-tiktok bg_line">
                    <i className="icon icon-tiktok" />
                  </a>
                </li>
                <li>
                  <a href="#" className="box-icon social-pinterest bg_line">
                    <i className="icon icon-pinterest-1" />
                  </a>
                </li>
              </ul>
              <form className="form-share" method="post" acceptCharset="utf-8">
                <fieldset>
                  <input
                    type="text"
                    defaultValue="https://themesflat.co/html/ecomus/"
                    tabIndex={0}
                    aria-required="true"
                  />
                </fieldset>
                <div className="button-submit">
                  <button
                    className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /modal share social */}
      {/* gotop */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "strokeDashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "286.138",
            }}
          />
        </svg>
      </div>
      {/* /gotop */}
      {/* toolbar-bottom */}
      <div className="tf-toolbar-bottom type-1150">
        <div className="toolbar-item">
          <a
            href="#toolbarShopmb"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
          >
            <div className="toolbar-icon">
              <i className="icon-shop" />
            </div>
            <div className="toolbar-label">Shop</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a
            href="#canvasSearch"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasLeft"
          >
            <div className="toolbar-icon">
              <i className="icon-search" />
            </div>
            <div className="toolbar-label">Search</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="#login" data-bs-toggle="modal">
            <div className="toolbar-icon">
              <i className="icon-account" />
            </div>
            <div className="toolbar-label">Account</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="wishlist.html">
            <div className="toolbar-icon">
              <i className="icon-heart" />
              <div className="toolbar-count">0</div>
            </div>
            <div className="toolbar-label">Wishlist</div>
          </a>
        </div>
        <div className="toolbar-item">
          <a href="#shoppingCart" data-bs-toggle="modal">
            <div className="toolbar-icon">
              <i className="icon-bag" />
              <div className="toolbar-count">1</div>
            </div>
            <div className="toolbar-label">Cart</div>
          </a>
        </div>
      </div>
      {/* /toolbar-bottom */}
      {/* modalDemo */}
      <div className="modal fade modalDemo" id="modalDemo">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <h5 className="demo-title">Ultimate HTML Theme</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="mega-menu">
              <div className="row-demo">
                <div className="demo-item">
                  <a href="index.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-01.jpg"
                        src="/assets/images/demo/home-01.jpg"
                        alt="home-01"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                        <span>Trend</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Fashion 01</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-multi-brand.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-multi-brand.jpg"
                        src="/assets/images/demo/home-multi-brand.jpg"
                        alt="home-multi-brand"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                        <span className="demo-hot">Hot</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Multi Brand</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-02.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-02.jpg"
                        src="/assets/images/demo/home-02.jpg"
                        alt="home-02"
                      />
                      <div className="demo-label">
                        <span className="demo-hot">Hot</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Fashion 02</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-03.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-03.jpg"
                        src="/assets/images/demo/home-03.jpg"
                        alt="home-03"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 03</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-04.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-04.jpg"
                        src="/assets/images/demo/home-04.jpg"
                        alt="home-04"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 04</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-05.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-05.jpg"
                        src="/assets/images/demo/home-05.jpg"
                        alt="home-05"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 05</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-06.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-06.jpg"
                        src="/assets/images/demo/home-06.jpg"
                        alt="home-06"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Fashion 06</span>
                  </a>
                </div>
                <div className="demo-item position-relative">
                  <a href="home-personalized-pod.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-personalized-pod.jpg"
                        src="/assets/images/demo/home-personalized-pod.jpg"
                        alt="home-personalized-pod"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Personalized Pod</span>
                  </a>
                </div>
                <div className="demo-item position-relative">
                  <a href="home-pickleball.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-pickleball.png"
                        src="/assets/images/demo/home-pickleball.png"
                        alt="home-pickleball"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Pickleball</span>
                  </a>
                </div>
                <div className="demo-item position-relative">
                  <a href="home-ceramic.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-ceramic.png"
                        src="/assets/images/demo/home-ceramic.png"
                        alt="home-ceramic"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Ceramic</span>
                  </a>
                </div>
                <div className="demo-item position-relative">
                  <a href="home-food.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-food.png"
                        src="/assets/images/demo/home-food.png"
                        alt="home-food"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Food</span>
                  </a>
                </div>
                <div className="demo-item position-relative">
                  <a href="home-camp-and-hike.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-camp-and-hike.png"
                        src="/assets/images/demo/home-camp-and-hike.png"
                        alt="home-camp-and-hike"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Camp And Hike</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-07.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-07.jpg"
                        src="/assets/images/demo/home-07.jpg"
                        alt="home-07"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 07</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-08.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-08.jpg"
                        src="/assets/images/demo/home-08.jpg"
                        alt="home-08"
                      />
                    </div>
                    <span className="demo-name">Home Fashion 08</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-skincare.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-skincare.jpg"
                        src="/assets/images/demo/home-skincare.jpg"
                        alt="home-skincare"
                      />
                    </div>
                    <span className="demo-name">Home Skincare</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-headphone.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-headphone.jpg"
                        src="/assets/images/demo/home-headphone.jpg"
                        alt="home-headphone"
                      />
                    </div>
                    <span className="demo-name">Home Headphone</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-giftcard.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-giftcard.jpg"
                        src="/assets/images/demo/home-giftcard.jpg"
                        alt="home-gift-card"
                      />
                    </div>
                    <span className="demo-name">Home Gift Card</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-furniture.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-furniture.jpg"
                        src="/assets/images/demo/home-furniture.jpg"
                        alt="home-furniture"
                      />
                    </div>
                    <span className="demo-name">Home Furniture</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-furniture-02.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-furniture2.jpg"
                        src="/assets/images/demo/home-furniture2.jpg"
                        alt="home-furniture-2"
                      />
                    </div>
                    <span className="demo-name">Home Furniture 2</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-skateboard.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-skateboard.jpg"
                        src="/assets/images/demo/home-skateboard.jpg"
                        alt="home-skateboard"
                      />
                    </div>
                    <span className="demo-name">Home Skateboard</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-stroller.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-stroller.jpg"
                        src="/assets/images/demo/home-stroller.jpg"
                        alt="home-stroller"
                      />
                    </div>
                    <span className="demo-name">Home Stroller</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-decor.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-decor.jpg"
                        src="/assets/images/demo/home-decor.jpg"
                        alt="home-decor"
                      />
                    </div>
                    <span className="demo-name">Home Decor</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-electronic.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-electronic.jpg"
                        src="/assets/images/demo/home-electronic.jpg"
                        alt="home-electronic"
                      />
                    </div>
                    <span className="demo-name">Home Electronic</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-setup-gear.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-setup-gear.jpg"
                        src="/assets/images/demo/home-setup-gear.jpg"
                        alt="home-setup-gear"
                      />
                    </div>
                    <span className="demo-name">Home Setup Gear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-dog-accessories.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-dog-accessories.jpg"
                        src="/assets/images/demo/home-dog-accessories.jpg"
                        alt="home-dog-accessories"
                      />
                    </div>
                    <span className="demo-name">Home Dog Accessories</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-kitchen-wear.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-kitchen.jpg"
                        src="/assets/images/demo/home-kitchen.jpg"
                        alt="home-kitchen-wear"
                      />
                    </div>
                    <span className="demo-name">Home Kitchen Wear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-phonecase.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-phonecase.jpg"
                        src="/assets/images/demo/home-phonecase.jpg"
                        alt="home-phonecase"
                      />
                    </div>
                    <span className="demo-name">Home Phonecase</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-paddle-boards.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home_paddle_board.jpg"
                        src="/assets/images/demo/home_paddle_board.jpg"
                        alt="home-paddle_board"
                      />
                    </div>
                    <span className="demo-name">Home Paddle Boards</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-glasses.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-glasses.jpg"
                        src="/assets/images/demo/home-glasses.jpg"
                        alt="home-glasses"
                      />
                    </div>
                    <span className="demo-name">Home Glasses</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-pod-store.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-pod-store.jpg"
                        src="/assets/images/demo/home-pod-store.jpg"
                        alt="home-pod-store"
                      />
                    </div>
                    <span className="demo-name">Home POD Store</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-activewear.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-activewear.jpg"
                        src="/assets/images/demo/home-activewear.jpg"
                        alt="home-activewear"
                      />
                    </div>
                    <span className="demo-name">Activewear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-handbag.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-handbag.jpg"
                        src="/assets/images/demo/home-handbag.jpg"
                        alt="home-handbag"
                      />
                    </div>
                    <span className="demo-name">Home Handbag</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-tee.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-tee.jpg"
                        src="/assets/images/demo/home-tee.jpg"
                        alt="home-tee"
                      />
                    </div>
                    <span className="demo-name">Home Tee</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-sock.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-socks.jpg"
                        src="/assets/images/demo/home-socks.jpg"
                        alt="home-sock"
                      />
                    </div>
                    <span className="demo-name">Home Sock</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-jewerly.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-jewelry.jpg"
                        src="/assets/images/demo/home-jewelry.jpg"
                        alt="home-jewelry"
                      />
                    </div>
                    <span className="demo-name">Home Jewelry</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-sneaker.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-sneaker.jpg"
                        src="/assets/images/demo/home-sneaker.jpg"
                        alt="home-sneaker"
                      />
                    </div>
                    <span className="demo-name">Home Sneaker</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-accessories.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-accessories.jpg"
                        src="/assets/images/demo/home-accessories.jpg"
                        alt="home-accessories"
                      />
                    </div>
                    <span className="demo-name">Home Accessories</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-grocery.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-gocery.jpg"
                        src="/assets/images/demo/home-gocery.jpg"
                        alt="home-grocery"
                      />
                    </div>
                    <span className="demo-name">Home Grocery</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-baby.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-baby.jpg"
                        src="/assets/images/demo/home-baby.jpg"
                        alt="home-baby"
                      />
                    </div>
                    <span className="demo-name">Home Baby</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-cosmetic.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-cosmetic.png"
                        src="/assets/images/demo/home-cosmetic.png"
                        alt="home-cosmetic"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Cosmetic</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-plant.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-plant.png"
                        src="/assets/images/demo/home-plant.png"
                        alt="home-plant"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Plant</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-swimwear.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-swimwear.png"
                        src="/assets/images/demo/home-swimwear.png"
                        alt="home-swimwear"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Swimwear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-electric-bike.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-electric-bike.png"
                        src="/assets/images/demo/home-electric-bike.png"
                        alt="home-electric-bike"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Electric Bike</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-footwear.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-footwear.jpg"
                        src="/assets/images/demo/home-footwear.jpg"
                        alt="home-footwear"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Footwear</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-book-store.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-bookstore.png"
                        src="/assets/images/demo/home-bookstore.png"
                        alt="home-bookstore"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Bookstore</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-gaming-accessories.html">
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-gaming-accessories.png"
                        src="/assets/images/demo/home-gaming-accessories.png"
                        alt="home-gaming-accessories"
                      />
                      <div className="demo-label">
                        <span className="demo-new">New</span>
                      </div>
                    </div>
                    <span className="demo-name">Home Gaming Accessories</span>
                  </a>
                </div>
                <div className="demo-item">
                  <a href="home-parallax.html">
                    <div className="demo-image">
                      <img
                        className="lazyload"
                        data-src="/assets/images/demo/home-skincare.jpg"
                        src="/assets/images/demo/home-skincare.jpg"
                        alt="home-skincare"
                      />
                    </div>
                    <span className="demo-name">Home Parallax</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modalDemo */}
      {/* mobile menu */}
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-one"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-one"
                >
                  <span>Home</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-one" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a href="index.html" className="sub-nav-link">
                        Home Fashion 01
                      </a>
                    </li>
                    <li>
                      <a href="home-02.html" className="sub-nav-link">
                        Home Fashion 02
                      </a>
                    </li>
                    <li>
                      <a href="home-03.html" className="sub-nav-link">
                        Home Fashion 03
                      </a>
                    </li>
                    <li>
                      <a href="home-04.html" className="sub-nav-link">
                        Home Fashion 04
                      </a>
                    </li>
                    <li>
                      <a href="home-05.html" className="sub-nav-link">
                        Home Fashion 05
                      </a>
                    </li>
                    <li>
                      <a href="home-06.html" className="sub-nav-link">
                        Home Fashion 06
                      </a>
                    </li>
                    <li>
                      <a href="home-07.html" className="sub-nav-link">
                        Home Fashion 07
                      </a>
                    </li>
                    <li>
                      <a href="home-08.html" className="sub-nav-link">
                        Home Fashion 08
                      </a>
                    </li>
                    <li>
                      <a href="home-giftcard.html" className="sub-nav-link">
                        Home Gift Card
                      </a>
                    </li>
                    <li>
                      <a href="home-headphone.html" className="sub-nav-link">
                        Home Headphone
                      </a>
                    </li>
                    <li>
                      <a href="home-multi-brand.html" className="sub-nav-link">
                        Home Multi Brand
                      </a>
                    </li>
                    <li>
                      <a href="home-skincare.html" className="sub-nav-link">
                        Home skincare
                      </a>
                    </li>
                    <li>
                      <a href="home-furniture.html" className="sub-nav-link">
                        Home Furniture
                      </a>
                    </li>
                    <li>
                      <a href="home-furniture-02.html" className="sub-nav-link">
                        Home Furniture 2
                      </a>
                    </li>
                    <li>
                      <a href="home-skateboard.html" className="sub-nav-link">
                        Home Skateboard
                      </a>
                    </li>
                    <li>
                      <a href="home-stroller.html" className="sub-nav-link">
                        Home Stroller
                      </a>
                    </li>
                    <li>
                      <a href="home-decor.html" className="sub-nav-link">
                        Home Decor
                      </a>
                    </li>
                    <li>
                      <a href="home-electronic.html" className="sub-nav-link">
                        Home Electronic
                      </a>
                    </li>
                    <li>
                      <a href="home-setup-gear.html" className="sub-nav-link">
                        Home Setup Gear
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-dog-accessories.html"
                        className="sub-nav-link"
                      >
                        Home Dog Accessories
                      </a>
                    </li>
                    <li>
                      <a href="home-kitchen-wear.html" className="sub-nav-link">
                        Home Kitchen Wear
                      </a>
                    </li>
                    <li>
                      <a href="home-phonecase.html" className="sub-nav-link">
                        Home Phonecase
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-paddle-boards.html"
                        className="sub-nav-link"
                      >
                        Home Paddle Boards
                      </a>
                    </li>
                    <li>
                      <a href="home-glasses.html" className="sub-nav-link">
                        Home Glasses
                      </a>
                    </li>
                    <li>
                      <a href="home-pod-store.html" className="sub-nav-link">
                        Home POD Store
                      </a>
                    </li>
                    <li>
                      <a href="home-activewear.html" className="sub-nav-link">
                        Home Activewear
                      </a>
                    </li>
                    <li>
                      <a href="home-handbag.html" className="sub-nav-link">
                        Home Handbag
                      </a>
                    </li>
                    <li>
                      <a href="home-tee.html" className="sub-nav-link">
                        Home Tee
                      </a>
                    </li>
                    <li>
                      <a href="home-sock.html" className="sub-nav-link">
                        Home Sock
                      </a>
                    </li>
                    <li>
                      <a href="home-jewerly.html" className="sub-nav-link">
                        Home Jewelry
                      </a>
                    </li>
                    <li>
                      <a href="home-sneaker.html" className="sub-nav-link">
                        Home Sneaker
                      </a>
                    </li>
                    <li>
                      <a href="home-accessories.html" className="sub-nav-link">
                        Home Accessories
                      </a>
                    </li>
                    <li>
                      <a href="home-grocery.html" className="sub-nav-link">
                        Home Grocery
                      </a>
                    </li>
                    <li>
                      <a href="home-baby.html" className="sub-nav-link">
                        Home Baby
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-personalized-pod.html"
                        className="sub-nav-link"
                      >
                        Home Personalized Pod
                      </a>
                    </li>
                    <li>
                      <a href="home-pickleball.html" className="sub-nav-link">
                        Home Pickleball
                      </a>
                    </li>
                    <li>
                      <a href="home-ceramic.html" className="sub-nav-link">
                        Home Ceramic
                      </a>
                    </li>
                    <li>
                      <a href="home-food.html" className="sub-nav-link">
                        Home Food
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-camp-and-hike.html"
                        className="sub-nav-link"
                      >
                        Home Camp And Hike
                      </a>
                    </li>
                    <li>
                      <a href="home-cosmetic.html" className="sub-nav-link">
                        Home Cosmetic
                      </a>
                    </li>
                    <li>
                      <a href="home-plant.html" className="sub-nav-link">
                        Home Plant
                      </a>
                    </li>
                    <li>
                      <a href="home-swimwear.html" className="sub-nav-link">
                        Home Swimwear
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-electric-bike.html"
                        className="sub-nav-link"
                      >
                        Home Electric Bike
                      </a>
                    </li>
                    <li>
                      <a href="home-footwear.html" className="sub-nav-link">
                        Home Footwear
                      </a>
                    </li>
                    <li>
                      <a href="home-book-store.html" className="sub-nav-link">
                        Home Book Store
                      </a>
                    </li>
                    <li>
                      <a
                        href="home-gaming-accessories.html"
                        className="sub-nav-link"
                      >
                        Home Gaming Accessories
                      </a>
                    </li>
                    <li>
                      <a href="home-parallax.html" className="sub-nav-link">
                        Home Parallax
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-two"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-two"
                >
                  <span>Shop</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-two" className="collapse">
                  <ul className="sub-nav-menu" id="sub-menu-navigation">
                    <li>
                      <a
                        href="#sub-shop-one"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-one"
                      >
                        <span>Shop layouts</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="shop-default.html"
                              className="sub-nav-link"
                            >
                              Default
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-left-sidebar.html"
                              className="sub-nav-link"
                            >
                              Left sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-right-sidebar.html"
                              className="sub-nav-link"
                            >
                              Right sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-fullwidth.html"
                              className="sub-nav-link"
                            >
                              Fullwidth
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-collection-sub.html"
                              className="sub-nav-link"
                            >
                              Sub collection
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-collection-list.html"
                              className="sub-nav-link"
                            >
                              Collections list
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-two"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-two"
                      >
                        <span>Features</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a href="shop-link.html" className="sub-nav-link">
                              Pagination links
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-loadmore.html"
                              className="sub-nav-link"
                            >
                              Pagination loadmore
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-infinite-scrolling.html"
                              className="sub-nav-link"
                            >
                              Pagination infinite scrolling
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-filter-sidebar.html"
                              className="sub-nav-link"
                            >
                              Filter sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-filter-hidden.html"
                              className="sub-nav-link"
                            >
                              Filter hidden
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-shop-three"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-shop-three"
                      >
                        <span>Product styles</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-shop-three" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-style-01.html"
                              className="sub-nav-link"
                            >
                              Product style 01
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-02.html"
                              className="sub-nav-link"
                            >
                              Product style 02
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-03.html"
                              className="sub-nav-link"
                            >
                              Product style 03
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-04.html"
                              className="sub-nav-link"
                            >
                              Product style 04
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-05.html"
                              className="sub-nav-link"
                            >
                              Product style 05
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-06.html"
                              className="sub-nav-link"
                            >
                              Product style 06
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-style-07.html"
                              className="sub-nav-link"
                            >
                              Product style 07
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-three"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-three"
                >
                  <span>Products</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-three" className="collapse">
                  <ul className="sub-nav-menu" id="sub-menu-navigation">
                    <li>
                      <a
                        href="#sub-product-one"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-one"
                      >
                        <span>Product layouts</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-detail.html"
                              className="sub-nav-link"
                            >
                              Product default
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-grid-1.html"
                              className="sub-nav-link"
                            >
                              Product grid 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-grid-2.html"
                              className="sub-nav-link"
                            >
                              Product grid 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-stacked.html"
                              className="sub-nav-link"
                            >
                              Product stacked
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-right-thumbnails.html"
                              className="sub-nav-link"
                            >
                              Product right thumbnails
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-bottom-thumbnails.html"
                              className="sub-nav-link"
                            >
                              Product bottom thumbnails
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-drawer-sidebar.html"
                              className="sub-nav-link"
                            >
                              Product drawer sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-description-accordion.html"
                              className="sub-nav-link"
                            >
                              Product description accordion
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-description-list.html"
                              className="sub-nav-link"
                            >
                              Product description list
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-description-vertical.html"
                              className="sub-nav-link"
                            >
                              Product description vertical
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-two"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-two"
                      >
                        <span>Product details</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-inner-zoom.html"
                              className="sub-nav-link"
                            >
                              Product inner zoom
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-zoom-magnifier.html"
                              className="sub-nav-link"
                            >
                              Product zoom magnifier
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-no-zoom.html"
                              className="sub-nav-link"
                            >
                              Product no zoom
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-photoswipe-popup.html"
                              className="sub-nav-link"
                            >
                              Product photoswipe popup
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-zoom-popup.html"
                              className="sub-nav-link"
                            >
                              Product external zoom and photoswipe popup
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-video.html"
                              className="sub-nav-link"
                            >
                              Product video
                            </a>
                          </li>
                          <li>
                            <a href="product-3d.html" className="sub-nav-link">
                              Product 3D, AR models
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-options-customizer.html"
                              className="sub-nav-link"
                            >
                              Product options &amp; customizer
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-advanced-types.html"
                              className="sub-nav-link"
                            >
                              Advanced product types
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-giftcard.html"
                              className="sub-nav-link"
                            >
                              Recipient information form for gift card products
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-three"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-three"
                      >
                        <span>Product swatchs</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-three" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-color-swatch.html"
                              className="sub-nav-link"
                            >
                              Product color swatch
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-rectangle.html"
                              className="sub-nav-link"
                            >
                              Product rectangle
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-rectangle-color.html"
                              className="sub-nav-link"
                            >
                              Product rectangle color
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-image.html"
                              className="sub-nav-link"
                            >
                              Product swatch image
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-image-rounded.html"
                              className="sub-nav-link"
                            >
                              Product swatch image rounded
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-dropdown.html"
                              className="sub-nav-link"
                            >
                              Product swatch dropdown
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-swatch-dropdown-color.html"
                              className="sub-nav-link"
                            >
                              Product swatch dropdown color
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#sub-product-four"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-product-four"
                      >
                        <span>Product features</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-product-four" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="product-frequently-bought-together.html"
                              className="sub-nav-link"
                            >
                              Frequently bought together
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-frequently-bought-together-2.html"
                              className="sub-nav-link"
                            >
                              Frequently bought together 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-upsell-features.html"
                              className="sub-nav-link"
                            >
                              Product upsell features
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-pre-orders.html"
                              className="sub-nav-link"
                            >
                              Product pre-orders
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-notification.html"
                              className="sub-nav-link"
                            >
                              Back in stock notification
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-pickup.html"
                              className="sub-nav-link"
                            >
                              Product pickup
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-images-grouped.html"
                              className="sub-nav-link"
                            >
                              Variant images grouped
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-complimentary.html"
                              className="sub-nav-link"
                            >
                              Complimentary products
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-quick-order-list.html"
                              className="sub-nav-link line-clamp"
                            >
                              Quick order list
                              <div className="demo-label">
                                <span className="demo-new">New</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-detail-volume-discount.html"
                              className="sub-nav-link line-clamp"
                            >
                              Volume Discount
                              <div className="demo-label">
                                <span className="demo-new">New</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-detail-volume-discount-grid.html"
                              className="sub-nav-link line-clamp"
                            >
                              Volume Discount Grid
                              <div className="demo-label">
                                <span className="demo-new">New</span>
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              href="product-detail-buyx-gety.html"
                              className="sub-nav-link line-clamp"
                            >
                              Buy X Get Y
                              <div className="demo-label">
                                <span className="demo-new">New</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-four"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-four"
                >
                  <span>Pages</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-four" className="collapse">
                  <ul className="sub-nav-menu" id="sub-menu-navigation">
                    <li>
                      <a href="about-us.html" className="sub-nav-link">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="brands.html" className="sub-nav-link line-clamp">
                        Brands
                        <div className="demo-label">
                          <span className="demo-new">New</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="brands-v2.html" className="sub-nav-link">
                        Brands V2
                      </a>
                    </li>
                    <li>
                      <a href="contact-1.html" className="sub-nav-link">
                        Contact 1
                      </a>
                    </li>
                    <li>
                      <a href="contact-2.html" className="sub-nav-link">
                        Contact 2
                      </a>
                    </li>
                    <li>
                      <a href="faq-1.html" className="sub-nav-link">
                        FAQ 01
                      </a>
                    </li>
                    <li>
                      <a href="faq-2.html" className="sub-nav-link">
                        FAQ 02
                      </a>
                    </li>
                    <li>
                      <a href="our-store.html" className="sub-nav-link">
                        Our store
                      </a>
                    </li>
                    <li>
                      <a href="store-locations.html" className="sub-nav-link">
                        Store locator
                      </a>
                    </li>
                    <li>
                      <a
                        href="timeline.html"
                        className="sub-nav-link line-clamp"
                      >
                        Timeline
                        <div className="demo-label">
                          <span className="demo-new">New</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="view-cart.html"
                        className="sub-nav-link line-clamp"
                      >
                        View cart
                      </a>
                    </li>
                    <li>
                      <a
                        href="checkout.html"
                        className="sub-nav-link line-clamp"
                      >
                        Check out
                      </a>
                    </li>
                    <li>
                      <a
                        href="payment-confirmation.html"
                        className="sub-nav-link line-clamp"
                      >
                        Payment Confirmation
                      </a>
                    </li>
                    <li>
                      <a
                        href="payment-failure.html"
                        className="sub-nav-link line-clamp"
                      >
                        Payment Failure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#sub-account"
                        className="sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sub-account"
                      >
                        <span>My Account</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="sub-account" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a href="my-account.html" className="sub-nav-link">
                              My account
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-orders.html"
                              className="sub-nav-link"
                            >
                              My order
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-orders-details.html"
                              className="sub-nav-link"
                            >
                              My order details
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-address.html"
                              className="sub-nav-link"
                            >
                              My address
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-edit.html"
                              className="sub-nav-link"
                            >
                              My account details
                            </a>
                          </li>
                          <li>
                            <a
                              href="my-account-wishlist.html"
                              className="sub-nav-link"
                            >
                              My wishlist
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="invoice.html"
                        className="sub-nav-link line-clamp"
                      >
                        Invoice
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="sub-nav-link line-clamp">
                        404
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#dropdown-menu-five"
                  className="collapsed mb-menu-link current"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="dropdown-menu-five"
                >
                  <span>Blog</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="dropdown-menu-five" className="collapse">
                  <ul className="sub-nav-menu">
                    <li>
                      <a href="blog-grid.html" className="sub-nav-link">
                        Grid layout
                      </a>
                    </li>
                    <li>
                      <a href="blog-sidebar-left.html" className="sub-nav-link">
                        Left sidebar
                      </a>
                    </li>
                    <li>
                      <a
                        href="blog-sidebar-right.html"
                        className="sub-nav-link"
                      >
                        Right sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-list.html" className="sub-nav-link">
                        Blog list
                      </a>
                    </li>
                    <li>
                      <a href="blog-detail.html" className="sub-nav-link">
                        Single Post
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3"
                  className="mb-menu-link"
                >
                  Buy now
                </a>
              </li>
            </ul>
            <div className="mb-other-content">
              <div className="d-flex group-icon">
                <a href="wishlist.html" className="site-nav-icon">
                  <i className="icon icon-heart" />
                  Wishlist
                </a>
                <a href="home-search.html" className="site-nav-icon">
                  <i className="icon icon-search" />
                  Search
                </a>
              </div>
              <div className="mb-notice">
                <a href="contact-1.html" className="text-need">
                  Need help ?
                </a>
              </div>
              <ul className="mb-info">
                <li>
                  Address: 1234 Fashion Street, Suite 567, <br /> New York, NY
                  10001
                </li>
                <li>
                  Email: <b>info@fashionshop.com</b>
                </li>
                <li>
                  Phone: <b>(212) 555-1234</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-bottom">
            <a href="login.html" className="site-nav-icon">
              <i className="icon icon-account" />
              Login
            </a>
            <div className="bottom-bar-language">
              <div className="tf-currencies">
                <select className="image-select center style-default type-currencies">
                  <option data-thumbnail="/assets/images/country/fr.svg">
                    EUR € | France
                  </option>
                  <option data-thumbnail="/assets/images/country/de.svg">
                    EUR € | Germany
                  </option>
                  <option
                    selected
                    data-thumbnail="/assets/images/country/us.svg"
                  >
                    USD $ | United States
                  </option>
                  <option data-thumbnail="/assets/images/country/vn.svg">
                    VND ₫ | Vietnam
                  </option>
                </select>
              </div>
              <div className="tf-languages">
                <select className="image-select center style-default type-languages">
                  <option>English</option>
                  <option>العربية</option>
                  <option>简体中文</option>
                  <option>اردو</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /mobile menu */}
      {/* canvasSearch */}
      <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
        <div className="canvas-wrapper">
          <header className="tf-search-head">
            <div className="title fw-5">
              Search our site
              <div className="close">
                <span
                  className="icon-close icon-close-popup"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="tf-search-sticky">
              <form className="tf-mini-search-frm">
                <fieldset className="text">
                  <input
                    type="text"
                    placeholder="Search"
                    className
                    name="text"
                    tabIndex={0}
                    defaultValue
                    aria-required="true"
                    required
                  />
                </fieldset>
                <button className type="submit">
                  <i className="icon-search" />
                </button>
              </form>
            </div>
          </header>
          <div className="canvas-body p-0">
            <div className="tf-search-content">
              <div className="tf-cart-hide-has-results">
                <div className="tf-col-quicklink">
                  <div className="tf-search-content-title fw-5">Quick link</div>
                  <ul className="tf-quicklink-list">
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className>
                        Fashion
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className>
                        Men
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className>
                        Women
                      </a>
                    </li>
                    <li className="tf-quicklink-item">
                      <a href="shop-default.html" className>
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tf-col-content">
                  <div className="tf-search-content-title fw-5">
                    Need some inspiration?
                  </div>
                  <div className="tf-search-hidden-inner">
                    <div className="tf-loop-item">
                      <div className="image">
                        <a href="product-detail.html">
                          <img src="/assets/images/products/white-3.jpg" alt />
                        </a>
                      </div>
                      <div className="content">
                        <a href="product-detail.html">Cotton jersey top</a>
                        <div className="tf-product-info-price">
                          <div className="compare-at-price">$10.00</div>
                          <div className="price-on-sale fw-6">$8.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-loop-item">
                      <div className="image">
                        <a href="product-detail.html">
                          <img src="/assets/images/products/white-2.jpg" alt />
                        </a>
                      </div>
                      <div className="content">
                        <a href="product-detail.html">Mini crossbody bag</a>
                        <div className="tf-product-info-price">
                          <div className="price fw-6">$18.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-loop-item">
                      <div className="image">
                        <a href="product-detail.html">
                          <img src="/assets/images/products/white-1.jpg" alt />
                        </a>
                      </div>
                      <div className="content">
                        <a href="product-detail.html">
                          Oversized Printed T-shirt
                        </a>
                        <div className="tf-product-info-price">
                          <div className="price fw-6">$18.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /canvasSearch */}
      {/* toolbarShopmb */}
      <div
        className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
        id="toolbarShopmb"
      >
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate1.jpg" alt />
                  </div>
                  <span>Accessories</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate2.jpg" alt />
                  </div>
                  <span>Dog</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate3.jpg" alt />
                  </div>
                  <span>Grocery</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate4.png" alt />
                  </div>
                  <span>Handbag</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#cate-menu-one"
                  className="tf-category-link has-children collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-menu-one"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate5.jpg" alt />
                  </div>
                  <span>Fashion</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="cate-menu-one" className="collapse list-cate">
                  <ul className="sub-nav-menu" id="cate-menu-navigation">
                    <li>
                      <a
                        href="#cate-shop-one"
                        className="tf-category-link has-children sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="cate-shop-one"
                      >
                        <div className="image">
                          <img src="/assets/images/shop/cate/cate6.jpg" alt />
                        </div>
                        <span>Mens</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="cate-shop-one" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img
                                  src="/assets/images/shop/cate/cate1.jpg"
                                  alt
                                />
                              </div>
                              <span>Accessories</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img
                                  src="/assets/images/shop/cate/cate8.jpg"
                                  alt
                                />
                              </div>
                              <span>Shoes</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#cate-shop-two"
                        className="tf-category-link has-children sub-nav-link collapsed"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="cate-shop-two"
                      >
                        <div className="image">
                          <img src="/assets/images/shop/cate/cate9.jpg" alt />
                        </div>
                        <span>Womens</span>
                        <span className="btn-open-sub" />
                      </a>
                      <div id="cate-shop-two" className="collapse">
                        <ul className="sub-nav-menu sub-menu-level-2">
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img
                                  src="/assets/images/shop/cate/cate4.png"
                                  alt
                                />
                              </div>
                              <span>Handbag</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-default.html"
                              className="tf-category-link sub-nav-link"
                            >
                              <div className="image">
                                <img
                                  src="/assets/images/shop/cate/cate7.jpg"
                                  alt
                                />
                              </div>
                              <span>Tee</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#cate-menu-two"
                  className="tf-category-link has-children collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-menu-two"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate6.jpg" alt />
                  </div>
                  <span>Men</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="cate-menu-two" className="collapse list-cate">
                  <ul className="sub-nav-menu" id="cate-menu-navigation1">
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="/assets/images/shop/cate/cate1.jpg" alt />
                        </div>
                        <span>Accessories</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="/assets/images/shop/cate/cate8.jpg" alt />
                        </div>
                        <span>Shoes</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate7.jpg" alt />
                  </div>
                  <span>Tee</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="shop-default.html"
                  className="tf-category-link mb-menu-link"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate8.jpg" alt />
                  </div>
                  <span>Shoes</span>
                </a>
              </li>
              <li className="nav-mb-item">
                <a
                  href="#cate-menu-three"
                  className="tf-category-link has-children collapsed mb-menu-link"
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls="cate-menu-three"
                >
                  <div className="image">
                    <img src="/assets/images/shop/cate/cate9.jpg" alt />
                  </div>
                  <span>Women</span>
                  <span className="btn-open-sub" />
                </a>
                <div id="cate-menu-three" className="collapse list-cate">
                  <ul className="sub-nav-menu" id="cate-menu-navigation2">
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="/assets/images/shop/cate/cate4.png" alt />
                        </div>
                        <span>Handbag</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-default.html"
                        className="tf-category-link sub-nav-link"
                      >
                        <div className="image">
                          <img src="/assets/images/shop/cate/cate7.jpg" alt />
                        </div>
                        <span>Tee</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-bottom">
            <a href="shop-default.html" className="tf-btn fw-5 btn-line">
              View all collection
              <i className="icon icon-arrow1-top-left" />
            </a>
          </div>
        </div>
      </div>
      {/* /toolbarShopmb */}
      {/* modal login */}
      <div
        className="modal modalCentered fade form-sign-in modal-part-content"
        id="login"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Log in</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-login-form">
              <form
                className
                action="https://themesflat.co/html/ecomus/my-account.html"
                acceptCharset="utf-8"
              >
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="email"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    Email *
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="password"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    Password *
                  </label>
                </div>
                <div>
                  <a
                    href="#forgotPassword"
                    data-bs-toggle="modal"
                    className="btn-link link"
                  >
                    Forgot your password?
                  </a>
                </div>
                <div className="bottom">
                  <div className="w-100">
                    <button
                      type="submit"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Log in</span>
                    </button>
                  </div>
                  <div className="w-100">
                    <a
                      href="#register"
                      data-bs-toggle="modal"
                      className="btn-link fw-6 w-100 link"
                    >
                      New customer? Create your account
                      <i className="icon icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modalCentered fade form-sign-in modal-part-content"
        id="forgotPassword"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Reset your password</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-login-form">
              <form className>
                <div>
                  <p>
                    Sign up for early Sale access plus tailored new arrivals,
                    trends and promotions. To opt out, click unsubscribe in our
                    emails
                  </p>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="email"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    Email *
                  </label>
                </div>
                <div>
                  <a
                    href="#login"
                    data-bs-toggle="modal"
                    className="btn-link link"
                  >
                    Cancel
                  </a>
                </div>
                <div className="bottom">
                  <div className="w-100">
                    <button
                      type="submit"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Reset password</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modalCentered fade form-sign-in modal-part-content"
        id="register"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Register</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-login-form">
              <form className>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    First name
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    Last name
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="email"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    Email *
                  </label>
                </div>
                <div className="tf-field style-1">
                  <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="password"
                    name
                  />
                  <label className="tf-field-label" htmlFor>
                    Password *
                  </label>
                </div>
                <div className="bottom">
                  <div className="w-100">
                    <a
                      href="register.html"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                    >
                      <span>Register</span>
                    </a>
                  </div>
                  <div className="w-100">
                    <a
                      href="#login"
                      data-bs-toggle="modal"
                      className="btn-link fw-6 w-100 link"
                    >
                      Already have an account? Log in here
                      <i className="icon icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /modal login */}
      {/* shoppingCart */}
      <div
        className="modal fullRight fade modal-shopping-cart"
        id="shoppingCart"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="header">
              <div className="title fw-5">
                Shopping cart <span>(2)</span>
              </div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-mini-cart-threshold">
                <div className="tf-progress-bar">
                  <span style={{ width: "50%" }}>
                    <div className="progress-car">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={21}
                        height={14}
                        viewBox="0 0 21 14"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"
                        />
                      </svg>
                    </div>
                  </span>
                </div>
                <div className="tf-progress-msg">
                  Buy <span className="price fw-6">$75.00</span> more to enjoy{" "}
                  <span className="fw-6">Free Shipping</span>
                </div>
              </div>
              <div className="tf-mini-cart-wrap">
                <div className="tf-mini-cart-main">
                  <div className="tf-mini-cart-sroll">
                    <div className="tf-mini-cart-items">
                      <div className="tf-mini-cart-item">
                        <div className="tf-mini-cart-image">
                          <a href="product-detail.html">
                            <img
                              src="/assets/images/products/white-2.jpg"
                              alt
                            />
                          </a>
                        </div>
                        <div className="tf-mini-cart-info">
                          <a className="title link" href="product-detail.html">
                            T-shirt
                          </a>
                          <div className="meta-variant">Light gray</div>
                          <div className="price fw-6">$25.00</div>
                          <div className="tf-mini-cart-btns">
                            <div className="wg-quantity small">
                              <span className="btn-quantity minus-btn">-</span>
                              <input
                                type="text"
                                name="number"
                                defaultValue={1}
                              />
                              <span className="btn-quantity plus-btn">+</span>
                            </div>
                            <div className="tf-mini-cart-remove">Remove</div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-mini-cart-item">
                        <div className="tf-mini-cart-image">
                          <a href="product-detail.html">
                            <img
                              src="/assets/images/products/white-3.jpg"
                              alt
                            />
                          </a>
                        </div>
                        <div className="tf-mini-cart-info">
                          <a className="title link" href="product-detail.html">
                            Oversized Motif T-shirt
                          </a>
                          <div className="price fw-6">$25.00</div>
                          <div className="tf-mini-cart-btns">
                            <div className="wg-quantity small">
                              <span className="btn-quantity minus-btn">-</span>
                              <input
                                type="text"
                                name="number"
                                defaultValue={1}
                              />
                              <span className="btn-quantity plus-btn">+</span>
                            </div>
                            <div className="tf-mini-cart-remove">Remove</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-minicart-recommendations">
                      <div className="tf-minicart-recommendations-heading">
                        <div className="tf-minicart-recommendations-title">
                          You may also like
                        </div>
                        <div className="sw-dots small style-2 cart-slide-pagination" />
                      </div>
                      <div dir="ltr" className="swiper tf-cart-slide">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tf-minicart-recommendations-item">
                              <div className="tf-minicart-recommendations-item-image">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/white-3.jpg"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="tf-minicart-recommendations-item-infos flex-grow-1">
                                <a className="title" href="product-detail.html">
                                  Loose Fit Sweatshirt
                                </a>
                                <div className="price">$25.00</div>
                              </div>
                              <div className="tf-minicart-recommendations-item-quickview">
                                <div className="btn-show-quickview quickview hover-tooltip">
                                  <span className="icon icon-view" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-minicart-recommendations-item">
                              <div className="tf-minicart-recommendations-item-image">
                                <a href="product-detail.html">
                                  <img
                                    src="/assets/images/products/white-2.jpg"
                                    alt
                                  />
                                </a>
                              </div>
                              <div className="tf-minicart-recommendations-item-infos flex-grow-1">
                                <a className="title" href="product-detail.html">
                                  Loose Fit Hoodie
                                </a>
                                <div className="price">$25.00</div>
                              </div>
                              <div className="tf-minicart-recommendations-item-quickview">
                                <div className="btn-show-quickview quickview hover-tooltip">
                                  <span className="icon icon-view" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-mini-cart-bottom">
                  <div className="tf-mini-cart-tool">
                    <div className="tf-mini-cart-tool-btn btn-add-note">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={18}
                        viewBox="0 0 16 18"
                        fill="currentColor"
                      >
                        <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z" />
                        <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z" />
                      </svg>
                    </div>
                    <div className="tf-mini-cart-tool-btn btn-add-gift">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={17}
                        height={18}
                        viewBox="0 0 17 18"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.99566 2.73409C2.99566 0.55401 5.42538 -0.746668 7.23916 0.463462L8.50073 1.30516L9.7623 0.463462C11.5761 -0.746668 14.0058 0.55401 14.0058 2.73409V3.24744H14.8225C15.9633 3.24744 16.8881 4.17233 16.8881 5.31312V6.82566C16.8881 7.21396 16.5734 7.52873 16.1851 7.52873H15.8905V15.1877C15.8905 15.1905 15.8905 15.1933 15.8905 15.196C15.886 16.7454 14.6286 18 13.0782 18H3.92323C2.37003 18 1.11091 16.7409 1.11091 15.1877V7.52877H0.81636C0.42806 7.52877 0.113281 7.21399 0.113281 6.82569V5.31316C0.113281 4.17228 1.03812 3.24744 2.179 3.24744H2.99566V2.73409ZM4.40181 3.24744H7.79765V2.52647L6.45874 1.63317C5.57987 1.0468 4.40181 1.67677 4.40181 2.73409V3.24744ZM9.20381 2.52647V3.24744H12.5996V2.73409C12.5996 1.67677 11.4216 1.0468 10.5427 1.63317L9.20381 2.52647ZM2.179 4.6536C1.81472 4.6536 1.51944 4.94888 1.51944 5.31316V6.12261H5.73398L5.734 4.6536H2.179ZM5.73401 7.52877V13.9306C5.73401 14.1806 5.86682 14.4119 6.08281 14.5379C6.29879 14.6639 6.56545 14.6657 6.78312 14.5426L8.50073 13.5715L10.2183 14.5426C10.436 14.6657 10.7027 14.6639 10.9187 14.5379C11.1346 14.4119 11.2674 14.1806 11.2674 13.9306V7.52873H14.4844V15.1603C14.4844 15.1627 14.4843 15.1651 14.4843 15.1675V15.1877C14.4843 15.9643 13.8548 16.5938 13.0782 16.5938H3.92323C3.14663 16.5938 2.51707 15.9643 2.51707 15.1877V7.52877H5.73401ZM15.482 6.12258V5.31312C15.482 4.94891 15.1867 4.6536 14.8225 4.6536H11.2674V6.12258H15.482ZM9.86129 4.6536H7.14017V12.7254L8.15469 12.1518C8.36941 12.0304 8.63204 12.0304 8.84676 12.1518L9.86129 12.7254V4.6536Z"
                        />
                      </svg>
                    </div>
                    <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={18}
                        viewBox="0 0 26 18"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 0.811989C0 0.36354 0.36354 0 0.811989 0H15.4278C15.8763 0 16.2398 0.36354 16.2398 0.811989V3.10596H21.0144C23.6241 3.10596 25.8643 5.05894 25.8643 7.61523V14.6414C25.8643 15.0899 25.5007 15.4534 25.0523 15.4534H23.545C23.2139 16.9115 21.9098 18 20.3514 18C18.7931 18 17.4889 16.9115 17.1578 15.4534H8.69534C8.36423 16.9115 7.0601 18 5.50175 18C3.9434 18 2.63927 16.9115 2.30815 15.4534H0.811989C0.36354 15.4534 0 15.0899 0 14.6414V0.811989ZM2.35089 13.8294C2.74052 12.4562 4.00366 11.4503 5.50175 11.4503C6.99983 11.4503 8.26298 12.4562 8.6526 13.8294H14.6158V1.62398H1.62398V13.8294H2.35089ZM16.2398 4.72994V7.95749H24.2403V7.61523C24.2403 6.08759 22.8649 4.72994 21.0144 4.72994H16.2398ZM24.2403 9.58147H16.2398V13.8294H17.2006C17.5902 12.4562 18.8533 11.4503 20.3514 11.4503C21.8495 11.4503 23.1126 12.4562 23.5023 13.8294H24.2403V9.58147ZM5.50175 13.0743C4.58999 13.0743 3.85087 13.8134 3.85087 14.7251C3.85087 15.6369 4.58999 16.376 5.50175 16.376C6.41351 16.376 7.15263 15.6369 7.15263 14.7251C7.15263 13.8134 6.41351 13.0743 5.50175 13.0743ZM20.3514 13.0743C19.4397 13.0743 18.7005 13.8134 18.7005 14.7251C18.7005 15.6369 19.4397 16.376 20.3514 16.376C21.2632 16.376 22.0023 15.6369 22.0023 14.7251C22.0023 13.8134 21.2632 13.0743 20.3514 13.0743Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="tf-mini-cart-bottom-wrap">
                    <div className="tf-cart-totals-discounts">
                      <div className="tf-cart-total">Subtotal</div>
                      <div className="tf-totals-total-value fw-6">
                        $49.99 USD
                      </div>
                    </div>
                    <div className="tf-cart-tax">
                      Taxes and <a href="#">shipping</a> calculated at checkout
                    </div>
                    <div className="tf-mini-cart-line" />
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input
                          className
                          type="checkbox"
                          id="CartDrawer-Form_agree"
                          name="agree_checkbox"
                        />
                        <div>
                          <i className="icon-check" />
                        </div>
                      </div>
                      <label htmlFor="CartDrawer-Form_agree">
                        I agree with the
                        <a href="#" title="Terms of Service">
                          terms and conditions
                        </a>
                      </label>
                    </div>
                    <div className="tf-mini-cart-view-checkout">
                      <a
                        href="view-cart.html"
                        className="tf-btn btn-outline radius-3 link w-100 justify-content-center"
                      >
                        View cart
                      </a>
                      <a
                        href="checkout.html"
                        className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                      >
                        <span>Check out</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tf-mini-cart-tool-openable add-note">
                  <div className="overplay tf-mini-cart-tool-close" />
                  <div className="tf-mini-cart-tool-content">
                    <label
                      htmlFor="Cart-note"
                      className="tf-mini-cart-tool-text"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={18}
                          viewBox="0 0 16 18"
                          fill="currentColor"
                        >
                          <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z" />
                          <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z" />
                        </svg>
                      </div>
                      <span>Add Order Note</span>
                    </label>
                    <textarea
                      name="note"
                      id="Cart-note"
                      placeholder="How can we help you?"
                      defaultValue={""}
                    />
                    <div className="tf-cart-tool-btns justify-content-center">
                      <div className="tf-mini-cart-tool-primary text-center w-100 fw-6 tf-mini-cart-tool-close">
                        Close
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-mini-cart-tool-openable add-gift">
                  <div className="overplay tf-mini-cart-tool-close" />
                  <form className="tf-product-form-addgift">
                    <div className="tf-mini-cart-tool-content">
                      <div className="tf-mini-cart-tool-text">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.65957 3.64545C4.65957 0.73868 7.89921 -0.995558 10.3176 0.617949L11.9997 1.74021L13.6818 0.617949C16.1001 -0.995558 19.3398 0.73868 19.3398 3.64545V4.32992H20.4286C21.9498 4.32992 23.1829 5.56311 23.1829 7.08416V9.10087C23.1829 9.61861 22.7632 10.0383 22.2454 10.0383H21.8528V20.2502C21.8528 20.254 21.8527 20.2577 21.8527 20.2614C21.8467 22.3272 20.1702 24 18.103 24H5.89634C3.82541 24 2.14658 22.3212 2.14658 20.2502V10.0384H1.75384C1.23611 10.0384 0.816406 9.61865 0.816406 9.10092V7.08421C0.816406 5.56304 2.04953 4.32992 3.57069 4.32992H4.65957V3.64545ZM6.53445 4.32992H11.0622V3.36863L9.27702 2.17757C8.10519 1.39573 6.53445 2.2357 6.53445 3.64545V4.32992ZM12.9371 3.36863V4.32992H17.4649V3.64545C17.4649 2.2357 15.8942 1.39573 14.7223 2.17756L12.9371 3.36863ZM3.57069 6.2048C3.08499 6.2048 2.69128 6.59851 2.69128 7.08421V8.16348H8.31067L8.3107 6.2048H3.57069ZM8.31071 10.0384V18.5741C8.31071 18.9075 8.48779 19.2158 8.77577 19.3838C9.06376 19.5518 9.4193 19.5542 9.70953 19.3901L11.9997 18.0953L14.2898 19.3901C14.58 19.5542 14.9356 19.5518 15.2236 19.3838C15.5115 19.2158 15.6886 18.9075 15.6886 18.5741V10.0383H19.9779V20.2137C19.9778 20.2169 19.9778 20.2201 19.9778 20.2233V20.2502C19.9778 21.2857 19.1384 22.1251 18.103 22.1251H5.89634C4.86088 22.1251 4.02146 21.2857 4.02146 20.2502V10.0384H8.31071ZM21.308 8.16344V7.08416C21.308 6.59854 20.9143 6.2048 20.4286 6.2048H15.6886V8.16344H21.308ZM13.8138 6.2048H10.1856V16.9672L11.5383 16.2024C11.8246 16.0405 12.1748 16.0405 12.461 16.2024L13.8138 16.9672V6.2048Z"
                            />
                          </svg>
                        </div>
                        <div className="tf-gift-wrap-infos">
                          <p>Do you want a gift wrap?</p>
                          Only
                          <span className="price fw-6">$5.00</span>
                        </div>
                      </div>
                      <div className="tf-cart-tool-btns">
                        <button
                          type="submit"
                          className="tf-btn fw-6 w-100 justify-content-center btn-fill animate-hover-btn radius-3"
                        >
                          <span>Add a gift wrap</span>
                        </button>
                        <div className="tf-mini-cart-tool-primary text-center w-100 fw-6 tf-mini-cart-tool-close">
                          Cancel
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tf-mini-cart-tool-openable estimate-shipping">
                  <div className="overplay tf-mini-cart-tool-close" />
                  <div className="tf-mini-cart-tool-content">
                    <div className="tf-mini-cart-tool-text">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={21}
                          height={15}
                          viewBox="0 0 21 15"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.441406 1.13155C0.441406 0.782753 0.724159 0.5 1.07295 0.5H12.4408C12.7896 0.5 13.0724 0.782753 13.0724 1.13155V2.91575H16.7859C18.8157 2.91575 20.5581 4.43473 20.5581 6.42296V11.8878C20.5581 12.2366 20.2753 12.5193 19.9265 12.5193H18.7542C18.4967 13.6534 17.4823 14.5 16.2703 14.5C15.0582 14.5 14.0439 13.6534 13.7864 12.5193H7.20445C6.94692 13.6534 5.93259 14.5 4.72054 14.5C3.50849 14.5 2.49417 13.6534 2.23664 12.5193H1.07295C0.724159 12.5193 0.441406 12.2366 0.441406 11.8878V1.13155ZM2.26988 11.2562C2.57292 10.1881 3.55537 9.40578 4.72054 9.40578C5.88572 9.40578 6.86817 10.1881 7.17121 11.2562H11.8093V1.76309H1.7045V11.2562H2.26988ZM13.0724 4.17884V6.68916H19.295V6.42296C19.295 5.2348 18.2252 4.17884 16.7859 4.17884H13.0724ZM19.295 7.95226H13.0724V11.2562H13.8196C14.1227 10.1881 15.1051 9.40578 16.2703 9.40578C17.4355 9.40578 18.4179 10.1881 18.7209 11.2562H19.295V7.95226ZM4.72054 10.6689C4.0114 10.6689 3.43652 11.2437 3.43652 11.9529C3.43652 12.662 4.0114 13.2369 4.72054 13.2369C5.42969 13.2369 6.00456 12.662 6.00456 11.9529C6.00456 11.2437 5.42969 10.6689 4.72054 10.6689ZM16.2703 10.6689C15.5611 10.6689 14.9863 11.2437 14.9863 11.9529C14.9863 12.662 15.5611 13.2369 16.2703 13.2369C16.9794 13.2369 17.5543 12.662 17.5543 11.9529C17.5543 11.2437 16.9794 10.6689 16.2703 10.6689Z"
                          />
                        </svg>
                      </div>
                      <span className="fw-6">Estimate Shipping</span>
                    </div>
                    <div className="field">
                      <p>Country</p>
                      <select
                        className="tf-select w-100"
                        id="ShippingCountry_CartDrawer-Form"
                        name="address[country]"
                        data-default
                      >
                        <option value="---" data-provinces="[]">
                          ---
                        </option>
                        <option
                          value="Australia"
                          data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]"
                        >
                          Australia
                        </option>
                        <option value="Austria" data-provinces="[]">
                          Austria
                        </option>
                        <option value="Belgium" data-provinces="[]">
                          Belgium
                        </option>
                        <option
                          value="Canada"
                          data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]"
                        >
                          Canada
                        </option>
                        <option value="Czech Republic" data-provinces="[]">
                          Czechia
                        </option>
                        <option value="Denmark" data-provinces="[]">
                          Denmark
                        </option>
                        <option value="Finland" data-provinces="[]">
                          Finland
                        </option>
                        <option value="France" data-provinces="[]">
                          France
                        </option>
                        <option value="Germany" data-provinces="[]">
                          Germany
                        </option>
                        <option
                          value="Hong Kong"
                          data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]"
                        >
                          Hong Kong SAR
                        </option>
                        <option
                          value="Ireland"
                          data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]"
                        >
                          Ireland
                        </option>
                        <option value="Israel" data-provinces="[]">
                          Israel
                        </option>
                        <option
                          value="Italy"
                          data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]"
                        >
                          Italy
                        </option>
                        <option
                          value="Japan"
                          data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]"
                        >
                          Japan
                        </option>
                        <option
                          value="Malaysia"
                          data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]"
                        >
                          Malaysia
                        </option>
                        <option value="Netherlands" data-provinces="[]">
                          Netherlands
                        </option>
                        <option
                          value="New Zealand"
                          data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]"
                        >
                          New Zealand
                        </option>
                        <option value="Norway" data-provinces="[]">
                          Norway
                        </option>
                        <option value="Poland" data-provinces="[]">
                          Poland
                        </option>
                        <option
                          value="Portugal"
                          data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]"
                        >
                          Portugal
                        </option>
                        <option value="Singapore" data-provinces="[]">
                          Singapore
                        </option>
                        <option
                          value="South Korea"
                          data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]"
                        >
                          South Korea
                        </option>
                        <option
                          value="Spain"
                          data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['Málaga','Málaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Seville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valencia'],['Valladolid','Valladolid'],['Vizcaya','Biscay'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['Álava','Álava'],['Ávila','Ávila']]"
                        >
                          Spain
                        </option>
                        <option value="Sweden" data-provinces="[]">
                          Sweden
                        </option>
                        <option value="Switzerland" data-provinces="[]">
                          Switzerland
                        </option>
                        <option
                          value="United Arab Emirates"
                          data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]"
                        >
                          United Arab Emirates
                        </option>
                        <option
                          value="United Kingdom"
                          data-provinces="[['British Forces','British Forces'],['England','England'],['Northern Ireland','Northern Ireland'],['Scotland','Scotland'],['Wales','Wales']]"
                        >
                          United Kingdom
                        </option>
                        <option
                          value="United States"
                          data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','American Samoa'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Armed Forces Americas'],['Armed Forces Europe','Armed Forces Europe'],['Armed Forces Pacific','Armed Forces Pacific'],['California','California'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronesia'],['Florida','Florida'],['Georgia','Georgia'],['Guam','Guam'],['Hawaii','Hawaii'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiana'],['Maine','Maine'],['Marshall Islands','Marshall Islands'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','New Mexico'],['New York','New York'],['North Carolina','North Carolina'],['North Dakota','North Dakota'],['Northern Mariana Islands','Northern Mariana Islands'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvania'],['Puerto Rico','Puerto Rico'],['Rhode Island','Rhode Island'],['South Carolina','South Carolina'],['South Dakota','South Dakota'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','U.S. Virgin Islands'],['Virginia','Virginia'],['Washington','Washington'],['West Virginia','West Virginia'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]"
                        >
                          United States
                        </option>
                        <option value="Vietnam" data-provinces="[]">
                          Vietnam
                        </option>
                      </select>
                    </div>
                    <div className="field">
                      <p>Zip code</p>
                      <input type="text" name="text" placeholder />
                    </div>
                    <div className="tf-cart-tool-btns">
                      <a
                        href="#"
                        className="tf-btn fw-6 justify-content-center btn-fill w-100 animate-hover-btn radius-3"
                      >
                        <span>Estimate</span>
                      </a>
                      <div className="tf-mini-cart-tool-primary text-center fw-6 w-100 tf-mini-cart-tool-close">
                        Cancel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /shoppingCart */}
      {/* modal compare */}
      <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
        <div className="canvas-wrapper">
          <header className="canvas-header">
            <div className="close-popup">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </header>
          <div className="canvas-body">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="tf-compare-list">
                    <div className="tf-compare-head">
                      <div className="title">Compare Products</div>
                    </div>
                    <div className="tf-compare-offcanvas">
                      <div className="tf-compare-item">
                        <div className="position-relative">
                          <div className="icon">
                            <i className="icon-close" />
                          </div>
                          <a href="product-detail.html">
                            <img
                              className="radius-3"
                              src="/assets/images/products/orange-1.jpg"
                              alt
                            />
                          </a>
                        </div>
                      </div>
                      <div className="tf-compare-item">
                        <div className="position-relative">
                          <div className="icon">
                            <i className="icon-close" />
                          </div>
                          <a href="product-detail.html">
                            <img
                              className="radius-3"
                              src="/assets/images/products/pink-1.jpg"
                              alt
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="tf-compare-buttons">
                      <div className="tf-compare-buttons-wrap">
                        <a
                          href="compare.html"
                          className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn "
                        >
                          Compare
                        </a>
                        <div className="tf-compapre-button-clear-all link">
                          Clear All
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal compare */}
      {/* modal quick_add */}
      <div className="modal fade modalDemo" id="quick_add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-product-info-item">
                <div className="image">
                  <img src="/assets/images/products/orange-1.jpg" alt />
                </div>
                <div className="content">
                  <a href="product-detail.html">Ribbed Tank Top</a>
                  <div className="tf-product-info-price">
                    {/* <div class="price-on-sale">$8.00</div>
                              <div class="compare-at-price">$10.00</div>
                              <div class="badges-on-sale"><span>20</span>% OFF</div> */}
                    <div className="price">$18.00</div>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-variant-picker mb_15">
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Color:{" "}
                    <span className="fw-6 variant-picker-label-value">
                      Orange
                    </span>
                  </div>
                  <div className="variant-picker-values">
                    <input
                      id="values-orange"
                      type="radio"
                      name="color"
                      defaultChecked
                    />
                    <label
                      className="hover-tooltip radius-60"
                      htmlFor="values-orange"
                      data-value="Orange"
                    >
                      <span className="btn-checkbox bg-color-orange" />
                      <span className="tooltip">Orange</span>
                    </label>
                    <input id="values-black" type="radio" name="color" />
                    <label
                      className=" hover-tooltip radius-60"
                      htmlFor="values-black"
                      data-value="Black"
                    >
                      <span className="btn-checkbox bg-color-black" />
                      <span className="tooltip">Black</span>
                    </label>
                    <input id="values-white" type="radio" name="color" />
                    <label
                      className="hover-tooltip radius-60"
                      htmlFor="values-white"
                      data-value="White"
                    >
                      <span className="btn-checkbox bg-color-white" />
                      <span className="tooltip">White</span>
                    </label>
                  </div>
                </div>
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Size:{" "}
                    <span className="fw-6 variant-picker-label-value">S</span>
                  </div>
                  <div className="variant-picker-values">
                    <input
                      type="radio"
                      name="size"
                      id="values2-s"
                      defaultChecked
                    />
                    <label
                      className="style-text"
                      htmlFor="values2-s"
                      data-value="S"
                    >
                      <p>S</p>
                    </label>
                    <input type="radio" name="size" id="values2-m" />
                    <label
                      className="style-text"
                      htmlFor="values2-m"
                      data-value="M"
                    >
                      <p>M</p>
                    </label>
                    <input type="radio" name="size" id="values2-l" />
                    <label
                      className="style-text"
                      htmlFor="values2-l"
                      data-value="L"
                    >
                      <p>L</p>
                    </label>
                    <input type="radio" name="size" id="values2-xl" />
                    <label
                      className="style-text"
                      htmlFor="values2-xl"
                      data-value="XL"
                    >
                      <p>XL</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-quantity mb_15">
                <div className="quantity-title fw-6">Quantity</div>
                <div className="wg-quantity">
                  <span className="btn-quantity minus-btn">-</span>
                  <input type="text" name="number" defaultValue={1} />
                  <span className="btn-quantity plus-btn">+</span>
                </div>
              </div>
              <div className="tf-product-info-buy-button">
                <form className>
                  <a
                    href="javascript:void(0);"
                    className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                  >
                    <span>Add to cart -&nbsp;</span>
                    <span className="tf-qty-price">$18.00</span>
                  </a>
                  <div className="tf-product-btn-wishlist btn-icon-action">
                    <i className="icon-heart" />
                    <i className="icon-delete" />
                  </div>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="icon icon-check" />
                  </a>
                  <div className="w-100">
                    <a href="#" className="btns-full">
                      Buy with{" "}
                      <img src="/assets/images/payments/paypal.png" alt />
                    </a>
                    <a href="#" className="payment-more-option">
                      More payment options
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal quick_add */}
      {/* modal quick_view */}
      <div className="modal fade modalDemo" id="quick_view">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="wrap">
              <div className="tf-product-media-wrap">
                <div dir="ltr" className="swiper tf-single-slide">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item">
                        <img src="/assets/images/products/orange-1.jpg" alt />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="item">
                        <img src="/assets/images/products/pink-1.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next button-style-arrow single-slide-prev" />
                  <div className="swiper-button-prev button-style-arrow single-slide-next" />
                </div>
              </div>
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-product-info-list">
                  <div className="tf-product-info-title">
                    <h5>
                      <a className="link" href="product-detail.html">
                        Ribbed Tank Top
                      </a>
                    </h5>
                  </div>
                  <div className="tf-product-info-badges">
                    <div className="badges text-uppercase">Best seller</div>
                    <div className="product-status-content">
                      <i className="icon-lightning" />
                      <p className="fw-6">
                        Selling fast! 48 people have this in their carts.
                      </p>
                    </div>
                  </div>
                  <div className="tf-product-info-price">
                    <div className="price">$18.00</div>
                  </div>
                  <div className="tf-product-description">
                    <p>
                      Nunc arcu faucibus a et lorem eu a mauris adipiscing
                      conubia ac aptent ligula facilisis a auctor habitant
                      parturient a a.Interdum fermentum.
                    </p>
                  </div>
                  <div className="tf-product-info-variant-picker">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color:{" "}
                        <span className="fw-6 variant-picker-label-value">
                          Orange
                        </span>
                      </div>
                      <div className="variant-picker-values">
                        <input
                          id="values-orange-1"
                          type="radio"
                          name="color-1"
                          defaultChecked
                        />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="values-orange-1"
                          data-value="Orange"
                        >
                          <span className="btn-checkbox bg-color-orange" />
                          <span className="tooltip">Orange</span>
                        </label>
                        <input
                          id="values-black-1"
                          type="radio"
                          name="color-1"
                        />
                        <label
                          className=" hover-tooltip radius-60"
                          htmlFor="values-black-1"
                          data-value="Black"
                        >
                          <span className="btn-checkbox bg-color-black" />
                          <span className="tooltip">Black</span>
                        </label>
                        <input
                          id="values-white-1"
                          type="radio"
                          name="color-1"
                        />
                        <label
                          className="hover-tooltip radius-60"
                          htmlFor="values-white-1"
                          data-value="White"
                        >
                          <span className="btn-checkbox bg-color-white" />
                          <span className="tooltip">White</span>
                        </label>
                      </div>
                    </div>
                    <div className="variant-picker-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="variant-picker-label">
                          Size:{" "}
                          <span className="fw-6 variant-picker-label-value">
                            S
                          </span>
                        </div>
                        <div className="find-size btn-choose-size fw-6">
                          Find your size
                        </div>
                      </div>
                      <div className="variant-picker-values">
                        <input
                          type="radio"
                          name="size-1"
                          id="values-s-1"
                          defaultChecked
                        />
                        <label
                          className="style-text"
                          htmlFor="values-s-1"
                          data-value="S"
                        >
                          <p>S</p>
                        </label>
                        <input type="radio" name="size-1" id="values-m-1" />
                        <label
                          className="style-text"
                          htmlFor="values-m-1"
                          data-value="M"
                        >
                          <p>M</p>
                        </label>
                        <input type="radio" name="size-1" id="values-l-1" />
                        <label
                          className="style-text"
                          htmlFor="values-l-1"
                          data-value="L"
                        >
                          <p>L</p>
                        </label>
                        <input type="radio" name="size-1" id="values-xl-1" />
                        <label
                          className="style-text"
                          htmlFor="values-xl-1"
                          data-value="XL"
                        >
                          <p>XL</p>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-quantity">
                    <div className="quantity-title fw-6">Quantity</div>
                    <div className="wg-quantity">
                      <span className="btn-quantity minus-btn">-</span>
                      <input type="text" name="number" defaultValue={1} />
                      <span className="btn-quantity plus-btn">+</span>
                    </div>
                  </div>
                  <div className="tf-product-info-buy-button">
                    <form className>
                      <a
                        href="javascript:void(0);"
                        className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                      >
                        <span>Add to cart -&nbsp;</span>
                        <span className="tf-qty-price">$8.00</span>
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
                      >
                        <span className="icon icon-heart" />
                        <span className="tooltip">Add to Wishlist</span>
                        <span className="icon icon-delete" />
                      </a>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                      >
                        <span className="icon icon-compare" />
                        <span className="tooltip">Add to Compare</span>
                        <span className="icon icon-check" />
                      </a>
                      <div className="w-100">
                        <a href="#" className="btns-full">
                          Buy with{" "}
                          <img src="/assets/images/payments/paypal.png" alt />
                        </a>
                        <a href="#" className="payment-more-option">
                          More payment options
                        </a>
                      </div>
                    </form>
                  </div>
                  <div>
                    <a
                      href="product-detail.html"
                      className="tf-btn fw-6 btn-line"
                    >
                      View full details
                      <i className="icon icon-arrow1-top-left" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal quick_view */}
      {/* modal find_size */}
      <div className="modal fade modalDemo tf-product-modal" id="find_size">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="header">
              <div className="demo-title">Size chart</div>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="tf-rte">
              <div className="tf-table-res-df">
                <h6>Size guide</h6>
                <table className="tf-sizeguide-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>US</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Low Hip</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>2</td>
                      <td>32</td>
                      <td>24 - 25</td>
                      <td>33 - 34</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>4</td>
                      <td>34 - 35</td>
                      <td>26 - 27</td>
                      <td>35 - 26</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>6</td>
                      <td>36 - 37</td>
                      <td>28 - 29</td>
                      <td>38 - 40</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>8</td>
                      <td>38 - 29</td>
                      <td>30 - 31</td>
                      <td>42 - 44</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>10</td>
                      <td>40 - 41</td>
                      <td>32 - 33</td>
                      <td>45 - 47</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>12</td>
                      <td>42 - 43</td>
                      <td>34 - 35</td>
                      <td>48 - 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tf-page-size-chart-content">
                <div>
                  <h6>Measuring Tips</h6>
                  <div className="title">Bust</div>
                  <p>Measure around the fullest part of your bust.</p>
                  <div className="title">Waist</div>
                  <p>Measure around the narrowest part of your torso.</p>
                  <div className="title">Low Hip</div>
                  <p className="mb-0">
                    With your feet together measure around the fullest part of
                    your hips/rear.
                  </p>
                </div>
                <div>
                  <img
                    className="sizechart lazyload"
                    data-src="/assets/images/shop/products/size_chart2.jpg"
                    src="/assets/images/shop/products/size_chart2.jpg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /modal find_size */}
    </div>
  );
}

