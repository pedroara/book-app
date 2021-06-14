import React, { useState, useEffect, useCallback } from "react";
import { fetchBooks } from "../../processes/bookProcesses";
import { useDispatch } from "react-redux";
import SearchForm from "./SearchForm";

export default function SearchFormContainer(props) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    !searchValue && dispatch({ type: "FORM_NOT_USED" });
  }, [searchValue, dispatch]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch({ type: "FORM_USED" });
      searchValue && fetchBooks(searchValue, dispatch);
    },
    [searchValue, dispatch]
  );

  return <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} />;
}
