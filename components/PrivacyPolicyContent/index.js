import React, { Component, Fragment } from "react";
import styles from "./style";
import parse from "html-react-parser";

class PrivacyPolicyContent extends Component {
  render() {
    const { content } = this.props;
    return (
      <Fragment>
        <section className="privacy-policy-section pos-relative">
          <div className="cr-container">
            <div className="cr-row">
              <div className="cr-col">
                <div className="privacy-policy-content">{parse(content)}</div>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{styles}</style>

        <style jsx global>{``}</style>
      </Fragment>
    );
  }
}

export default PrivacyPolicyContent;
