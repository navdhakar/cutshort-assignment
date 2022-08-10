import styled from "styled-components";

const Indexstyle = styled.div`
  .main_form {
    height: 100vh;
    width: 400px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
      width: calc(100% - 40px);
      padding: 0 20px;
    }

    .form_main {
      width: 100%;
      .logo {
        margin-bottom: 50px;
        text-align: center;
        img {
          width: 100px;
        }
      }
      .logo1 {
        margin:10px;

        img {
          width: 100px;
        }
      }
    //    .MuiStep-horizontal:nth-child(1) .MuiStepIcon-root {
          color: #664de5;
        }
        .MuiStep-root:"& $active" {
          color: #664de5;
        }
        .MuiStepIcon-root {
          color: transparent;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
        }
        .MuiStepIcon-root:"& $active" {
          color: #664de5;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
        }
        .MuiStepIcon-text {
          fill: gray;
        }
        .MuiCard-root:active{
          border:1px solid #664de5;

        }
      .welcome {
        margin-bottom: 30px;
        margin-top: 50px;
        h3 {
          font-size: 28px;
          font-weight: 700;
          color: black;
          margin-bottom: 10px;
          text-align: center;
        }
        span {
          text-align: center;
          display: block;
          font-size: 14px;
          font-weight: 400;
          color: gray;
        }
      }
      .input_name {
        width: 100%;
        margin-top: 20px;
        span {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
          font-weight: 600;
        }
        input {
          margin-bottom: 25px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 5px;
          padding: 10px 0px 10px 15px;
          width: 95%;
          outline: none;
        }
      }
      .create_button {
        button {
          background-color: #664de5;
          width: 100%;
          color: #fff;
          border: none;
          display: inline-block;
          border-radius: 5px;
          font-size: 15px;
          padding: 10px 0;
        }
      }
    }
  }
`;

export default Indexstyle;
