import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import Loading from "./components/Loading";
import { temaEscuro } from "./style";

const Home = lazy(() => import("./pages/Home"));
const APOD = lazy(() => import("./pages/APOD/APODContainer"));
const MarsPhoto = lazy(() => import("./pages/MarsPhoto"));

const navigation = [
  { path: "/", element: <Home /> },
  { path: "/nasa/APOD", element: <APOD /> },
  { path: "/nasa/MarsHoverPhoto", element: <MarsPhoto /> },
];

function App() {
  return (
    <ThemeProvider theme={temaEscuro}>
      <AppContainer>
        <Suspense fallback={<Loading />}>
          <Routes>
            {navigation.map((route, key) => (
              <Route key={key} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  overflow-x: hidden;

  display: block;
`;

export default App;
