import css from "styled-jsx/css";
export default css`
  .cr-client-showcase {
    padding-bottom: 130px;
    padding-top: 143px;
    position: relative;
    margin-top: 150px;
  }
  .cr-client-showcase .overlay {
    width: 93%;
    background: #f3f7ff;
    right: 0;
    left: inherit;
  }
  .cr-client-showcase .section-title {
    margin-bottom: 63px;
  }
  .cr-client-showcase .showcase-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -20px;
    margin-right: -20px;
    position: relative;
  }
  .cr-client-showcase .showcase-wrapper:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #f3f7ff;
    bottom: 0;
    left: 0;
  }
  .cr-client-showcase .showcase-wrapper .single-image {
    width: calc(100% / 5);
    padding: 20px;
    border-left: 1px solid #c4d6fc;
    border-bottom: 1px solid #c4d6fc;
  }
  .cr-client-showcase .showcase-wrapper .single-image:nth-child(5n + 1) {
    border-left: none;
  }

  @media (max-width: 1700px) {
    .cr-client-showcase .overlay {
      width: 96%;
    }
  }

  @media (max-width: 1500px) {
    .cr-client-showcase .overlay {
      width: 100%;
    }
  }

  @media (max-width: 1300px) {
    .cr-client-showcase {
      padding-bottom: 90px;
      padding-top: 93px;
      margin-top: 100px;
    }
  }

  @media (max-width: 1199px) {
    .cr-client-showcase .showcase-wrapper .single-image {
      width: calc(100% / 4);
      padding: 15px;
    }
    .cr-client-showcase .showcase-wrapper .single-image:nth-child(5n + 1) {
      border-left: 1px solid #c4d6fc;
    }
    .cr-client-showcase .showcase-wrapper .single-image:nth-child(4n + 1) {
      border-left: none;
    }
  }

  @media (max-width: 991px) {
    .cr-client-showcase {
      margin-top: 0;
    }
    .cr-client-showcase .showcase-wrapper .single-image {
      width: calc(100% / 3);
    }
    .cr-client-showcase .showcase-wrapper .single-image:nth-child(4n + 1) {
      border-left: 1px solid #c4d6fc;
    }
    .cr-client-showcase .showcase-wrapper .single-image:nth-child(3n + 1) {
      border-left: none;
    }
  }

  @media (max-width: 767px) {
    .cr-client-showcase .section-title {
      margin-bottom: 40px;
    }
    .cr-client-showcase .showcase-wrapper .single-image {
      width: calc(100% / 2);
    }
    .cr-client-showcase .showcase-wrapper .single-image:nth-child(3n + 1) {
      border-left: 1px solid #c4d6fc;
    }
    .cr-client-showcase .showcase-wrapper .single-image:nth-child(2n + 1) {
      border-left: none;
    }
  }

  @media (max-width: 575px) {
    .cr-client-showcase .showcase-wrapper {
      margin-left: 0;
      margin-right: 0;
    }
    .cr-client-showcase .showcase-wrapper .single-image {
      width: 100%;
      border: none !important;
      padding: 10px 0;
    }
  }
`;
