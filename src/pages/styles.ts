import styled from "styled-components";

export const DefaultPageContainer = styled.section`
  width: 100%;
  padding: 0 20px;
  min-height: 100dvh;
  background-color: ${({theme}) => theme.colors.brand.background};
`;