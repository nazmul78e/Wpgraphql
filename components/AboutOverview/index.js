import React, { Component, Fragment } from "react";
import styles from "./style";
import parse from "html-react-parser";
import Link from "next/link";

class AboutOverview extends Component {
  render() {
    const { content } = this.props;
    let buttonLink = content.buttonLink ? content.buttonLink.url : "#";
    let buttonTarget = content.buttonLink ? content.buttonLink.target : "_self";
    return (
      <Fragment>
        <section className="welcome-txt pos-relative">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="welcome-content align-row-left-top">
                  <h4 className="circular-700 verticle-txt crx crx-animated">
                    {parse(content.verticalText)}
                  </h4>
                  <div className="content-wrapper">
                    <h2 className="crx crx-animated">
                      {parse(content.heading)}
                    </h2>
                    <div className="description crx crx-animated">
                      {parse(content.description)}
                    </div>

                    {content.button_text && (
                      <Link href={buttonLink}>
                        <a
                          target={buttonTarget}
                          className="cr-btn-default contact-btn svg-btn-effect crx crx-animated"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .welcome-txt .welcome-content .content-wrapper .description p {
            font-size: 26px;
            line-height: 46px;
          }
          @media (max-width: 767px) {
            .welcome-txt .welcome-content .content-wrapper .description p {
              font-size: 20px;
              line-height: 34px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default AboutOverview;
