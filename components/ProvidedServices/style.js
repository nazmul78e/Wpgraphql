import css from "styled-jsx/css";
export default css`
  .cr-provided-services {
    padding-top: 143px;
    padding-bottom: 150px;
    margin-top: 150px;
    background: #00146b;
  }
  .cr-provided-services .overlay {
    width: 150px;
    background: #fff;
  }
  .cr-provided-services .section-title {
    width: 35%;
  }
  .cr-provided-services .service-content {
    display: flex;
    flex-flow: row wrap;
  }
  .cr-provided-services .section-title h2 {
    color: #fff;
    font-size: calc(30px + (63 - 30) * ((100vw - 320px) / (1920 - 320)));
  }
  .cr-provided-services .service-list {
    width: 65%;
    padding-left: 60px;
  }
  .cr-provided-services .service-list h6 {
    font-size: 15px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  }
  .cr-provided-services .service-list ul {
    display: flex;
    flex-flow: row wrap;
  }
  .cr-provided-services .service-list ul li {
    width: calc(50% - 25px);
    padding-right: 30px;
    padding-left: 25px;
    margin-bottom: 26px;
    font-size: 20px;
    line-height: 28px;
    display: inline-block;
    color: #fff;
    position: relative;
    font-family: "CircularStd-Medium";
    transition: all 0.3s ease;
  }
  .cr-provided-services .service-list ul li:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #00b4ff;
    left: 0;
    top: 10px;
  }
  .cr-provided-services .service-list ul li:hover {
    color: #00b4ff;
  }
  .cr-provided-services .service-list .know-more-btn {
    margin-top: 50px;
  }

  @media (min-width: 1922px) {
    .cr-provided-services .overlay {
      box-shadow: 0 0 0 2px white;
    }
    .cr-provided-services .section-title h2 {
      font-size: 63px;
    }
  }

  @media (max-width: 1700px) {
    .cr-provided-services .overlay {
      width: 80px;
    }
    .cr-provided-services .service-content {
      padding-left: 80px;
    }
    .cr-provided-services .section-title {
      width: 30%;
    }
    .cr-provided-services .service-list {
      width: 70%;
    }
  }

  @media (max-width: 1500px) {
    .cr-provided-services {
      margin-top: 0;
    }
    .cr-provided-services .overlay {
      display: none;
    }
    .cr-provided-services .service-content {
      padding-left: 0;
    }
    .cr-provided-services .section-title {
      width: 33%;
    }
    .cr-provided-services .service-list {
      width: 67%;
    }
  }

  @media (max-width: 1300px) {
    .cr-provided-services {
      padding-top: 93px;
      padding-bottom: 100px;
    }
    .cr-provided-services .service-content {
      display: block;
    }
    .cr-provided-services .section-title {
      width: 100%;
      margin-bottom: 50px;
    }
    .cr-provided-services .service-list {
      width: 100%;
      padding-left: 0;
    }
    .cr-provided-services .service-list ul li:before {
      top: 10px;
    }
  }

  @media (max-width: 767px) {
    .cr-provided-services .service-list ul li {
      width: 100%;
      padding-right: 0;
    }
    .cr-provided-services .service-list .know-more-btn {
      margin-top: 20px;
    }
  }
`;
