import { useTranslation } from "react-i18next";
import { classNames } from "src/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "src/shared/ui/AppLink/AppLink";
import cls from "../ui/Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const {t} = useTranslation('navbar');
  return (
    <div className={classNames(cls.navbar, {}, [])}>
      
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          {t("Home")}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        {t("About")}
        </AppLink>
      </div>
    </div>
  );
};
