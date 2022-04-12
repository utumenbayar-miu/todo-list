import { useParams } from "react-router-dom";

export default function TodoDetails() {
  const { id } = useParams();
  return <div>TodoDetails id: {id}</div>;
}
