'use client'
import Image from 'next/image'
import { useRef } from 'react'

import useNavigation from '#/hooks/useNavigation'

import TabNav from '#/ui/nav'
import Col from '#/ui/col'

export interface originalData {
  total: number,
  conin: number,
  width: number,
  finished: number,
  canClaim: boolean,
}

export interface ITableData extends originalData {
  section: number;
}

const originalData: originalData[] = [
  {
    total: 3,
    conin: 25,
    width: 108,
    finished: 1,
    canClaim: true,
  },
  {
    total: 6,
    conin: 60,
    width: 61,
    finished: 1,
    canClaim: false,
  },
  {
    total: 10,
    conin: 120,
    width: 39,
    finished: 1,
    canClaim: false,
  }
]

const TableData: ITableData[] = Array.from({ length: 9 }, (_, index) => {
  const item = originalData[index % originalData.length];

  return {
    ...item,
    section: Math.floor(index / 3)
  }
})


const tabs = ['</Course Completion>', 'Quest Winning Streak', 'Track Completion']


export default function Table() {

  const tabsRef = useRef<HTMLDivElement>(null);

  const { activeTab, setActiveTab, sectionRefs } = useNavigation(tabsRef, TableData);


  return (
    <div className="w-[1083px] h-[328px] mt-3 flex-shrink-0 rounded-[16px] bg-[#101010]">
      <div className="flex  mt-[40px]">
        <div className="  ml-[28px] w-146 text-gray-300 font-next-book text-16  font-bold leading-110">
          Milestones
        </div>
        <div className="ml-auto" ref={tabsRef}>
          <TabNav active={activeTab} setActive={setActiveTab} tabs={tabs} />
          <div>
            <Image
              className="mt-[1px]"
              src="/svgs/table-line.svg"
              alt="table-line"
              width={481}
              height={1}
              priority
            />
          </div>
        </div>

      </div>

      <div className="relative">
        <div className="mt-[32px] ml-[26px]  h-[180px] overflow-hidden  overflow-y-auto">
          {TableData.map(item => <Col {...item} sectionRefs={sectionRefs} />)}
        </div>
        <div className="absolute bottom-0 left-[0px]">
          <Image
            className=""
            src="/svgs/tablebom.svg"
            alt="tablebom"
            width={1083}
            height={30}
            priority
          />
        </div>
      </div>

    </div>
  )
}