import { Route, Routes } from "react-router-dom";
import FavoritePage from "./components/favorite/FavoritePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
};

export default App;
