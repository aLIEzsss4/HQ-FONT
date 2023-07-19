import Image from 'next/image'

interface ITableData {
  total: number,
  conin: number,
  width: number,
  finished: number,
  canClaim: boolean
}

const originalData: ITableData[] = [
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

const TableData: ITableData[] = Array.from({ length: 9 }, (_, index) => originalData[index % originalData.length]);

const Col = (props: ITableData) => {
  const { total, conin, width, finished, canClaim } = props
  return (
    <div className="mb-[12px] w-[1000px] h-[52px] flex-shrink-0   rounded-[16px]  bg-[#202020] flex items-center">
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




export default function Table() {



  return (
    <div className="w-[1083px] h-[328px] mt-3 flex-shrink-0 rounded-[16px] bg-[#101010]">
      <div className="flex  mt-[40px]">
        <div className="  ml-[28px] w-146 text-gray-300 font-next-book text-16  font-bold leading-110">
          Milestones
        </div>

        <div className="ml-auto">

          <div className="flex">
            <div className="text-gray-300 font-next-book text-14  font-bold leading-110 mr-5  cursor-pointer">
              {'</Course Completion>'}
              <div className="mt-[11px] w-[100%] h-[4px] flex-shrink-0 rounded-[11px] bg-gray-50"></div>
            </div>
            <div className="text-gray-500 font-next-book text-14 font-medium leading-110 mr-5 cursor-pointer">
              Quest Winning Streak
            </div>
            <div className="text-gray-500 font-next-book text-14 font-medium leading-110 mr-[56px] cursor-pointer">
              Track Completion
            </div>
          </div>
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
          {TableData.map(item => <Col {...item} />)}
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