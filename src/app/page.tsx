import SearchBar from "@/components/SearchBar";
import ShowGameResult from "@/components/ShowGameResult";
import ShowCharactersResult from "@/components/ShowCharactersResult";
import CategoryPicker from "@/components/CategoryPicker";
export default async function Home() {

  return (

    <div className="relative w-4/6 mx-auto mt-8">
      <CategoryPicker />
      <SearchBar />
      <ShowGameResult />
      <ShowCharactersResult />
    </div>
  );
}
