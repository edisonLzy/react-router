import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/parent" element={<Parent />}>
              <Route path="sub1" element={React.createElement('h1',{},'sub1')}></Route>
              <Route path="sub2" element={React.createElement('h1',{},'sub2')}></Route>
          </Route>
      </Routes>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h2>Parent</h2>
      <Outlet/>
    </div>
  );
}

