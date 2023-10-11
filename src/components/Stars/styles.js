import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  > svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;
