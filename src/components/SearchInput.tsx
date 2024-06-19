import { useState } from "react";
import { words } from "../data/words";
import Link from "next/link";

function hasOnlyEnglishCharacters(str: string): boolean {
  const englishCharRegex = /^[A-Za-z\s]*$/;
  return englishCharRegex.test(str);
}

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const isEnglish = /^[a-zA-Z\s]*$/.test(search);

  const fuseSearch =
    search.length >= 2 && isEnglish
      ? words.filter((w) =>
          w.english.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  const results = fuseSearch.length > 10 ? fuseSearch.slice(0, 10) : fuseSearch;

  return (
    <div className="w-96">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-96 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-500 transition-colors hover:border-gray-600 hover:bg-gray-700"
        placeholder="Enter an English or Persian word"
      />
      {results.length > 0 && (
        <div className="absolute mt-1 w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
          {results.map((r) => (
            <Link href={`/word/${r.english}`} key={r.english}>
              <div className="group p-4 border-b border-gray-800 transition-colors hover:bg-gray-700 cursor-pointer">
                <p className="text-gray-100">{r.english}</p>
                <p className="text-sm text-gray-400">
                  ({r.part_of_speech} - {r.usage}) {r.persian}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
