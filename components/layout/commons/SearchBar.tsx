import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchComponent from '../../bid/SearchComponent';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        // Implement your search logic here, such as redirecting to search results page
        console.log('Search value:', searchValue);
    };

    return (
        <div className="relative flex items-center w-full border-1 border-gray-500">
            <button
                type="button"
                onClick={handleSearch}
                className="h-full p2-2 py-2 bg-white text-gray-500 rounded-l focus:outline-none "
            >
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search products, brands and categories"
                className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button
                type="button"
                onClick={handleSearch}
                className="h-full uppercase px-4 py-2 bg-indigo-400 shadow hover:bg-indigo-500 text-white rounded-r focus:outline-none"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
