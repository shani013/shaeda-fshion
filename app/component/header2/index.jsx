import Link from 'next/link';
import React from 'react'

export default function index() {
  return (
    <div>
      {/* RTL */}
      <a
        href="javascript:void(0);"
        id="toggle-rtl"
        className="tf-btn animate-hover-btn btn-fill"
      >
        RTL
      </a>
      {/* /RTL  */}
      {/* preload */}
      <div className="preload preload-container">
        <div className="preload-logo">
          <div className="spinner" />
        </div>
      </div>
      {/* /preload */}

      {/* header */}
      <header id="header" className="header-default">
        <div className="px_15 lg-px_40">
          <div className="row wrapper-header align-items-center">
            <div className="col-md-4 col-3 tf-lg-hidden">
              <a
                href="#mobileMenu"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={16}
                  viewBox="0 0 24 16"
                  fill="none"
                >
                  <path
                    d="M2.00056 2.28571H16.8577C17.1608 2.28571 17.4515 2.16531 17.6658 1.95098C17.8802 1.73665 18.0006 1.44596 18.0006 1.14286C18.0006 0.839753 17.8802 0.549063 17.6658 0.334735C17.4515 0.120408 17.1608 0 16.8577 0H2.00056C1.69745 0 1.40676 0.120408 1.19244 0.334735C0.978109 0.549063 0.857702 0.839753 0.857702 1.14286C0.857702 1.44596 0.978109 1.73665 1.19244 1.95098C1.40676 2.16531 1.69745 2.28571 2.00056 2.28571ZM0.857702 8C0.857702 7.6969 0.978109 7.40621 1.19244 7.19188C1.40676 6.97755 1.69745 6.85714 2.00056 6.85714H22.572C22.8751 6.85714 23.1658 6.97755 23.3801 7.19188C23.5944 7.40621 23.7148 7.6969 23.7148 8C23.7148 8.30311 23.5944 8.59379 23.3801 8.80812C23.1658 9.02245 22.8751 9.14286 22.572 9.14286H2.00056C1.69745 9.14286 1.40676 9.02245 1.19244 8.80812C0.978109 8.59379 0.857702 8.30311 0.857702 8ZM0.857702 14.8571C0.857702 14.554 0.978109 14.2633 1.19244 14.049C1.40676 13.8347 1.69745 13.7143 2.00056 13.7143H12.2863C12.5894 13.7143 12.8801 13.8347 13.0944 14.049C13.3087 14.2633 13.4291 14.554 13.4291 14.8571C13.4291 15.1602 13.3087 15.4509 13.0944 15.6653C12.8801 15.8796 12.5894 16 12.2863 16H2.00056C1.69745 16 1.40676 15.8796 1.19244 15.6653C0.978109 15.4509 0.857702 15.1602 0.857702 14.8571Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <div className="col-xl-3 col-md-4 col-6">
              <a href="index.html" className="logo-header">
                <img
                  src="/assets/images/logo/logo.svg"
                  alt="logo"
                  className="logo"
                />
              </a>
            </div>
            <div className="col-xl-6 tf-md-hidden">
              <nav className="box-navigation text-center">
                <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
                  <li className="menu-item">
                    <a href="#" className="item-link">
                      Home
                      <i className="icon icon-arrow-down" />
                    </a>
                    <div className="sub-menu mega-menu">
                      <div className="container">
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
                              <span className="demo-name">
                                Home Multi Brand
                              </span>
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
                              <span className="demo-name">
                                Home Personalized Pod
                              </span>
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
                              <span className="demo-name">
                                Home Camp And Hike
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="text-center view-all-demo">
                          <a
                            href="#modalDemo"
                            data-bs-toggle="modal"
                            className="tf-btn btn-xl btn-fill radius-3 animate-hover-btn fw-6"
                          >
                            <span>View all demos (46+)</span>
                            <i className="icon icon-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link">
                      Shop
                      <i className="icon icon-arrow-down" />
                    </a>
                    <div className="sub-menu mega-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">Shop layouts</div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/shop/shoplayout/shopdefault"
                                    className="menu-link-text link"
                                  >
                                    Default
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/shoplayout/shopleftsidebar"
                                    className="menu-link-text link"
                                  >
                                    Left sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/shoplayout/shoprightsidebar"
                                    className="menu-link-text link"
                                  >
                                    Right sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/shoplayout/shopfullwidth"
                                    className="menu-link-text link"
                                  >
                                    Fullwidth
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/shoplayout/shopsubcollection"
                                    className="menu-link-text link"
                                  >
                                    Sub collection
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/shoplayout/shopcollectionlist"
                                    className="menu-link-text link"
                                  >
                                    Collections list
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">Features</div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/shop/features/paginationlinks"
                                    className="menu-link-text link"
                                  >
                                    Pagination links
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/features/paginationloadmore"
                                    className="menu-link-text link"
                                  >
                                    Pagination loadmore
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/features/paginationinfinitescrolling"
                                    className="menu-link-text link"
                                  >
                                    Pagination infinite scrolling
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/features/filtersidebar"
                                    className="menu-link-text link"
                                  >
                                    Filter sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/features/filterhidden"
                                    className="menu-link-text link"
                                  >
                                    Filter hidden
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">Product styles</div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle01"
                                    className="menu-link-text link"
                                  >
                                    Product style 01
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle02"
                                    className="menu-link-text link"
                                  >
                                    Product style 02
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle03"
                                    className="menu-link-text link"
                                  >
                                    Product style 03
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle04"
                                    className="menu-link-text link"
                                  >
                                    Product style 04
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle05"
                                    className="menu-link-text link"
                                  >
                                    Product style 05
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle06"
                                    className="menu-link-text link"
                                  >
                                    Product style 06
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/shop/productstyles/productstyle07"
                                    className="menu-link-text link"
                                  >
                                    Product style 07
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="collection-item hover-img">
                              <div className="collection-inner">
                                <a
                                  href="shop-men.html"
                                  className="collection-image img-style"
                                >
                                  <img
                                    className="lazyload"
                                    data-src="/assets/images/collections/collection-1.jpg"
                                    src="/assets/images/collections/collection-1.jpg"
                                    alt="collection-demo-1"
                                  />
                                </a>
                                <div className="collection-content">
                                  <a
                                    href="shop-men.html"
                                    className="tf-btn hover-icon btn-xl collection-title fs-16"
                                  >
                                    <span>Men</span>
                                    <i className="icon icon-arrow1-top-left" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="collection-item hover-img">
                              <div className="collection-inner">
                                <a
                                  href="shop-women.html"
                                  className="collection-image img-style"
                                >
                                  <img
                                    className="lazyload"
                                    data-src="/assets/images/collections/collection-2.jpg"
                                    src="/assets/images/collections/collection-2.jpg"
                                    alt="collection-demo-1"
                                  />
                                </a>
                                <div className="collection-content">
                                  <a
                                    href="shop-women.html"
                                    className="tf-btn btn-xl collection-title fs-16 hover-icon"
                                  >
                                    <span>Women</span>
                                    <i className="icon icon-arrow1-top-left" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="item-link">
                      Products
                      <i className="icon icon-arrow-down" />
                    </a>
                    <div className="sub-menu mega-menu">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">
                                Product layouts
                              </div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/products/productlayouts/default"
                                    className="menu-link-text link"
                                  >
                                    Product default
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/grid1"
                                    className="menu-link-text link"
                                  >
                                    Product grid 1
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/grid2"
                                    className="menu-link-text link"
                                  >
                                    Product grid 2
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/stacked"
                                    className="menu-link-text link"
                                  >
                                    Product stacked
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/rightthumbnail"
                                    className="menu-link-text link"
                                  >
                                    Product right thumbnails
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/bottomthumbnail"
                                    className="menu-link-text link"
                                  >
                                    Product bottom thumbnails
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/drawersidebar"
                                    className="menu-link-text link"
                                  >
                                    Product drawer sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/descriptionaccordion"
                                    className="menu-link-text link"
                                  >
                                    Product description accordion
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/descriptionlist"
                                    className="menu-link-text link"
                                  >
                                    Product description list
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productlayouts/descriptionvertical"
                                    className="menu-link-text link"
                                  >
                                    Product description vertical
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">
                                Product details
                              </div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/products/productdetails/innerzoom"
                                    className="menu-link-text link"
                                  >
                                    Product inner zoom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/zoommagnifier"
                                    className="menu-link-text link"
                                  >
                                    Product zoom magnifier
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/nozoom"
                                    className="menu-link-text link"
                                  >
                                    Product no zoom
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/photoswipepopup"
                                    className="menu-link-text link"
                                  >
                                    Product photoswipe popup
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/externalzoom"
                                    className="menu-link-text link"
                                  >
                                    Product external zoom and photoswipe popup
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/video"
                                    className="menu-link-text link"
                                  >
                                    Product video
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/3darmodal"
                                    className="menu-link-text link"
                                  >
                                    Product 3D, AR models
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/optionandcustomizer"
                                    className="menu-link-text link"
                                  >
                                    Product options &amp; customizer
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/producttypes"
                                    className="menu-link-text link"
                                  >
                                    Advanced product types
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productdetails/recipientinformationform"
                                    className="menu-link-text link"
                                  >
                                    Recipient information form for gift card
                                    products
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">
                                Product swatchs
                              </div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/products/productswatchs/colorswatch"
                                    className="menu-link-text link"
                                  >
                                    Product color swatch
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productswatchs/rectangle"
                                    className="menu-link-text link"
                                  >
                                    Product rectangle
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productswatchs/rectanglecolor"
                                    className="menu-link-text link"
                                  >
                                    Product rectangle color
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productswatchs/swatchimage"
                                    className="menu-link-text link"
                                  >
                                    Product swatch image
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productswatchs/swatchimagerounded"
                                    className="menu-link-text link"
                                  >
                                    Product swatch image rounded
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productswatchs/swatchdropdown"
                                    className="menu-link-text link"
                                  >
                                    Product swatch dropdown
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productswatchs/swatchdropdowncolor"
                                    className="menu-link-text link"
                                  >
                                    Product swatch dropdown color
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="mega-menu-item">
                              <div className="menu-heading">
                                Product features
                              </div>
                              <ul className="menu-list">
                                <li>
                                  <Link
                                    href="/products/productfeatures/frequentlyboughttogether"
                                    className="menu-link-text link"
                                  >
                                    Frequently bought together
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/frequentlyboughttogether2"
                                    className="menu-link-text link"
                                  >
                                    Frequently bought together 2
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/upsellfeatures"
                                    className="menu-link-text link"
                                  >
                                    Product upsell features
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/preorders"
                                    className="menu-link-text link"
                                  >
                                    Product pre-orders
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/backinstock"
                                    className="menu-link-text link"
                                  >
                                    Back in stock notification
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/productpickup"
                                    className="menu-link-text link"
                                  >
                                    Product pickup
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/variantimages"
                                    className="menu-link-text link"
                                  >
                                    Variant images grouped
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/complimentaryproducts"
                                    className="menu-link-text link"
                                  >
                                    Complimentary products
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/quickorderlist"
                                    className="menu-link-text link position-relative"
                                  >
                                    Quick order list
                                    <div className="demo-label">
                                      <span className="demo-new">New</span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/volumediscount"
                                    className="menu-link-text link position-relative"
                                  >
                                    Volume Discount
                                    <div className="demo-label">
                                      <span className="demo-new">New</span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/volumediscountgrid"
                                    className="menu-link-text link position-relative"
                                  >
                                    Volume Discount Grid
                                    <div className="demo-label">
                                      <span className="demo-new">New</span>
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/products/productfeatures/buyxgety"
                                    className="menu-link-text link position-relative"
                                  >
                                    Buy X Get Y
                                    <div className="demo-label">
                                      <span className="demo-new">New</span>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="menu-heading">Best seller</div>
                            <div className="hover-sw-nav hover-sw-2">
                              <div
                                dir="ltr"
                                className="swiper tf-product-header"
                              >
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide" lazy="true">
                                    <div className="card-product">
                                      <div className="card-product-wrapper">
                                        <a href="#" className="product-img">
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
                                        <div className="list-product-btn absolute-2">
                                          <a
                                            href="#quick_add"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                          >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">
                                              Quick Add
                                            </span>
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="box-icon bg_white wishlist btn-icon-action"
                                          >
                                            <span className="icon icon-heart" />
                                            <span className="tooltip">
                                              Add to Wishlist
                                            </span>
                                            <span className="icon icon-delete" />
                                          </a>
                                          <a
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                          >
                                            <span className="icon icon-compare" />
                                            <span className="tooltip">
                                              Add to Compare
                                            </span>
                                            <span className="icon icon-check" />
                                          </a>
                                          <a
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                          >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">
                                              Quick View
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="card-product-info">
                                        <a href="#" className="title link">
                                          Ribbed Tank Top
                                        </a>
                                        <span className="price">$16.95</span>
                                        <ul className="list-color-product">
                                          <li className="list-color-item color-swatch active">
                                            <span className="tooltip">
                                              Orange
                                            </span>
                                            <span className="swatch-value bg_orange-3" />
                                            <img
                                              className="lazyload"
                                              data-src="/assets/images/products/orange-1.jpg"
                                              src="/assets/images/products/orange-1.jpg"
                                              alt="image-product"
                                            />
                                          </li>
                                          <li className="list-color-item color-swatch">
                                            <span className="tooltip">
                                              Black
                                            </span>
                                            <span className="swatch-value bg_dark" />
                                            <img
                                              className="lazyload"
                                              data-src="/assets/images/products/black-1.jpg"
                                              src="/assets/images/products/black-1.jpg"
                                              alt="image-product"
                                            />
                                          </li>
                                          <li className="list-color-item color-swatch">
                                            <span className="tooltip">
                                              White
                                            </span>
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
                                        <div className="product-img">
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
                                        </div>
                                        <div className="list-product-btn absolute-2">
                                          <a
                                            href="#shoppingCart"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                          >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">
                                              Add to cart
                                            </span>
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="box-icon bg_white wishlist btn-icon-action"
                                          >
                                            <span className="icon icon-heart" />
                                            <span className="tooltip">
                                              Add to Wishlist
                                            </span>
                                            <span className="icon icon-delete" />
                                          </a>
                                          <a
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                          >
                                            <span className="icon icon-compare" />
                                            <span className="tooltip">
                                              Add to Compare
                                            </span>
                                            <span className="icon icon-check" />
                                          </a>
                                          <a
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                          >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">
                                              Quick View
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="card-product-info">
                                        <a href="#" className="title link">
                                          Oversized Printed T-shirt
                                        </a>
                                        <span className="price">$10.00</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="swiper-slide" lazy="true">
                                    <div className="card-product">
                                      <div className="card-product-wrapper">
                                        <div className="product-img">
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
                                        </div>
                                        <div className="list-product-btn">
                                          <a
                                            href="#quick_add"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quick-add tf-btn-loading"
                                          >
                                            <span className="icon icon-bag" />
                                            <span className="tooltip">
                                              Quick Add
                                            </span>
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="box-icon bg_white wishlist btn-icon-action"
                                          >
                                            <span className="icon icon-heart" />
                                            <span className="tooltip">
                                              Add to Wishlist
                                            </span>
                                            <span className="icon icon-delete" />
                                          </a>
                                          <a
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                          >
                                            <span className="icon icon-compare" />
                                            <span className="tooltip">
                                              Add to Compare
                                            </span>
                                            <span className="icon icon-check" />
                                          </a>
                                          <a
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                          >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">
                                              Quick View
                                            </span>
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
                                        <a href="#" className="title">
                                          Oversized Printed T-shirt
                                        </a>
                                        <span className="price">$16.95</span>
                                        <ul className="list-color-product">
                                          <li className="list-color-item color-swatch active">
                                            <span className="tooltip">
                                              White
                                            </span>
                                            <span className="swatch-value bg_white" />
                                            <img
                                              className="lazyload"
                                              data-src="/assets/images/products/white-2.jpg"
                                              src="/assets/images/products/white-2.jpg"
                                              alt="image-product"
                                            />
                                          </li>
                                          <li className="list-color-item color-swatch">
                                            <span className="tooltip">
                                              Pink
                                            </span>
                                            <span className="swatch-value bg_purple" />
                                            <img
                                              className="lazyload"
                                              data-src="/assets/images/products/pink-1.jpg"
                                              src="/assets/images/products/pink-1.jpg"
                                              alt="image-product"
                                            />
                                          </li>
                                          <li className="list-color-item color-swatch">
                                            <span className="tooltip">
                                              Black
                                            </span>
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
                                        <div className="product-img">
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
                                        </div>
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
                                            <span className="tooltip">
                                              Quick Add
                                            </span>
                                          </a>
                                          <a
                                            href="javascript:void(0);"
                                            className="box-icon bg_white wishlist btn-icon-action"
                                          >
                                            <span className="icon icon-heart" />
                                            <span className="tooltip">
                                              Add to Wishlist
                                            </span>
                                            <span className="icon icon-delete" />
                                          </a>
                                          <a
                                            href="#compare"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasLeft"
                                            className="box-icon bg_white compare btn-icon-action"
                                          >
                                            <span className="icon icon-compare" />
                                            <span className="tooltip">
                                              Add to Compare
                                            </span>
                                            <span className="icon icon-check" />
                                          </a>
                                          <a
                                            href="#quick_view"
                                            data-bs-toggle="modal"
                                            className="box-icon bg_white quickview tf-btn-loading"
                                          >
                                            <span className="icon icon-view" />
                                            <span className="tooltip">
                                              Quick View
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                      <div className="card-product-info">
                                        <a href="#" className="title link">
                                          V-neck linen T-shirt
                                        </a>
                                        <span className="price">$114.95</span>
                                        <ul className="list-color-product">
                                          <li className="list-color-item color-swatch active">
                                            <span className="tooltip">
                                              Brown
                                            </span>
                                            <span className="swatch-value bg_brown" />
                                            <img
                                              className="lazyload"
                                              data-src="/assets/images/products/brown-2.jpg"
                                              src="/assets/images/products/brown-2.jpg"
                                              alt="image-product"
                                            />
                                          </li>
                                          <li className="list-color-item color-swatch">
                                            <span className="tooltip">
                                              White
                                            </span>
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
                                </div>
                              </div>
                              <div className="nav-sw nav-next-slider nav-next-product-header box-icon w_46 round">
                                <span className="icon icon-arrow-left" />
                              </div>
                              <div className="nav-sw nav-prev-slider nav-prev-product-header box-icon w_46 round">
                                <span className="icon icon-arrow-right" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item position-relative">
                    <a href="#" className="item-link">
                      Pages
                      <i className="icon icon-arrow-down" />
                    </a>
                    <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                        <li>
                          <a
                            href="about-us.html"
                            className="menu-link-text link text_black-2"
                          >
                            About us
                          </a>
                        </li>
                        <li className="menu-item-2">
                          <a
                            href="#"
                            className="menu-link-text link text_black-2"
                          >
                            Brands
                          </a>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="brands.html"
                                  className="menu-link-text link text_black-2 position-relative"
                                >
                                  Brands
                                  <div className="demo-label">
                                    <span className="demo-new">New</span>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="brands-v2.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Brand V2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item-2">
                          <a
                            href="#"
                            className="menu-link-text link text_black-2"
                          >
                            Contact
                          </a>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="contact-1.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Contact 1
                                </a>
                              </li>
                              <li>
                                <a
                                  href="contact-2.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Contact 2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item-2">
                          <a
                            href="#"
                            className="menu-link-text link text_black-2"
                          >
                            FAQ
                          </a>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="faq-1.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  FAQ 01
                                </a>
                              </li>
                              <li>
                                <a
                                  href="faq-2.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  FAQ 02
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item-2">
                          <a
                            href="#"
                            className="menu-link-text link text_black-2"
                          >
                            Store
                          </a>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="our-store.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Our store
                                </a>
                              </li>
                              <li>
                                <a
                                  href="store-locations.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Store locator
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a
                            href="timeline.html"
                            className="menu-link-text link text_black-2 position-relative"
                          >
                            Timeline{" "}
                            <div className="demo-label">
                              <span className="demo-new">New</span>
                            </div>{" "}
                          </a>
                        </li>
                        <li>
                          <Link
                            href="/cart"
                            className="menu-link-text link text_black-2 position-relative"
                          >
                            View cart
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/checkout"
                            className="menu-link-text link text_black-2 position-relative"
                          >
                            Check out
                          </Link>
                        </li>
                        <li className="menu-item-2">
                          <a
                            href="#"
                            className="menu-link-text link text_black-2"
                          >
                            Payment
                          </a>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="payment-confirmation.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Payment Confirmation
                                </a>
                              </li>
                              <li>
                                <a
                                  href="payment-failure.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  Payment Failure
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="menu-item-2">
                          <a
                            href="#"
                            className="menu-link-text link text_black-2"
                          >
                            My account
                          </a>
                          <div className="sub-menu submenu-default">
                            <ul className="menu-list">
                              <li>
                                <a
                                  href="my-account.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My account
                                </a>
                              </li>
                              <li>
                                <a
                                  href="my-account-orders.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My order
                                </a>
                              </li>
                              <li>
                                <a
                                  href="my-account-orders-details.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My order details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="my-account-address.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My address
                                </a>
                              </li>
                              <li>
                                <a
                                  href="my-account-edit.html"
                                  className="menu-link-text link text_black-2"
                                >
                                  My account details
                                </a>
                              </li>
                              <li>
                                <a
                                  href="my-account-wishlist.html"
                                  className="menu-link-text link text_black-2"
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
                            className="menu-link-text link text_black-2 position-relative"
                          >
                            Invoice
                          </a>
                        </li>
                        <li>
                          <a
                            href="404.html"
                            className="menu-link-text link text_black-2 position-relative"
                          >
                            404
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item position-relative">
                    <a href="#" className="item-link">
                      Blog
                      <i className="icon icon-arrow-down" />
                    </a>
                    <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                        <li>
                          <a
                            href="blog-grid.html"
                            className="menu-link-text link text_black-2"
                          >
                            Grid layout
                          </a>
                        </li>
                        <li>
                          <a
                            href="blog-sidebar-left.html"
                            className="menu-link-text link text_black-2"
                          >
                            Left sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            href="blog-sidebar-right.html"
                            className="menu-link-text link text_black-2"
                          >
                            Right sidebar
                          </a>
                        </li>
                        <li>
                          <a
                            href="blog-list.html"
                            className="menu-link-text link text_black-2"
                          >
                            Blog list
                          </a>
                        </li>
                        <li>
                          <a
                            href="blog-detail.html"
                            className="menu-link-text link text_black-2"
                          >
                            Single Post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3"
                      className="item-link"
                    >
                      Buy now
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-3 col-md-4 col-3">
              <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                <li className="nav-search">
                  <a
                    href="#canvasSearch"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-search" />
                  </a>
                </li>
                <li className="nav-account">
                  <a
                    href="#login"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-account" />
                  </a>
                </li>
                <li className="nav-wishlist">
                  <a href="wishlist.html" className="nav-icon-item">
                    <i className="icon icon-heart" />
                    <span className="count-box">0</span>
                  </a>
                </li>
                <li className="nav-cart">
                  <a
                    href="#shoppingCart"
                    data-bs-toggle="modal"
                    className="nav-icon-item"
                  >
                    <i className="icon icon-bag" />
                    <span className="count-box">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* /header */}
    </div>
  );
}
