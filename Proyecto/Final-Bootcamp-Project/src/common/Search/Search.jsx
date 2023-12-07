// Search.jsx
import React, { useState, useRef, useEffect } from 'react';
import { bringMovies } from "../../services/apiCalls";
import './Search.css';
import { useSearch } from '../SearchContext';

const Search = () => {
    const [showInput, setShowInput] = useState(false);
    const { updateMovies } = useSearch();
    const [criteria, setCriteria] = useState("");
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        setShowInput(!showInput);
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    useEffect(() => {
        if (criteria !== "") {
            const debouncear = setTimeout(() => {
                bringMovies(criteria)
                    .then((resultado) => {
                        console.log(resultado, criteria);
                        updateMovies(resultado.data.results);
                    })
                    .catch((error) => console.log(error));
            }, 250);
            return () => clearTimeout(debouncear);
        }
    }, [criteria]);

    return (
        <div className="search-container">
            <button className="search-button" onClick={handleButtonClick}>
                Search
            </button>
            {showInput && <input
                ref={inputRef}
                type="text"
                name="criteria"
                placeholder="Enter your search"
                onChange={(e) => setCriteria(e.target.value)} />}
        </div>
    );
};

export default Search;
