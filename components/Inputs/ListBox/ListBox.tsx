"use client";

import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { ListBoxItem, ListBoxOption } from "./ListBoxItem";

type CustomListBoxProps = {
  items: ListBoxOption[];
  name?: string;
} & (
  | {
      selected: ListBoxOption[];
      setSelected: (value: ListBoxOption[]) => void;
      multiple: true;
    }
  | {
      selected: ListBoxOption;
      setSelected: (value: ListBoxOption) => void;
      multiple: false;
    }
);

type SingleListBoxProps = {
  items: ListBoxOption[];
  name?: string;
  selected: ListBoxOption;
  setSelected: (value: ListBoxOption) => void;
};

type MultipleListBoxProps = {
  items: ListBoxOption[];
  name?: string;
  selected: ListBoxOption[];
  setSelected: (value: ListBoxOption[]) => void;
};

export const CustomListBox = ({
  multiple = false,
  ...props
}: CustomListBoxProps) =>
  multiple ? (
    <MultipleListBox {...(props as MultipleListBoxProps)} />
  ) : (
    <SingleListBox {...(props as SingleListBoxProps)} />
  );

const MultipleListBox = ({
  items,
  name,
  selected,
  setSelected,
}: MultipleListBoxProps) => (
  <Listbox value={selected} onChange={setSelected} multiple={true} name={name}>
    <div className="relative mt-1">
      <Listbox.Label>Assignee:</Listbox.Label>
      <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-xl focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        <span className="block truncate">
          {selected.map((e) => e.name).join(", ")}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-slate-800 py-1 text-base shadow-xl ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {items.map((item) => (
            <ListBoxItem key={item.id} {...item} />
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);

const SingleListBox = ({
  items,
  name,
  selected,
  setSelected,
}: SingleListBoxProps) => (
  <Listbox value={selected} onChange={setSelected} name={name} multiple={false}>
    <div className="relative mt-1">
      <Listbox.Label>Assignee:</Listbox.Label>
      <Listbox.Button className="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-xl focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        <span className="block truncate">{selected.name}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-slate-800 py-1 text-base shadow-xl ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {items.map((item) => (
            <ListBoxItem key={item.id} {...item} />
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);
