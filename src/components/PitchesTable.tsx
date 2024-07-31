'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import Link from 'next/link';

type Pitch = {
  name: string;
  decision?: string;
  link?: string;
  members?: { name: string; profileLink: string }[];
};

const Pager = ({ total, current, onChange }: { total: number; current: number; onChange: (page: number) => void }) => {
  const getPagerButtons = () => {
    const buttons = [1];
    const maxPage = Math.ceil(total / 10);
    if (maxPage === 1) return [];

    for (let i = Math.max(2, current - 1); i <= Math.min(maxPage - 1, current + 1); i++) {
      buttons.push(i);
    }
    if (maxPage !== 1) buttons.push(maxPage);

    return buttons.filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
  };

  return (
    <div>
      {getPagerButtons().length > 0 && (
        <div className='flex justify-center space-x-2 mt-4'>
          {['<', ...getPagerButtons(), '>'].map((page) => (
            <button
              key={page}
              className={cn(
                'aspect-square w-[2.1rem] py-1 bg-blue-500 text-white rounded',
                current === page && 'bg-blue-700',
                ((page === '<' && current === 1) || (page === '>' && current === Math.ceil(total / 10))) && '!bg-gray-500'
              )}
              disabled={(page === '<' && current === 1) || (page === '>' && current === Math.ceil(total / 10))}
              onClick={() => {
                if (typeof page === 'number') onChange(page);
                else if (page === '<' && current > 1) onChange(current - 1);
                else if (page === '>' && current < Math.ceil(total / 10)) onChange(current + 1);
              }}>
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const PitchesTable = ({ pitches, showMembers = false }: { pitches: Pitch[]; showMembers?: boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const visiblePitches = pitches.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <div className='border-2 mt-2 child:flex child:child:p-1'>
        <div className='bg-gray-100 child:font-medium'>
          <p className='w-[50%] flex-grow'>Stock Name</p>
          <p className='w-[25%] sm:w-[20%] md:w-[15%] border-l-2'>Decision</p>
          {showMembers && <p className='w-[35%] sm:w-[30%] border-l-2'>Members</p>}
        </div>
        {visiblePitches.map((pitch, i) => (
          <div className={cn(i % 2 === 1 ? 'bg-gray-100' : 'bg-white')} key={pitch.name}>
            <p className='w-[50%] text-sm sm:text-base flex-grow'>{pitch.name}</p>
            <p className='w-[25%] sm:w[20%] md:w-[15%] text-sm sm:text-base border-l-2'>{pitch.decision ? pitch.decision : 'Pending'}</p>
            {showMembers && (
              <div className='w-[35%] sm:w-[30%] text-sm sm:text-base border-l-2'>
                {pitch.members?.map((member, i) => (
                  <span className={cn('mr-1', i === pitch.members!.length - 1 && 'mr-0')} key={i}>
                    <Link href={`/members/${member.profileLink}`} className='transition-all duration-200 hover:text-blue-500'>
                      {member.name}
                      {i === pitch.members!.length - 1 ? '' : ','}
                    </Link>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Pager total={pitches.length} current={currentPage} onChange={setCurrentPage} />
    </>
  );
};

export type { Pitch };
export default PitchesTable;
