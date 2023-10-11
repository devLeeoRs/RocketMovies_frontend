import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas:
    "header"
    "section";
`;

export const Section = styled.section`
  grid-area: section;

  margin: 40px 123px;
  max-height: 580px;
  overflow-y: auto;

  .title {
    display: flex;
    align-items: center;

    > h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-right: 19px;
    }

    margin-top: 24px;
  }

  .infos {
    display: flex;
    align-items: center;
    margin-top: 24px;
    gap: 8px;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 16px;
      font-weight: 400;

      img {
        border-radius: 35px;
        border: 1px solid #3e3b47;
      }
    }
  }

  .tags {
    display: flex;
    gap: 8px;
    margin-top: 40px;
  }

  > p {
    margin-top: 48px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
  }

  @media (max-width: 450px) {
    margin: 40px 20px;
  }
`;
