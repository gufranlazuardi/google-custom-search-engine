"use client"

import React, { useEffect } from 'react'

const SearchEngine = () => {
    const fetchSearch = () => {
        const CX =`${process.env.NEXT_PUBLIC_CX}`
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://cse.google.com/cse.js?cx=${CX}`;
        document.body.appendChild(script);
    }

    useEffect(() => {
       fetchSearch()
    }, [])

  return (
    <div className="flex flex-col items-center">
      <form action="https://cse.google.com/cse" method="GET">
        <input type="hidden" name="cx" value={process.env.NEXT_PUBLIC_CX} />
        <input
          className="border p-2 rounded-md w-64"
          type="text"
          name="q"
          placeholder="Search..."
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md ml-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchEngine