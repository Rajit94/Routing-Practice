import { useParams, Link } from "react-router-dom";
import { students } from "./data";

export default function StudentDetail() {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) return <h2>Student Not Found</h2>;

  return (
    <div>
      <h2>Student Details</h2>
      <p><b>ID:</b> {student.id}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Company:</b> {student.company}</p>
      <Link to="/">⬅ Back to List</Link>
    </div>
  );
}
