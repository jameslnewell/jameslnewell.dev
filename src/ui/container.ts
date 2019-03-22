import styled from 'styled-components';

export const container = () => `
  margin: auto;
  width: 100%;
  max-width: 1200px; /* TODO: use ems */
`;

export const Container = styled.div`
  ${container()}
`;
