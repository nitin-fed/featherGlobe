

import React, { useEffect, useState } from "react";
import useDebounce from "./CustomHooks/useDebounce";

export default function SearchBar(props) {
  const { changeHandler } = props;
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search);

  useEffect(() => {
    changeHandler(debouncedValue);
  }, [changeHandler, debouncedValue]);

  return (
    <>
      Search:
      <input
        className={`w-full rounded-lg bg-transparent border border-gray-400 p-2 `}
        type='text'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </>
  );
}
