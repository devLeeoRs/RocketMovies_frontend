import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 18px 16px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  margin-top: 8px;

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
`;
