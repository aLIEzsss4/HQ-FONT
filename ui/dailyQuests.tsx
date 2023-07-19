import Image from 'next/image'


export default function DailyQuests() {
  return (
    <div className="w-[1083px] h-[221px] flex-shrink-0 rounded-lg bg-[#101010]  flex">
      <div className="relative h-[100%] w-[188px]">
        <Image
          className="absolute  left-0 z--10"
          src="/svgs/daily.svg"
          alt="daily"
          width={188}
          height={220}
          priority
        />
        <p className="absolute text-[#EDEDED] font-next-book text-[16px] font-bold leading-[100%] mt-[40px] ml-[28px]">
          Daily
          <br />
          Quests
        </p>
        <Image
          className="absolute bottom-0 left-0"
          src="/svgs/ellipse.svg"
          alt="ellipse"
          width={141}
          height={115}
          priority
        />

      </div>


      <div className="relative h-[100%] ml-[16px] top-0 flex">
        <div className="relative">
          <Image
            className="mt-[25px]"
            src="/svgs/quest1-m.svg"
            alt="quest1"
            width={135}
            height={135}
            priority
          />
          <Image
            className=" absolute left-[6px] top-[31px]"
            src="/svgs/quest1-s.svg"
            alt="quest1"
            width={123}
            height={123}
            priority
          />
          <div className="absolute top-[76px] left-1/2 -translate-x-1/2">
            <button
              type="button"
              className=" flex w-[79px] h-[40px] justify-center items-center gap-5 flex-shrink-0 rounded-[12px] border-[1px] border-[#6F6F6F] bg-[rgba(10,10,10,0.40)] text-[#6F6F6F] font-next-book text-[14px] font-normal text-base leading-[120%]">
              Claimed
            </button>
          </div>

          <div className="flex justify-center items-center mt-[18px]">
            <Image
              className="mr-2"
              src="/coin.png"
              alt="coin"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#EDEDED] text-center font-next-book text-[14px] font-normal  leading-[110%]">
              5
            </p>
          </div>
          <div className="bg-white w-[105px] h-[1px]  absolute left-[100%] top-[94px]"></div>
        </div>

        <div className="relative ml-[105px]">
          <Image
            className="mt-[25px]"
            src="/svgs/quest2-m.svg"
            alt="quest2"
            width={135}
            height={135}
            priority
          />
          <Image
            className=" absolute left-[6px] top-[31px]"
            src="/svgs/quest1-s.svg"
            alt="quest2"
            width={123}
            height={123}
            priority
          />

          <div className="absolute " style={{ top: '23px', right: "-5px" }}>

            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="89" viewBox="0 0 94 89" fill="none">
              <g clip-path="url(#clip0_1_301)">
                <circle cx="18.8047" cy="72.206" r="68.5" transform="rotate(-180 18.8047 72.206)" stroke="white" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_1_301">
                  <rect width="94" height="89" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="absolute top-[31px] left-1/2 -translate-x-1/2 bg-[#fff] w-[123px] h-[123px]  rounded-full">
            <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <p className="w-[71px] text-[var(--color-dark-bg,#030303)] text-center font-next-book text-[14px] font-normal text-base leading-[110%]">
                Complete 10 Quest
              </p>
              <p className="text-[var(--color-dark-bg,#030303)] text-center font-next-book text-[12px] font-normal text-base leading-[110%] mt-[11px]">
                6/10
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[18px]">
            <Image
              className="mr-2"
              src="/coin.png"
              alt="coin"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#EDEDED] text-center font-next-book text-[14px] font-normal  leading-[110%]">
              10
            </p>
          </div>
          <div className="bg-[#5C5C5C] w-[105px] h-[1px]  absolute left-[100%] top-[94px]"></div>
        </div>

        <div className="relative ml-[105px]">
          <Image
            className="mt-[25px]"
            src="/svgs/quest2-m.svg"
            alt="quest2"
            width={135}
            height={135}
            priority
          />
          <Image
            className=" absolute left-[6px] top-[31px]"
            src="/svgs/quest2-s.svg"
            alt="quest2"
            width={123}
            height={123}
            priority
          />

          <div className="absolute top-0 right-0" style={{ top: '21px', right: "-3px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="62" viewBox="0 0 85 62" fill="none">
              <g clip-path="url(#clip0_1_289)">
                <circle cx="13.3981" cy="73.4069" r="67.3981" stroke="white" stroke-width="2" />
              </g>
              <defs>
                <clipPath id="clip0_1_289">
                  <rect width="84.3647" height="60.93" fill="white" transform="translate(0.117188 0.758789)" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="absolute top-[31px] left-1/2 -translate-x-1/2 w-[123px] h-[123px]  rounded-full">
            <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <p className="w-[71px] text-[#EDEDED] text-center font-next-book text-[14px] font-normal text-base leading-[110%]">
                Complete 20 Quest
              </p>
              <p className="text-[#EDEDED] text-center font-next-book text-[12px] font-normal text-base leading-[110%] mt-[11px]">
                6/20
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[18px]">
            <Image
              className="mr-2"
              src="/coin.png"
              alt="coin"
              width={20}
              height={20}
              priority
            />
            <p className="text-[#EDEDED] text-center font-next-book text-[14px] font-normal  leading-[110%]">
              25
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center ml-[59px] justify-center">
          <button
            className="w-[143px] h-[39px] flex-shrink-0 rounded-[12px] bg-gradient-dark text-[var(--color-black,#000)] text-center font-next-book text-[14px] font-normal text-base leading-[110%]"
          >
            Claim
          </button>
          <button
            className=" mt-[12px] w-[143px] h-[39px] flex-shrink-0 rounded-[12px] bg-gradient-dark text-gray-300 text-center font-book text-sm font-normal leading-tight"
          >
            Start Learning
          </button>
        </div>

      </div>




    </div>
  )
}