import SearchBar from "@/components/SearchBar";
import { ShowResult } from "@/components/ShowResult";
import CategoryPicker from "@/components/CategoryPicker";
export default async function Home() {

  return (

    <div className="relative w-4/6 mx-auto mt-8">
      <CategoryPicker />
      <SearchBar />
      <ShowResult />
    </div>
  );
}
