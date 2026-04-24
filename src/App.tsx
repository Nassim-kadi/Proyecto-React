import { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./hooks";

const url = "https://api.example.com/data";

interface Data {
  name: string;
  lasrtName: string;
  age: number;
}
function App() {
  const { data, loading, error } = useFetch<Data>(url);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
