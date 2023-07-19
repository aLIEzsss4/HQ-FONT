import Image from 'next/image'

import { ITableData } from './table'

interface ICol extends ITableData {
  sectionRefs: React.MutableRefObject<HTMLDivElement[]>,
}

const Col = (props: ICol) => {
  const { total, conin, width, finished, canClaim, sectionRefs, section } = props
  console.log({section})

  return (
    <div ref={el => sectionRefs.current[section] = el} className="mb-[12px] w-[1000px] h-[52px] flex-shrink-0   rounded-[16px]  bg-[#202020] flex items-center">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="162" height="53" viewBox="0 0 162 53" fill="none">
          <path d="M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z" fill="#292929" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z" fill="#232323" />
        </svg>
      </div>
      <p className="ml-[17px] w-[200px] text-white font-next-book text-sm font-normal leading-[120%]">
        Complete {total} Syntax
      </p>
      <Image
        className=""
        src="/coin.png"
        alt="coin"
        width={20}
        height={20}
        priority
      />
      <p className="w-[86px] ml-[4px] text-gray-300 text-left font-next-book text-sm font-normal  leading-tight">
        {conin}
      </p>
      <div className=" relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="275" height="12" viewBox="0 0 275 12" fill="none">
          <path d="M0 6C0 2.68629 2.68629 0 6 0H269C272.314 0 275 2.68629 275 6C275 9.31371 272.314 12 269 12H5.99999C2.68629 12 0 9.31371 0 6Z" fill="#505050" />
        </svg>
        <div className={` absolute top-[1px] left-[1px] bg-[#F2F2F2] h-[10px] rounded-[16px]`} style={{ width }}>
        </div >

      </div>
      <p className="ml-[12px] text-white font-next-book text-sm font-normal leading-[120%]">
        {finished}/{total}
      </p>
      {canClaim ?
        <button
          className=" ml-auto mr-[6px] w-[89px] h-[40px] flex-shrink-0 rounded-[12px] bg-white text-black text-center font-next-book text-sm font-normal leading-tight"
        >
          Claim
        </button>
        : <button
          className=" ml-auto mr-[6px] w-[143px] h-[40px] flex-shrink-0 rounded-[12px] bg-gradient-to-b from-[#353535] to-[#2E2E2E] 
              text-[#EDEDED] text-center font-next-book text-sm font-normal leading-tight"
        >
          Start Learning
        </button>
      }


    </div>
  )
}

export default Col