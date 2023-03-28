import React from "react";
import { classNames } from "shared/lib/classNames";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToglle = () => {
    setCollapsed((p) => !p);
  };

  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToglle}>Toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
