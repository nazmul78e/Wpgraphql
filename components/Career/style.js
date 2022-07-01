import css from "styled-jsx/css";
export default css`
  .cr-join-team {
    background: #f3f7ff;
    padding-bottom: 130px;
    padding-top: 143px;
    margin-top: 52px;
    position: relative;
  }
  .cr-join-team .join-content {
    max-width: 745px;
    padding-left: 216px;
    overflow: hidden;
  }
  .cr-join-team .join-content h2 {
    margin-bottom: 25px;
  }

  .cr-join-team .join-content .description {
    margin-bottom: 45px;
  }

  @media (min-width: 1922px) {
    .team-illustration-wrapper {
      max-width: 1920px;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      right: 50%;
      transform: translateX(50%);
      z-index: 2;
    }
  }

  @media (max-width: 1700px) {
    .cr-join-team {
      margin-top: 12px;
    }
    .cr-join-team .join-content {
      max-width: 825px;
      padding-left: 306px;
    }
  }

  @media (max-width: 1500px) {
    .cr-join-team {
      padding-bottom: 100px;
      padding-top: 93px;
      margin-top: 0;
    }
  }

  @media (max-width: 1300px) {
    .cr-join-team .join-content {
      max-width: 755px;
      padding-left: 236px;
    }
  }

  @media (max-width: 1199px) {
    .cr-join-team .join-content {
      max-width: 525px;
      padding-left: 0;
    }
  }

  @media (max-width: 991px) {
    .cr-join-team .team-illustration2 {
      max-width: 330px;
    }
    .cr-join-team .join-content {
      max-width: 385px;
    }
  }

  @media (max-width: 767px) {
    .cr-join-team .team-illustration2 {
      display: none;
    }
    .cr-join-team {
      padding-bottom: 70px;
    }
    .cr-join-team .join-content {
      max-width: 100%;
      text-align: center;
    }
  }
`;
