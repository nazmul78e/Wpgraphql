import css from "styled-jsx/css";
export default css`
  .cr-team {
    padding-top: 150px;
    padding-bottom: 50px;
  }
  .cr-team .section-title {
    margin-bottom: 65px;
  }
  .cr-team .team-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -60px;
  }
  .cr-team .single-member {
    width: calc(33.3333% - 60px);
    margin-left: 60px;
    margin-bottom: 80px;
  }
  .cr-team .single-member .member-img {
    position: relative;
    margin-bottom: 33px;
  }
  .cr-team .single-member .member-img .social-contact {
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    display: flex;
    flex-flow: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    background: rgba(20, 19, 78, 0.75);
  }
  .cr-team .single-member .member-img .social-contact li {
    display: inline-block;
    -webkit-transform: translateX(35px);
    -moz-transform: translateX(35px);
    -ms-transform: translateX(35px);
    -o-transform: translateX(35px);
    transform: translateX(35px);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  .cr-team .single-member .member-img .social-contact li a {
    color: #fff;
    font-size: 20px;
    padding: 5px 15px;
    display: block;
  }
  .cr-team .single-member .member-img .social-contact li a svg {
    width: 18px;
  }
  .cr-team .single-member .member-img .social-contact li a svg.fa-facebook-f {
    width: 13px;
  }
  .cr-team .single-member .member-img .social-contact li a:hover {
    color: #00b4ff;
  }
  .cr-team .single-member:hover .member-img .social-contact li {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(1) {
    -webkit-transition: all 0.5s ease 0.1s;
    -moz-transition: all 0.5s ease 0.1s;
    -ms-transition: all 0.5s ease 0.1s;
    -o-transition: all 0.5s ease 0.1s;
    transition: all 0.5s ease 0.1s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(2) {
    -webkit-transition: all 0.5s ease 0.2s;
    -moz-transition: all 0.5s ease 0.2s;
    -ms-transition: all 0.5s ease 0.2s;
    -o-transition: all 0.5s ease 0.2s;
    transition: all 0.5s ease 0.2s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(3) {
    -webkit-transition: all 0.5s ease 0.3s;
    -moz-transition: all 0.5s ease 0.3s;
    -ms-transition: all 0.5s ease 0.3s;
    -o-transition: all 0.5s ease 0.3s;
    transition: all 0.5s ease 0.3s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(4) {
    -webkit-transition: all 0.5s ease 0.4s;
    -moz-transition: all 0.5s ease 0.4s;
    -ms-transition: all 0.5s ease 0.4s;
    -o-transition: all 0.5s ease 0.4s;
    transition: all 0.5s ease 0.4s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(5) {
    -webkit-transition: all 0.5s ease 0.5s;
    -moz-transition: all 0.5s ease 0.5s;
    -ms-transition: all 0.5s ease 0.5s;
    -o-transition: all 0.5s ease 0.5s;
    transition: all 0.5s ease 0.5s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(6) {
    -webkit-transition: all 0.5s ease 0.6s;
    -moz-transition: all 0.5s ease 0.6s;
    -ms-transition: all 0.5s ease 0.6s;
    -o-transition: all 0.5s ease 0.6s;
    transition: all 0.5s ease 0.6s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(7) {
    -webkit-transition: all 0.5s ease 0.7s;
    -moz-transition: all 0.5s ease 0.7s;
    -ms-transition: all 0.5s ease 0.7s;
    -o-transition: all 0.5s ease 0.7s;
    transition: all 0.5s ease 0.7s;
  }
  .cr-team .single-member:hover .member-img .social-contact li:nth-child(8) {
    -webkit-transition: all 0.5s ease 0.8s;
    -moz-transition: all 0.5s ease 0.8s;
    -ms-transition: all 0.5s ease 0.8s;
    -o-transition: all 0.5s ease 0.8s;
    transition: all 0.5s ease 0.8s;
  }
  .cr-team .single-member > span {
    color: #7a7d8b;
    font-size: 14px;
    display: block;
    line-height: 26px;
    margin-top: 6px;
    letter-spacing: 1px;
    font-family: "CircularStd-Medium";
  }

  @media (max-width: 1199px) {
    .cr-team {
      padding-bottom: 60px;
    }
    .cr-team .team-wrapper {
      margin-left: -30px;
    }
    .cr-team .single-member {
      width: calc(33.3333% - 30px);
      margin-left: 30px;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 991px) {
    .cr-team {
      padding-top: 90px;
    }
    .cr-team .single-member {
      width: calc(50% - 30px);
    }
  }

  @media (max-width: 575px) {
    .cr-team .team-wrapper {
      margin-left: 0;
    }
    .cr-team .single-member {
      width: 100%;
      margin-left: 0;
      text-align: center;
      max-width: 400px;
      margin: 0 auto 50px;
    }
  }
`;
