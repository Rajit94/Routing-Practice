import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Student Dashboard</h1>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


