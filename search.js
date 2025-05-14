import React, { useState } from "react";
import { Plus, X } from "lucide-react"; // Import icons

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [urls, setUrls] = useState([]);

  // Handle input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Add URL to the list
  const addUrl = () => {
    if (searchQuery.trim() !== "" && !urls.includes(searchQuery)) {
      setUrls([...urls, searchQuery]);
      setSearchQuery(""); // Clear input after adding
    }
  };

  // Remove URL from the list
  const removeUrl = (index) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Search & Add URLs</h2>

      {/* Search Input & Add Button */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter URL..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 p-2 rounded-lg flex-grow"
        />
        <button
          onClick={addUrl}
          className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Display Added URLs */}
      {urls.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-1">Added URLs:</h3>
          <ul className="space-y-2">
            {urls.map((url, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-2 rounded-lg shadow-sm"
              >
                <span className="text-gray-800">{url}</span>
                <button
                  onClick={() => removeUrl(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
