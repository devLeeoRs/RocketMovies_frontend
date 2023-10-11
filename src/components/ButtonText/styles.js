import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.ROSE};

  border: none;
  background: none;
  outline: none;
`;
