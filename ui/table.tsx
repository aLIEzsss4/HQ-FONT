import Image from 'next/image'


export default function Table() {
  return (
    <div className="w-[1083px] h-[328px] mt-3 flex-shrink-0 rounded-lg bg-[#202020]">
      <div className="flex  mt-[40px]">
        <div className="  ml-[28px] w-146 text-gray-300 font-next-book text-16  font-bold leading-110">
          Milestones
        </div>

        <div className="ml-auto flex">
          <div className="text-gray-300 font-next-book text-14  font-bold leading-110 mr-5">
            {'</Course Completion>'}
          </div>
          <div className="text-gray-500 font-next-book text-14 font-medium leading-110 mr-5">
            Quest Winning Streak
          </div>
          <div className="text-gray-500 font-next-book text-14 font-medium leading-110 mr-[56px]">
            Track Completion
          </div>

        </div>
      </div>
    </div>
  )
}