import { Link } from "react-router-dom";
import { students } from "./data";

export default function StudentList() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Names Of students:</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            <Link to={`/student/${s.id}`}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
