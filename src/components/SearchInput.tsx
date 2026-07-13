/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Search, X } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
};

export default function SearchInput({ value, onChange, placeholder = "Tìm kiếm bài viết..." }: SearchInputProps) {
  return (
    <div className="relative w-full md:max-w-xs">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal/40">
        <Search size={16} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2 bg-charcoal/5 border border-gold/20 rounded font-sans text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-gold focus:bg-charcoal/10 transition-all duration-300"
        id="input-search"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-charcoal/40 hover:text-charcoal transition-colors"
          aria-label="Xóa từ khóa tìm kiếm"
          id="btn-clear-search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
