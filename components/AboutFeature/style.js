import css from "styled-jsx/css";
export default css`
  .cr-cost {
    background: #00146b;
    padding-bottom: 100px;
  }
  .cr-cost .cost-content {
    width: 50%;
    padding-right: 60px;
  }
  .cr-cost .cost-content .single-cost {
    padding: 80px 100px 70px;
    position: relative;
  }
  .cr-cost .cost-content .single-cost:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 3;
    height: 100%;
    width: 100%;
    background: #00146b;
  }
  .cr-cost .cost-content .single-cost.crx-animated:before {
    height: 0;
    -webkit-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    -moz-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    -ms-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    -o-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
    transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06);
  }
  .cr-cost .cost-content .single-cost img {
    margin-bottom: 45px;
  }
  .cr-cost .cost-content .single-cost h4 {
    margin-bottom: 20px;
    font-size: calc(24px + (30 - 24) * ((100vw - 320px) / (2560 - 320)));
  }
  .cr-cost .cost-content .single-cost .description {
    text-align: justify;
  }
  .cr-cost .cost-content .single-cost h4,
  .cr-cost .cost-content .single-cost p {
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
    -ms-transform: translateY(50px);
    -o-transform: translateY(50px);
    transform: translateY(50px);
  }
  .cr-cost .cost-content .single-cost h4.crx-animated,
  .cr-cost .cost-content .single-cost p.crx-animated {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  .cr-cost .cost-content .single-cost h4.crx-animated {
    -webkit-transition: all 0.8s ease 0.6s;
    -moz-transition: all 0.8s ease 0.6s;
    -ms-transition: all 0.8s ease 0.6s;
    -o-transition: all 0.8s ease 0.6s;
    transition: all 0.8s ease 0.6s;
  }
  .cr-cost .cost-content .single-cost p.crx-animated {
    -webkit-transition: all 0.8s ease 0.8s;
    -moz-transition: all 0.8s ease 0.8s;
    -ms-transition: all 0.8s ease 0.8s;
    -o-transition: all 0.8s ease 0.8s;
    transition: all 0.8s ease 0.8s;
  }
  .cr-cost .cost-content .cost1 {
    background: #02135c;
    margin-bottom: 60px;
    margin-top: -340px;
  }
  .cr-cost .cost-content .cost1 h4 {
    color: #fff;
  }
  .cr-cost .cost-content .cost1 .icon {
    height: 120px;
    width: 120px;
    margin-bottom: 15px;
  }
  .cr-cost .cost-content .cost1 svg {
    height: 120px;
    width: 120px;
  }
  .cr-cost .cost-content .cost1 svg g.line {
    fill: #3939cd;
    stroke: #00b4ff;
    stroke-width: 10;
  }
  .cr-cost .cost-content .cost1 svg path {
    stroke-dashoffset: 257;
    stroke-dasharray: 254;
  }
  .cr-cost .cost-content .cost1 svg.crx-animated path {
    stroke-dashoffset: 383;
    -webkit-transition: all 1s ease 0.8s;
    -moz-transition: all 1s ease 0.8s;
    -ms-transition: all 1s ease 0.8s;
    -o-transition: all 1s ease 0.8s;
    transition: all 1s ease 0.8s;
  }
  .cr-cost .cost-content .cost1 .icon img {
    margin-bottom: 0;
    position: absolute;
    left: 48px;
    top: 34px;
    -webkit-transform: scale(0.1);
    -moz-transform: scale(0.1);
    -ms-transform: scale(0.1);
    -o-transform: scale(0.1);
    transform: scale(0.1);
  }
  .cr-cost .cost-content .cost1.crx-animated .icon img {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 1s cubic-bezier(0.67, -0.06, 0.18, 1.06) 1s;
    -moz-transition: all 1s cubic-bezier(0.67, -0.06, 0.18, 1.06) 1s;
    -ms-transition: all 1s cubic-bezier(0.67, -0.06, 0.18, 1.06) 1s;
    -o-transition: all 1s cubic-bezier(0.67, -0.06, 0.18, 1.06) 1s;
    transition: all 1s cubic-bezier(0.67, -0.06, 0.18, 1.06) 1s;
  }
  .cr-cost .cost-content .cost2 {
    background: #fff;
    margin-bottom: -285px;
    box-shadow: 0px -11px 40px 0px rgba(87, 95, 131, 0.12);
  }
  .cr-cost .cost-content .cost2 span {
    border-radius: 100%;
    display: block;
    -webkit-transition: all 0.8s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.9s;
    -moz-transition: all 0.8s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.9s;
    -ms-transition: all 0.8s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.9s;
    -o-transition: all 0.8s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.9s;
    transition: all 0.8s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.9s;
  }
  .cr-cost .cost-content .cost2 .circle-parent {
    width: 105px;
    height: 105px;
    position: relative;
    margin-bottom: 37px;
  }
  .cr-cost .cost-content .cost2 .circle-parent .circle-child1 {
    height: 58px;
    width: 58px;
    width: 105px;
    height: 105px;
    background-color: #00b4ff;
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute;
  }
  .cr-cost .cost-content .cost2 .circle-parent .circle-child2 {
    height: 58px;
    width: 58px;
    background-color: #00146b;
    right: 11px;
    top: 11px;
    z-index: 0;
    position: absolute;
  }
  .cr-cost .cost-content .cost2 .circle-parent .circle-child3 {
    height: 58px;
    width: 58px;
    background-color: #3939cd;
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 1;
  }
  .cr-cost .cost-content .cost2 .circle-parent .circle-child4 {
    height: 32px;
    width: 32px;
    background-color: #3939cd;
    position: absolute;
    bottom: 14px;
    left: 14px;
  }
  .cr-cost .cost-content .cost2 .circle-parent .circle-child5 {
    width: 20px;
    height: 20px;
    background-color: #3939cd;
    position: absolute;
    top: 17px;
    left: 17px;
  }
  .cr-cost .cost-content .cost2.crx-animated .circle-parent .circle-child2 {
    right: -1px;
    top: -35px;
  }
  .cr-cost .cost-content .cost2.crx-animated .circle-parent .circle-child3 {
    bottom: -10px;
    right: -11px;
  }
  .cr-cost .cost-content .cost2.crx-animated .circle-parent .circle-child4 {
    bottom: -1px;
    left: -2px;
  }
  .cr-cost .cost-content .cost2.crx-animated .circle-parent .circle-child5 {
    top: -22px;
    left: -3px;
  }
  .cr-cost .cost-img {
    width: 50%;
    position: relative;
  }
  .cr-cost .cost-img:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: #00146b;
  }
  .cr-cost .cost-img.crx-animated:before {
    width: 0;
    -webkit-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.4s;
    -moz-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.4s;
    -ms-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.4s;
    -o-transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.4s;
    transition: all 1.4s cubic-bezier(0.67, -0.06, 0.18, 1.06) 0.4s;
  }

  @media (max-width: 1500px) {
    .cr-cost .cost-content .single-cost {
      padding: 60px 60px 50px;
    }
  }

  @media (max-width: 1300px) {
    .cr-cost .cost-content {
      padding-right: 30px;
    }
    .cr-cost .cost-content .single-cost {
      padding: 50px 30px 40px;
    }
    .cr-cost .cost-content .cost1 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1199px) {
    .cr-cost {
      padding-bottom: 150px;
      padding-top: 200px;
    }
  }

  @media (max-width: 991px) {
    .cr-cost {
      padding-top: 120px;
      padding-bottom: 120px;
    }
    .cr-cost .cost-wrapper {
      display: block;
    }
    .cr-cost .cost-content {
      padding-right: 0;
      width: 100%;
    }
    .cr-cost .cost-content .cost1 {
      margin-top: 0;
    }
    .cr-cost .cost-content .cost2 {
      margin-bottom: 0;
      margin-bottom: 30px;
    }
    .cr-cost .cost-img {
      width: 100%;
    }
  }

  @media (max-width: 575px) {
    .cr-cost .cost-content .single-cost {
      padding: 40px 20px 30px;
      text-align: center;
    }
    .cr-cost .cost-content .single-cost img {
      margin: 0 auto 45px;
    }
    .cr-cost .cost-content .cost1 .icon {
      margin-left: auto;
      margin-right: auto;
    }
    .cr-cost .cost-content .single-cost .description {
      text-align: center;
    }
    .cr-cost .cost-content .cost2 .circle-parent {
      margin: 0 auto 37px;
    }
  }
`;
