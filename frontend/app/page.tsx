"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function Home() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("unreachable"));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Next.js frontend</h1>
      <p>Backend status: {status}</p>
    </main>
  );
}
