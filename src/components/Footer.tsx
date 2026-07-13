/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Waves, Plane, Sparkles, Mail, Compass, ShieldAlert, Award } from "lucide-react";

type FooterProps = {
  onNavigate: (path: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-charcoal text-ivory border-t-2 border-gold/40 py-8 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <p className="font-serif text-sm md:text-base tracking-widest text-ivory/80 uppercase" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          mọi bản quyền thuộc về philongcompanies
        </p>
      </div>
    </footer>
  );
}
