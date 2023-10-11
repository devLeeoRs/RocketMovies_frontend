import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  padding: 5px 16px;
  align-items: center;
  justify-content: center;
  background: ${({ $dark }) => ($dark ? "#312E38" : "#282124")};
  border: none;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
`;
