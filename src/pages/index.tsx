import MainLayout from "../components/MainLayout";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-center mb-8">
        Persian-English Dictionary
      </h1>
      <SearchInput />
      <div className="pt-4 text-center max-w-sm ">
        <p className="text-sm">
          Search English or Persian words above to get translations,
          pronunciation, and example sentences in both formal and colloquial
          Persian. This is an updated interface to the{" "}
          <a href="" className="underline hover:no-underline">
            Persian Learner&apos;s Dictionary
          </a>{" "}
          developed by Dr. Peyman Nojoumian.
        </p>
      </div>
    </MainLayout>
  );
}
