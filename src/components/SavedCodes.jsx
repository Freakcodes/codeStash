import React from 'react';

const SavedCodes = ({ snippets }) => {
  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">My Saved Codes</h1>
      <div className="w-full max-w-3xl grid gap-6">
        {snippets && snippets.length > 0 ? (
          snippets.map((snippet, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-teal-600 mb-2">
                {snippet.title}
              </h2>
              <p className="text-gray-700 mb-4">{snippet.description}</p>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto">
                <code>{snippet.code}</code>
              </pre>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No code snippets saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default SavedCodes;
