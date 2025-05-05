import SearchBar from "@/components/SearchBar";
import ShowGameResult from "@/components/ShowGameResult";
import ShowCharactersResult from "@/components/ShowCharactersResult";
import CategoryPicker from "@/components/CategoryPicker";
export default async function Home() {

  return (

    <div className="relative flex flex-col items-center max-w-5xl mx-auto mt-8 p-10">
      <CategoryPicker />
      <SearchBar />
      <ShowGameResult />
      <ShowCharactersResult />
    </div>
  );
}
