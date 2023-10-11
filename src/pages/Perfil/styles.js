import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    height: 144px;
    display: flex;
    align-items: center;
    background: rgba(255, 133, 155, 0.05);

    button {
      margin-left: 168px;
    }
  }
`;

export const ProfileInfo = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 340px;
  margin: 0 auto;

  .profile {
    margin: 0 auto;
    width: 186px;
    height: 186px;
    position: relative;
    margin-bottom: 64px;
    margin-top: -100px;

    img {
      width: 186px;
      height: 186px;
      border-radius: 93px;
    }

    label {
      position: absolute;
      bottom: 4px;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: ${({ theme }) => theme.COLORS.ROSE};

      cursor: pointer;

      input {
        display: none;
      }

      > svg {
        color: black;
        font-size: 20px;
      }
    }
  }

  div:nth-child(4) {
    margin-top: 24px;
  }

  button {
    margin-top: 24px;
  }
`;
