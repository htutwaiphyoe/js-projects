"use client";

import { useState } from "react";
import AutoCompleteInput from "./AutoCompleteInput";

export default function SearchBar() {
  const [manufacture, setManufacture] = useState("");

  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <AutoCompleteInput value={manufacture} onChange={setManufacture} />
      </div>
    </form>
  );
}
