import Image from 'next/image'


export default function UserInfo() {
  return (
    <div className="w-[345px] h-[560px] flex-shrink-0 rounded-lg bg-[#202020]">

      {/* top */}
      <div className="flex flex-col items-center mt-[37px]">
        <Image
          src="/svgs/avatar.svg"
          alt="avatar"
          width={102}
          height={102}
          priority
        />
        <p className="mt-[20px] text-[#EDEDED] font-next-book text-[20px]  font-bold  leading-[100%]">
          Carina Geng
        </p>
        <div className="flex items-center w-[109px] mt-[12px]">
          <Image
            className="mr-2"
            src="/svgs/level.svg"
            alt="level"
            width={20}
            height={20}
          />
          <p className="text-[#EDEDED] font-next-book text-[13px] font-normal text-base leading-[100%] ">
            Level 3
          </p>
          <div className=" ml-auto relative w-[20px] h-[20px] flex content-center justify-center items-center">
            <Image
              className="absolute inset-0"
              src="/svgs/question.svg"
              alt="question"
              width={20}
              height={20}
            />
            <p className="text-[#828282] text-center font-next-book text-[11.55px] font-normal text-base  leading-[100%] relative">
              ?
            </p>
          </div>
        </div>


        {/* xp */}
        <div className="flex justify-between w-[197px] mt-[56px]">

          <div className="flex flex-col items-center justify-between">
            <p className="text-[#7D7D7D] font-next-book text-[12px] text-base leading-[120%]">
              Today's XP
            </p>

            <p className="text-[#EDEDED] font-next-book text-[16px] font-bold leading-[100%]">
              50
            </p>
          </div>

          <Image
            className="mx-auto"
            src="/svgs/xp.svg"
            alt="xp"
            width={11}
            height={42}
          />

          <div className="flex flex-col items-center justify-between">
            <p className="text-[#7D7D7D] font-next-book text-[12px] text-base leading-[120%]">
              Total XP
            </p>

            <p className="text-[#EDEDED] font-next-book text-[16px] font-bold leading-[100%]">
              750/800
            </p>
          </div>

        </div>


        {/* bottom */}
        <div className="flex items-center justify-center mt-[56px] mb-[24px]">
          <Image
            src="/svgs/badgesS.svg"
            alt="small badge"
            width={69}
            height={69}
            className="relative -ml-9 -mr-5 z-10"
          />

          <Image
            src="/svgs/badgesM.svg"
            alt="medium badge"
            width={92}
            height={92}
            className="relative z-20"
          />

          <Image
            src="/svgs/badgesS.svg"
            alt="small badge"
            width={69}
            height={69}
            className="relative -ml-5 -mr-9 z-10"
          />

        </div>
        <button
          type="button"
          className="w-[145px] h-[40px] flex-shrink-0 rounded-[12px] bg-gradient-to-r from-[#353535] to-[#2E2E2E] text-[#EDEDED] text-center font-next-book text-[14px] font-normal text-base leading-[110%]">

          View all badges

        </button>

      </div>

    </div>
  )
}