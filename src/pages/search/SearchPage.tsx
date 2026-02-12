import { useState } from "react";
import SearchHeader from "../../components/searchPage/SearchHeader";
import SuggestionList from "../../components/searchPage/SuggestionList";
import SearchResults from "../../components/searchPage/SearchResults";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import ErrorBoundary from "../../components/ErrorBoundary";

const SearchPage = () => {
    const { query, setQuery, suggestions } = useSearchSuggestions();
    const [showResults, setShowResults] = useState(false);

    return (
        <div className="min-h-screen bg-white px-6">
            <ErrorBoundary>
                <main className="max-w-screen-md mx-auto mt-6 pb-20">
                    <SearchHeader
                        query={query}
                        onQueryChange={(val) => {
                            setQuery(val);
                            setShowResults(false);
                        }}
                    />
                    {showResults ? (
                        <SearchResults query={query} />
                    ) : (
                        <SuggestionList
                            suggestions={suggestions}
                            onSelect={(suggestion) => {
                                setQuery(suggestion.title);
                                setShowResults(true);
                            }}
                        />
                    )}
                </main>
            </ErrorBoundary>
        </div>
    );
};

export default SearchPage;
