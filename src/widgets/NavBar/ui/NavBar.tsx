import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
          Main Page
        </AppLink>

        <AppLink theme={AppLinkTheme.RED} to="/about">
          {" "}
          About Page
        </AppLink>
      </div>
    </div>
  );
};
