import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import { DictionaryEntry, words } from "../../data/words";

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const WordEntry: React.FC<{ entry: DictionaryEntry }> = ({ entry }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-md text-gray-100">
      <div className="border-b border-gray-700 pb-4 mb-4 text-gray-100">
        <h1 className="text-2xl font-bold text-center mb-2">
          {capitalize(entry.english)} ({entry.persian})
        </h1>
        <p className="text-lg italic text-center text-gray-400">
          {entry.pronunciation} - {entry.persian_vowels}
        </p>
      </div>

      <div className="border-b border-gray-700 pb-4 mb-4">
        <p className="text-sm font-semibold text-gray-400">
          Part of Speech:{" "}
          <span className="font-normal text-gray-200">
            {entry.part_of_speech}
          </span>
        </p>
        <p className="text-sm font-semibold text-gray-400">
          Category:{" "}
          <span className="font-normal text-gray-200">
            {capitalize(entry.category)}
          </span>
        </p>
      </div>

      <div className="border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Example Usage</h2>
        <p className="text-sm text-gray-300 mt-2">
          <strong>English:</strong> {entry.sentence}
        </p>
        <p className="text-sm text-gray-300 mt-2">
          <strong>Formal Persian:</strong> {entry.translation_formal}
        </p>
        <p className="text-sm text-gray-300 mt-2">
          <strong>Colloquial Persian:</strong> {entry.translation_colloquial}
        </p>
      </div>

      <div className="text-center">
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded-full hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          onClick={() => {
            const audio = new Audio(entry.file_url);
            audio.play();
          }}
        >
          Play Audio
        </button>
      </div>
    </div>
  );
};

export default function Word() {
  const router = useRouter();
  const { word } = router.query;

  const wordData = words.find(
    (entry: DictionaryEntry) => entry.english.trim() === word
  );

  if (!wordData) {
    return <MainLayout>Word not found</MainLayout>;
  }

  return (
    <MainLayout>
      <WordEntry entry={wordData} />
    </MainLayout>
  );
}
