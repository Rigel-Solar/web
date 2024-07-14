import styled from "styled-components";

export const FakeInputContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayscale.gray_10};

  .label-container {
    display: block;
    margin-bottom: 0.7em;
    ${({ theme }) => theme.font.p.small};
    color: ${({ theme }) => theme.colors.grayscale.gray_30};
  }

  .value-container {
    ${({ theme }) => theme.font.p.normal};
    color: ${({ theme }) => theme.colors.grayscale.gray_60};
  }
`;
