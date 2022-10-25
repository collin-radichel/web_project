// import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;