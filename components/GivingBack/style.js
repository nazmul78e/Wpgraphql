import css from "styled-jsx/css";
export default css`
  .cr-giving-back {
    background: #00146b;
    position: relative;
    padding-top: 247px;
  }
  .cr-giving-back .overlay {
    overflow: hidden;
    top: -1px;
  }
  .cr-giving-back .overlay:before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    z-index: 1;
    width: 0;
    height: 0;
    border-top: 150px solid #f3f7ff;
    border-right: 1980px solid transparent;
  }
  .cr-giving-back .section-title {
    width: 44%;
    padding-right: 30px;
  }
  .cr-giving-back .section-title h2 {
    margin-bottom: 20px;
    color: #fff;
  }
  .cr-giving-back .featured-giving-back {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  }
  .cr-giving-back .giving-back {
    position: relative;
  }
  .cr-giving-back .giving-back:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: #00146b;
    z-index: 1;
  }
  .cr-giving-back .giving-back.crx-animated:before {
    width: 0;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .cr-giving-back .giving-back > a {
    border-radius: 10px;
    padding: 60px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .cr-giving-back .giving-back h4 {
    color: #fff;
    margin-bottom: 10px;
    font-family: "CircularStd-Medium";
  }
  .cr-giving-back .giving-back .readmore {
    font-size: 20px;
    color: #fff;
  }
  .cr-giving-back .giving-back .readmore img {
    display: inline;
    position: relative;
    top: -1px;
    margin-left: 5px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .cr-giving-back .giving-back:hover .readmore img {
    margin-left: 10px;
  }
  .cr-giving-back .giving1 {
    width: 46%;
    height: 475px;
  }
  .cr-giving-back .giving1 > a {
    background: #e6251e;
  }
  .cr-giving-back .giving-back-wrapper {
    max-width: 1126px;
    margin-left: auto;
    display: flex;
    flex-flow: row wrap;
    height: 500px;
    margin-top: 30px;
  }
  .cr-giving-back .giving-back-wrapper .sml-giving {
    width: 35%;
    height: 100%;
  }
  .cr-giving-back .giving3 > a,
  .cr-giving-back .giving4 > a {
    align-items: center;
    justify-content: center;
  }
  .cr-giving-back .giving2 {
    width: calc(65% - 30px);
    height: 100%;
    margin-right: 30px;
  }
  .cr-giving-back .giving2.crx-animated:before {
    -webkit-transition: all 1s ease 0.3s;
    -moz-transition: all 1s ease 0.3s;
    -ms-transition: all 1s ease 0.3s;
    -o-transition: all 1s ease 0.3s;
    transition: all 1s ease 0.3s;
  }
  .cr-giving-back .giving2 > a {
    background: #6020e6;
  }
  .cr-giving-back .giving3 {
    height: 50%;
    width: 100%;
    padding-bottom: 15px;
  }
  .cr-giving-back .giving3.crx-animated:before {
    width: 100%;
    height: 0;
    -webkit-transition: all 1s ease 0.7s;
    -moz-transition: all 1s ease 0.7s;
    -ms-transition: all 1s ease 0.7s;
    -o-transition: all 1s ease 0.7s;
    transition: all 1s ease 0.7s;
  }
  .cr-giving-back .giving3 > a {
    background: #6065ae;
  }
  .cr-giving-back .giving4 {
    height: 50%;
    width: 100%;
    padding-top: 15px;
  }
  .cr-giving-back .giving4.crx-animated:before {
    width: 100%;
    height: 0;
    -webkit-transition: all 1s ease 0.9s;
    -moz-transition: all 1s ease 0.9s;
    -ms-transition: all 1s ease 0.9s;
    -o-transition: all 1s ease 0.9s;
    transition: all 1s ease 0.9s;
  }
  .cr-giving-back .giving4 > a {
    background: #f47023;
  }

  @media (min-width: 1922px) {
    .cr-giving-back .overlay:before {
      border-right: 3000px solid transparent;
    }
  }

  @media (max-width: 1500px) {
    .cr-giving-back {
      margin-bottom: 0;
      padding-top: 170px;
    }
    .cr-giving-back .giving-back > a {
      padding: 50px;
    }
    .cr-giving-back .giving-back > a > img {
      margin-bottom: 50px;
    }
    .cr-giving-back .giving1 {
      height: 420px;
    }
    .cr-giving-back .giving-back-wrapper {
      height: 420px;
    }
  }

  @media (max-width: 1300px) {
    .cr-giving-back {
      padding-top: 140px;
    }
    .cr-giving-back .giving1 {
      width: 55%;
    }
  }

  @media (max-width: 1199px) {
    .cr-giving-back {
      padding-bottom: 120px;
    }
  }

  @media (max-width: 991px) {
    .cr-giving-back .section-title {
      width: 100%;
      padding-right: 0;
      margin-bottom: 50px;
    }
    .cr-giving-back .featured-giving-back {
      display: block;
    }
    .cr-giving-back .giving-back > a {
      padding: 30px;
    }
    .cr-giving-back .giving1 {
      width: 100%;
      height: auto;
    }
    .cr-giving-back .giving-back-wrapper {
      height: auto;
      display: block;
    }
    .cr-giving-back .giving-back-wrapper .sml-giving {
      width: 100%;
      height: auto;
    }
    .cr-giving-back .giving2 {
      width: 100%;
      height: auto;
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767px) {
    .cr-giving-back {
      padding-top: 120px;
    }
  }

  @media (max-width: 575px) {
    .cr-giving-back {
      padding-top: 90px;
    }
  }
`;
