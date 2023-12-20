import { useState } from "react";

import Counter from "./pages/counter";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import { CrudPage } from "./pages/CrudPage";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="/sayac" element={<Counter /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
