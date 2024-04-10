import { useState, useEffect } from 'react';

// Custom hook to detect if the screen size is indicative of a mobile device
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    }

    // Initially check on mount
    handleResize();

    // Listen for window resize events to update the state
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default useIsMobile;
