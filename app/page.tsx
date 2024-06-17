import { Header } from "@/components/header";
import Table from "./table";

export default async function Home() {
  return (
    <main className="flex flex-col h-full gap-4">
      <Header />
      {/* <div className="h-full w-full bg-black">hi</div> */}
      <Table />
    </main>
  );
}
