import React, { Component, Fragment } from "react";
import SocialLink from "../SocialLink";
import styles from "./style";
import parse from "html-react-parser";

class AboutHero extends Component {
  render() {
    const { content, social } = this.props;

    return (
      <Fragment>
        <section className="inner-page-banner about-banner pos-relative">
          {content.welcomeImage.sourceUrl && (
            <img
              src={content.welcomeImage.sourceUrl}
              className="about-banner-img"
              alt="banner img"
            />
          )}

          <SocialLink social={social} />

          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="banner-content align-center-center text-center">
                  <h1 className="circular-700 color-fff crx crx-animated">
                    {parse(content.heading)}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .inner-page-banner .about-banner-img {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 28vw;
            transform: translateX(0px);
          }

          @media (min-width: 1922px) {
            .inner-page-banner .about-banner-img {
              width: 527px;
            }
          }

          @media (max-width: 1400px) {
            .inner-page-banner .banner-content h1 {
              max-width: 460px;
            }
          }

          @media (max-width: 575px) {
            .inner-page-banner .about-banner-img {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default AboutHero;
