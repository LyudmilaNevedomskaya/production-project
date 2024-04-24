import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { AboutPage } from "src/pages/AboutPage"
import { MainPage } from "src/pages/MainPage"
import { routeConfig } from "src/shared/config/routeConfig/routeConfig"

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route 
              key={path}
              element={element}
              path={path}
            />
          ))}
        </Routes>
      </Suspense>
  )
}

export default AppRouter;