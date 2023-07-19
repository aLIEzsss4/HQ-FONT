
interface ITabNav {
  active: number;
  setActive: (index: number) => void
  tabs: string[]
}

const TabNav = ({
  active = 0,
  setActive,
  tabs
}: ITabNav) => {


  return (
    <div className="flex">
      {tabs.map((item, index) => (
        <div className={`${active == index ? 'text-gray-300' : 'text-gray-500'}  font-next-book text-14  font-bold leading-110 mr-5  cursor-pointer`} onClick={() => setActive(index)}>
          {item}
          <div className={`mt-[11px] w-[100%] h-[4px] flex-shrink-0 rounded-[11px] bg-gray-50 ${active == index ? 'block' : 'hidden'}`} ></div>
        </div>
      ))}
    </div>
  )
}

export default TabNav