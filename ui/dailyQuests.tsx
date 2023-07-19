import Image from 'next/image'


export default function DailyQuests() {
  return (
    <div className="w-[1083px] h-[221px] flex-shrink-0 rounded-[16px] bg-[#101010]  flex">
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
          <div className=" absolute left-[6px] top-[55px] opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="123" height="101" viewBox="0 0 123 101" fill="none">
              <path d="M29.3899 41.5902C53.3711 57.8591 61.149 45.6268 61.8892 32.0693C70.4927 70.0891 82.127 46.3058 94.8947 41.5902C107.662 36.8745 113.214 38.0534 118.487 41.5902C121.363 43.5185 121.479 48.0207 120.822 51.9056C120.515 53.7208 120.039 55.4011 119.598 56.6213C115.619 71.7506 98.4474 101.656 61.5868 100.241C39.1368 99.3793 23.9904 88.5615 14.6801 77.0831C8.70381 69.7152 4.57768 62.0751 3.02245 56.6213C2.10112 53.3793 0.412737 47.0132 5.51983 41.5902C10.6269 36.1672 22.4517 37.1693 29.3899 41.5902Z" fill="url(#paint0_linear_1_308)" />
              <g filter="url(#filter0_i_1_308)">
                <path d="M14.6777 77.081C15.0614 77.554 15.455 78.0259 15.8586 78.496C19.9474 82.7109 29.5144 87.0257 43.2707 78.1344C58.592 68.2315 73.1546 67.5242 78.5207 68.4084C83.9794 69.1943 94.4526 73.7135 92.6762 85.5026C90.8999 97.2916 71.2083 100.239 61.5845 100.239C40.0596 99.4126 25.2489 89.434 15.8586 78.496C15.3934 78.0165 14.9992 77.5383 14.6777 77.081Z" fill="url(#paint1_linear_1_308)" />
              </g>
              <g filter="url(#filter1_d_1_308)">
                <path d="M29.3899 41.5881C53.3711 57.8571 59.688 28.0508 61.5868 28.0508C63.147 28.0508 67.5494 47.7987 94.8947 41.5881C108.112 38.5863 113.214 38.0514 118.487 41.5881C121.363 43.5165 121.479 48.0187 120.822 51.9036C118.935 58.2893 109.664 67.7599 87.6813 54.5561C85.7384 53.5737 81.2974 53.1414 79.0769 59.2718C76.8565 65.4021 65.569 62.4155 60.2029 60.1559C51.0434 55.5386 30.171 47.9542 19.9568 54.5561C9.57325 61.2675 10.751 70.6792 13.0476 75.0023C13.5751 75.6963 14.1194 76.3899 14.6801 77.0811C14.1612 76.7193 13.5749 75.995 13.0476 75.0023C7.95227 68.299 4.43178 61.5615 3.02245 56.6192C2.10112 53.3772 0.412737 47.0111 5.51983 41.5881C10.6269 36.1652 22.4517 37.1672 29.3899 41.5881Z" fill="url(#paint2_linear_1_308)" />
              </g>
              <path d="M59.2658 13.3901L62.3243 2.98033C62.4995 2.38402 63.3511 2.40462 63.4973 3.0087L66.0024 13.3619C66.0309 13.4798 66.094 13.5864 66.1837 13.6681L73.7977 20.6033C74.2939 21.0552 73.7986 21.8593 73.1718 21.6196L63.1807 17.7989C63.041 17.7455 62.8865 17.7455 62.7468 17.7989L52.5015 21.7168C51.8853 21.9525 51.3882 21.1749 51.8607 20.7146L59.1069 13.6539C59.1816 13.581 59.2364 13.4902 59.2658 13.3901Z" fill="#B2B2B2" />
              <path d="M62.841 21.5029C62.9181 21.4705 63.0052 21.4714 63.0817 21.5053L69.5769 24.3851C69.8769 24.5181 69.7819 24.9664 69.4538 24.9664L56.1026 24.9664C55.7711 24.9664 55.6794 24.5111 55.985 24.3827L62.841 21.5029Z" fill="#B2B2B2" />
              <defs>
                <filter id="filter0_i_1_308" x="14.6777" y="68.1289" width="78.1989" height="33.1791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1.06925" />
                  <feGaussianBlur stdDeviation="0.534623" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_308" />
                </filter>
                <filter id="filter1_d_1_308" x="0.930754" y="28.0508" width="121.289" height="51.1688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1.06925" />
                  <feGaussianBlur stdDeviation="0.534623" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_308" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_308" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_308" x1="61.5755" y1="21.254" x2="61.5755" y2="100.289" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#1A1A1A" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_308" x1="53.7772" y1="68.1289" x2="53.7772" y2="100.239" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C9C9C9" />
                  <stop offset="1" stop-color="#3D3D3D" />
                </linearGradient>
                <linearGradient id="paint2_linear_1_308" x1="61.5755" y1="21.252" x2="61.375" y2="66.6398" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FBFBFB" />
                  <stop offset="1" stop-color="#5B5B5B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute top-[76px] left-1/2 -translate-x-1/2">
            <button
              type="button"
              className=" flex w-[79px] h-[40px] justify-center items-center gap-5 flex-shrink-0 rounded-[12px] border-[1px] border-[#6F6F6F] bg-[rgba(10,10,10,0.40)] text-[#6F6F6F] font-next-book text-[14px] font-normal  leading-[120%]">
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
            <p className="text-[#EDEDED] h-[20px] leading-5 text-center font-next-book text-[14px] font-normal  ">
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
            <p className="text-[#EDEDED] text-center font-next-book text-[14px] font-normal h-[20px] leading-5 ">
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
            <p className="text-[#EDEDED] text-center font-next-book text-[14px] font-normal  h-[20px] leading-5 ">
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