// .storybook/preview.ts
import { withThemeProvider } from 'storybook-addon-theme-provider';
import Provider from './Provider';
import { theme } from '../src/styles/themes';

export const decorators = [withThemeProvider(Provider)];

export const parameters = {
  globals: {
    selectedTheme: 'default',
    themes: [
      {
        name: 'default',
        color: 'white',
        themeObject: theme,
      },
      {
        name: 'dark',
        color: 'black',
        themeObject: theme,
      },
    ],
  },
};
