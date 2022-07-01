import React, { Component, Fragment } from "react";

import styles from "./style";
import parse from "html-react-parser";
import Link from "next/link";

class ClientShowcase extends Component {
  render() {
    const { content } = this.props;

    return (
      <Fragment>
        <section className="cr-client-showcase section-padding">
          <div className="overlay"></div>
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <h2 className="section-title text-center">
                  {parse(content.sectionTitle)}
                </h2>

                <div className="showcase-wrapper">
                  {content.clients &&
                    content.clients.map((clientItem, index) => {
                      let clientLogo = clientItem.clientLogo
                        ? clientItem.clientLogo.sourceUrl
                        : "";
                      return (
                        <div className="single-image" key={index}>
                          <img src={parse(clientLogo)} alt="client-logo" />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{`
          .cr-client-showcase .showcase-wrapper .single-image img {
            width: 100%;
          }
          @media (max-width: 575px) {
            .cr-client-showcase .showcase-wrapper .single-image img {
              width: auto;
              display: block;
              margin: 0 auto;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default ClientShowcase;
