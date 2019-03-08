
import React from 'react';
import { SearchField } from 'gestalt';

interface Props {
  search: string;
  onSearchChanged?: (e: string) => void;
}

export const SearchBar = ({ search, onSearchChanged }: Props) =>
  (<SearchField
    accessibilityLabel="Search Bar"
    id="search-bar"
    onChange={({ value }) => onSearchChanged && onSearchChanged(value)}
    placeholder="Search and explore movies"
    value={search}
  />);