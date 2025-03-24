export function SearchBar ({setSearchQuery}) {

  const handleSearchQuery = (e) => setSearchQuery(e.target.value);

    return (
        <li className="bg-[#252728] p-4 cursor-pointer text-neutral-600">
        <form
          action=""
          className="flex"
          onClick={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent rounded focus:outline-none focus:ring-0 text-neutral-200 placeholder-neutral-40 border-2 border-[#3b3d3e] p-2"
            onChange={handleSearchQuery}
          />
        </form>
      </li>
    )
}