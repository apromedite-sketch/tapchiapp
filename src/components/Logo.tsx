/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center select-none py-1">
      {/* PHI LONG */}
      <h1 
        className="font-serif text-3xl md:text-4xl font-normal tracking-[0.18em] text-charcoal text-center leading-none select-none mr-[-0.18em]"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        PHI LONG
      </h1>
      
      {/* STUDIO */}
      <div 
        className="text-[11px] md:text-xs font-serif tracking-[0.6em] text-bronze font-bold mt-1.5 select-none mr-[-0.6em] uppercase"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      >
        STUDIO
      </div>
    </div>
  );
}

