import React from 'react'
import Title from "@/app/component/title";

import Footer2 from '@/app/component/footer2'
import Header2 from '@/app/component/header2';

export default function ShopDefault() {
    return (
      <>
        <Header2 />
        <Title />
        <div className="mt-5 pt-5">
          {/*  Section Product  */}
          <section class="flat-spacing-2">
            <div class="container">
              <div class="tf-shop-control grid-3 align-items-center">
                <div class="tf-control-filter">
                  <a
                    href="#filterShop"
                    data-bs-toggle="offcanvas"
                    aria-controls="offcanvasLeft"
                    class="tf-btn-filter"
                  >
                    <span class="icon icon-filter"></span>
                    <span class="text">Filter</span>
                  </a>
                </div>
                <ul class="tf-control-layout d-flex justify-content-center">
                  <li
                    class="tf-view-layout-switch sw-layout-list list-layout"
                    data-value-layout="list"
                  >
                    <div class="item">
                      <span class="icon icon-list"></span>
                    </div>
                  </li>
                  <li
                    class="tf-view-layout-switch sw-layout-2"
                    data-value-layout="tf-col-2"
                  >
                    <div class="item">
                      <span class="icon icon-grid-2"></span>
                    </div>
                  </li>
                  <li
                    class="tf-view-layout-switch sw-layout-3"
                    data-value-layout="tf-col-3"
                  >
                    <div class="item">
                      <span class="icon icon-grid-3"></span>
                    </div>
                  </li>
                  <li
                    class="tf-view-layout-switch sw-layout-4 active"
                    data-value-layout="tf-col-4"
                  >
                    <div class="item">
                      <span class="icon icon-grid-4"></span>
                    </div>
                  </li>
                  <li
                    class="tf-view-layout-switch sw-layout-5"
                    data-value-layout="tf-col-5"
                  >
                    <div class="item">
                      <span class="icon icon-grid-5"></span>
                    </div>
                  </li>
                  <li
                    class="tf-view-layout-switch sw-layout-6"
                    data-value-layout="tf-col-6"
                  >
                    <div class="item">
                      <span class="icon icon-grid-6"></span>
                    </div>
                  </li>
                </ul>
                <div class="tf-control-sorting d-flex justify-content-end">
                  <div class="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div class="btn-select">
                      <span class="text-sort-value">Featured</span>
                      <span class="icon icon-arrow-down"></span>
                    </div>
                    <div class="dropdown-menu">
                      <div class="select-item active">
                        <span class="text-value-item">Featured</span>
                      </div>
                      <div class="select-item">
                        <span class="text-value-item">Best selling</span>
                      </div>
                      <div class="select-item" data-sort-value="a-z">
                        <span class="text-value-item">Alphabetically, A-Z</span>
                      </div>
                      <div class="select-item" data-sort-value="z-a">
                        <span class="text-value-item">Alphabetically, Z-A</span>
                      </div>
                      <div class="select-item" data-sort-value="price-low-high">
                        <span class="text-value-item">Price, low to high</span>
                      </div>
                      <div class="select-item" data-sort-value="price-high-low">
                        <span class="text-value-item">Price, high to low</span>
                      </div>
                      <div class="select-item">
                        <span class="text-value-item">Date, old to new</span>
                      </div>
                      <div class="select-item">
                        <span class="text-value-item">Date, new to old</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrapper-control-shop">
                <div class="meta-filter-shop">
                  <div id="product-count-grid" class="count-text"></div>
                  <div id="product-count-list" class="count-text"></div>
                  <div id="applied-filters"></div>
                  <button
                    id="remove-all"
                    class="remove-all-filters"
                    style={{ display: "none" }}
                  >
                    Remove All <i class="icon icon-close"></i>
                  </button>
                </div>
                <div class="tf-list-layout wrapper-shop" id="listLayout">
                  {/*  card product 1  */}
                  <div
                    class="card-product list-layout"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="#" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/orange-1.jpg"
                          src="/assets/images/products/orange-1.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/white-1.jpg"
                          src="/assets/images/products/white-1.jpg"
                          alt="image-product"
                        />
                      </a>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Ribbed Tank Top
                      </a>
                      <span class="price current-price">$16.95</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item hover-tooltip color-swatch active">
                          <span class="tooltip tooltip-bottom">Orange</span>
                          <span class="swatch-value bg_orange-3"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/orange-1.jpg"
                            src="/assets/images/products/orange-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-1.jpg"
                            src="/assets/images/products/black-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-1.jpg"
                            src="/assets/images/products/white-1.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3 hover-tooltip"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a
                          href="#"
                          class="box-icon wishlist style-3 hover-tooltip"
                        >
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3 hover-tooltip"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3 hover-tooltip"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 2  */}
                  <div
                    class="card-product list-layout"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/brown.jpg"
                          src="/assets/images/products/brown.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/purple.jpg"
                          src="/assets/images/products/purple.jpg"
                          alt="image-product"
                        />
                      </div>
                      <div class="countdown-box">
                        <div
                          class="js-countdown"
                          data-timer="1007500"
                          data-labels="d :,h :,m :,s"
                        ></div>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Ribbed modal T-shirt
                      </a>
                      <span class="price current-price">$18.95</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Brown</span>
                          <span class="swatch-value bg_brown"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/brown.jpg"
                            src="/assets/images/products/brown.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Purple</span>
                          <span class="swatch-value bg_purple"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/purple.jpg"
                            src="/assets/images/products/purple.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Green</span>
                          <span class="swatch-value bg_light-green"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/green.jpg"
                            src="/assets/images/products/green.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 3  */}
                  <div
                    class="card-product list-layout"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/white-3.jpg"
                          src="/assets/images/products/white-3.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/white-4.jpg"
                          src="/assets/images/products/white-4.jpg"
                          alt="image-product"
                        />
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Oversized Printed T-shirt
                      </a>
                      <span class="price current-price">$10.00</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 4  */}
                  <div
                    class="card-product list-layout"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/white-2.jpg"
                          src="/assets/images/products/white-2.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/pink-1.jpg"
                          src="/assets/images/products/pink-1.jpg"
                          alt="image-product"
                        />
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Oversized Printed T-shirt
                      </a>
                      <span class="price current-price">$16.95</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-2.jpg"
                            src="/assets/images/products/white-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Pink</span>
                          <span class="swatch-value bg_purple"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/pink-1.jpg"
                            src="/assets/images/products/pink-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-2.jpg"
                            src="/assets/images/products/black-2.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 5  */}
                  <div
                    class="card-product list-layout"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/brown-2.jpg"
                          src="/assets/images/products/brown-2.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/brown-3.jpg"
                          src="/assets/images/products/brown-3.jpg"
                          alt="image-product"
                        />
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        V-neck linen T-shirt
                      </a>
                      <span class="price current-price">$114.95</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Brown</span>
                          <span class="swatch-value bg_brown"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/brown-2.jpg"
                            src="/assets/images/products/brown-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-5.jpg"
                            src="/assets/images/products/white-5.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 6  */}
                  <div
                    class="card-product list-layout"
                    data-availability="In stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/light-green-1.jpg"
                          src="/assets/images/products/light-green-1.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/light-green-2.jpg"
                          src="/assets/images/products/light-green-2.jpg"
                          alt="image-product"
                        />
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Loose Fit Sweatshirt
                      </a>
                      <span class="price current-price">$10.00</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Light Green</span>
                          <span class="swatch-value bg_light-green"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-green-1.jpg"
                            src="/assets/images/products/light-green-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-3.jpg"
                            src="/assets/images/products/black-3.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Blue</span>
                          <span class="swatch-value bg_blue-2"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/blue.jpg"
                            src="/assets/images/products/blue.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Dark Blue</span>
                          <span class="swatch-value bg_dark-blue"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/dark-blue.jpg"
                            src="/assets/images/products/dark-blue.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-6.jpg"
                            src="/assets/images/products/white-6.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Grey</span>
                          <span class="swatch-value bg_light-grey"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-grey.jpg"
                            src="/assets/images/products/light-grey.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 7  */}
                  <div
                    class="card-product list-layout"
                    data-availability="Out of stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/black-4.jpg"
                          src="/assets/images/products/black-4.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-5.jpg"
                          src="/assets/images/products/black-5.jpg"
                          alt="image-product"
                        />
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Regular Fit Oxford Shirt
                      </a>
                      <span class="price current-price">$10.00</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-4.jpg"
                            src="/assets/images/products/black-4.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Dark Blue</span>
                          <span class="swatch-value bg_dark-blue"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/dark-blue-2.jpg"
                            src="/assets/images/products/dark-blue-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Beige</span>
                          <span class="swatch-value bg_beige"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/beige.jpg"
                            src="/assets/images/products/beige.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Blue</span>
                          <span class="swatch-value bg_light-blue"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-blue.jpg"
                            src="/assets/images/products/light-blue.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-7.jpg"
                            src="/assets/images/products/white-7.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  card product 8  */}
                  <div
                    class="card-product list-layout"
                    data-availability="Out of stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <div class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/white-8.jpg"
                          src="/assets/images/products/white-8.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-6.jpg"
                          src="/assets/images/products/black-6.jpg"
                          alt="image-product"
                        />
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="#" class="title link">
                        Loose Fit Hoodie
                      </a>
                      <span class="price current-price">$9.95</span>
                      <p class="description">
                        Button-up shirt sleeves and a relaxed silhouette. It’s
                        tailored with drapey, crinkle-texture fabric that’s made
                        from LENZING™ ECOVERO™ Viscose — responsibly sourced
                        wood-based fibres produced through a process that
                        reduces...
                      </p>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-8.jpg"
                            src="/assets/images/products/white-8.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-7.jpg"
                            src="/assets/images/products/black-7.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Blue</span>
                          <span class="swatch-value bg_blue-2"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/blue-2.jpg"
                            src="/assets/images/products/blue-2.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon quick-add style-3"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick add</span>
                        </a>
                        <a href="#" class="box-icon wishlist style-3">
                          <span class="icon icon-heart"></span>{" "}
                          <span class="tooltip">Add to Wishlist</span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          class="box-icon compare style-3"
                        >
                          <span class="icon icon-compare"></span>{" "}
                          <span class="tooltip">Add to Compare</span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon quickview style-3"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick view</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*  pagination  */}
                  <ul class="wg-pagination tf-pagination-list justify-content-start">
                    <li class="active">
                      <a href="#" class="pagination-link">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        <span class="icon icon-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="tf-grid-layout wrapper-shop tf-col-4"
                  id="gridLayout"
                >
                  {/*  card product 1  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/orange-1.jpg"
                          src="/assets/images/products/orange-1.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/white-1.jpg"
                          src="/assets/images/products/white-1.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="list-product-btn absolute-2">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Ribbed Tank Top
                      </a>
                      <span class="price current-price">$16.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Orange</span>
                          <span class="swatch-value bg_orange-3"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/orange-1.jpg"
                            src="/assets/images/products/orange-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-1.jpg"
                            src="/assets/images/products/black-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-1.jpg"
                            src="/assets/images/products/white-1.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 2  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/brown.jpg"
                          src="/assets/images/products/brown.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/purple.jpg"
                          src="/assets/images/products/purple.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                      <div class="size-list">
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="countdown-box">
                        <div
                          class="js-countdown"
                          data-timer="1007500"
                          data-labels="d :,h :,m :,s"
                        ></div>
                      </div>
                      <div class="on-sale-wrap text-end">
                        <div class="on-sale-item">-33%</div>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Ribbed modal T-shirt
                      </a>
                      <span class="price current-price">$18.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Brown</span>
                          <span class="swatch-value bg_brown"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/brown.jpg"
                            src="/assets/images/products/brown.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Purple</span>
                          <span class="swatch-value bg_purple"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/purple.jpg"
                            src="/assets/images/products/purple.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Green</span>
                          <span class="swatch-value bg_light-green"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/green.jpg"
                            src="/assets/images/products/green.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 3  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/white-3.jpg"
                          src="/assets/images/products/white-3.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/white-4.jpg"
                          src="/assets/images/products/white-4.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="list-product-btn absolute-2">
                        <a
                          href="#shoppingCart"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Add to cart</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Oversized Printed T-shirt
                      </a>
                      <span class="price current-price">$10.00</span>
                    </div>
                  </div>
                  {/*  card product 4  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/white-2.jpg"
                          src="/assets/images/products/white-2.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/pink-1.jpg"
                          src="/assets/images/products/pink-1.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title">
                        Oversized Printed T-shirt
                      </a>
                      <span class="price current-price">$16.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-2.jpg"
                            src="/assets/images/products/white-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Pink</span>
                          <span class="swatch-value bg_purple"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/pink-1.jpg"
                            src="/assets/images/products/pink-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-2.jpg"
                            src="/assets/images/products/black-2.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 5  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/brown-2.jpg"
                          src="/assets/images/products/brown-2.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/brown-3.jpg"
                          src="/assets/images/products/brown-3.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        V-neck linen T-shirt
                      </a>
                      <span class="price current-price">$114.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Brown</span>
                          <span class="swatch-value bg_brown"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/brown-2.jpg"
                            src="/assets/images/products/brown-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-5.jpg"
                            src="/assets/images/products/white-5.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 6  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/light-green-1.jpg"
                          src="/assets/images/products/light-green-1.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/light-green-2.jpg"
                          src="/assets/images/products/light-green-2.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="list-product-btn absolute-2">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Loose Fit Sweatshirt
                      </a>
                      <span class="price current-price">$10.00</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Light Green</span>
                          <span class="swatch-value bg_light-green"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-green-1.jpg"
                            src="/assets/images/products/light-green-1.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-3.jpg"
                            src="/assets/images/products/black-3.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Blue</span>
                          <span class="swatch-value bg_blue-2"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/blue.jpg"
                            src="/assets/images/products/blue.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Dark Blue</span>
                          <span class="swatch-value bg_dark-blue"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/dark-blue.jpg"
                            src="/assets/images/products/dark-blue.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-6.jpg"
                            src="/assets/images/products/white-6.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Grey</span>
                          <span class="swatch-value bg_light-grey"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-grey.jpg"
                            src="/assets/images/products/light-grey.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 7  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="Ecomus"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/black-4.jpg"
                          src="/assets/images/products/black-4.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-5.jpg"
                          src="/assets/images/products/black-5.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Regular Fit Oxford Shirt
                      </a>
                      <span class="price current-price">$10.00</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-4.jpg"
                            src="/assets/images/products/black-4.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Dark Blue</span>
                          <span class="swatch-value bg_dark-blue"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/dark-blue-2.jpg"
                            src="/assets/images/products/dark-blue-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Beige</span>
                          <span class="swatch-value bg_beige"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/beige.jpg"
                            src="/assets/images/products/beige.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Blue</span>
                          <span class="swatch-value bg_light-blue"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-blue.jpg"
                            src="/assets/images/products/light-blue.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-7.jpg"
                            src="/assets/images/products/white-7.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 8  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/white-8.jpg"
                          src="/assets/images/products/white-8.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-6.jpg"
                          src="/assets/images/products/black-6.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Loose Fit Hoodie
                      </a>
                      <span class="price current-price">$9.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-8.jpg"
                            src="/assets/images/products/white-8.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-7.jpg"
                            src="/assets/images/products/black-7.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Blue</span>
                          <span class="swatch-value bg_blue-2"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/blue-2.jpg"
                            src="/assets/images/products/blue-2.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 9  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/brown-4.jpg"
                          src="/assets/images/products/brown-4.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-8.jpg"
                          src="/assets/images/products/black-8.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                        <span class="size-item">XL</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Patterned scarf
                      </a>
                      <span class="price current-price">$14.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Brown</span>
                          <span class="swatch-value bg_brown"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/brown-4.jpg"
                            src="/assets/images/products/brown-4.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-8.jpg"
                            src="/assets/images/products/black-8.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 10  */}
                  <div
                    class="card-product grid"
                    data-availability="In stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/black-9.jpg"
                          src="/assets/images/products/black-9.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-10.jpg"
                          src="/assets/images/products/black-10.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Slim Fit Fine-knit Turtleneck Sweater
                      </a>
                      <span class="price current-price">$18.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Black</span>
                          <span class="swatch-value bg_dark"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/black-9.jpg"
                            src="/assets/images/products/black-9.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">White</span>
                          <span class="swatch-value bg_white"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/white-9.jpg"
                            src="/assets/images/products/white-9.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 11  */}
                  <div
                    class="card-product grid"
                    data-availability="Out of stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/grey-2.jpg"
                          src="/assets/images/products/grey-2.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/grey.jpg"
                          src="/assets/images/products/grey.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Slim Fit Fine-knit Turtleneck Sweater
                      </a>
                      <span class="price current-price">$18.95</span>
                      <ul class="list-color-product">
                        <li class="list-color-item color-swatch active">
                          <span class="tooltip">Grey</span>
                          <span class="swatch-value bg_grey"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/grey-2.jpg"
                            src="/assets/images/products/grey-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Pink</span>
                          <span class="swatch-value bg_pink"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/pink-2.jpg"
                            src="/assets/images/products/pink-2.jpg"
                            alt="image-product"
                          />
                        </li>
                        <li class="list-color-item color-swatch">
                          <span class="tooltip">Light Pink</span>
                          <span class="swatch-value bg_light-pink"></span>
                          <img
                            class="lazyload"
                            data-src="/assets/images/products/light-pink.jpg"
                            src="/assets/images/products/light-pink.jpg"
                            alt="image-product"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  card product 12  */}
                  <div
                    class="card-product grid"
                    data-availability="Out of stock"
                    data-brand="M&H"
                  >
                    <div class="card-product-wrapper">
                      <a href="product-detail.html" class="product-img">
                        <img
                          class="lazyload img-product"
                          data-src="/assets/images/products/black-11.jpg"
                          src="/assets/images/products/black-11.jpg"
                          alt="image-product"
                        />
                        <img
                          class="lazyload img-hover"
                          data-src="/assets/images/products/black-12.jpg"
                          src="/assets/images/products/black-12.jpg"
                          alt="image-product"
                        />
                      </a>
                      <div class="size-list">
                        <span class="size-item">S</span>
                        <span class="size-item">M</span>
                        <span class="size-item">L</span>
                      </div>
                      <div class="list-product-btn">
                        <a
                          href="#quick_add"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quick-add tf-btn-loading"
                        >
                          <span class="icon icon-bag"></span>
                          <span class="tooltip">Quick Add</span>
                        </a>
                        <a
                          href="javascript:void(0);"
                          class="box-icon bg_white wishlist btn-icon-action"
                        >
                          <span class="icon icon-heart"></span>
                          <span class="tooltip">Add to Wishlist</span>
                          <span class="icon icon-delete"></span>
                        </a>
                        <a
                          href="#compare"
                          data-bs-toggle="offcanvas"
                          aria-controls="offcanvasLeft"
                          class="box-icon bg_white compare btn-icon-action"
                        >
                          <span class="icon icon-compare"></span>
                          <span class="tooltip">Add to Compare</span>
                          <span class="icon icon-check"></span>
                        </a>
                        <a
                          href="#quick_view"
                          data-bs-toggle="modal"
                          class="box-icon bg_white quickview tf-btn-loading"
                        >
                          <span class="icon icon-view"></span>
                          <span class="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div class="card-product-info">
                      <a href="product-detail.html" class="title link">
                        Slim Fit Fine-knit Turtleneck Sweater
                      </a>
                      <span class="price current-price">$18.95</span>
                    </div>
                  </div>
                  {/*  pagination  */}
                  <ul class="wg-pagination tf-pagination-list">
                    <li class="active">
                      <a href="#" class="pagination-link">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        2
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        3
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        4
                      </a>
                    </li>
                    <li>
                      <a href="#" class="pagination-link animate-hover-btn">
                        <span class="icon icon-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer2 />
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
      </>
    );
}
