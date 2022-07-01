import React, { Component, Fragment } from "react";

import styles from "./style";
import parse from "html-react-parser";
import Link from "next/link";

class Career extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="cr-join-team pos-relative section-padding">
          <div className="team-illustration-wrapper">
            {content.leftImage && (
              <img
                src={content.leftImage.sourceUrl}
                className="team-illustration team-illustration1"
                alt="team-illustration"
              />
            )}
            {content.rightImage && (
              <img
                src={content.rightImage.sourceUrl}
                className="team-illustration team-illustration2"
                alt="team-illustration"
              />
            )}
          </div>

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="join-content">
                  <h2 className="circular-700">{parse(content.heading)}</h2>
                  <div className="description">
                    {parse(content.description)}
                  </div>

                  {content.buttonText && (
                    <Link
                      href={content.buttonLink ? content.buttonLink.url : "#"}
                    >
                      <a
                        className="cr-btn-default contact-btn svg-btn-effect"
                        target={
                          content.buttonLink
                            ? content.buttonLink.target
                            : "_self"
                        }
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
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-join-team .join-content .description p {
            font-size: 26px;
            line-height: 46px;
          }
          .cr-join-team .team-illustration {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
          }
          .cr-join-team .team-illustration1 {
            left: 0;
          }
          .cr-join-team .team-illustration2 {
            right: 0;
            max-width: 700px;
            margin-top: -30px;
          }

          @media (max-width: 1700px) {
            .cr-join-team .team-illustration1 {
              max-width: 320px;
            }
            .cr-join-team .team-illustration2 {
              max-width: 570px;
              margin-top: 0;
            }
          }
          @media (max-width: 1500px) {
            .cr-join-team .team-illustration1 {
              max-width: 270px;
            }
            .cr-join-team .team-illustration2 {
              max-width: 450px;
            }
          }
          @media (max-width: 1300px) {
            .cr-join-team .team-illustration1 {
              max-width: 240px;
            }
            .cr-join-team .team-illustration2 {
              max-width: 410px;
            }
          }
          @media (max-width: 1199px) {
            .cr-join-team .team-illustration1 {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .cr-join-team .join-content .description p {
              margin-bottom: 35px;
              font-size: 22px;
              line-height: 34px;
            }
            .cr-join-team .team-illustration2 {
              max-width: 330px;
            }
          }
          @media (max-width: 767px) {
            .cr-join-team .team-illustration2 {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default Career;
