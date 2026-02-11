import ResultCard from "./ResultCard";
import { results } from "../../data/results";

// Assuming we might filter results based on query in the future, 
// using the query prop here, but relying on static 'París' results for this task.
interface SearchResultsProps {
    query: string;
}

const SearchResults = ({ query }: SearchResultsProps) => {
    const displayQuery = query || "Paris";

    return (
        <div className="pb-20">
            <h2 className="text-xl font-bold text-[#1E293B] mb-4">
                {displayQuery} <span className="text-gray-400 font-normal text-base">{results.length} Result</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {results.map((result) => (
                    <ResultCard key={result.id} result={result} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
