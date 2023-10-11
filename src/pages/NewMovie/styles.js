import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  margin: 40px auto;
  padding: 0 123px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
    font-weight: 500;
    margin-top: 24px;
  }

  > div:nth-child(3) {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }

  > textarea {
    width: 100%;
    height: 274px;
    margin-top: 40px;
    resize: none;

    padding: 19px 24px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border-radius: 10px;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
    font-weight: 400;
    margin: 40px 0 24px;
  }

  > div:nth-child(7) {
    margin-top: 40px;
    gap: 40px;
    display: flex;
  }

  @media (max-width: 723px) {
    padding: 0 20px;
  }
`;

export const Marks = styled.div`
  width: 100%;
  height: 88px;

  display: flex;
  align-items: center;

  padding: 16px;

  gap: 24px;
  align-self: stretch;
  border-radius: 8px;
  background: #0d0c0f;
`;
