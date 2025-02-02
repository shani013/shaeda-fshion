"use client";
import React from 'react'
import Header from '../component/header'
import Footer from '../component/footer';
const HomePage = () => {
  return (
    <div>
      <Header />
      <section className="tf-slideshow slider-effect-fade slider-home-5 position-relative">
        <div
          dir="ltr"
          className="swiper tf-sw-slideshow"
          data-preview={1}
          data-tablet={1}
          data-mobile={1}
          data-centered="false"
          data-space={0}
          data-loop="true"
          data-auto-play="true"
          data-delay={2000}
          data-speed={1000}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide" lazy="true">
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src="/assets/images/slider/fashion-slideshow-10.jpg"
                  src="/assets/images/slider/fashion-slideshow-10.jpg"
                  alt="fashion-slideshow-01"
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white heading">
                      Effortless Elegance
                    </h1>
                    <p className="fade-item fade-item-2 text-white">
                      From casual to formal, we've got you covered
                    </p>
                    <a
                      href="shop-collection-list.html"
                      className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                    >
                      <span>Shop collection</span>
                      <i className="icon icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" lazy="true">
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src="/assets/images/slider/fashion-slideshow-11.jpg"
                  src="/assets/images/slider/fashion-slideshow-11.jpg"
                  alt="fashion-slideshow-01"
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white heading">
                      The mystery behind
                    </h1>
                    <p className="fade-item fade-item-2 text-white">
                      From casual to formal, we've got you covered
                    </p>
                    <a
                      href="shop-collection-list.html"
                      className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                    >
                      <span>Shop collection</span>
                      <i className="icon icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide" lazy="true">
              <div className="wrap-slider">
                <img
                  className="lazyload"
                  data-src="/assets/images/slider/fashion-slideshow-12.jpg"
                  src="/assets/images/slider/fashion-slideshow-12.jpg"
                  alt="fashion-slideshow-01"
                />
                <div className="box-content text-center">
                  <div className="container">
                    <h1 className="fade-item fade-item-1 text-white">
                      Multi-faceted Beauty
                    </h1>
                    <p className="fade-item fade-item-2 text-white">
                      From casual to formal, we've got you covered
                    </p>
                    <a
                      href="shop-collection-list.html"
                      className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                    >
                      <span>Shop collection</span>
                      <i className="icon icon-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-pagination">
          <div className="container">
            <div className="sw-dots style-2 dots-white sw-pagination-slider justify-content-center" />
          </div>
        </div>
      </section>
      <section className="flat-spacing-10 bg_light-green-2">
        <div className="container">
          <div className="tf-grid-layout md-col-2 align-items-center flat-wrap-countdown">
            <div className="tf-content-wrap-v2 wow fadeInUp" data-wow-delay="0s">
              <h4 className="heading">One-Time Only</h4>
              <p className="description">
                Special Offers You Can't Miss: These deals won't last forever!
              </p>
              <a href="shop-collection-list.html" className="tf-btn btn-line">
                Shop now
                <i className="icon icon-arrow-right" />
              </a>
            </div>
            <div className="tf-countdown-v2 wow fadeInUp" data-wow-delay="0s">
              <div
                className="js-countdown"
                data-timer={8007500}
                data-labels="Days,Hours,Mins,Secs"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="tf-marquee marquee-sm bg_blue-3">
        <div className="wrap-marquee">
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              FREE SHIPPING AND RETURN
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              FREE SHIPPING AND RETURN
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              FREE SHIPPING AND RETURN
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              FREE SHIPPING AND RETURN
            </p>
          </div>
          <div className="marquee-item">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={7}
                height={6}
                viewBox="0 0 7 6"
                fill="none"
              >
                <path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white" />
              </svg>
            </div>
            <p className="text text-white text-uppercase fw-6">
              NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS
            </p>
          </div>
        </div>
      </div>
      <section className="flat-spacing-13">
        <div className="container-full">
          <div
            dir="ltr"
            className="swiper tf-sw-recent"
            data-preview={3}
            data-tablet={3}
            data-mobile="1.3"
            data-space-lg={30}
            data-space-md={15}
            data-space={30}
            data-pagination={1}
            data-pagination-md={1}
            data-pagination-lg={1}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide" lazy="true">
                <div className="collection-item-v2 hover-img">
                  <a href="shop-collection-sub.html" className="collection-inner">
                    <div className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="/assets/images/collections/collection-27.jpg"
                        src="/assets/images/collections/collection-27.jpg"
                        alt="collection-img"
                      />
                    </div>
                    <div className="collection-content">
                      <div className="top wow fadeInUp" data-wow-delay="0s">
                        <h5 className="heading">Mordern Backpack</h5>
                        <p className="subheading">
                          Start from <span className="fw-6">$199</span>
                        </p>
                      </div>
                      <div className="bottom wow fadeInUp" data-wow-delay="0s">
                        <button className="tf-btn btn-line collection-other-link fw-6">
                          <span>Shop now</span>
                          <i className="icon icon-arrow1-top-left" />
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide" lazy="true">
                <div className="collection-item-v2 hover-img">
                  <a href="shop-collection-sub.html" className="collection-inner">
                    <div className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="/assets/images/collections/collection-28.jpg"
                        src="/assets/images/collections/collection-28.jpg"
                        alt="collection-img"
                      />
                    </div>
                    <div className="collection-content">
                      <div className="top wow fadeInUp" data-wow-delay="0s">
                        <h5 className="heading">Season Collection</h5>
                        <p className="subheading">
                          Start from <span className="fw-6">$199</span>
                        </p>
                      </div>
                      <div className="bottom wow fadeInUp" data-wow-delay="0s">
                        <button className="tf-btn btn-line collection-other-link fw-6">
                          <span>Shop now</span>
                          <i className="icon icon-arrow1-top-left" />
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="swiper-slide" lazy="true">
                <div className="collection-item-v2 hover-img">
                  <a href="shop-collection-sub.html" className="collection-inner">
                    <div className="collection-image img-style">
                      <img
                        className="lazyload"
                        data-src="/assets/images/collections/collection-26.jpg"
                        src="/assets/images/collections/collection-26.jpg"
                        alt="collection-img"
                      />
                    </div>
                    <div className="collection-content">
                      <div className="top wow fadeInUp" data-wow-delay="0s">
                        <h5 className="heading">Stradivarius top trainers</h5>
                        <p className="subheading">
                          Start from <span className="fw-6">$199</span>
                        </p>
                      </div>
                      <div className="bottom wow fadeInUp" data-wow-delay="0s">
                        <button className="tf-btn btn-line collection-other-link fw-6">
                          <span>Shop now</span>
                          <i className="icon icon-arrow1-top-left" />
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-spacing-6">
        <div className="container">
          <div className="flat-title mb_1 gap-14">
            <span className="title wow fadeInUp" data-wow-delay="0s">
              New Arrivals
            </span>
            <p className="sub-title wow fadeInUp" data-wow-delay="0s">
              Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
            </p>
          </div>
          <div></div>
          <div className="grid-layout loadmore-item" data-grid="grid-4">
            {/* card product 1 */}
            <div className="card-product style-4 fl-item">
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
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
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
            {/* card product 2 */}
            <div className="card-product style-4 fl-item">
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
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
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
            {/* card product 3 */}
            <div className="card-product style-4 fl-item">
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
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
                  >
                    <span className="icon icon-view" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Oversized Printed T-shirt
                </a>
                <span className="price">$10.00</span>
              </div>
            </div>
            {/* card product 4 */}
            <div className="card-product style-4 fl-item">
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
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
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
            {/* card product 5 */}
            <div className="card-product style-4 fl-item">
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
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
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
            {/* card product 6 */}
            <div className="card-product style-4 fl-item">
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
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
                  >
                    <span className="icon icon-view" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
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
            {/* card product 7 */}
            <div className="card-product style-4 fl-item">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="/assets/images/products/black-4.jpg"
                    src="/assets/images/products/black-4.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/products/black-5.jpg"
                    src="/assets/images/products/black-5.jpg"
                    alt="image-product"
                  />
                </a>
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Regular Fit Oxford Shirt
                </a>
                <span className="price">$10.00</span>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/black-4.jpg"
                      src="/assets/images/products/black-4.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Dark Blue</span>
                    <span className="swatch-value bg_dark-blue" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/dark-blue-2.jpg"
                      src="/assets/images/products/dark-blue-2.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Beige</span>
                    <span className="swatch-value bg_beige" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/beige.jpg"
                      src="/assets/images/products/beige.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Blue</span>
                    <span className="swatch-value bg_light-blue" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/light-blue.jpg"
                      src="/assets/images/products/light-blue.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/white-7.jpg"
                      src="/assets/images/products/white-7.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* card product 8 */}
            <div className="card-product style-4 fl-item">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="/assets/images/products/white-8.jpg"
                    src="/assets/images/products/white-8.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/products/black-6.jpg"
                    src="/assets/images/products/black-6.jpg"
                    alt="image-product"
                  />
                </a>
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Loose Fit Hoodie
                </a>
                <span className="price">$9.95</span>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">White</span>
                    <span className="swatch-value bg_white" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/white-8.jpg"
                      src="/assets/images/products/white-8.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/black-7.jpg"
                      src="/assets/images/products/black-7.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Blue</span>
                    <span className="swatch-value bg_blue-2" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/blue-2.jpg"
                      src="/assets/images/products/blue-2.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* card product 9 */}
            <div className="card-product style-4 fl-item">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="/assets/images/products/brown-4.jpg"
                    src="/assets/images/products/brown-4.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/products/black-8.jpg"
                    src="/assets/images/products/black-8.jpg"
                    alt="image-product"
                  />
                </a>
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Patterned scarf
                </a>
                <span className="price">$14.95</span>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Brown</span>
                    <span className="swatch-value bg_brown" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/brown-4.jpg"
                      src="/assets/images/products/brown-4.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/black-8.jpg"
                      src="/assets/images/products/black-8.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* card product 10 */}
            <div className="card-product style-4 fl-item">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="/assets/images/products/black-9.jpg"
                    src="/assets/images/products/black-9.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/products/black-10.jpg"
                    src="/assets/images/products/black-10.jpg"
                    alt="image-product"
                  />
                </a>
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Slim Fit Fine-knit Turtleneck Sweater
                </a>
                <span className="price">$18.95</span>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_dark" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/black-9.jpg"
                      src="/assets/images/products/black-9.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Black</span>
                    <span className="swatch-value bg_white" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/white-9.jpg"
                      src="/assets/images/products/white-9.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* card product 11 */}
            <div className="card-product style-4 fl-item">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="/assets/images/products/grey-2.jpg"
                    src="/assets/images/products/grey-2.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/products/grey.jpg"
                    src="/assets/images/products/grey.jpg"
                    alt="image-product"
                  />
                </a>
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Slim Fit Fine-knit Turtleneck Sweater
                </a>
                <span className="price">$18.95</span>
                <ul className="list-color-product">
                  <li className="list-color-item color-swatch active">
                    <span className="tooltip">Grey</span>
                    <span className="swatch-value bg_grey" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/grey-2.jpg"
                      src="/assets/images/products/grey-2.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Pink</span>
                    <span className="swatch-value bg_pink" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/pink-2.jpg"
                      src="/assets/images/products/pink-2.jpg"
                      alt="image-product"
                    />
                  </li>
                  <li className="list-color-item color-swatch">
                    <span className="tooltip">Light Pink</span>
                    <span className="swatch-value bg_light-pink" />
                    <img
                      className="lazyload"
                      data-src="/assets/images/products/light-pink.jpg"
                      src="/assets/images/products/light-pink.jpg"
                      alt="image-product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* card product 12 */}
            <div className="card-product style-4 fl-item">
              <div className="card-product-wrapper">
                <a href="product-detail.html" className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src="/assets/images/products/black-11.jpg"
                    src="/assets/images/products/black-11.jpg"
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/products/black-12.jpg"
                    src="/assets/images/products/black-12.jpg"
                    alt="image-product"
                  />
                </a>
                <div className="list-product-btn column-right">
                  <a
                    href="javascript:void(0);"
                    className="box-icon wishlist bg_white round btn-icon-action"
                  >
                    <span className="icon icon-heart" />
                    <span className="tooltip">Add to Wishlist</span>
                    <span className="icon icon-delete" />
                  </a>
                  <a
                    href="#compare"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="box-icon compare bg_white round btn-icon-action"
                  >
                    <span className="icon icon-compare" />
                    <span className="tooltip">Add to Compare</span>
                    <span className="icon icon-check" />
                  </a>
                  <a
                    href="#quick_view"
                    data-bs-toggle="modal"
                    className="box-icon quickview bg_white round tf-btn-loading"
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
                <a
                  href="#quick_add"
                  data-bs-toggle="modal"
                  className="btn-quick-add quick-add"
                >
                  QUICK ADD
                </a>
              </div>
              <div className="card-product-info">
                <a href="product-detail.html" className="title link">
                  Slim Fit Fine-knit Turtleneck Sweater
                </a>
                <span className="price">$18.95</span>
              </div>
            </div>
          </div>
          <div className="tf-pagination-wrap view-more-button text-center">
            <button className="tf-btn-loading tf-loading-default style-2 btn-loadmore">
              <span className="text">Load more</span>
            </button>
          </div>
        </div>
      </section>
      <section className="flat-testimonial-v2 bg_grey-2">
        <div className="container">
          <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial">
            <div className="box-left wow fadeInUp" data-wow-delay="0s">
              <div
                dir="ltr"
                className="swiper tf-sw-tes-2"
                data-preview={1}
                data-space-lg={40}
                data-space-md={30}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item lg lg-2">
                      <div className="icon">
                        <img
                          className=" lazyloaded"
                          data-src="/assets/images/item/quote.svg"
                          alt=""
                          src="/assets/images/item/quote.svg"
                        />
                      </div>
                      <div className="rating">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                      </div>
                      <p className="text">
                        "I have been shopping with this web fashion site for over a
                        year now and I can confidently say it is the best online
                        fashion site out there.The shipping is always fast and the
                        customer service team is friendly and helpful. I highly
                        recommend this site to anyone looking for affordable
                        clothing."
                      </p>
                      <div className="author box-author">
                        <div className="box-img d-md-none rounded-0">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/item/tets3.jpg"
                            src="/assets/images/item/tets3.jpg"
                            alt="image-product"
                          />
                        </div>
                        <div className="content">
                          <div className="name">Robert smith</div>
                          <a href="product-detail.html" className="metas link">
                            Purchase item : <span>Patterned scarf</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item lg lg-2">
                      <div className="icon">
                        <img
                          className=" lazyloaded"
                          data-src="/assets/images/item/quote.svg"
                          alt=""
                          src="/assets/images/item/quote.svg"
                        />
                      </div>
                      <div className="rating">
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                        <i className="icon-star" />
                      </div>
                      <p className="text">
                        "I have been shopping with this web fashion site for over a
                        year now and I can confidently say it is the best online
                        fashion site out there.The shipping is always fast and the
                        customer service team is friendly and helpful. I highly
                        recommend this site to anyone looking for affordable
                        clothing."
                      </p>
                      <div className="author box-author">
                        <div className="box-img d-md-none rounded-0">
                          <img
                            className="lazyload img-product"
                            data-src="/assets/images/item/tets4.jpg"
                            src="/assets/images/item/tets4.jpg"
                            alt="image-product"
                          />
                        </div>
                        <div className="content">
                          <div className="name">Jenifer Unix</div>
                          <a href="product-detail.html" className="metas link">
                            Purchase item : <span> Sweetheart-neckline Top</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex d-none box-sw-navigation">
                <div className="nav-sw nav-next-slider nav-next-tes-2">
                  <span className="icon icon-arrow-left" />
                </div>
                <div className="nav-sw nav-prev-slider nav-prev-tes-2">
                  <span className="icon icon-arrow-right" />
                </div>
              </div>
              <div className="d-md-none sw-dots style-2 sw-pagination-tes-2" />
            </div>
            <div className="box-right wow fadeInUp" data-wow-delay="0s">
              <div
                dir="ltr"
                className="swiper tf-thumb-tes"
                data-preview={1}
                data-space={30}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="img-sw-thumb">
                      <img
                        className="lazyload img-product"
                        data-src="/assets/images/item/tets3.jpg"
                        src="/assets/images/item/tets3.jpg"
                        alt="image-product"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="img-sw-thumb">
                      <img
                        className="lazyload img-product"
                        data-src="/assets/images/item/tets4.jpg"
                        src="/assets/images/item/tets4.jpg"
                        alt="image-product"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flat-spacing-14">
        <div className="container">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <span className="title">Shop by categories</span>
          </div>
          <div className="hover-sw-nav">
            <div
              dir="ltr"
              className="swiper tf-sw-collection"
              data-preview={4}
              data-tablet={2}
              data-mobile={2}
              data-space-lg={30}
              data-space-md={30}
              data-space={15}
              data-loop="false"
              data-auto-play="false"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide" lazy="true">
                  <div className="collection-item style-2 hover-img">
                    <div className="collection-inner">
                      <a
                        href="shop-collection-sub.html"
                        className="collection-image img-style rounded-0"
                      >
                        <img
                          className="lazyload"
                          data-src="/assets/images/collections/collection-29.jpg"
                          src="/assets/images/collections/collection-29.jpg"
                          alt="collection-img"
                        />
                      </a>
                      <div className="collection-content">
                        <a
                          href="shop-collection-sub.html"
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>Accessories</span>
                          <i className="icon icon-arrow1-top-left" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" lazy="true">
                  <div className="collection-item style-2 hover-img">
                    <div className="collection-inner">
                      <a
                        href="shop-collection-sub.html"
                        className="collection-image img-style rounded-0"
                      >
                        <img
                          className="lazyload"
                          data-src="/assets/images/collections/collection-30.jpg"
                          src="/assets/images/collections/collection-30.jpg"
                          alt="collection-img"
                        />
                      </a>
                      <div className="collection-content">
                        <a
                          href="shop-collection-sub.html"
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>Sunglasses</span>
                          <i className="icon icon-arrow1-top-left" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" lazy="true">
                  <div className="collection-item style-2 hover-img">
                    <div className="collection-inner">
                      <a
                        href="shop-collection-sub.html"
                        className="collection-image img-style rounded-0"
                      >
                        <img
                          className="lazyload"
                          data-src="/assets/images/collections/collection-16.jpg"
                          src="/assets/images/collections/collection-16.jpg"
                          alt="collection-img"
                        />
                      </a>
                      <div className="collection-content">
                        <a
                          href="shop-collection-sub.html"
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>Sneakers</span>
                          <i className="icon icon-arrow1-top-left" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" lazy="true">
                  <div className="collection-item style-2 hover-img">
                    <div className="collection-inner">
                      <a
                        href="shop-collection-sub.html"
                        className="collection-image img-style rounded-0"
                      >
                        <img
                          className="lazyload"
                          data-src="/assets/images/collections/collection-31.jpg"
                          src="/assets/images/collections/collection-31.jpg"
                          alt="collection-img"
                        />
                      </a>
                      <div className="collection-content">
                        <a
                          href="shop-collection-sub.html"
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>Bags</span>
                          <i className="icon icon-arrow1-top-left" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide" lazy="true">
                  <div className="collection-item style-2 hover-img">
                    <div className="collection-inner">
                      <a
                        href="shop-collection-sub.html"
                        className="collection-image img-style rounded-0"
                      >
                        <img
                          className="lazyload"
                          data-src="/assets/images/collections/collection-15.jpg"
                          src="/assets/images/collections/collection-15.jpg"
                          alt="collection-img"
                        />
                      </a>
                      <div className="collection-content">
                        <a
                          href="shop-collection-sub.html"
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>Men</span>
                          <i className="icon icon-arrow1-top-left" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-sw nav-next-slider nav-next-collection box-icon w_46 round">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-collection box-icon w_46 round">
              <span className="icon icon-arrow-right" />
            </div>
            <div className="sw-dots style-2 sw-pagination-collection justify-content-center" />
          </div>
        </div>
      </section>
      <section className="flat-spacing-7 flat-iconbox">
        <div className="container">
          <div className="wrap-carousel wrap-mobile wow fadeInUp" data-wow-delay="0s">
            <div
              dir="ltr"
              className="swiper tf-sw-mobile"
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper wrap-iconbox">
                <div className="swiper-slide">
                  <div className="tf-icon-box style-border-line text-center">
                    <div className="icon">
                      <i className="icon-shipping" />
                    </div>
                    <div className="content">
                      <div className="title">Free Shipping</div>
                      <p>Free shipping over order $120</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-border-line text-center">
                    <div className="icon">
                      <i className="icon-payment fs-22" />
                    </div>
                    <div className="content">
                      <div className="title">Flexible Payment</div>
                      <p>Pay with Multiple Credit Cards</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-border-line text-center">
                    <div className="icon">
                      <i className="icon-return fs-22" />
                    </div>
                    <div className="content">
                      <div className="title">14 Day Returns</div>
                      <p>Within 30 days for an exchange</p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tf-icon-box style-border-line text-center">
                    <div className="icon">
                      <i className="icon-suport" />
                    </div>
                    <div className="content">
                      <div className="title">Premium Support</div>
                      <p>Outstanding premium support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sw-dots style-2 sw-pagination-mb justify-content-center" />
          </div>
        </div>
      </section>
      <section>
        <div className="container-full px-0">
          <div className="flat-title wow fadeInUp" data-wow-delay="0s">
            <span className="title">Shop Gram</span>
            <p className="sub-title">
              Inspire and let yourself be inspired, from one unique fashion to
              another.
            </p>
          </div>
          <div
            dir="ltr"
            className="swiper tf-sw-shop-gallery"
            data-preview={5}
            data-tablet={3}
            data-mobile={2}
            data-space-lg={0}
            data-space-md={0}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="gallery-item hover-img rounded-0 wow fadeInUp"
                  data-wow-delay="0s"
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/shop/gallery/gallery-7.jpg"
                      src="/assets/images/shop/gallery/gallery-7.jpg"
                      alt="image-gallery"
                    />
                  </div>
                  <a href="#quick_add" data-bs-toggle="modal" className="box-icon">
                    <span className="icon icon-bag" />{" "}
                    <span className="tooltip">Quick Add</span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="gallery-item hover-img rounded-0 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/shop/gallery/gallery-3.jpg"
                      src="/assets/images/shop/gallery/gallery-3.jpg"
                      alt="image-gallery"
                    />
                  </div>
                  <a href="#quick_add" data-bs-toggle="modal" className="box-icon">
                    <span className="icon icon-bag" />{" "}
                    <span className="tooltip">Quick Add</span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="gallery-item hover-img rounded-0 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/shop/gallery/gallery-5.jpg"
                      src="/assets/images/shop/gallery/gallery-5.jpg"
                      alt="image-gallery"
                    />
                  </div>
                  <a href="#quick_add" data-bs-toggle="modal" className="box-icon">
                    <span className="icon icon-bag" />{" "}
                    <span className="tooltip">Quick Add</span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="gallery-item hover-img rounded-0 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/shop/gallery/gallery-8.jpg"
                      src="/assets/images/shop/gallery/gallery-8.jpg"
                      alt="image-gallery"
                    />
                  </div>
                  <a href="product-detail.html" className="box-icon">
                    <span className="icon icon-bag" />{" "}
                    <span className="tooltip">View product</span>
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="gallery-item hover-img rounded-0 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="img-style">
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/shop/gallery/gallery-6.jpg"
                      src="/assets/images/shop/gallery/gallery-6.jpg"
                      alt="image-gallery"
                    />
                  </div>
                  <a href="product-detail.html" className="box-icon">
                    <span className="icon icon-bag" />{" "}
                    <span className="tooltip">View product</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute-dots sw-dots sw-pagination-gallery justify-content-center" />
          </div>
        </div>
      </section>

      <Footer />
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
      <>
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
                                alt=""
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
                                alt=""
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
                    <img src="/assets/images/products/orange-1.jpg" alt="" />
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
                      <span className="fw-6 variant-picker-label-value">Orange</span>
                    </div>
                    <div className="variant-picker-values">
                      <input
                        id="values-orange"
                        type="radio"
                        name="color"
                        defaultChecked=""
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
                      Size: <span className="fw-6 variant-picker-label-value">S</span>
                    </div>
                    <div className="variant-picker-values">
                      <input
                        type="radio"
                        name="size"
                        id="values-s"
                        defaultChecked=""
                      />
                      <label className="style-text" htmlFor="values-s" data-value="S">
                        <p>S</p>
                      </label>
                      <input type="radio" name="size" id="values-m" />
                      <label className="style-text" htmlFor="values-m" data-value="M">
                        <p>M</p>
                      </label>
                      <input type="radio" name="size" id="values-l" />
                      <label className="style-text" htmlFor="values-l" data-value="L">
                        <p>L</p>
                      </label>
                      <input type="radio" name="size" id="values-xl" />
                      <label
                        className="style-text"
                        htmlFor="values-xl"
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
                  <form className="">
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
                        Buy with <img src="/assets/images/payments/paypal.png" alt="" />
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
                          <img src="/assets/images/products/orange-1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="item">
                          <img src="/assets/images/products/pink-1.jpg" alt="" />
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
                        Nunc arcu faucibus a et lorem eu a mauris adipiscing conubia
                        ac aptent ligula facilisis a auctor habitant parturient a
                        a.Interdum fermentum.
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
                            defaultChecked=""
                          />
                          <label
                            className="hover-tooltip radius-60"
                            htmlFor="values-orange-1"
                            data-value="Orange"
                          >
                            <span className="btn-checkbox bg-color-orange" />
                            <span className="tooltip">Orange</span>
                          </label>
                          <input id="values-black-1" type="radio" name="color-1" />
                          <label
                            className=" hover-tooltip radius-60"
                            htmlFor="values-black-1"
                            data-value="Black"
                          >
                            <span className="btn-checkbox bg-color-black" />
                            <span className="tooltip">Black</span>
                          </label>
                          <input id="values-white-1" type="radio" name="color-1" />
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
                            <span className="fw-6 variant-picker-label-value">S</span>
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
                            defaultChecked=""
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
                      <form className="">
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
                            Buy with <img src="/assets/images/payments/paypal.png" alt="" />
                          </a>
                          <a href="#" className="payment-more-option">
                            More payment options
                          </a>
                        </div>
                      </form>
                    </div>
                    <div>
                      <a href="product-detail.html" className="tf-btn fw-6 btn-line">
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
                      With your feet together measure around the fullest part of your
                      hips/rear.
                    </p>
                  </div>
                  <div>
                    <img
                      className="sizechart lazyload"
                      data-src="/assets/images/shop/products/size_chart2.jpg"
                      src="/assets/images/shop/products/size_chart2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default HomePage