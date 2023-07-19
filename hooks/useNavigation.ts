import { useState, useEffect, useRef } from 'react';

export default function useNavigation(tabsRef, sections) {
  const [activeTab, setActiveTab] = useState(0);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const currentSec = sectionRefs.current[activeTab];
    console.log(currentSec,'currentSec')
    currentSec?.scrollIntoView({
      behavior: 'smooth' 
    });
  }, [activeTab]);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      const tabsHeight = tabsRef.current.offsetHeight;
      
      const sectionTops = sections.map(sec => {
        const ref = sectionRefs.current[sec.id];
        return ref ? ref.offsetTop - tabsHeight : 0; 
      });
      
      const activeTab = sectionTops.findIndex(top => y >= top);
      setActiveTab(activeTab);


    }


    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return {
    activeTab,
    setActiveTab,
    sectionRefs
  };
}