import React, { Component, Fragment } from "react";

import styles from "./style";
import parse from "html-react-parser";
import Link from "next/link";
// import ImageLoader from "../ImageLoader";

class Benefits extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="cr-benefits pos-relative">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <h2 className="section-title circular-700 color-232 crx">
                  {parse(content.heading)}
                </h2>
              </div>
            </div>
          </div>

          <div className="cr-benefit-content-area pos-relative">
            <div className="overlay">
              {content.image && (
                <img
                  src={parse(content.image.sourceUrl)}
                  alt="benefits image"
                />
              )}
            </div>

            <div className="cr-container">
              <div className="cr-row">
                <div className="cr-col">
                  <div className="benefits-content">
                    {content.singleBenefit.map((item, index) => {
                      return (
                        <div className="single-benefits" key={index}>
                          {item.icon && (
                            <img src={parse(item.icon.sourceUrl)} alt="icon" />
                          )}
                          <div className="benefit-title">
                            <h5>{parse(item.title)}</h5>
                            <p>{parse(item.description)}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="button-area">
            {content.buttonText && (
              <Link href={content.buttonLink ? content.buttonlink.url : "#"}>
                <a
                  target={
                    content.buttonLink ? content.buttonLink.target : "_self"
                  }
                  className="cr-btn-default discuss-btn svg-btn-effect"
                >
                  <svg>
                    <rect
                      x="2"
                      y="2"
                      rx="30"
                      fill="none"
                      width="98%"
                      height="56"
                    ></rect>
                  </svg>
                  <span>{parse(content.buttonText)}</span>
                </a>
              </Link>
            )}
          </div> */}
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-benefits .overlay img {
            max-width: 685px;
            width: 100%;
            position: relative;
            left: 125px;
            top: 13px;
          }
          .cr-benefits .single-benefits img {
            position: relative;
            top: 8px;
          }

          @media (max-width: 1700px) {
            .cr-benefits .overlay img {
              max-width: 635px;
              left: 60px;
            }
          }

          @media (max-width: 1300px) {
            .cr-benefits .overlay img {
              max-width: 510px;
              left: 60px;
            }
          }
          @media (max-width: 1199px) {
            .cr-benefits .overlay img {
              left: inherit;
              top: inherit;
            }
          }
          @media (max-width: 575px) {
            .cr-benefits .single-benefits img {
              top: inherit;
              margin-bottom: 12px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Benefits;
