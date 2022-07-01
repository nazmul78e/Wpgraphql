import css from "styled-jsx/css";
export default css`
  .cr-benefits {
    overflow: hidden;
    padding-top: 65px;
    padding-bottom: 235px;
  }
  .cr-benefits:before {
    content: "";
    position: absolute;
    background: #00146b;
    width: 120%;
    height: 210px;
    left: -130px;
    bottom: -121px;
    -webkit-transform: rotate(-5deg);
    -moz-transform: rotate(-5deg);
    -ms-transform: rotate(-5deg);
    -o-transform: rotate(-5deg);
    transform: rotate(-5deg);
  }
  .cr-benefits .section-title {
    text-align: center;
    max-width: 850px;
    width: 100%;
    margin: 0 auto 100px;
  }
  .cr-benefits .overlay {
    left: inherit;
    right: 0;
    width: 54%;
    background: #f3f7ff;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .cr-benefits .benefits-content {
    max-width: 590px;
  }
  .cr-benefits .single-benefits {
    box-shadow: 0 25px 30px 0 rgba(70, 81, 128, 0.07);
    border-radius: 10px;
    border-left: 10px solid #00b4ff;
    padding: 30px 40px;
    display: inline-flex;
    flex-flow: row wrap;
    align-items: flex-start;
    margin-bottom: 30px;
  }
  .cr-benefits .single-benefits:last-child {
    margin-bottom: 0;
  }
  .cr-benefits .single-benefits:nth-child(even) {
    margin-left: 50px;
    border-left-color: #00146b;
  }
  .cr-benefits .single-benefits .benefit-title {
    padding-left: 30px;
  }
  .cr-benefits .single-benefits h5 {
    font-size: 26px;
    line-height: 36px;
  }
  .cr-benefits .single-benefits p {
    color: #a2abbd;
    font-family: "CircularStd-Medium";
  }

  .cr-benefits .button-area {
    text-align: center;
    margin-top: 108px;
  }

  @media (min-width: 2000px) {
    .cr-benefits:before {
      height: 220px;
      transform: rotate(-4deg);
    }
  }

  @media (max-width: 1700px) {
    .cr-benefits .single-benefits:nth-child(even) {
      margin-left: 20px;
    }
  }

  @media (max-width: 1300px) {
    .cr-benefits {
      padding-bottom: 158px;
    }
    .cr-benefits:before {
      height: 190px;
      bottom: -133px;
    }
    .cr-benefits .overlay {
      width: 50%;
    }
    .cr-benefits .single-benefits {
      padding: 30px 25px;
      max-width: 500px;
      width: 100%;
      border-radius: 5px;
      border-left-width: 5px;
    }
    .cr-benefits .single-benefits:nth-child(even) {
      margin-left: 0;
    }
  }

  @media (max-width: 1199px) {
    .cr-benefits .section-title {
      margin: 0 auto 50px;
    }
    .cr-benefits .overlay {
      left: inherit;
      right: 0;
      width: 100%;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 50px;
      padding: 50px 15px;
    }
    .cr-benefits .benefits-content {
      max-width: 100%;
    }
    .cr-benefits .single-benefits {
      margin-left: auto;
      margin-right: auto;
      display: flex;
    }
    .cr-benefits .single-benefits:nth-child(even) {
      margin-left: auto;
    }
  }

  @media (max-width: 991px) {
    .cr-benefits {
      padding-bottom: 125px;
      padding-top: 55px;
    }
    .cr-benefits:before {
      height: 164px;
    }
    .cr-benefits .button-area {
      margin-top: 50px;
    }
  }

  @media (max-width: 767px) {
    .cr-benefits:before {
      left: -100px;
    }
  }

  @media (max-width: 575px) {
    .cr-benefits {
      padding-top: 25px;
    }
    .cr-benefits:before {
      left: -70px;
      width: 130%;
    }
    .cr-benefits .single-benefits {
      padding: 20px 20px;
      display: block;
    }
    .cr-benefits .single-benefits .benefit-title {
      padding-left: 0;
    }

    .cr-benefits .single-benefits .benefit-title h5 {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
