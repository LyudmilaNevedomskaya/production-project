import { useTranslation } from "react-i18next";
import { classNames } from "src/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Lang")}
    </Button>
  );
};
