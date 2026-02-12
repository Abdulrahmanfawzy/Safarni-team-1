import { useState, useMemo } from "react";
import type { Suggestion } from "../types/suggestion";
import { suggestions as allSuggestions } from "../data/suggestions";

export const useSearchSuggestions = (initialQuery: string = "") => {
    const [query, setQuery] = useState(initialQuery);

    const filteredSuggestions = useMemo(() => {
        if (!query.trim()) return allSuggestions;

        const lowercaseQuery = query.toLowerCase();
        return allSuggestions.filter(
            (s) =>
                s.title.toLowerCase().includes(lowercaseQuery) ||
                s.description.toLowerCase().includes(lowercaseQuery)
        );
    }, [query]);

    return {
        query,
        setQuery,
        suggestions: filteredSuggestions,
    };
};
