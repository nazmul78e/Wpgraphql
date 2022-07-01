import React, { Component, Fragment } from "react";
import styles from "./style";
import parse from "html-react-parser";
import Link from "next/link";

class GivingBack extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="cr-giving-back section-padding">
          <div className="overlay"></div>
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="featured-giving-back">
                  <div className="section-title">
                    <h2 className="circular-700">{parse(content.heading)}</h2>
                    <div className="description">
                      {parse(content.description)}
                    </div>
                  </div>

                  <div className="giving-back giving1 crx crx-animated">
                    <Link
                      as={
                        content.givingBack1.link
                          ? content.givingBack1.link.url
                          : `#`
                      }
                      href={`/posts/[slug]`}
                    >
                      <a>
                        {content.givingBack1.givingBackLogo && (
                          <img
                            src={content.givingBack1.givingBackLogo.url}
                            alt="giving back icon"
                          />
                        )}
                        <h4>{parse(content.givingBack1.givingBackTitle)}</h4>
                        <h6 className="text-capitalize readmore">
                          Read More{" "}
                          <img
                            src="../static/images/arrow-right-white.png"
                            alt="arrow"
                          />
                        </h6>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="giving-back-wrapper">
                  <div className="giving-back giving2 crx crx-animated">
                    <Link
                      as={
                        content.givingBack2.link
                          ? content.givingBack2.link.url
                          : `#`
                      }
                      href={`/posts/[slug]`}
                    >
                      <a>
                        {content.givingBack2.givingBackLogo && (
                          <img
                            src={content.givingBack2.givingBackLogo.url}
                            alt="giving back icon"
                          />
                        )}
                        <h4>{parse(content.givingBack2.givingBackTitle)}</h4>
                        <h6 className="text-capitalize readmore">
                          Read More{" "}
                          <img
                            src="../static/images/arrow-right-white.png"
                            alt="arrow"
                          />
                        </h6>
                      </a>
                    </Link>
                  </div>

                  <div className="sml-giving">
                    <div className="giving-back giving3 crx crx-animated">
                      <Link
                        as={
                          content.givingBack3.link
                            ? content.givingBack3.link.url
                            : "#"
                        }
                        href={`/posts/[slug]`}
                      >
                        <a>
                          {content.givingBack3.givingBackLogo && (
                            <img
                              src={content.givingBack3.givingBackLogo.url}
                              alt="giving back icon"
                            />
                          )}
                        </a>
                      </Link>
                    </div>

                    <div className="giving-back giving4 crx crx-animated">
                      <Link
                        as={
                          content.givingBack4.link
                            ? content.givingBack4.link.url
                            : "#"
                        }
                        href={`/posts/[slug]`}
                      >
                        <a>
                          {content.givingBack4.givingBackLogo && (
                            <img
                              src={content.givingBack4.givingBackLogo.url}
                              alt="giving back icon"
                            />
                          )}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-giving-back .section-title .description p {
            text-align: justify;
            color: #fff;
            font-size: 26px;
            line-height: 46px;
          }
          .cr-giving-back .giving-back > a > img {
            margin-bottom: 70px;
          }
          .cr-giving-back .giving3 > a img,
          .cr-giving-back .giving4 > a img {
            margin-bottom: 0;
          }

          @media (max-width: 767px) {
            .cr-giving-back .section-title .description p {
              font-size: 20px;
              line-height: 34px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default GivingBack;
