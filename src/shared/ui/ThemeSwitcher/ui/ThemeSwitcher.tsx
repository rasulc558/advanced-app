import { classNames } from "shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "../assets/icons/theme-light.svg";
import DarkIcon from "../assets/icons/theme-dark.svg";
import { Theme, useTheme } from "app/provider/themeProvider";
import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
