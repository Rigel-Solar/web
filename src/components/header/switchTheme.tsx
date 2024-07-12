import React, { useMemo, useState } from 'react';
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';
import * as C from './styles';

type ThemeType = 'light' | 'dark';

interface ThemeButtonProps {
  theme: ThemeType;
  isActive: boolean;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, isActive, onClick }) => {
  const getIcon = () => (theme === 'light' ? <AiOutlineSun /> : <AiOutlineMoon />);
  const getLabel = () => (theme === 'light' ? 'Light' : 'Dark');

  return (
    <button className={isActive ? 'active' : ''} onClick={onClick}>
      {getIcon()}
      {getLabel()}
    </button>
  );
};

const SwitchTheme: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeType>('dark');

  const handleThemeChange = (theme: ThemeType) => {
    setActiveTheme(theme);
  };

  const renderThemeButtons = useMemo(() => {
    return (
      <C.Theme>
        <ThemeButton
          theme="light"
          isActive={activeTheme === 'light'}
          onClick={() => handleThemeChange('light')}
        />
        <ThemeButton
          theme="dark"
          isActive={activeTheme === 'dark'}
          onClick={() => handleThemeChange('dark')}
        />
      </C.Theme>
    );
  }, [activeTheme]);

  return <>{renderThemeButtons}</>;
};

export default SwitchTheme;
