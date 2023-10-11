import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 64px;
  align-items: center;

  width: 100%;
  height: 115px;

  border-bottom: 1px solid #3e3b47;
  margin: 0 auto;
  padding: 0 123px;

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 35px;
    border: 1px solid #3e3b47;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
      font-weight: 700;
      text-align: end;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 14px;
      font-weight: 400;
      text-align: right;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 19px 24px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  > input {
    background: transparent;
    border: none;
    margin-left: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    outline: none;
    font-size: 16px;
    width: 100%;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 14px;
  }

  @media (max-width: 723px) {
    display: none;
  }
`;

export const Logout = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: 14px;
  font-weight: 400;
  text-align: end;
`;
