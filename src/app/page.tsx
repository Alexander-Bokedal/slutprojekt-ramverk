import SearchBar from "@/components/SearchBar";
import { ShowResult } from "@/components/ShowResult";
export default async function Home() {
  return (
    <div className="relative w-full max-w-md mx-auto mt-8">
      <SearchBar />
      <ShowResult />
    </div>
  );
}
