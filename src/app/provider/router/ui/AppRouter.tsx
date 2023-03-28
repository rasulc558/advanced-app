import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routesConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routesConfig).map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
