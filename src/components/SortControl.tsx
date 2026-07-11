/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpDown } from "lucide-react";

export type SortOption = "newest" | "views" | "alphabetical";

type SortControlProps = {
  selected: SortOption;
  onChange: (option: SortOption) => void;
};

export default function SortControl({ selected, onChange }: SortControlProps) {
  const options = [
    { value: "newest", label: "Mới nhất" },
    { value: "views", label: "Xem nhiều nhất" },
    { value: "alphabetical", label: "Theo tên A–Z" },
  ];

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs font-mono text-charcoal/60 uppercase tracking-wider flex items-center gap-1">
        <ArrowUpDown size={13} />
        Sắp xếp:
      </span>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="px-3 py-1.5 bg-charcoal/5 hover:bg-charcoal/10 border border-gold/20 focus:border-gold rounded font-sans text-xs text-charcoal font-semibold focus:outline-none cursor-pointer transition-all duration-300"
        id="select-sort"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
