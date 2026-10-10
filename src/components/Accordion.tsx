"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export function Accordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#0B3B24]/10 border-y border-[#0B3B24]/10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-4">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left gap-4 font-serif text-base sm:text-lg font-bold text-[#0B3B24] hover:text-[#072617] transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="pt-3 pr-6 text-xs sm:text-sm text-[#4A5568] leading-relaxed animate-in fade-in duration-150">
                <p>{item.answer}</p>
                {item.category && (
                  <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#9E7D3B] bg-[#C5A059]/10 px-2 py-0.5 rounded-xs">
                    {item.category}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
