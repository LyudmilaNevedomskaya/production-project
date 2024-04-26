import { Theme, useTheme } from "src/app/providers";
import { classNames } from "src/shared/lib/classNames/classNames";
import cls from "../ui/ThemeSwitcher.module.scss";
import LightIcon from "/src/shared/assets/icons/theme-light.svg";
import DarkIcon from "/src/shared/assets/icons/theme-dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </button>
  )
}


