

export default function Home() {
  return (
    <div className="mx-10 md:mx-48 mt-10 md:mt-24 rounded-xl bg-green-200">
      <h1 className="grid place-items-center text-2xl">Inventory Management</h1>

      {/*Search bar */}
      <form className="max-w-md mx-auto my-2">
        <label htmlFor="inventorySearch" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="inventorySearch" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-opacity-10 bg-blue-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Inventory..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 bg-opacity-50 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
        </div>
      </form>

      <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
          <span>Table</span>
          <div className="flex space-x-2">
            <button className="text-blue-500">+</button>
            <button className="text-blue-500">-</button>
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
          <span>Table</span>
          <div className="flex space-x-2">
            <button className="text-blue-500">+</button>
            <button className="text-blue-500">-</button>
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
          <span>Table</span>
          <div className="flex space-x-2">
            <button className="text-blue-500">+</button>
            <button className="text-blue-500">-</button>
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
          <span>Table</span>
          <div className="flex space-x-2">
            <button className="text-blue-500">+</button>
            <button className="text-blue-500">-</button>
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">
          <span>Table</span>
          <div className="flex space-x-2">
            <button className="text-blue-500">+</button>
            <button className="text-blue-500">-</button>
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg flex justify-between items-center">

        </div>

      </div>



    </div>
  );
}
