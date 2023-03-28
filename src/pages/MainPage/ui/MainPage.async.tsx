import React from 'react';

export const MainPageAsync = React.lazy(
  async () =>
    // Добавим искуственную задержку для проверки lazy
    await new Promise((resolve) => {
      // @ts-expect-error
      setTimeout(() => { resolve(import('./MainPage')); }, 1500);
    })
);
