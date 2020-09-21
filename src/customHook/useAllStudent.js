import { useEffect, useState } from "react";
import { searchAllStudents } from "../services/student";

export default function UseAllStudent() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await searchAllStudents();
      setRes(response);
    })();
  }, []);

  return res;
}
