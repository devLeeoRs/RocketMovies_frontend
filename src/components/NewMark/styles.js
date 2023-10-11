import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  > input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: ${({ $new, theme }) =>
      $new ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};

    &&::placeholder {
      color: ${({ $new, theme }) =>
        $new ? theme.COLORS.WHITE : theme.COLORS.GRAY_300};
    }
  }

  font-size: 16px;
  line-height: 16px;
  gap: 16px;

  border: ${({ $new }) => ($new ? "2px dashed #948F99" : "none")};
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  background: ${({ $new, theme }) =>
    $new ? "transparent" : theme.COLORS.BACKGROUND_900};

  > button {
    cursor: pointer;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 16px;
    cursor: pointer;
  }
`;
