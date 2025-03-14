import Footer2 from '@/app/component/footer2'
import Topbar from "@/app/component/topbar";

import Header2 from '@/app/component/header2';
import Title from "@/app/component/title";
import React from 'react'

export default function ShopLeftSideBar() {
    return (
      <>
        <Topbar />
        <Header2 />
        <Title />
        <div className="mt-5 pt-5">
          <div id="wrapper">
            <section className="flat-spacing-1">
              <div className="container">
                <div className="tf-shop-control grid-3 align-items-center">
                  <div className="tf-control-filter">
                    <a
                      href="#filterShop"
                      data-bs-toggle="offcanvas"
                      aria-controls="offcanvasLeft"
                      className="tf-btn-filter"
                    >
                      <span className="icon icon-filter"></span>
                      <span className="text">Filter</span>
                    </a>
                  </div>
                  <ul className="tf-control-layout d-flex justify-content-center">
                    <li
                      className="tf-view-layout-switch sw-layout-list list-layout"
                      data-value-layout="list"
                    >
                      <div className="item">
                        <span className="icon icon-list"></span>
                      </div>
                    </li>
                    <li
                      className="tf-view-layout-switch sw-layout-2"
                      data-value-layout="tf-col-2"
                    >
                      <div className="item">
                        <span className="icon icon-grid-2"></span>
                      </div>
                    </li>
                    <li
                      className="tf-view-layout-switch sw-layout-3 active"
                      data-value-layout="tf-col-3"
                    >
                      <div className="item">
                        <span className="icon icon-grid-3"></span>
                      </div>
                    </li>
                    <li
                      className="tf-view-layout-switch sw-layout-4"
                      data-value-layout="tf-col-4"
                    >
                      <div className="item">
                        <span className="icon icon-grid-4"></span>
                      </div>
                    </li>
                  </ul>
                  <div className="tf-control-sorting d-flex justify-content-end">
                    <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                      <div className="btn-select">
                        <span className="text-sort-value">Featured</span>
                        <span className="icon icon-arrow-down"></span>
                      </div>
                      <div className="dropdown-menu">
                        <div className="select-item active">
                          <span className="text-value-item">Featured</span>
                        </div>
                        <div className="select-item">
                          <span className="text-value-item">Best selling</span>
                        </div>
                        <div className="select-item" data-sort-value="a-z">
                          <span className="text-value-item">
                            Alphabetically, A-Z
                          </span>
                        </div>
                        <div className="select-item" data-sort-value="z-a">
                          <span className="text-value-item">
                            Alphabetically, Z-A
                          </span>
                        </div>
                        <div
                          className="select-item"
                          data-sort-value="price-low-high"
                        >
                          <span className="text-value-item">
                            Price, low to high
                          </span>
                        </div>
                        <div
                          className="select-item"
                          data-sort-value="price-high-low"
                        >
                          <span className="text-value-item">
                            Price, high to low
                          </span>
                        </div>
                        <div className="select-item">
                          <span className="text-value-item">
                            Date, old to new
                          </span>
                        </div>
                        <div className="select-item">
                          <span className="text-value-item">
                            Date, new to old
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-row-flex">
                  <aside className="tf-shop-sidebar wrap-sidebar-mobile">
                    <div className="widget-facet wd-categories">
                      <div
                        className="facet-title"
                        data-bs-target="#categories"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="categories"
                      >
                        <span>Product categories</span>
                        <span className="icon icon-arrow-up"></span>
                      </div>
                      <div id="categories" className="collapse show">
                        <ul className="list-categoris current-scrollbar mb_36">
                          <li className="cate-item current">
                            <a href="#">
                              <span>Fashion</span>&nbsp;<span>(31)</span>
                            </a>
                          </li>
                          <li className="cate-item">
                            <a href="#">
                              <span>Men</span>&nbsp;<span>(9)</span>
                            </a>
                          </li>
                          <li className="cate-item">
                            <a href="#">
                              <span>Women</span>&nbsp;<span>(23)</span>
                            </a>
                          </li>
                          <li className="cate-item">
                            <a href="#">
                              <span>Denim</span>&nbsp;<span>(20)</span>
                            </a>
                          </li>
                          <li className="cate-item">
                            <a href="#">
                              <span>Dress</span>&nbsp;<span>(23)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#sale-products"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="sale-products"
                      >
                        <span>Sale products</span>
                        <span className="icon icon-arrow-up"></span>
                      </div>
                      <div id="sale-products" className="collapse show">
                        <div className="widget-featured-products mb_36">
                          <div className="featured-product-item">
                            <a
                              href="product-detail.html"
                              className="card-product-wrapper"
                            >
                              <img
                                className="lazyload img-product"
                                data-src="/assets/images/products/img-feature-1.png"
                                alt="image-feature"
                              />
                            </a>
                            <div className="card-product-info">
                              <a href="#" className="title link">
                                Jersey thong body
                              </a>
                              <span className="price">$105.95</span>
                            </div>
                          </div>
                          <div className="featured-product-item">
                            <a
                              href="product-detail.html"
                              className="card-product-wrapper"
                            >
                              <img
                                className="lazyload img-product"
                                data-src="/assets/images/products/img-feature-2.png"
                                alt="image-feature"
                              />
                            </a>
                            <div className="card-product-info">
                              <a href="#" className="title link">
                                Lace-trimmed Satin Camisole Top
                              </a>
                              <span className="price">€24,95</span>
                            </div>
                          </div>
                          <div className="featured-product-item">
                            <a
                              href="product-detail.html"
                              className="card-product-wrapper"
                            >
                              <img
                                className="lazyload img-product"
                                data-src="/assets/images/products/img-feature-3.png"
                                alt="image-feature"
                              />
                            </a>
                            <div className="card-product-info">
                              <a href="#" className="title link">
                                Linen-blend Tank Top
                              </a>
                              <span className="price">$16.95</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#shipping"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="shipping"
                      >
                        <span>Shipping & Delivery</span>
                        <span className="icon icon-arrow-up"></span>
                      </div>
                      <div id="shipping" className="collapse show">
                        <ul className="widget-iconbox-list mb_36">
                          <li className="iconbox-item">
                            <div className="box-icon w_50 round">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="16"
                                viewBox="0 0 24 16"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0 1C0 0.447715 0.447715 0 1 0H15.5C16.0523 0 16.5 0.447715 16.5 1V3.5H19.7857C20.099 3.5 20.3943 3.64687 20.5833 3.89679L23.7976 8.14679C23.9289 8.32046 24 8.53225 24 8.75V13C24 13.5523 23.5523 14 23 14H20.3293C19.9174 15.1652 18.8062 16 17.5 16C16.1938 16 15.0826 15.1652 14.6707 14H8.82929C8.41745 15.1652 7.3062 16 6 16C4.69378 16 3.58255 15.1652 3.17071 14H1C0.447715 14 0 13.5523 0 13V1ZM3.17071 12C3.58255 10.8348 4.69378 10 6 10C7.3062 10 8.41745 10.8348 8.82929 12H14.5V2H2V12H3.17071ZM16.5 10.1707V5.5H19.2882L22 9.08557V12H20.3293C19.9174 10.8348 18.8062 10 17.5 10C17.1494 10 16.8128 10.0602 16.5 10.1707ZM6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14C6.55227 14 7 13.5523 7 13C7 12.4477 6.55227 12 6 12ZM17.5 12C16.9477 12 16.5 12.4477 16.5 13C16.5 13.5523 16.9477 14 17.5 14C18.0523 14 18.5 13.5523 18.5 13C18.5 12.4477 18.0523 12 17.5 12Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div className="iconbox-content">
                              <h4 className="iconbox-title">Free shipping</h4>
                              <p className="iconbox-desc">
                                Free iconbox for all US order
                              </p>
                            </div>
                          </li>
                          <li className="iconbox-item">
                            <div className="box-icon w_50 round">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M14.9074 23.9572C13.9179 23.9561 12.9418 23.7273 12.0548 23.2887C9.58879 22.0801 7.33175 20.4851 5.36912 18.5641C3.44812 16.6015 1.85314 14.3444 0.644541 11.8784C0.0604334 10.6753 -0.133278 9.31981 0.0904706 8.0013C0.314219 6.68278 0.94425 5.46709 1.89254 4.52406L3.43026 2.98635C3.79573 2.62231 4.29056 2.41791 4.8064 2.41791C5.32225 2.41791 5.81707 2.62231 6.18255 2.98635L8.47798 5.29292C8.80356 5.62725 8.99924 6.06673 9.02988 6.5324C9.06052 6.99806 8.92409 7.45939 8.64512 7.83349L7.53084 9.3935C8.04739 11.0793 8.9739 12.6107 10.2274 13.8506C11.4467 15.0497 12.9375 15.9366 14.5731 16.4358L16.1331 15.3215C16.5094 15.041 16.9738 14.9047 17.4421 14.9374C17.9103 14.9701 18.3512 15.1696 18.6849 15.4998L20.9803 17.7952C21.3443 18.1607 21.5487 18.6555 21.5487 19.1714C21.5487 19.6872 21.3443 20.182 20.9803 20.5475L19.4426 22.0852C18.8467 22.6799 18.1394 23.1513 17.3613 23.4725C16.5831 23.7937 15.7493 23.9584 14.9074 23.9572ZM4.81197 4.08949C4.77414 4.08932 4.7367 4.09717 4.70212 4.11254C4.66755 4.1279 4.63663 4.15043 4.6114 4.17863L3.07369 5.70521C2.36974 6.40573 1.90384 7.30983 1.74187 8.28965C1.5799 9.26947 1.73006 10.2754 2.17111 11.1652C3.32229 13.4583 4.82631 15.5564 6.62826 17.3829C8.45481 19.1849 10.5529 20.6889 12.846 21.8401C13.7358 22.2811 14.7417 22.4313 15.7215 22.2693C16.7014 22.1074 17.6055 21.6415 18.306 20.9375L19.788 19.3552C19.8146 19.3302 19.8359 19.3 19.8504 19.2665C19.8649 19.2329 19.8724 19.1968 19.8724 19.1602C19.8724 19.1237 19.8649 19.0875 19.8504 19.054C19.8359 19.0204 19.8146 18.9902 19.788 18.9652L17.5594 16.6698C17.5086 16.6251 17.4432 16.6005 17.3756 16.6005C17.3079 16.6005 17.2425 16.6251 17.1917 16.6698L15.3197 18.0849C15.2278 18.1524 15.123 18.2002 15.0117 18.2251C14.9005 18.25 14.7853 18.2516 14.6734 18.2298C12.5479 17.7079 10.6152 16.5908 9.10198 15.0095C7.46364 13.4857 6.30245 11.5194 5.75912 9.34893C5.73795 9.23701 5.73988 9.12196 5.76479 9.01082C5.7897 8.89968 5.83707 8.79481 5.90398 8.70264L7.31912 6.83064C7.36378 6.7798 7.38841 6.71445 7.38841 6.64678C7.38841 6.57911 7.36378 6.51376 7.31912 6.46292L5.0014 4.17863C4.97837 4.15071 4.94944 4.12824 4.91668 4.11282C4.88393 4.09741 4.84817 4.08944 4.81197 4.08949ZM22.8857 14.2072C23.611 12.833 23.9933 11.3039 24 9.75007C24 8.46686 23.7467 7.19627 23.2546 6.01116C22.7626 4.82605 22.0414 3.74973 21.1325 2.84392C20.2236 1.93811 19.1448 1.22063 17.958 0.732616C16.7712 0.244602 15.4998 -0.00434226 14.2166 5.73114e-05C12.6627 0.00678991 11.1336 0.389078 9.75941 1.11434C9.57002 1.2205 9.42792 1.39451 9.36175 1.60129C9.29558 1.80807 9.31026 2.03225 9.40284 2.22863C9.50889 2.41806 9.68365 2.55953 9.89102 2.62381C10.0984 2.6881 10.3225 2.67029 10.5171 2.57406C11.6525 1.98346 12.9144 1.67754 14.1943 1.68263C16.3379 1.67967 18.395 2.52761 19.9139 4.04023C21.4328 5.55285 22.2892 7.60647 22.2951 9.75007C22.3002 11.0299 21.9943 12.2918 21.4037 13.4272C21.3075 13.6218 21.2897 13.846 21.354 14.0533C21.4182 14.2607 21.5597 14.4354 21.7491 14.5415C21.8713 14.5986 22.0043 14.629 22.1391 14.6306C22.2898 14.6318 22.4381 14.5933 22.5692 14.519C22.7002 14.4447 22.8094 14.3371 22.8857 14.2072ZM16.4451 11.9786C16.5822 11.8254 16.6579 11.6271 16.6579 11.4215C16.6579 11.2159 16.5822 11.0176 16.4451 10.8644L15.0523 9.40464V6.40721C15.0523 6.18556 14.9642 5.97299 14.8075 5.81627C14.6508 5.65954 14.4382 5.57149 14.2166 5.57149C13.9949 5.57149 13.7823 5.65954 13.6256 5.81627C13.4689 5.97299 13.3808 6.18556 13.3808 6.40721V9.75007C13.381 9.97164 13.4692 10.1841 13.626 10.3406L15.3308 11.9786C15.4841 12.1157 15.6824 12.1915 15.888 12.1915C16.0936 12.1915 16.2919 12.1157 16.4451 11.9786Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div className="iconbox-content">
                              <h4 className="iconbox-title">Premium Support</h4>
                              <p className="iconbox-desc">
                                Support 24 hours a day
                              </p>
                            </div>
                          </li>
                          <li className="iconbox-item">
                            <div className="box-icon w_50 round">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M24 12C24 18.6173 18.6173 24 12 24C5.3827 24 0 18.6173 0 12C0 11.778 0.0882058 11.565 0.245213 11.408C0.40222 11.251 0.615168 11.1628 0.837209 11.1628C1.05925 11.1628 1.2722 11.251 1.42921 11.408C1.58621 11.565 1.67442 11.778 1.67442 12C1.67442 17.693 6.30698 22.3256 12 22.3256C17.693 22.3256 22.3256 17.693 22.3256 12C22.3256 6.30698 17.693 1.67442 12 1.67442C9.32224 1.68284 6.75254 2.73153 4.83349 4.59907H7.44558C7.66762 4.59907 7.88057 4.68728 8.03758 4.84428C8.19458 5.00129 8.28279 5.21424 8.28279 5.43628C8.28279 5.65832 8.19458 5.87127 8.03758 6.02828C7.88057 6.18528 7.66762 6.27349 7.44558 6.27349H2.98047C2.75842 6.27349 2.54548 6.18528 2.38847 6.02828C2.23146 5.87127 2.14326 5.65832 2.14326 5.43628V0.971163C2.14326 0.749121 2.23146 0.536174 2.38847 0.379166C2.54548 0.222159 2.75842 0.133953 2.98047 0.133953C3.20251 0.133953 3.41545 0.222159 3.57246 0.379166C3.72947 0.536174 3.81767 0.749121 3.81767 0.971163V3.27516C6.01451 1.20893 8.93247 0 12 0C18.6173 0 24 5.3827 24 12ZM12 5.02326C11.778 5.02326 11.565 5.11146 11.408 5.26847C11.251 5.42548 11.1628 5.63842 11.1628 5.86047V6.70437C10.6777 6.71712 10.2038 6.85211 9.78477 7.09685C9.36579 7.34158 9.01537 7.68813 8.76601 8.10437C8.51664 8.52061 8.3764 8.99307 8.35827 9.47795C8.34015 9.96283 8.44473 10.4444 8.66233 10.8781C9.00614 11.568 9.6 12.0837 10.3323 12.3271L13.1375 13.2625C13.4456 13.3641 13.6956 13.5807 13.8407 13.8709C13.9859 14.1611 14.0082 14.4904 13.9055 14.7974C13.8254 15.0393 13.6711 15.2498 13.4644 15.3989C13.2578 15.548 13.0094 15.6281 12.7546 15.6279H11.5312C11.193 15.6282 10.8632 15.5219 10.5889 15.3242C10.3146 15.1264 10.1095 14.8471 10.003 14.5261C9.96816 14.4218 9.91313 14.3253 9.84102 14.2422C9.76891 14.1591 9.68114 14.091 9.58272 14.0418C9.4843 13.9926 9.37716 13.9633 9.2674 13.9555C9.15765 13.9477 9.04744 13.9616 8.94307 13.9965C8.8387 14.0313 8.7422 14.0863 8.6591 14.1584C8.57599 14.2305 8.5079 14.3183 8.45872 14.4167C8.40953 14.5151 8.38022 14.6223 8.37244 14.732C8.36466 14.8418 8.37858 14.952 8.4134 15.0564C8.6122 15.6496 8.97661 16.1736 9.46359 16.5664C9.95057 16.9593 10.5398 17.2045 11.1617 17.2733V18.1395C11.1617 18.3616 11.2499 18.5745 11.4069 18.7315C11.5639 18.8885 11.7768 18.9767 11.9989 18.9767C12.2209 18.9767 12.4339 18.8885 12.5909 18.7315C12.7479 18.5745 12.8361 18.3616 12.8361 18.1395V17.2956C13.321 17.2828 13.7948 17.1478 14.2137 16.9031C14.6325 16.6584 14.9828 16.312 15.2322 15.8959C15.4815 15.4799 15.6218 15.0076 15.64 14.5229C15.6583 14.0381 15.5539 13.5566 15.3366 13.123C15.168 12.7829 14.9336 12.4798 14.6469 12.231C14.3602 11.9823 14.027 11.793 13.6666 11.674L10.8614 10.7386C10.5533 10.6359 10.3033 10.4193 10.1581 10.1291C10.013 9.83888 9.9907 9.5107 10.0934 9.20261C10.1735 8.96071 10.3278 8.75022 10.5344 8.60111C10.7411 8.45201 10.9895 8.37186 11.2443 8.37209H12.4666C13.1609 8.37209 13.776 8.81526 13.9959 9.47386C14.0662 9.68465 14.2174 9.85888 14.4162 9.95821C14.6149 10.0575 14.845 10.0738 15.0558 10.0035C15.2666 9.93322 15.4408 9.78205 15.5402 9.58328C15.6395 9.38451 15.6558 9.15442 15.5855 8.94363C15.3866 8.35022 15.022 7.82614 14.5348 7.43329C14.0476 7.04045 13.4582 6.79526 12.8361 6.7267V5.86047C12.8361 5.63842 12.7479 5.42548 12.5909 5.26847C12.4339 5.11146 12.2209 5.02326 11.9989 5.02326H12Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                            <div className="iconbox-content">
                              <h4 className="iconbox-title">30 Days Return</h4>
                              <p className="iconbox-desc">
                                You have 30 days to return
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#gallery"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="gallery"
                      >
                        <span>Gallery</span>
                        <span className="icon icon-arrow-up"></span>
                      </div>
                      <div id="gallery" className="collapse show">
                        <div className="grid-3 gap-4 mb_36">
                          <a
                            href="product-detail.html"
                            className="item-gallery"
                          >
                            <img
                              className="lazyload"
                              src="/assets/images/shop/gallery/gallery-1.jpg"
                              alt="img-gallery"
                            />
                          </a>
                          <a
                            href="product-detail.html"
                            className="item-gallery"
                          >
                            <img
                              className="lazyload"
                              src="/assets/images/shop/gallery/gallery-2.jpg"
                              alt="img-gallery"
                            />
                          </a>
                          <a
                            href="product-detail.html"
                            className="item-gallery"
                          >
                            <img
                              className="lazyload"
                              src="/assets/images/shop/gallery/gallery-3.jpg"
                              alt="img-gallery"
                            />
                          </a>
                          <a
                            href="product-detail.html"
                            className="item-gallery"
                          >
                            <img
                              className="lazyload"
                              src="/assets/images/shop/gallery/gallery-4.jpg"
                              alt="img-gallery"
                            />
                          </a>
                          <a
                            href="product-detail.html"
                            className="item-gallery"
                          >
                            <img
                              className="lazyload"
                              data-src="/assets/images/shop/gallery/gallery-5.jpg"
                              src="/assets/images/shop/gallery/gallery-5.jpg"
                              alt="img-gallery"
                            />
                          </a>
                          <a
                            href="product-detail.html"
                            className="item-gallery"
                          >
                            <img
                              className="lazyload"
                              data-src="/assets/images/shop/gallery/gallery-6.jpg"
                              src="/assets/images/shop/gallery/gallery-6.jpg"
                              alt="img-gallery"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="widget-facet">
                      <div
                        className="facet-title"
                        data-bs-target="#follow"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="follow"
                      >
                        <span>Follow us</span>
                        <span className="icon icon-arrow-up"></span>
                      </div>
                      <div id="follow" className="collapse show">
                        <ul className="tf-social-icon d-flex gap-10">
                          <li>
                            <a
                              href="#"
                              className="box-icon w_34 round bg_line social-facebook"
                            >
                              <i className="icon fs-14 icon-fb"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="box-icon w_34 round bg_line social-twiter"
                            >
                              <i className="icon fs-12 icon-Icon-x"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="box-icon w_34 round bg_line social-instagram"
                            >
                              <i className="icon fs-14 icon-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="box-icon w_34 round bg_line social-tiktok"
                            >
                              <i className="icon fs-14 icon-tiktok"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="box-icon w_34 round bg_line social-pinterest"
                            >
                              <i className="icon fs-14 icon-pinterest-1"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div className="wrapper-control-shop tf-shop-content">
                    <div className="meta-filter-shop">
                      <div id="product-count-grid" className="count-text"></div>
                      <div id="product-count-list" className="count-text"></div>
                      <div id="applied-filters"></div>
                      <button
                        id="remove-all"
                        className="remove-all-filters"
                        style={{ display: "none" }}
                      >
                        Remove All <i className="icon icon-close"></i>
                      </button>
                    </div>
                    <div
                      className="tf-list-layout wrapper-shop"
                      id="listLayout"
                    >
                      {/* card product 1 */}
                      <div
                        className="card-product list-layout"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Ribbed Tank Top
                          </a>
                          <span className="price current-price">$16.95</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item hover-tooltip color-swatch active">
                              <span className="tooltip tooltip-bottom">
                                Orange
                              </span>
                              <span className="swatch-value bg_orange-3"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/orange-1.jpg"
                                src="/assets/images/products/orange-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-1.jpg"
                                src="/assets/images/products/black-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-1.jpg"
                                src="/assets/images/products/white-1.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3 hover-tooltip"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a
                              href="#"
                              className="box-icon wishlist style-3 hover-tooltip"
                            >
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3 hover-tooltip"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3 hover-tooltip"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 2 */}
                      <div
                        className="card-product list-layout"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
                        <div className="card-product-wrapper">
                          <div className="product-img">
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
                          </div>
                          <div className="countdown-box">
                            <div
                              className="js-countdown"
                              data-timer="1007500"
                              data-labels="d :,h :,m :,s"
                            ></div>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Ribbed modal T-shirt
                          </a>
                          <span className="price current-price">$18.95</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Brown</span>
                              <span className="swatch-value bg_brown"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/brown.jpg"
                                src="/assets/images/products/brown.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Purple</span>
                              <span className="swatch-value bg_purple"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/purple.jpg"
                                src="/assets/images/products/purple.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Green</span>
                              <span className="swatch-value bg_light-green"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/green.jpg"
                                src="/assets/images/products/green.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 3 */}
                      <div
                        className="card-product list-layout"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Oversized Printed T-shirt
                          </a>
                          <span className="price current-price">$10.00</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 4 */}
                      <div
                        className="card-product list-layout"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Oversized Printed T-shirt
                          </a>
                          <span className="price current-price">$16.95</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-2.jpg"
                                src="/assets/images/products/white-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Pink</span>
                              <span className="swatch-value bg_purple"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/pink-1.jpg"
                                src="/assets/images/products/pink-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-2.jpg"
                                src="/assets/images/products/black-2.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 5 */}
                      <div
                        className="card-product list-layout"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            V-neck linen T-shirt
                          </a>
                          <span className="price current-price">$114.95</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Brown</span>
                              <span className="swatch-value bg_brown"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/brown-2.jpg"
                                src="/assets/images/products/brown-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-5.jpg"
                                src="/assets/images/products/white-5.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 6 */}
                      <div
                        className="card-product list-layout"
                        data-availability="In stock"
                        data-brand="M&H"
                      >
                        <div className="card-product-wrapper">
                          <div className="product-img">
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
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Loose Fit Sweatshirt
                          </a>
                          <span className="price current-price">$10.00</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Light Green</span>
                              <span className="swatch-value bg_light-green"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/light-green-1.jpg"
                                src="/assets/images/products/light-green-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-3.jpg"
                                src="/assets/images/products/black-3.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Blue</span>
                              <span className="swatch-value bg_blue-2"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/blue.jpg"
                                src="/assets/images/products/blue.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Dark Blue</span>
                              <span className="swatch-value bg_dark-blue"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/dark-blue.jpg"
                                src="/assets/images/products/dark-blue.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-6.jpg"
                                src="/assets/images/products/white-6.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Grey</span>
                              <span className="swatch-value bg_light-grey"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/light-grey.jpg"
                                src="/assets/images/products/light-grey.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 7 */}
                      <div
                        className="card-product list-layout"
                        data-availability="Out of stock"
                        data-brand="M&H"
                      >
                        <div className="card-product-wrapper">
                          <div className="product-img">
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
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Regular Fit Oxford Shirt
                          </a>
                          <span className="price current-price">$10.00</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-4.jpg"
                                src="/assets/images/products/black-4.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Dark Blue</span>
                              <span className="swatch-value bg_dark-blue"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/dark-blue-2.jpg"
                                src="/assets/images/products/dark-blue-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Beige</span>
                              <span className="swatch-value bg_beige"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/beige.jpg"
                                src="/assets/images/products/beige.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Blue</span>
                              <span className="swatch-value bg_light-blue"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/light-blue.jpg"
                                src="/assets/images/products/light-blue.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-7.jpg"
                                src="/assets/images/products/white-7.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* card product 8 */}
                      <div
                        className="card-product list-layout"
                        data-availability="Out of stock"
                        data-brand="M&H"
                      >
                        <div className="card-product-wrapper">
                          <div className="product-img">
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
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="#" className="title link">
                            Loose Fit Hoodie
                          </a>
                          <span className="price current-price">$9.95</span>
                          <p className="description">
                            Button-up shirt sleeves and a relaxed silhouette.
                            It’s tailored with drapey, crinkle-texture fabric
                            that’s made from LENZING™ ECOVERO™ Viscose —
                            responsibly sourced wood-based fibres produced
                            through a process that reduces...
                          </p>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-8.jpg"
                                src="/assets/images/products/white-8.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-7.jpg"
                                src="/assets/images/products/black-7.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Blue</span>
                              <span className="swatch-value bg_blue-2"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/blue-2.jpg"
                                src="/assets/images/products/blue-2.jpg"
                                alt="image-product"
                              />
                            </li>
                          </ul>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon quick-add style-3"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick add</span>
                            </a>
                            <a href="#" className="box-icon wishlist style-3">
                              <span className="icon icon-heart"></span>{" "}
                              <span className="tooltip">Add to Wishlist</span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              className="box-icon compare style-3"
                            >
                              <span className="icon icon-compare"></span>{" "}
                              <span className="tooltip">Add to Compare</span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon quickview style-3"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick view</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* pagination */}
                      <ul className="wg-pagination tf-pagination-list justify-content-start">
                        <li className="active">
                          <a href="#" className="pagination-link">
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            <span className="icon icon-arrow-right"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tf-grid-layout wrapper-shop tf-col-3"
                      id="gridLayout"
                    >
                      {/* card product 1 */}
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                          <div className="list-product-btn absolute-2">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Ribbed Tank Top
                          </a>
                          <span className="price current-price">$16.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Orange</span>
                              <span className="swatch-value bg_orange-3"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/orange-1.jpg"
                                src="/assets/images/products/orange-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-1.jpg"
                                src="/assets/images/products/black-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                          <div className="size-list">
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="countdown-box">
                            <div
                              className="js-countdown"
                              data-timer="1007500"
                              data-labels="d :,h :,m :,s"
                            ></div>
                          </div>
                          <div className="on-sale-wrap text-end">
                            <div className="on-sale-item">-33%</div>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Ribbed modal T-shirt
                          </a>
                          <span className="price current-price">$18.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Brown</span>
                              <span className="swatch-value bg_brown"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/brown.jpg"
                                src="/assets/images/products/brown.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Purple</span>
                              <span className="swatch-value bg_purple"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/purple.jpg"
                                src="/assets/images/products/purple.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Green</span>
                              <span className="swatch-value bg_light-green"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                          <div className="list-product-btn absolute-2">
                            <a
                              href="#shoppingCart"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Add to cart</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Oversized Printed T-shirt
                          </a>
                          <span className="price current-price">$10.00</span>
                        </div>
                      </div>
                      {/* card product 4 */}
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title">
                            Oversized Printed T-shirt
                          </a>
                          <span className="price current-price">$16.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-2.jpg"
                                src="/assets/images/products/white-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Pink</span>
                              <span className="swatch-value bg_purple"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/pink-1.jpg"
                                src="/assets/images/products/pink-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            V-neck linen T-shirt
                          </a>
                          <span className="price current-price">$114.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Brown</span>
                              <span className="swatch-value bg_brown"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/brown-2.jpg"
                                src="/assets/images/products/brown-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Loose Fit Sweatshirt
                          </a>
                          <span className="price current-price">$10.00</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Light Green</span>
                              <span className="swatch-value bg_light-green"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/light-green-1.jpg"
                                src="/assets/images/products/light-green-1.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-3.jpg"
                                src="/assets/images/products/black-3.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Blue</span>
                              <span className="swatch-value bg_blue-2"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/blue.jpg"
                                src="/assets/images/products/blue.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Dark Blue</span>
                              <span className="swatch-value bg_dark-blue"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/dark-blue.jpg"
                                src="/assets/images/products/dark-blue.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-6.jpg"
                                src="/assets/images/products/white-6.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Grey</span>
                              <span className="swatch-value bg_light-grey"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="Ecomus"
                      >
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
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Regular Fit Oxford Shirt
                          </a>
                          <span className="price current-price">$10.00</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-4.jpg"
                                src="/assets/images/products/black-4.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Dark Blue</span>
                              <span className="swatch-value bg_dark-blue"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/dark-blue-2.jpg"
                                src="/assets/images/products/dark-blue-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Beige</span>
                              <span className="swatch-value bg_beige"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/beige.jpg"
                                src="/assets/images/products/beige.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Blue</span>
                              <span className="swatch-value bg_light-blue"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/light-blue.jpg"
                                src="/assets/images/products/light-blue.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="M&H"
                      >
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
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Loose Fit Hoodie
                          </a>
                          <span className="price current-price">$9.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/white-8.jpg"
                                src="/assets/images/products/white-8.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-7.jpg"
                                src="/assets/images/products/black-7.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Blue</span>
                              <span className="swatch-value bg_blue-2"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="M&H"
                      >
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
                          <div className="size-list">
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                            <span className="size-item">XL</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Patterned scarf
                          </a>
                          <span className="price current-price">$14.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Brown</span>
                              <span className="swatch-value bg_brown"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/brown-4.jpg"
                                src="/assets/images/products/brown-4.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="In stock"
                        data-brand="M&H"
                      >
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
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Slim Fit Fine-knit Turtleneck Sweater
                          </a>
                          <span className="price current-price">$18.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Black</span>
                              <span className="swatch-value bg_dark"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/black-9.jpg"
                                src="/assets/images/products/black-9.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">White</span>
                              <span className="swatch-value bg_white"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="Out of stock"
                        data-brand="M&H"
                      >
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
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Slim Fit Fine-knit Turtleneck Sweater
                          </a>
                          <span className="price current-price">$18.95</span>
                          <ul className="list-color-product">
                            <li className="list-color-item color-swatch active">
                              <span className="tooltip">Grey</span>
                              <span className="swatch-value bg_grey"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/grey-2.jpg"
                                src="/assets/images/products/grey-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Pink</span>
                              <span className="swatch-value bg_pink"></span>
                              <img
                                className="lazyload"
                                data-src="/assets/images/products/pink-2.jpg"
                                src="/assets/images/products/pink-2.jpg"
                                alt="image-product"
                              />
                            </li>
                            <li className="list-color-item color-swatch">
                              <span className="tooltip">Light Pink</span>
                              <span className="swatch-value bg_light-pink"></span>
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
                      <div
                        className="card-product grid"
                        data-availability="Out of stock"
                        data-brand="M&H"
                      >
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
                          <div className="size-list">
                            <span className="size-item">S</span>
                            <span className="size-item">M</span>
                            <span className="size-item">L</span>
                          </div>
                          <div className="list-product-btn">
                            <a
                              href="#quick_add"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quick-add tf-btn-loading"
                            >
                              <span className="icon icon-bag"></span>
                              <span className="tooltip">Quick Add</span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              className="box-icon bg_white wishlist btn-icon-action"
                            >
                              <span className="icon icon-heart"></span>
                              <span className="tooltip">Add to Wishlist</span>
                              <span className="icon icon-delete"></span>
                            </a>
                            <a
                              href="#compare"
                              data-bs-toggle="offcanvas"
                              aria-controls="offcanvasLeft"
                              className="box-icon bg_white compare btn-icon-action"
                            >
                              <span className="icon icon-compare"></span>
                              <span className="tooltip">Add to Compare</span>
                              <span className="icon icon-check"></span>
                            </a>
                            <a
                              href="#quick_view"
                              data-bs-toggle="modal"
                              className="box-icon bg_white quickview tf-btn-loading"
                            >
                              <span className="icon icon-view"></span>
                              <span className="tooltip">Quick View</span>
                            </a>
                          </div>
                        </div>
                        <div className="card-product-info">
                          <a href="product-detail.html" className="title link">
                            Slim Fit Fine-knit Turtleneck Sweater
                          </a>
                          <span className="price current-price">$18.95</span>
                        </div>
                      </div>
                      {/* pagination */}
                      <ul className="wg-pagination tf-pagination-list">
                        <li className="active">
                          <a href="#" className="pagination-link">
                            1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            4
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="pagination-link animate-hover-btn"
                          >
                            <span className="icon icon-arrow-right"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="btn-sidebar-style2">
              <button
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebarmobile"
                aria-controls="offcanvas"
              >
                <i className="icon icon-sidebar-2"></i>
              </button>
            </div>
          </div>

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
                  transition: "stroke-dashoffset 10ms linear 0s",
                  strokeDasharray: "307.919, 307.919",
                  strokeDashoffset: "286.138",
                }}
              ></path>
            </svg>
          </div>
          {/* /gotop */}

          {/* modalDemo */}
          <div className="modal fade modalDemo" id="modalDemo">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="header">
                  <h5 className="demo-title">Ultimate HTML Theme</h5>
                  <span
                    className="icon-close icon-close-popup"
                    data-bs-dismiss="modal"
                  ></span>
                </div>
                <div className="mega-menu">
                  <div className="row-demo">
                    <div className="demo-item">
                      <a href="index.html">
                        <div className="demo-image position-relative">
                          <img
                            className="lazyload"
                            data-src="images/demo/home-01.jpg"
                            src="images/demo/home-01.jpg"
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
                            data-src="images/demo/home-multi-brand.jpg"
                            src="images/demo/home-multi-brand.jpg"
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
                            data-src="images/demo/home-02.jpg"
                            src="images/demo/home-02.jpg"
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
                            data-src="images/demo/home-03.jpg"
                            src="images/demo/home-03.jpg"
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
                            data-src="images/demo/home-04.jpg"
                            src="images/demo/home-04.jpg"
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
                            data-src="images/demo/home-05.jpg"
                            src="images/demo/home-05.jpg"
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
                            data-src="images/demo/home-06.jpg"
                            src="images/demo/home-06.jpg"
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
                            data-src="images/demo/home-personalized-pod.jpg"
                            src="images/demo/home-personalized-pod.jpg"
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
                            data-src="images/demo/home-pickleball.png"
                            src="images/demo/home-pickleball.png"
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
                            data-src="images/demo/home-ceramic.png"
                            src="images/demo/home-ceramic.png"
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
                            data-src="images/demo/home-food.png"
                            src="images/demo/home-food.png"
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
                            data-src="images/demo/home-camp-and-hike.png"
                            src="images/demo/home-camp-and-hike.png"
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
                            data-src="images/demo/home-07.jpg"
                            src="images/demo/home-07.jpg"
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
                            data-src="images/demo/home-08.jpg"
                            src="images/demo/home-08.jpg"
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
                            data-src="images/demo/home-skincare.jpg"
                            src="images/demo/home-skincare.jpg"
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
                            data-src="images/demo/home-headphone.jpg"
                            src="images/demo/home-headphone.jpg"
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
                            data-src="images/demo/home-giftcard.jpg"
                            src="images/demo/home-giftcard.jpg"
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
                            data-src="images/demo/home-furniture.jpg"
                            src="images/demo/home-furniture.jpg"
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
                            data-src="images/demo/home-furniture2.jpg"
                            src="images/demo/home-furniture2.jpg"
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
                            data-src="images/demo/home-skateboard.jpg"
                            src="images/demo/home-skateboard.jpg"
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
                            data-src="images/demo/home-stroller.jpg"
                            src="images/demo/home-stroller.jpg"
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
                            data-src="images/demo/home-decor.jpg"
                            src="images/demo/home-decor.jpg"
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
                            data-src="images/demo/home-electronic.jpg"
                            src="images/demo/home-electronic.jpg"
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
                            data-src="images/demo/home-setup-gear.jpg"
                            src="images/demo/home-setup-gear.jpg"
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
                            data-src="images/demo/home-dog-accessories.jpg"
                            src="images/demo/home-dog-accessories.jpg"
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
                            data-src="images/demo/home-kitchen.jpg"
                            src="images/demo/home-kitchen.jpg"
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
                            data-src="images/demo/home-phonecase.jpg"
                            src="images/demo/home-phonecase.jpg"
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
                            data-src="images/demo/home_paddle_board.jpg"
                            src="images/demo/home_paddle_board.jpg"
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
                            data-src="images/demo/home-glasses.jpg"
                            src="images/demo/home-glasses.jpg"
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
                            data-src="images/demo/home-pod-store.jpg"
                            src="images/demo/home-pod-store.jpg"
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
                            data-src="images/demo/home-activewear.jpg"
                            src="images/demo/home-activewear.jpg"
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
                            data-src="images/demo/home-handbag.jpg"
                            src="images/demo/home-handbag.jpg"
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
                            data-src="images/demo/home-tee.jpg"
                            src="images/demo/home-tee.jpg"
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
                            data-src="images/demo/home-socks.jpg"
                            src="images/demo/home-socks.jpg"
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
                            data-src="images/demo/home-jewelry.jpg"
                            src="images/demo/home-jewelry.jpg"
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
                            data-src="images/demo/home-sneaker.jpg"
                            src="images/demo/home-sneaker.jpg"
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
                            data-src="images/demo/home-accessories.jpg"
                            src="images/demo/home-accessories.jpg"
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
                            data-src="images/demo/home-gocery.jpg"
                            src="images/demo/home-gocery.jpg"
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
                            data-src="images/demo/home-baby.jpg"
                            src="images/demo/home-baby.jpg"
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
                            data-src="images/demo/home-cosmetic.png"
                            src="images/demo/home-cosmetic.png"
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
                            data-src="images/demo/home-plant.png"
                            src="images/demo/home-plant.png"
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
                            data-src="images/demo/home-swimwear.png"
                            src="images/demo/home-swimwear.png"
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
                            data-src="images/demo/home-electric-bike.png"
                            src="images/demo/home-electric-bike.png"
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
                            data-src="images/demo/home-footwear.jpg"
                            src="images/demo/home-footwear.jpg"
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
                            data-src="images/demo/home-bookstore.png"
                            src="images/demo/home-bookstore.png"
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
                            data-src="images/demo/home-gaming-accessories.png"
                            src="images/demo/home-gaming-accessories.png"
                            alt="home-gaming-accessories"
                          />
                          <div className="demo-label">
                            <span className="demo-new">New</span>
                          </div>
                        </div>
                        <span className="demo-name">
                          Home Gaming Accessories
                        </span>
                      </a>
                    </div>
                    <div className="demo-item">
                      <a href="home-parallax.html">
                        <div className="demo-image">
                          <img
                            className="lazyload"
                            data-src="images/demo/home-skincare.jpg"
                            src="images/demo/home-skincare.jpg"
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
            ></span>
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
                      <span className="btn-open-sub"></span>
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
                          <a
                            href="home-headphone.html"
                            className="sub-nav-link"
                          >
                            Home Headphone
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-multi-brand.html"
                            className="sub-nav-link"
                          >
                            Home Multi Brand
                          </a>
                        </li>
                        <li>
                          <a href="home-skincare.html" className="sub-nav-link">
                            Home skincare
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-furniture.html"
                            className="sub-nav-link"
                          >
                            Home Furniture
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-furniture-02.html"
                            className="sub-nav-link"
                          >
                            Home Furniture 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-skateboard.html"
                            className="sub-nav-link"
                          >
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
                          <a
                            href="home-electronic.html"
                            className="sub-nav-link"
                          >
                            Home Electronic
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-setup-gear.html"
                            className="sub-nav-link"
                          >
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
                          <a
                            href="home-kitchen-wear.html"
                            className="sub-nav-link"
                          >
                            Home Kitchen Wear
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-phonecase.html"
                            className="sub-nav-link"
                          >
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
                          <a
                            href="home-pod-store.html"
                            className="sub-nav-link"
                          >
                            Home POD Store
                          </a>
                        </li>
                        <li>
                          <a
                            href="home-activewear.html"
                            className="sub-nav-link"
                          >
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
                          <a
                            href="home-accessories.html"
                            className="sub-nav-link"
                          >
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
                          <a
                            href="home-pickleball.html"
                            className="sub-nav-link"
                          >
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
                          <a
                            href="home-book-store.html"
                            className="sub-nav-link"
                          >
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
                      <span className="btn-open-sub"></span>
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
                            <span className="btn-open-sub"></span>
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
                            <span className="btn-open-sub"></span>
                          </a>
                          <div id="sub-shop-two" className="collapse">
                            <ul className="sub-nav-menu sub-menu-level-2">
                              <li>
                                <a
                                  href="shop-link.html"
                                  className="sub-nav-link"
                                >
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
                            <span className="btn-open-sub"></span>
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
                      <span className="btn-open-sub"></span>
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
                            <span className="btn-open-sub"></span>
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
                            <span className="btn-open-sub"></span>
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
                                <a
                                  href="product-3d.html"
                                  className="sub-nav-link"
                                >
                                  Product 3D, AR models
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-options-customizer.html"
                                  className="sub-nav-link"
                                >
                                  Product options & customizer
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
                                  Recipient information form for gift card
                                  products
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
                            <span className="btn-open-sub"></span>
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
                            <span className="btn-open-sub"></span>
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
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="dropdown-menu-four" className="collapse">
                      <ul className="sub-nav-menu" id="sub-menu-navigation">
                        <li>
                          <a href="about-us.html" className="sub-nav-link">
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            href="brands.html"
                            className="sub-nav-link line-clamp"
                          >
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
                          <a
                            href="store-locations.html"
                            className="sub-nav-link"
                          >
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
                            <span className="btn-open-sub"></span>
                          </a>
                          <div id="sub-account" className="collapse">
                            <ul className="sub-nav-menu sub-menu-level-2">
                              <li>
                                <a
                                  href="my-account.html"
                                  className="sub-nav-link"
                                >
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
                          <a
                            href="404.html"
                            className="sub-nav-link line-clamp"
                          >
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
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="dropdown-menu-five" className="collapse">
                      <ul className="sub-nav-menu">
                        <li>
                          <a href="blog-grid.html" className="sub-nav-link">
                            Grid layout
                          </a>
                        </li>
                        <li>
                          <a
                            href="blog-sidebar-left.html"
                            className="sub-nav-link"
                          >
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
                      <i className="icon icon-heart"></i>Wishlist
                    </a>
                    <a href="home-search.html" className="site-nav-icon">
                      <i className="icon icon-search"></i>Search
                    </a>
                  </div>
                  <div className="mb-notice">
                    <a href="contact-1.html" className="text-need">
                      Need help ?
                    </a>
                  </div>
                  <ul className="mb-info">
                    <li>
                      Address: 1234 Fashion Street, Suite 567, <br /> New York,
                      NY 10001
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
                  <i className="icon icon-account"></i>Login
                </a>
                <div className="bottom-bar-language">
                  <div className="tf-currencies">
                    <select className="image-select center style-default type-currencies">
                      <option data-thumbnail="images/country/fr.svg">
                        EUR <span>€ | France</span>
                      </option>
                      <option data-thumbnail="images/country/de.svg">
                        EUR <span>€ | Germany</span>
                      </option>
                      <option selected data-thumbnail="images/country/us.svg">
                        USD <span>$ | United States</span>
                      </option>
                      <option data-thumbnail="images/country/vn.svg">
                        VND <span>₫ | Vietnam</span>
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

          {/* Filter */}
          <div
            className="offcanvas offcanvas-start canvas-filter"
            id="filterShop"
          >
            <div className="canvas-wrapper">
              <header className="canvas-header">
                <div className="filter-icon">
                  <span className="icon icon-filter"></span>
                  <span>Filter</span>
                </div>
                <span
                  className="icon-close icon-close-popup"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></span>
              </header>
              <div className="canvas-body">
                <div className="widget-facet wd-categories">
                  <div
                    className="facet-title"
                    data-bs-target="#categories"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="categories"
                  >
                    <span>Product categories</span>
                    <span className="icon icon-arrow-up"></span>
                  </div>
                  <div id="categories" className="collapse show">
                    <ul className="list-categoris current-scrollbar mb_36">
                      <li className="cate-item current">
                        <a href="shop-default.html">
                          <span>Fashion</span>
                        </a>
                      </li>
                      <li className="cate-item">
                        <a href="shop-default.html">
                          <span>Men</span>
                        </a>
                      </li>
                      <li className="cate-item">
                        <a href="shop-default.html">
                          <span>Women</span>
                        </a>
                      </li>
                      <li className="cate-item">
                        <a href="shop-default.html">
                          <span>Denim</span>
                        </a>
                      </li>
                      <li className="cate-item">
                        <a href="shop-default.html">
                          <span>Dress</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <form
                  action="#"
                  id="facet-filter-form"
                  className="facet-filter-form"
                >
                  <div className="widget-facet">
                    <div
                      className="facet-title"
                      data-bs-target="#availability"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="availability"
                    >
                      <span>Availability</span>
                      <span className="icon icon-arrow-up"></span>
                    </div>
                    <div id="availability" className="collapse show">
                      <ul className="tf-filter-group current-scrollbar mb_36">
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="availability"
                            className="tf-check"
                            id="inStock"
                          />
                          <label for="inStock" className="label">
                            <span>In stock</span>&nbsp;<span>(14)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="availability"
                            className="tf-check"
                            id="outStock"
                          />
                          <label for="outStock" className="label">
                            <span>Out of stock</span>&nbsp;<span>(2)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-facet">
                    <div
                      className="facet-title"
                      data-bs-target="#price"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="price"
                    >
                      <span>Price</span>
                      <span className="icon icon-arrow-up"></span>
                    </div>
                    <div id="price" className="collapse show">
                      <div className="widget-price filter-price">
                        <div
                          className="price-val-range"
                          id="price-value-range"
                          data-min="0"
                          data-max="500"
                        ></div>
                        <div className="box-title-price">
                          <span className="title-price">Price :</span>
                          <div className="caption-price">
                            <div
                              className="price-val"
                              id="price-min-value"
                              data-currency="$"
                            ></div>
                            <span>-</span>
                            <div
                              className="price-val"
                              id="price-max-value"
                              data-currency="$"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-facet">
                    <div
                      className="facet-title"
                      data-bs-target="#brand"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="brand"
                    >
                      <span>Brand</span>
                      <span className="icon icon-arrow-up"></span>
                    </div>
                    <div id="brand" className="collapse show">
                      <ul className="tf-filter-group current-scrollbar mb_36">
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="brand"
                            className="tf-check"
                            id="Ecomus"
                          />
                          <label for="Ecomus" className="label">
                            <span>Ecomus</span>&nbsp;<span>(8)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="brand"
                            className="tf-check"
                            id="M&H"
                          />
                          <label for="M&H" className="label">
                            <span>M&H</span>&nbsp;<span>(8)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-facet">
                    <div
                      className="facet-title"
                      data-bs-target="#color"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="color"
                    >
                      <span>Color</span>
                      <span className="icon icon-arrow-up"></span>
                    </div>
                    <div id="color" className="collapse show">
                      <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_beige"
                            id="Beige"
                            value="Beige"
                          />
                          <label for="Beige" className="label">
                            <span>Beige</span>&nbsp;<span>(3)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_dark"
                            id="Black"
                            value="Black"
                          />
                          <label for="Black" className="label">
                            <span>Black</span>&nbsp;<span>(18)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_blue-2"
                            id="Blue"
                            value="Blue"
                          />
                          <label for="Blue" className="label">
                            <span>Blue</span>&nbsp;<span>(3)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_brown"
                            id="Brown"
                            value="Brown"
                          />
                          <label for="Brown" className="label">
                            <span>Brown</span>&nbsp;<span>(3)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_cream"
                            id="Cream"
                            value="Cream"
                          />
                          <label for="Cream" className="label">
                            <span>Cream</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_dark-beige"
                            id="Dark Beige"
                            value="Dark Beige"
                          />
                          <label for="Dark Beige" className="label">
                            <span>Dark Beige</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_dark-blue"
                            id="Dark Blue"
                            value="Dark Blue"
                          />
                          <label for="Dark Blue" className="label">
                            <span>Dark Blue</span>&nbsp;<span>(3)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_dark-green"
                            id="Dark Green"
                            value="Dark Green"
                          />
                          <label for="Dark Green" className="label">
                            <span>Dark Green</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_dark-grey"
                            id="Dark Grey"
                            value="Dark Grey"
                          />
                          <label for="Dark Grey" className="label">
                            <span>Dark Grey</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_grey"
                            id="Grey"
                            value="Grey"
                          />
                          <label for="Grey" className="label">
                            <span>Grey</span>&nbsp;<span>(2)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_light-blue"
                            id="Light Blue"
                            value="Light Blue"
                          />
                          <label for="Light Blue" className="label">
                            <span>Light Blue</span>&nbsp;<span>(5)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_light-green"
                            id="Light Green"
                            value="Light Green"
                          />
                          <label for="Light Green" className="label">
                            <span>Light Green</span>&nbsp;<span>(3)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_light-grey"
                            id="Light Grey"
                            value="Light Grey"
                          />
                          <label for="Light Grey" className="label">
                            <span>Light Grey</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_light-pink"
                            id="Light Pink"
                            value="Light Pink"
                          />
                          <label for="Light Pink" className="label">
                            <span>Light Pink</span>&nbsp;<span>(2)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_purple"
                            id="Light Purple"
                            value="Light Purple"
                          />
                          <label for="Light Purple" className="label">
                            <span>Light Purple</span>&nbsp;<span>(2)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_light-yellow"
                            id="Light Yellow"
                            value="Light Yellow"
                          />
                          <label for="Light Yellow" className="label">
                            <span>Light Yellow</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_orange"
                            id="Orange"
                            value="Orange"
                          />
                          <label for="Orange" className="label">
                            <span>Orange</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_pink"
                            id="Pink"
                            value="Pink"
                          />
                          <label for="Pink" className="label">
                            <span>Pink</span>&nbsp;<span>(2)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_taupe"
                            id="Taupe"
                            value="Taupe"
                          />
                          <label for="Taupe" className="label">
                            <span>Taupe</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_white"
                            id="White"
                            value="White"
                          />
                          <label for="White" className="label">
                            <span>White</span>&nbsp;<span>(14)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="color"
                            className="tf-check-color bg_yellow"
                            id="Yellow"
                            value="Yellow"
                          />
                          <label for="Yellow" className="label">
                            <span>Yellow</span>&nbsp;<span>(1)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-facet">
                    <div
                      className="facet-title"
                      data-bs-target="#size"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="size"
                    >
                      <span>Size</span>
                      <span className="icon icon-arrow-up"></span>
                    </div>
                    <div id="size" className="collapse show">
                      <ul className="tf-filter-group current-scrollbar">
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="size"
                            className="tf-check tf-check-size"
                            value="S"
                            id="S"
                          />
                          <label for="S" className="label">
                            <span>S</span>&nbsp;<span>(7)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="size"
                            className="tf-check tf-check-size"
                            value="M"
                            id="M"
                          />
                          <label for="M" className="label">
                            <span>M</span>&nbsp;<span>(8)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="size"
                            className="tf-check tf-check-size"
                            value="L"
                            id="L"
                          />
                          <label for="L" className="label">
                            <span>L</span>&nbsp;<span>(8)</span>
                          </label>
                        </li>
                        <li className="list-item d-flex gap-12 align-items-center">
                          <input
                            type="radio"
                            name="size"
                            className="tf-check tf-check-size"
                            value="XL"
                            id="XL"
                          />
                          <label for="XL" className="label">
                            <span>XL</span>&nbsp;<span>(6)</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End Filter */}

          {/* canvasSearch */}
          <div
            className="offcanvas offcanvas-end canvas-search"
            id="canvasSearch"
          >
            <div className="canvas-wrapper">
              <header className="tf-search-head">
                <div className="title fw-5">
                  Search our site
                  <div className="close">
                    <span
                      className="icon-close icon-close-popup"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></span>
                  </div>
                </div>
                <div className="tf-search-sticky">
                  <form className="tf-mini-search-frm">
                    <fieldset className="text">
                      <input
                        type="text"
                        placeholder="Search"
                        className=""
                        name="text"
                        tabindex="0"
                        value=""
                        aria-required="true"
                        required=""
                      />
                    </fieldset>
                    <button className="" type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </form>
                </div>
              </header>
              <div className="canvas-body p-0">
                <div className="tf-search-content">
                  <div className="tf-cart-hide-has-results">
                    <div className="tf-col-quicklink">
                      <div className="tf-search-content-title fw-5">
                        Quick link
                      </div>
                      <ul className="tf-quicklink-list">
                        <li className="tf-quicklink-item">
                          <a href="shop-default.html" className="">
                            Fashion
                          </a>
                        </li>
                        <li className="tf-quicklink-item">
                          <a href="shop-default.html" className="">
                            Men
                          </a>
                        </li>
                        <li className="tf-quicklink-item">
                          <a href="shop-default.html" className="">
                            Women
                          </a>
                        </li>
                        <li className="tf-quicklink-item">
                          <a href="shop-default.html" className="">
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
                              <img
                                src="/assets/images/products/white-3.jpg"
                                alt=""
                              />
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
                              <img
                                src="/assets/images/products/white-2.jpg"
                                alt=""
                              />
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
                              <img
                                src="/assets/images/products/white-1.jpg"
                                alt=""
                              />
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
            ></span>
            <div className="mb-canvas-content">
              <div className="mb-body">
                <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                  <li className="nav-mb-item">
                    <a
                      href="shop-default.html"
                      className="tf-category-link mb-menu-link"
                    >
                      <div className="image">
                        <img src="images/shop/cate/cate1.jpg" alt="" />
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
                        <img src="images/shop/cate/cate2.jpg" alt="" />
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
                        <img src="images/shop/cate/cate3.jpg" alt="" />
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
                        <img src="images/shop/cate/cate4.png" alt="" />
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
                        <img src="images/shop/cate/cate5.jpg" alt="" />
                      </div>
                      <span>Fashion</span>
                      <span className="btn-open-sub"></span>
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
                              <img src="images/shop/cate/cate6.jpg" alt="" />
                            </div>
                            <span>Mens</span>
                            <span className="btn-open-sub"></span>
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
                                      src="images/shop/cate/cate1.jpg"
                                      alt=""
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
                                      src="images/shop/cate/cate8.jpg"
                                      alt=""
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
                              <img src="images/shop/cate/cate9.jpg" alt="" />
                            </div>
                            <span>Womens</span>
                            <span className="btn-open-sub"></span>
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
                                      src="images/shop/cate/cate4.png"
                                      alt=""
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
                                      src="images/shop/cate/cate7.jpg"
                                      alt=""
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
                        <img src="images/shop/cate/cate6.jpg" alt="" />
                      </div>
                      <span>Men</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="cate-menu-two" className="collapse list-cate">
                      <ul className="sub-nav-menu" id="cate-menu-navigation1">
                        <li>
                          <a
                            href="shop-default.html"
                            className="tf-category-link sub-nav-link"
                          >
                            <div className="image">
                              <img src="images/shop/cate/cate1.jpg" alt="" />
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
                              <img src="images/shop/cate/cate8.jpg" alt="" />
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
                        <img src="images/shop/cate/cate7.jpg" alt="" />
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
                        <img src="images/shop/cate/cate8.jpg" alt="" />
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
                        <img src="images/shop/cate/cate9.jpg" alt="" />
                      </div>
                      <span>Women</span>
                      <span className="btn-open-sub"></span>
                    </a>
                    <div id="cate-menu-three" className="collapse list-cate">
                      <ul className="sub-nav-menu" id="cate-menu-navigation2">
                        <li>
                          <a
                            href="shop-default.html"
                            className="tf-category-link sub-nav-link"
                          >
                            <div className="image">
                              <img src="images/shop/cate/cate4.png" alt="" />
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
                              <img src="images/shop/cate/cate7.jpg" alt="" />
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
                  <i className="icon icon-arrow1-top-left"></i>
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
                  ></span>
                </div>
                <div className="tf-login-form">
                  <form
                    className=""
                    action="https://themesflat.co/html/ecomus/my-account.html"
                    accept-charset="utf-8"
                  >
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="email"
                        name=""
                      />
                      <label className="tf-field-label" for="">
                        Email *
                      </label>
                    </div>
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="password"
                        name=""
                      />
                      <label className="tf-field-label" for="">
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
                          <i className="icon icon-arrow1-top-left"></i>
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
                  ></span>
                </div>
                <div className="tf-login-form">
                  <form className="">
                    <div>
                      <p>
                        Sign up for early Sale access plus tailored new
                        arrivals, trends and promotions. To opt out, click
                        unsubscribe in our emails
                      </p>
                    </div>
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="email"
                        name=""
                      />
                      <label className="tf-field-label" for="">
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
                  ></span>
                </div>
                <div className="tf-login-form">
                  <form className="">
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="text"
                        name=""
                      />
                      <label className="tf-field-label" for="">
                        First name
                      </label>
                    </div>
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="text"
                        name=""
                      />
                      <label className="tf-field-label" for="">
                        Last name
                      </label>
                    </div>
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="email"
                        name=""
                      />
                      <label className="tf-field-label" for="">
                        Email *
                      </label>
                    </div>
                    <div className="tf-field style-1">
                      <input
                        className="tf-field-input tf-input"
                        placeholder=" "
                        type="password"
                        name=""
                      />
                      <label className="tf-field-label" for="">
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
                          <i className="icon icon-arrow1-top-left"></i>
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
                  <div className="title fw-5">Shopping cart</div>
                  <span
                    className="icon-close icon-close-popup"
                    data-bs-dismiss="modal"
                  ></span>
                </div>
                <div className="wrap">
                  <div className="tf-mini-cart-threshold">
                    <div className="tf-progress-bar">
                      <span style={{ width: "50%" }}>
                        <div className="progress-car">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="14"
                            viewBox="0 0 21 14"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </div>
                    <div className="tf-progress-msg">
                      Buy <span className="price fw-6">$75.00</span> more to
                      enjoy <span className="fw-6">Free Shipping</span>
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
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="tf-mini-cart-info">
                              <a
                                className="title link"
                                href="product-detail.html"
                              >
                                T-shirt
                              </a>
                              <div className="meta-variant">Light gray</div>
                              <div className="price fw-6">$25.00</div>
                              <div className="tf-mini-cart-btns">
                                <div className="wg-quantity small">
                                  <span className="btn-quantity minus-btn">
                                    -
                                  </span>
                                  <input type="text" name="number" value="1" />
                                  <span className="btn-quantity plus-btn">
                                    +
                                  </span>
                                </div>
                                <div className="tf-mini-cart-remove">
                                  Remove
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tf-mini-cart-item">
                            <div className="tf-mini-cart-image">
                              <a href="product-detail.html">
                                <img
                                  src="/assets/images/products/white-3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="tf-mini-cart-info">
                              <a
                                className="title link"
                                href="product-detail.html"
                              >
                                Oversized Motif T-shirt
                              </a>
                              <div className="price fw-6">$25.00</div>
                              <div className="tf-mini-cart-btns">
                                <div className="wg-quantity small">
                                  <span className="btn-quantity minus-btn">
                                    -
                                  </span>
                                  <input type="text" name="number" value="1" />
                                  <span className="btn-quantity plus-btn">
                                    +
                                  </span>
                                </div>
                                <div className="tf-mini-cart-remove">
                                  Remove
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tf-minicart-recommendations">
                          <div className="tf-minicart-recommendations-heading">
                            <div className="tf-minicart-recommendations-title">
                              You may also like
                            </div>
                            <div className="sw-dots small style-2 cart-slide-pagination"></div>
                          </div>
                          <div dir="ltr" className="swiper tf-cart-slide">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="tf-minicart-recommendations-item">
                                  <div className="tf-minicart-recommendations-item-image">
                                    <a href="product-detail.html">
                                      <img
                                        src="/assets/images/products/white-3.jpg"
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="tf-minicart-recommendations-item-infos flex-grow-1">
                                    <a
                                      className="title"
                                      href="product-detail.html"
                                    >
                                      Loose Fit Sweatshirt
                                    </a>
                                    <div className="price">$25.00</div>
                                  </div>
                                  <div className="tf-minicart-recommendations-item-quickview">
                                    <div className="btn-show-quickview quickview hover-tooltip">
                                      <span className="icon icon-view"></span>
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
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="tf-minicart-recommendations-item-infos flex-grow-1">
                                    <a
                                      className="title"
                                      href="product-detail.html"
                                    >
                                      Loose Fit Hoodie
                                    </a>
                                    <div className="price">$25.00</div>
                                  </div>
                                  <div className="tf-minicart-recommendations-item-quickview">
                                    <div className="btn-show-quickview quickview hover-tooltip">
                                      <span className="icon icon-view"></span>
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
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="currentColor"
                          >
                            <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z"></path>
                            <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z"></path>
                          </svg>
                        </div>
                        <div className="tf-mini-cart-tool-btn btn-add-gift">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2.99566 2.73409C2.99566 0.55401 5.42538 -0.746668 7.23916 0.463462L8.50073 1.30516L9.7623 0.463462C11.5761 -0.746668 14.0058 0.55401 14.0058 2.73409V3.24744H14.8225C15.9633 3.24744 16.8881 4.17233 16.8881 5.31312V6.82566C16.8881 7.21396 16.5734 7.52873 16.1851 7.52873H15.8905V15.1877C15.8905 15.1905 15.8905 15.1933 15.8905 15.196C15.886 16.7454 14.6286 18 13.0782 18H3.92323C2.37003 18 1.11091 16.7409 1.11091 15.1877V7.52877H0.81636C0.42806 7.52877 0.113281 7.21399 0.113281 6.82569V5.31316C0.113281 4.17228 1.03812 3.24744 2.179 3.24744H2.99566V2.73409ZM4.40181 3.24744H7.79765V2.52647L6.45874 1.63317C5.57987 1.0468 4.40181 1.67677 4.40181 2.73409V3.24744ZM9.20381 2.52647V3.24744H12.5996V2.73409C12.5996 1.67677 11.4216 1.0468 10.5427 1.63317L9.20381 2.52647ZM2.179 4.6536C1.81472 4.6536 1.51944 4.94888 1.51944 5.31316V6.12261H5.73398L5.734 4.6536H2.179ZM5.73401 7.52877V13.9306C5.73401 14.1806 5.86682 14.4119 6.08281 14.5379C6.29879 14.6639 6.56545 14.6657 6.78312 14.5426L8.50073 13.5715L10.2183 14.5426C10.436 14.6657 10.7027 14.6639 10.9187 14.5379C11.1346 14.4119 11.2674 14.1806 11.2674 13.9306V7.52873H14.4844V15.1603C14.4844 15.1627 14.4843 15.1651 14.4843 15.1675V15.1877C14.4843 15.9643 13.8548 16.5938 13.0782 16.5938H3.92323C3.14663 16.5938 2.51707 15.9643 2.51707 15.1877V7.52877H5.73401ZM15.482 6.12258V5.31312C15.482 4.94891 15.1867 4.6536 14.8225 4.6536H11.2674V6.12258H15.482ZM9.86129 4.6536H7.14017V12.7254L8.15469 12.1518C8.36941 12.0304 8.63204 12.0304 8.84676 12.1518L9.86129 12.7254V4.6536Z"
                            ></path>
                          </svg>
                        </div>
                        <div className="tf-mini-cart-tool-btn btn-estimate-shipping">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="18"
                            viewBox="0 0 26 18"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 0.811989C0 0.36354 0.36354 0 0.811989 0H15.4278C15.8763 0 16.2398 0.36354 16.2398 0.811989V3.10596H21.0144C23.6241 3.10596 25.8643 5.05894 25.8643 7.61523V14.6414C25.8643 15.0899 25.5007 15.4534 25.0523 15.4534H23.545C23.2139 16.9115 21.9098 18 20.3514 18C18.7931 18 17.4889 16.9115 17.1578 15.4534H8.69534C8.36423 16.9115 7.0601 18 5.50175 18C3.9434 18 2.63927 16.9115 2.30815 15.4534H0.811989C0.36354 15.4534 0 15.0899 0 14.6414V0.811989ZM2.35089 13.8294C2.74052 12.4562 4.00366 11.4503 5.50175 11.4503C6.99983 11.4503 8.26298 12.4562 8.6526 13.8294H14.6158V1.62398H1.62398V13.8294H2.35089ZM16.2398 4.72994V7.95749H24.2403V7.61523C24.2403 6.08759 22.8649 4.72994 21.0144 4.72994H16.2398ZM24.2403 9.58147H16.2398V13.8294H17.2006C17.5902 12.4562 18.8533 11.4503 20.3514 11.4503C21.8495 11.4503 23.1126 12.4562 23.5023 13.8294H24.2403V9.58147ZM5.50175 13.0743C4.58999 13.0743 3.85087 13.8134 3.85087 14.7251C3.85087 15.6369 4.58999 16.376 5.50175 16.376C6.41351 16.376 7.15263 15.6369 7.15263 14.7251C7.15263 13.8134 6.41351 13.0743 5.50175 13.0743ZM20.3514 13.0743C19.4397 13.0743 18.7005 13.8134 18.7005 14.7251C18.7005 15.6369 19.4397 16.376 20.3514 16.376C21.2632 16.376 22.0023 15.6369 22.0023 14.7251C22.0023 13.8134 21.2632 13.0743 20.3514 13.0743Z"
                            ></path>
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
                          Taxes and <a href="#">shipping</a> calculated at
                          checkout
                        </div>
                        <div className="tf-mini-cart-line"></div>
                        <div className="tf-cart-checkbox">
                          <div className="tf-checkbox-wrapp">
                            <input
                              className=""
                              type="checkbox"
                              id="CartDrawer-Form_agree"
                              name="agree_checkbox"
                            />
                            <div>
                              <i className="icon-check"></i>
                            </div>
                          </div>
                          <label for="CartDrawer-Form_agree">
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
                      <div className="overplay tf-mini-cart-tool-close"></div>
                      <div className="tf-mini-cart-tool-content">
                        <label
                          for="Cart-note"
                          className="tf-mini-cart-tool-text"
                        >
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="18"
                              viewBox="0 0 16 18"
                              fill="currentColor"
                            >
                              <path d="M5.12187 16.4582H2.78952C2.02045 16.4582 1.39476 15.8325 1.39476 15.0634V2.78952C1.39476 2.02045 2.02045 1.39476 2.78952 1.39476H11.3634C12.1325 1.39476 12.7582 2.02045 12.7582 2.78952V7.07841C12.7582 7.46357 13.0704 7.77579 13.4556 7.77579C13.8407 7.77579 14.1529 7.46357 14.1529 7.07841V2.78952C14.1529 1.25138 12.9016 0 11.3634 0H2.78952C1.25138 0 0 1.25138 0 2.78952V15.0634C0 16.6015 1.25138 17.8529 2.78952 17.8529H5.12187C5.50703 17.8529 5.81925 17.5407 5.81925 17.1555C5.81925 16.7704 5.50703 16.4582 5.12187 16.4582Z"></path>
                              <path d="M15.3882 10.0971C14.5724 9.28136 13.2452 9.28132 12.43 10.0965L8.60127 13.9168C8.51997 13.9979 8.45997 14.0979 8.42658 14.2078L7.59276 16.9528C7.55646 17.0723 7.55292 17.1993 7.58249 17.3207C7.61206 17.442 7.67367 17.5531 7.76087 17.6425C7.84807 17.7319 7.95768 17.7962 8.07823 17.8288C8.19879 17.8613 8.32587 17.8609 8.44621 17.8276L11.261 17.0479C11.3769 17.0158 11.4824 16.9543 11.5675 16.8694L15.3882 13.0559C16.2039 12.2401 16.2039 10.9129 15.3882 10.0971ZM10.712 15.7527L9.29586 16.145L9.71028 14.7806L12.2937 12.2029L13.2801 13.1893L10.712 15.7527ZM14.4025 12.0692L14.2673 12.204L13.2811 11.2178L13.4157 11.0834C13.6876 10.8115 14.1301 10.8115 14.402 11.0834C14.6739 11.3553 14.6739 11.7977 14.4025 12.0692Z"></path>
                            </svg>
                          </div>
                          <span>Add Order Note</span>
                        </label>
                        <textarea
                          name="note"
                          id="Cart-note"
                          placeholder="How can we help you?"
                        ></textarea>
                        <div className="tf-cart-tool-btns justify-content-center">
                          <div className="tf-mini-cart-tool-primary text-center w-100 fw-6 tf-mini-cart-tool-close">
                            Close
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-mini-cart-tool-openable add-gift">
                      <div className="overplay tf-mini-cart-tool-close"></div>
                      <form className="tf-product-form-addgift">
                        <div className="tf-mini-cart-tool-content">
                          <div className="tf-mini-cart-tool-text">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M4.65957 3.64545C4.65957 0.73868 7.89921 -0.995558 10.3176 0.617949L11.9997 1.74021L13.6818 0.617949C16.1001 -0.995558 19.3398 0.73868 19.3398 3.64545V4.32992H20.4286C21.9498 4.32992 23.1829 5.56311 23.1829 7.08416V9.10087C23.1829 9.61861 22.7632 10.0383 22.2454 10.0383H21.8528V20.2502C21.8528 20.254 21.8527 20.2577 21.8527 20.2614C21.8467 22.3272 20.1702 24 18.103 24H5.89634C3.82541 24 2.14658 22.3212 2.14658 20.2502V10.0384H1.75384C1.23611 10.0384 0.816406 9.61865 0.816406 9.10092V7.08421C0.816406 5.56304 2.04953 4.32992 3.57069 4.32992H4.65957V3.64545ZM6.53445 4.32992H11.0622V3.36863L9.27702 2.17757C8.10519 1.39573 6.53445 2.2357 6.53445 3.64545V4.32992ZM12.9371 3.36863V4.32992H17.4649V3.64545C17.4649 2.2357 15.8942 1.39573 14.7223 2.17756L12.9371 3.36863ZM3.57069 6.2048C3.08499 6.2048 2.69128 6.59851 2.69128 7.08421V8.16348H8.31067L8.3107 6.2048H3.57069ZM8.31071 10.0384V18.5741C8.31071 18.9075 8.48779 19.2158 8.77577 19.3838C9.06376 19.5518 9.4193 19.5542 9.70953 19.3901L11.9997 18.0953L14.2898 19.3901C14.58 19.5542 14.9356 19.5518 15.2236 19.3838C15.5115 19.2158 15.6886 18.9075 15.6886 18.5741V10.0383H19.9779V20.2137C19.9778 20.2169 19.9778 20.2201 19.9778 20.2233V20.2502C19.9778 21.2857 19.1384 22.1251 18.103 22.1251H5.89634C4.86088 22.1251 4.02146 21.2857 4.02146 20.2502V10.0384H8.31071ZM21.308 8.16344V7.08416C21.308 6.59854 20.9143 6.2048 20.4286 6.2048H15.6886V8.16344H21.308ZM13.8138 6.2048H10.1856V16.9672L11.5383 16.2024C11.8246 16.0405 12.1748 16.0405 12.461 16.2024L13.8138 16.9672V6.2048Z"
                                ></path>
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
                      <div className="overplay tf-mini-cart-tool-close"></div>
                      <div className="tf-mini-cart-tool-content">
                        <div className="tf-mini-cart-tool-text">
                          <div className="icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="15"
                              viewBox="0 0 21 15"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.441406 1.13155C0.441406 0.782753 0.724159 0.5 1.07295 0.5H12.4408C12.7896 0.5 13.0724 0.782753 13.0724 1.13155V2.91575H16.7859C18.8157 2.91575 20.5581 4.43473 20.5581 6.42296V11.8878C20.5581 12.2366 20.2753 12.5193 19.9265 12.5193H18.7542C18.4967 13.6534 17.4823 14.5 16.2703 14.5C15.0582 14.5 14.0439 13.6534 13.7864 12.5193H7.20445C6.94692 13.6534 5.93259 14.5 4.72054 14.5C3.50849 14.5 2.49417 13.6534 2.23664 12.5193H1.07295C0.724159 12.5193 0.441406 12.2366 0.441406 11.8878V1.13155ZM2.26988 11.2562C2.57292 10.1881 3.55537 9.40578 4.72054 9.40578C5.88572 9.40578 6.86817 10.1881 7.17121 11.2562H11.8093V1.76309H1.7045V11.2562H2.26988ZM13.0724 4.17884V6.68916H19.295V6.42296C19.295 5.2348 18.2252 4.17884 16.7859 4.17884H13.0724ZM19.295 7.95226H13.0724V11.2562H13.8196C14.1227 10.1881 15.1051 9.40578 16.2703 9.40578C17.4355 9.40578 18.4179 10.1881 18.7209 11.2562H19.295V7.95226ZM4.72054 10.6689C4.0114 10.6689 3.43652 11.2437 3.43652 11.9529C3.43652 12.662 4.0114 13.2369 4.72054 13.2369C5.42969 13.2369 6.00456 12.662 6.00456 11.9529C6.00456 11.2437 5.42969 10.6689 4.72054 10.6689ZM16.2703 10.6689C15.5611 10.6689 14.9863 11.2437 14.9863 11.9529C14.9863 12.662 15.5611 13.2369 16.2703 13.2369C16.9794 13.2369 17.5543 12.662 17.5543 11.9529C17.5543 11.2437 16.9794 10.6689 16.2703 10.6689Z"
                              ></path>
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
                            data-default=""
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
                          <input type="text" name="text" placeholder="" />
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
          <div
            className="offcanvas offcanvas-bottom canvas-compare"
            id="compare"
          >
            <div className="canvas-wrapper">
              <header className="canvas-header">
                <div className="close-popup">
                  <span
                    className="icon-close icon-close-popup"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></span>
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
                                <i className="icon-close"></i>
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
                                <i className="icon-close"></i>
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
                  ></span>
                </div>
                <div className="wrap">
                  <div className="tf-product-info-item">
                    <div className="image">
                      <img src="/assets/images/products/orange-1.jpg" alt="" />
                    </div>
                    <div className="content">
                      <a href="product-detail.html">Ribbed Tank Top</a>
                      <div className="tf-product-info-price">
                        <div className="price-on-sale">$8.00</div>
                        <div className="compare-at-price">$10.00</div>
                        <div className="badges-on-sale">
                          <span>20</span>% OFF
                        </div>
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
                          checked
                        />
                        <label
                          className="hover-tooltip radius-60"
                          for="values-orange"
                          data-value="Orange"
                        >
                          <span className="btn-checkbox bg-color-orange"></span>
                          <span className="tooltip">Orange</span>
                        </label>
                        <input id="values-black" type="radio" name="color" />
                        <label
                          className=" hover-tooltip radius-60"
                          for="values-black"
                          data-value="Black"
                        >
                          <span className="btn-checkbox bg-color-black"></span>
                          <span className="tooltip">Black</span>
                        </label>
                        <input id="values-white" type="radio" name="color" />
                        <label
                          className="hover-tooltip radius-60"
                          for="values-white"
                          data-value="White"
                        >
                          <span className="btn-checkbox bg-color-white"></span>
                          <span className="tooltip">White</span>
                        </label>
                      </div>
                    </div>
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Size:{" "}
                        <span className="fw-6 variant-picker-label-value">
                          S
                        </span>
                      </div>
                      <div className="variant-picker-values">
                        <input type="radio" name="size" id="values-s" checked />
                        <label
                          className="style-text"
                          for="values-s"
                          data-value="S"
                        >
                          <p>S</p>
                        </label>
                        <input type="radio" name="size" id="values-m" />
                        <label
                          className="style-text"
                          for="values-m"
                          data-value="M"
                        >
                          <p>M</p>
                        </label>
                        <input type="radio" name="size" id="values-l" />
                        <label
                          className="style-text"
                          for="values-l"
                          data-value="L"
                        >
                          <p>L</p>
                        </label>
                        <input type="radio" name="size" id="values-xl" />
                        <label
                          className="style-text"
                          for="values-xl"
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
                      <input type="text" name="number" value="1" />
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
                        <i className="icon-heart"></i>
                        <i className="icon-delete"></i>
                      </div>
                      <a
                        href="#compare"
                        data-bs-toggle="offcanvas"
                        aria-controls="offcanvasLeft"
                        className="tf-product-btn-wishlist box-icon bg_white compare btn-icon-action"
                      >
                        <span className="icon icon-compare"></span>
                        <span className="icon icon-check"></span>
                      </a>
                      <div className="w-100">
                        <a href="#" className="btns-full">
                          Buy with{" "}
                          <img src="images/payments/paypal.png" alt="" />
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
                  ></span>
                </div>
                <div className="wrap">
                  <div className="tf-product-media-wrap">
                    <div dir="ltr" className="swiper tf-single-slide">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="item">
                            <img
                              src="/assets/images/products/orange-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item">
                            <img
                              src="/assets/images/products/pink-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-button-next button-style-arrow single-slide-prev"></div>
                      <div className="swiper-button-prev button-style-arrow single-slide-next"></div>
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
                          <i className="icon-lightning"></i>
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
                              checked
                            />
                            <label
                              className="hover-tooltip radius-60"
                              for="values-orange-1"
                              data-value="Orange"
                            >
                              <span className="btn-checkbox bg-color-orange"></span>
                              <span className="tooltip">Orange</span>
                            </label>
                            <input
                              id="values-black-1"
                              type="radio"
                              name="color-1"
                            />
                            <label
                              className=" hover-tooltip radius-60"
                              for="values-black-1"
                              data-value="Black"
                            >
                              <span className="btn-checkbox bg-color-black"></span>
                              <span className="tooltip">Black</span>
                            </label>
                            <input
                              id="values-white-1"
                              type="radio"
                              name="color-1"
                            />
                            <label
                              className="hover-tooltip radius-60"
                              for="values-white-1"
                              data-value="White"
                            >
                              <span className="btn-checkbox bg-color-white"></span>
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
                              checked
                            />
                            <label
                              className="style-text"
                              for="values-s-1"
                              data-value="S"
                            >
                              <p>S</p>
                            </label>
                            <input type="radio" name="size-1" id="values-m-1" />
                            <label
                              className="style-text"
                              for="values-m-1"
                              data-value="M"
                            >
                              <p>M</p>
                            </label>
                            <input type="radio" name="size-1" id="values-l-1" />
                            <label
                              className="style-text"
                              for="values-l-1"
                              data-value="L"
                            >
                              <p>L</p>
                            </label>
                            <input
                              type="radio"
                              name="size-1"
                              id="values-xl-1"
                            />
                            <label
                              className="style-text"
                              for="values-xl-1"
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
                          <input type="text" name="number" value="1" />
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
                            <span className="icon icon-heart"></span>
                            <span className="tooltip">Add to Wishlist</span>
                            <span className="icon icon-delete"></span>
                          </a>
                          <a
                            href="#compare"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                          >
                            <span className="icon icon-compare"></span>
                            <span className="tooltip">Add to Compare</span>
                            <span className="icon icon-check"></span>
                          </a>
                          <div className="w-100">
                            <a href="#" className="btns-full">
                              Buy with{" "}
                              <img src="images/payments/paypal.png" alt="" />
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
                          <i className="icon icon-arrow1-top-left"></i>
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
                  ></span>
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
                        With your feet together measure around the fullest part
                        of your hips/rear.
                      </p>
                    </div>
                    <div>
                      <img
                        className="sizechart lazyload"
                        data-src="images/shop/products/size_chart2.jpg"
                        src="images/shop/products/size_chart2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /modal find_size */}

          {/* <!-- Filter sidebar--> */}
          <div
            className="offcanvas offcanvas-start canvas-filter canvas-sidebar"
            id="sidebarmobile"
          >
            <div className="canvas-wrapper">
              <header className="canvas-header">
                <span className="title">SIDEBAR PRODUCT</span>
                <span
                  className="icon-close icon-close-popup"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></span>
              </header>
              <div className="canvas-body sidebar-mobile-append"></div>
            </div>
          </div>
          {/* End Filter sidebar */}
        </div>
        <Footer2 />
      </>
    );
}
