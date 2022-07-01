import React, { Component, Fragment } from "react";

import styles from "./style";
import parse from "html-react-parser";

class AboutFeature extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="cr-cost pos-relative section-padding">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="cost-wrapper align-row-center-center">
                  <div className="cost-content">
                    <div className="single-cost cost1 crx crx-animated">
                      <div className="icon pos-relative">
                        <img
                          src="../static/images/dollar-icon.png"
                          alt="cost icon"
                        />
                        <svg viewBox="16 15 87 93" className="crx crx-animated">
                          <g fillRule="nonzero" className="line">
                            <path d="M20,60a40,40 0 1,0 80,0a40,40 0 1,0 -80,0"></path>
                          </g>
                        </svg>
                      </div>

                      <h4 className="crx crx-animated">
                        {parse(content.featureDetails1.featureTitle)}
                      </h4>
                      <div className="description crx crx-animated">
                        {parse(content.featureDetails1.featureDescription)}
                      </div>
                    </div>

                    <div className="single-cost cost2 crx crx-animated">
                      <span className="circle-parent">
                        <span className="circle-child1"></span>
                        <span className="circle-child2"></span>
                        <span className="circle-child3"></span>
                        <span className="circle-child4"></span>
                        <span className="circle-child5"></span>
                      </span>
                      <h4 className="crx crx-animated">
                        {parse(content.featureDetails2.featureTitle)}
                      </h4>
                      <div className="description crx crx-animated">
                        {parse(content.featureDetails2.featureDescription)}
                      </div>
                    </div>
                  </div>

                  <div className="cost-img crx crx-animated">
                    {content.image && (
                      <img
                        src={content.image.sourceUrl}
                        className="img-fluid"
                        alt="cost img"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-cost .cost-content .cost1 .description p {
            color: #fff;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default AboutFeature;
