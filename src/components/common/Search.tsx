import { NavLink } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchComponent = () => {
    return (
        <form className="flex mt-6 max-w-full mx-auto space-x-2">
            <label htmlFor="simple-search" className=" sr-only">Search</label>
            <NavLink to="/search" className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
                    <Search className='text-gray-400 cursor-pointer' />
                </div>
                <input type="text" id="simple-search" className=" px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body" placeholder="Search branch name..." required />
            </NavLink>
            <NavLink to="/filters" className="inline-flex items-center justify-center shrink-0 border border-default-medium text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded w-10 h-10 focus:outline-none">
                <SlidersHorizontal className='text-gray-400 cursor-pointer' />
            </NavLink>
        </form>
    );
}

export default SearchComponent;
