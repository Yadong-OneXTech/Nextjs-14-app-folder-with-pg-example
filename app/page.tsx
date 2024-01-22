import Button from "@/components/button";
import Image from "next/image";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api')

  const { data } = await res.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}

      <Button />
    </main>
  );
}
