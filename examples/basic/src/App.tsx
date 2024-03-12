import * as React from "react";
import { Routes, Route, Outlet, useParams } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/parent/:id" element={<Parent />}>
              <Route path="sub1" element={React.createElement('h1',{},'sub1')}></Route>
              <Route path="sub2" element={React.createElement('h1',{},'sub2')}></Route>
          </Route>
      </Routes>
    </div>
  );
}

function Parent() {
  const { id } = useParams<{id: string}>()
  
  return (
    <div>
      <h2>Parent: {id}</h2>
      <Outlet/>
    </div>
  );
}

