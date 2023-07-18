"use client";

import { manufacturers } from "@/data/constant";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

type AutoCompleteInputProps = {
  value: string;
  onChange: (value: string) => void;
};
function AutoCompleteInput({ value, onChange }: AutoCompleteInputProps) {
  const [query, setQuery] = useState("");

  const filteredItems = query
    ? manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      )
    : manufacturers;

  return (
    <div className="search-manufacturer">
      <Combobox value={value} onChange={onChange}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Enter Car Model"
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(value: string) => value}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-10"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options>
              {filteredItems.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          active ? "font-bold" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected && (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-teal-900"
                          }`}
                        />
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default AutoCompleteInput;
