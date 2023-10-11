import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 13.5px 32px;
  width: 100%;

  border: none;
  border-radius: 8px;

  color: ${({ theme, $black }) =>
    $black ? theme.COLORS.ROSE : theme.COLORS.BACKGROUND_800};
  font-size: 16px;

  background: ${({ theme, $black }) =>
    $black ? "#0D0C0F" : theme.COLORS.ROSE};
`;
