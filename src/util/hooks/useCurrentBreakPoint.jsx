import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { useEffect, useState } from 'react';
const useCurrentBreakPoint = () => {
    const currentBreakPointObject = useBreakpoint();
    const [currentBreakPoint, setCurrentBreakPoint] = useState([]);
    useEffect(() => {
        const screens = Object.entries(currentBreakPointObject).filter(screen => !!screen[1]);
        setCurrentBreakPoint(screens.pop());
    }, [currentBreakPointObject]);
    return currentBreakPoint;
}
export default useCurrentBreakPoint;