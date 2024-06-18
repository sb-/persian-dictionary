import MainLayout from "../components/MainLayout";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-center mb-8">
        Persian-English Dictionary
      </h1>
      <SearchInput />
    </MainLayout>
  );
}
