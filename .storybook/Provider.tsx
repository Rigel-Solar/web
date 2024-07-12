// .storybook/Provider.tsx
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";import { theme } from '../src/styles/themes';

interface ProviderProps {
  children?: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;
