"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

type Pitch = {
  name: string;
  decision?: string;
  link?: string;
  members?: { name: string; profileLink: string }[];
};

const Pager = ({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (page: number) => void;
}) => {
  const getPagerButtons = () => {
    const buttons = [1];
    const maxPage = Math.ceil(total / 10);
    if (maxPage === 1) return [];

    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(maxPage - 1, current + 1);
      i++
    ) {
      buttons.push(i);
    }
    if (maxPage !== 1) buttons.push(maxPage);

    return buttons.filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
  };

  return (
    <div>
      {getPagerButtons().length > 0 && (
        <div className="flex justify-center space-x-2 mt-6">
          {["<", ...getPagerButtons(), ">"].map((page) => (
            <button
              key={page}
              className={cn(
                "aspect-square w-9 rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm hover:border-primary hover:text-primary transition-colors",
                current === page && "bg-primary text-white border-primary shadow",
                ((page === "<" && current === 1) ||
                  (page === ">" && current === Math.ceil(total / 10))) &&
                  "!bg-gray-100 !text-gray-400 !border-gray-200"
              )}
              disabled={
                (page === "<" && current === 1) ||
                (page === ">" && current === Math.ceil(total / 10))
              }
              onClick={() => {
                if (typeof page === "number") onChange(page);
                else if (page === "<" && current > 1) onChange(current - 1);
                else if (page === ">" && current < Math.ceil(total / 10))
                  onChange(current + 1);
              }}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const decisionStyle = (decision?: string) => {
  if (!decision) return "bg-yellow-50 text-yellow-800 border-yellow-200";
  const normalized = decision.toLowerCase();
  if (normalized.includes("yes") || normalized.includes("buy"))
    return "bg-green-50 text-green-800 border-green-200";
  if (normalized.includes("no") || normalized.includes("sell"))
    return "bg-red-50 text-red-700 border-red-200";
  return "bg-gray-100 text-gray-800 border-gray-200";
};

const PitchesTable = ({
  pitches,
  showMembers = false,
}: {
  pitches: Pitch[];
  showMembers?: boolean;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const visiblePitches = pitches.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm mt-2">
        <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800">
          <p className="col-span-6 md:col-span-6">Stock Name</p>
          <p className="col-span-3 md:col-span-2">Decision</p>
          {showMembers && <p className="col-span-3 md:col-span-4">Members</p>}
        </div>

        <div className="divide-y divide-gray-100">
          {visiblePitches.map((pitch, i) => (
            <div
              className="grid grid-cols-12 items-center px-4 py-3 text-sm sm:text-base bg-white"
              key={`${pitch.name}-${i}`}
            >
              <div className="col-span-6 md:col-span-6">
                {pitch.link ? (
                  <Link
                    href={pitch.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    {pitch.name}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-semibold">
                    {pitch.name}
                  </span>
                )}
              </div>

              <div className="col-span-3 md:col-span-2">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                    decisionStyle(pitch.decision)
                  )}
                >
                  {pitch.decision ? pitch.decision : "Pending"}
                </span>
              </div>

              {showMembers && (
                <div className="col-span-3 md:col-span-4 flex flex-wrap gap-2 text-gray-700">
                  {pitch.members?.map((member, idx) => (
                    <Link
                      key={`${member.profileLink}-${idx}`}
                      href={`/members/${member.profileLink}`}
                      className="text-sm font-medium text-gray-800 hover:text-primary transition-colors"
                    >
                      {member.name}
                    </Link>
                  )) || <span className="text-gray-500">—</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Pager total={pitches.length} current={currentPage} onChange={setCurrentPage} />
    </>
  );
};

export type { Pitch };
export default PitchesTable;
