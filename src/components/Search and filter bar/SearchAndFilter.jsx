import React from 'react'

function SearchAndFilter() {
  /**
   * Kishore : This component is used to add search bar
   * at the UI of the page..
   */
  return (
    <>
        <div className='flex flex-row w-full md:w-1/2 bg-gray-100 p-5 rounded-lg justify-between shadow-md'>
            <div className='flex flex-row items-center'>
                <input className='border pl-2 p-1 w-full md:w-96 outline-none'
                type="text" name="search"  id="" placeholder='Search here..' />
                <button className='btn ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Search
                </button>
            </div>
        </div>
    </>
  );
}

export default SearchAndFilter