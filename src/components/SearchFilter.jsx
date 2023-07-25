import { useState } from "react";
import down from "../../public/down.png";
import search from "../../public/search.png";

const SearchFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setFilters({ ...filters, category: "", search: searchTerm });
  };

  const categories = ["Cakes", "Burgers", "Pizzas", "Oils", "Drinks", "All"];
  return (
    <div className="flex  gap-12 items-center mt-16">
      <div className="bg-white rounded-md p-3 border text-small flex justify-center items-center">
        <input
          className="outline-none border-none text-black"
          type="text"
          placeholder="Search by genre, name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img width={20} src={search} alt="" />
        </button>
      </div>
      <div className="relative">
        <div className="p-3 rounded-lg bg-white text-black text-small flex items-center justify-between gap-4 border">
          <span>{filter}</span>
          <img src={down} width={20} alt="" onClick={() => setOpen(!open)} />
        </div>
        {open && (
          <div className=" flex flex-col gap-4 bg-white p-4 rounded-lg absolute top-16 shadow-lg text-black z-50  w-[300px]">
            {categories.map((category, idx) => {
              return (
                <>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setFilter(category);
                      // setFilters({
                      //   ...filters,
                      //   search: "",

                      //   category: category,
                      // });
                      setOpen(!open);
                    }}
                    key={idx}
                  >
                    {category}
                  </span>
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
