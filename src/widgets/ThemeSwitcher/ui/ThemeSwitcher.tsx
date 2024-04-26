import { Theme, useTheme } from "src/app/providers";
import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "../ui/ThemeSwitcher.module.scss";
import LightIcon from "/src/shared/assets/icons/theme-light.svg";
import DarkIcon from "/src/shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}


