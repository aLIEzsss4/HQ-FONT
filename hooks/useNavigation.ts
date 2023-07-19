import { ITableData } from '#/ui/table';
import { RefObject } from 'react';
import { useState, useEffect, useRef } from 'react';

export default function useNavigation(tabsRef: HTMLDivElement, sections: ITableData) {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRefs = useRef([]);
  const isActive = useRef(false);


  const handleTabClick = (tab: string | number) => {
    isActive.current = true;

    const currentSec = sectionRefs.current[tab];
    setActiveTab(tab);

    currentSec.scrollIntoView({});

    setTimeout(() => {
      isActive.current = false;

    }, 500);

  }



  useEffect(() => {
    function handleScroll() {

      if (isActive.current) {
        return
      }

      const y = (tabsRef as RefObject<HTMLDivElement>).current.scrollTop;
      const tabsHeight = (tabsRef as RefObject<HTMLDivElement>).current.offsetHeight;


      const sectionTops = sections.map((sec: { index: string | number; }) => {
        const ref = sectionRefs.current[sec.index];
        return ref ? ref.offsetTop - tabsHeight : 0;
      });


      const tagIndex = sectionTops.findIndex((top: number, index: number) => {
        if (index == sectionTops.length - 1) {
          return sectionTops.length - 1
        }
        return (y >= top && y < sectionTops[index + 1]);
      });
      const activeTab = sections?.[tagIndex]['section'];

      setActiveTab(activeTab);


    }

    (tabsRef as RefObject<HTMLDivElement>).current.addEventListener('scroll', handleScroll);

    return () => (tabsRef as RefObject<HTMLDivElement>).current.removeEventListener('scroll', handleScroll);
  }, [sections, tabsRef]);

  return {
    activeTab,
    handleTabClick,
    sectionRefs
  };
}