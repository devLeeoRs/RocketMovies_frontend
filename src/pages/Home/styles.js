import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    "header"
    "main";
`;

export const Main = styled.div`
  padding: 0 123px;
  grid-area: main;

  > header {
    display: flex;
    justify-content: space-between;
    margin-top: 47px;
  }

  > div {
    max-width: 207px;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 45px;
  max-height: 704px;
  overflow-y: auto;
`;

export const View = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding: 32px;
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);

  > h3 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0 15px;
  }

  > div:nth-child(4) {
    display: flex;
    gap: 8px;
  }

  cursor: pointer;
`;
