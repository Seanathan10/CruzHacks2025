import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { TopBar as MobileTopBar } from "./dashboard/mobile/TopBar.tsx";
import { TopBar as DesktopTopBar } from "./dashboard/desktop/TopBar.tsx";

import { useMediaQuery } from "@mantine/hooks";
import { Context } from "./dashboard/Context.tsx";

function Peak() {
  const [count, setCount] = useState(0);

  const contextValues = { mobile: useMediaQuery("(max-width: 600px)") };

  return (
    <>
      <Context.Provider value={contextValues}>
        {contextValues.mobile ? <MobileTopBar /> : <DesktopTopBar />}
      </Context.Provider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="Peak-Logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="Peak-Logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="Peak-Card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default Peak;
