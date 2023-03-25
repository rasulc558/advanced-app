import React from "react";

export const MainPageAsync = React.lazy(
  () =>
    // Добавим искуственную задержку для проверки lazy
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
