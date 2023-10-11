import styled from "styled-components";
import backgroundImg from "../../assets/bg-login.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 450px) {
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 134px;

  h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 48px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: end;
    font-size: 14px;
    font-weight: 400;
    text-align: left;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
  }

  button {
    margin: 0 auto;
    margin-top: 24px;
  }

  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

  @media (max-width: 450px) {
    display: none;
  }
`;
