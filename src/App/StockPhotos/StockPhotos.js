

import React, { useEffect, useMemo, useState } from "react";
import Photo from "./Photo";

import { ReactComponent as Logo } from "./loading.svg";
import { fetchData, getScrollDirection, throttle } from "./utils";
import SearchBar from "../SearchBar";

export default function StockPhotos() {
  const [photosJSON, setPhotos] = useState([]);
  const [pageNo, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [debouncedValue, updateDebouncedValue] = useState(null);
  const [filteredPhotos, setFilteredPhotos] = useState([...photosJSON]);

  // Preserved original data
  useEffect(() => {
    setFilteredPhotos(photosJSON);
  }, [photosJSON]);
  const payload = { setPhotos, setPage, setLoading };

  useEffect(() => {
    const controller = new AbortController();

    const { signal } = controller;
    fetchData(payload, signal);
    return () => controller.abort();
  }, []);

  function handleScroll() {
    const controller = new AbortController();
    const { signal } = controller;

    if (getScrollDirection() === "up") {
      controller.abort();
    }

    if (
      window.innerHeight >
      document.body.offsetHeight - window.scrollY - 200
    ) {
      fetchData(payload, signal);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 500));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMemo(() => {
    const filterPhotos = photosJSON.filter((photo) =>
      photo["title"].includes(debouncedValue)
    );

    setFilteredPhotos(filterPhotos);
  }, [debouncedValue, photosJSON]);

  return (
    <>
      <>
        <div className='photosContainer'>
          <SearchBar changeHandler={updateDebouncedValue} />
        </div>
        {filteredPhotos &&
          filteredPhotos.map((photo, i) => {
            return <Photo key={i} data={photo} />;
          })}

        <>
          {loading && (
            <div className='logo margin-50'>
              <Logo />
            </div>
          )}
        </>
      </>
    </>
  );
}
