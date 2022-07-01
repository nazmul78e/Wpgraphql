import css from "styled-jsx/css";
export default css`
  .cr-social-link {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 80px;
    padding-left: 80px;
    z-index: 2;
    max-width: 1920px;
  }
  .cr-social-link li {
    margin-bottom: 15px;
  }
  .cr-social-link li:last-child {
    margin-bottom: 0;
  }
  .cr-social-link li a {
    font-size: 16px;
    background: #fff;
    color: #00146b;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    line-height: normal;
    width: 38px;
    height: 38px;
    text-align: center;
    padding: 8px 5px;
    border-radius: 100%;
  }
  .cr-social-link li a:hover {
    color: #fff;
    background: #00b4ff;
  }
  .cr-social-link li a svg {
    width: 16px;
  }
  .cr-social-link li a svg.fa-facebook-f {
    width: 12px;
  }

  @media (max-width: 1700px) {
    .cr-social-link {
      padding-left: 50px;
      bottom: 50px;
    }
    .cr-social-link li {
      margin-bottom: 0;
      display: inline-block;
      margin-right: 10px;
    }
    .cr-social-link li:last-child {
      margin-right: 0;
    }
  }
  @media (max-width: 1500px) {
    .cr-social-link {
      max-width: 1280px;
      padding-left: 15px;
      left: inherit;
      right: 50%;
      -webkit-transform: translateX(50%);
      -moz-transform: translateX(50%);
      -ms-transform: translateX(50%);
      -o-transform: translateX(50%);
      transform: translateX(50%);
    }
  }
  @media (max-width: 1300px) {
    .cr-social-link {
      max-width: 1140px;
    }
  }
  @media (max-width: 1199px) {
    .cr-social-link {
      max-width: 960px;
    }
  }
  @media (max-width: 991px) {
    .cr-social-link {
      max-width: 720px;
    }
  }
  @media (max-width: 767px) {
    .cr-social-link {
      max-width: 540px;
    }
  }
  @media (max-width: 575px) {
    .cr-social-link {
      max-width: 100%;
      text-align: center;
    }
  }
`;
