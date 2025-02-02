import React from 'react'

export default function index() {
  return (
    <div>
      {/* top-bar */}
      <div className="tf-top-bar bg_white line">
        <div className="px_15 lg-px_40">
          <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
            <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
              <li>
                <a
                  href="#"
                  className="box-icon w_28 round social-facebook bg_line"
                >
                  <i className="icon fs-12 icon-fb" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w_28 round social-twiter bg_line"
                >
                  <i className="icon fs-10 icon-Icon-x" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w_28 round social-instagram bg_line"
                >
                  <i className="icon fs-12 icon-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w_28 round social-tiktok bg_line"
                >
                  <i className="icon fs-12 icon-tiktok" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="box-icon w_28 round social-pinterest bg_line"
                >
                  <i className="icon fs-12 icon-pinterest-1" />
                </a>
              </li>
            </ul>
            <div className="text-center overflow-hidden">
              <div
                dir="ltr"
                className="swiper tf-sw-top_bar"
                data-preview={1}
                data-space={0}
                data-loop="true"
                data-speed={1000}
                data-delay={2000}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <p className="top-bar-text fw-5">
                      Spring Fashion Sale{" "}
                      <a
                        href="shop-default.html"
                        title="all collection"
                        className="tf-btn btn-line"
                      >
                        Shop now
                        <i className="icon icon-arrow1-top-left" />
                      </a>
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="top-bar-text fw-5">
                      Summer sale discount off 70%
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <p className="top-bar-text fw-5">
                      Time to refresh your wardrobe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-bar-language tf-cur justify-content-end">
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
      {/* /top-bar */}
    </div>
  );
}
