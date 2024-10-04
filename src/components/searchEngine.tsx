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
    <div className='flex'>
        <div className="gcse-search"></div>
    </div>
  )
}

export default SearchEngine