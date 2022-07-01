import css from "styled-jsx/css";
export default css`
  .welcome-txt {
    padding: 180px 0 245px;
  }
  .welcome-txt .welcome-content {
    width: 100%;
    margin: 0 auto;
    max-width: 870px;
  }
  .welcome-txt .welcome-content .verticle-txt {
    width: 29%;
    padding-right: 30px;
    color: #00b4ff;
    position: relative;
    position: relative;
    left: 40px;
    transform-origin: bottom left;
    color: #00b4ff;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  .welcome-txt .welcome-content .verticle-txt.crx-animated {
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transition: all 0.8s ease;
    -moz-transition: all 0.8s ease;
    -ms-transition: all 0.8s ease;
    -o-transition: all 0.8s ease;
    transition: all 0.8s ease;
  }
  .welcome-txt .welcome-content .verticle-txt:after {
    content: "";
    position: absolute;
    left: 7px;
    top: 104px;
    width: 0;
    height: 2px;
    background: #00b4ff;
    transform-origin: left top;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .welcome-txt .welcome-content .verticle-txt.crx-animated:after {
    width: 100px;
    -webkit-transition: all 0.8s ease 0.5s;
    -moz-transition: all 0.8s ease 0.5s;
    -ms-transition: all 0.8s ease 0.5s;
    -o-transition: all 0.8s ease 0.5s;
    transition: all 0.8s ease 0.5s;
  }
  .welcome-txt .welcome-content .content-wrapper {
    width: 71%;
  }
  .welcome-txt .welcome-content .content-wrapper h2 {
    line-height: 1.1;
    margin-bottom: 35px;
  }
  .welcome-txt .welcome-content .content-wrapper .description {
    margin-bottom: 50px;
  }
  .welcome-txt .welcome-content .content-wrapper h2,
  .welcome-txt .welcome-content .content-wrapper .description,
  .welcome-txt .welcome-content .content-wrapper .cr-btn-default {
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
  }
  .welcome-txt .welcome-content .content-wrapper h2.crx-animated,
  .welcome-txt .welcome-content .content-wrapper .description.crx-animated,
  .welcome-txt .welcome-content .content-wrapper .cr-btn-default.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  .welcome-txt .welcome-content .content-wrapper h2 {
    -webkit-transition: all 0.8s ease 0.3s;
    -moz-transition: all 0.8s ease 0.3s;
    -ms-transition: all 0.8s ease 0.3s;
    -o-transition: all 0.8s ease 0.3s;
    transition: all 0.8s ease 0.3s;
  }
  .welcome-txt .welcome-content .content-wrapper .description {
    -webkit-transition: all 0.8s ease 0.4s;
    -moz-transition: all 0.8s ease 0.4s;
    -ms-transition: all 0.8s ease 0.4s;
    -o-transition: all 0.8s ease 0.4s;
    transition: all 0.8s ease 0.4s;
  }
  .welcome-txt .welcome-content .content-wrapper .cr-btn-default {
    -webkit-transition: all 0.8s ease 0.5s;
    -moz-transition: all 0.8s ease 0.5s;
    -ms-transition: all 0.8s ease 0.5s;
    -o-transition: all 0.8s ease 0.5s;
    transition: all 0.8s ease 0.5s;
  }

  @media (max-width: 1199px) {
    .welcome-txt {
      padding: 140px 0 245px;
    }
  }

  @media (max-width: 991px) {
    .welcome-txt {
      padding: 110px 0 120px;
    }
    .welcome-txt .welcome-content {
      max-width: 100%;
      display: block;
    }
    .welcome-txt .welcome-content .verticle-txt.crx-animated {
      padding-right: 0;
      left: inherit;
      -webkit-transform: inherit;
      -moz-transform: inherit;
      -ms-transform: inherit;
      -o-transform: inherit;
      transform: inherit;
      margin-bottom: 30px;
    }
    .welcome-txt .welcome-content .verticle-txt:after {
      left: 100px;
      top: 13px;
      width: 60px;
      -webkit-transform: inherit;
      -moz-transform: inherit;
      -ms-transform: inherit;
      -o-transform: inherit;
      transform: inherit;
    }
    .welcome-txt .welcome-content .content-wrapper {
      width: 100%;
    }
  }

  @media (max-width: 575px) {
    .welcome-txt .welcome-content {
      text-align: center;
    }
    .welcome-txt .welcome-content .verticle-txt {
      width: 100%;
    }
    .welcome-txt .welcome-content .verticle-txt:after {
      display: none;
    }
  }
`;
