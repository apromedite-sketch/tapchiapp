/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbSegment = {
  label: string;
  path?: string; // If undefined, this is the current active segment
};

type BreadcrumbProps = {
  segments: BreadcrumbSegment[];
  onNavigate: (path: string) => void;
};

export default function Breadcrumb({ segments, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 py-4 text-xs font-mono text-charcoal/60 uppercase tracking-wider mb-6 border-b border-gold/10">
      {/* Root Home node */}
      <a
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("/");
        }}
        className="flex items-center gap-1 hover:text-gold transition-colors duration-200"
        id="breadcrumb-home"
      >
        <Home size={12} />
        <span>Trang chủ</span>
      </a>

      {segments.map((seg, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={11} className="text-gold/40" />
          {seg.path ? (
            <a
              href={`#${seg.path}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(seg.path!);
              }}
              className="hover:text-gold transition-colors duration-200 font-semibold"
              id={`breadcrumb-seg-${idx}`}
            >
              {seg.label}
            </a>
          ) : (
            <span className="text-charcoal font-bold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
              {seg.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
