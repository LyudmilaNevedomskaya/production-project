import { classNames } from "src/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "src/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "src/widgets/ThemeSwitcher";
import cls from "../ui/Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Home
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
