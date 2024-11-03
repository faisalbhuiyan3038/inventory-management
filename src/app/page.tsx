"use client";
import { useEffect, useState } from "react";
import { addInventoryItem, removeInventoryItem, getInventoryItems } from '../inventoryService.js';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchText, setSearchText] = useState("");

  async function fetchInventory() {
    const items = await getInventoryItems();
    setInventory(items);
  }

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <div className="mx-10 md:mx-48 mt-10 md:mt-24 p-4 rounded-xl bg-green-200">
      <h1 className="grid place-items-center text-2xl">Inventory Management</h1>

      {/*Search bar */}
      <div className="max-w-md flex flex-2 mx-auto my-2">
        <form >
          <label htmlFor="inventorySearch" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="inventorySearch" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-opacity-10 bg-blue-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Inventory..." />

          </div>
        </form>
        <div>
          <button onClick={() => setIsModalOpen(true)}
            data-modal-target="addInventory-modal" className="relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative p-2 md:p-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Item
            </span>
          </button>

          {isModalOpen && (
            <div id="addInventory-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full  h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-full max-w-md max-h-full">
                {/* Modal content */}
                <div className="relative rounded-lg shadow bg-gray-700">
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Add new Item
                    </h3>
                    <button onClick={() => setIsModalOpen(false)}
                      type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <form className="p-4 md:p-5">
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type inventory name" />
                      </div>
                    </div>
                    <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                      Add new Item
                    </button>
                  </form>
                </div>
              </div>

            </div>
          )
          }
        </div>





      </div>

      <div className="grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {inventory.map(({ name, quantity }) => (
          <div key={name} className="p-3 bg-blue-100 rounded-lg flex justify-between items-center">
            <span className="text-xl">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  addInventoryItem(name);
                  fetchInventory();
                }}
                className="text-2xl text-blue-500">+</button>
              <p className="text-2xl">{quantity}</p>
              <button
                onClick={() => {
                  removeInventoryItem(name);
                  fetchInventory();
                }}
                className="text-2xl text-blue-500">-</button>
            </div>
          </div>
        ))}

      </div>



    </div>
  );
}
