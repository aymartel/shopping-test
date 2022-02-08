// import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


// type Props = {
//     onBottomHit: () => void;
//     isLoading: boolean;
//     hasMoreData: boolean;
//     loadOnMount: boolean;
// };

// function isBottom(ref: React.RefObject<HTMLDivElement>) {
//     if (!ref.current) {
//         return false;
//     }
//     return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
// }

// export const InfinityScroll: React.FC<Props> = ({
//     onBottomHit,
//     isLoading,
//     hasMoreData,
//     loadOnMount,
//     children,
// }) => {

//     const [initialLoad, setInitialLoad] = useState(true);
//     const contentRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (loadOnMount && initialLoad) {
//             onBottomHit();
//             setInitialLoad(false);
//         }
//     }, [onBottomHit, loadOnMount, initialLoad]);

//     useEffect(() => {
//         const onScroll = () => {
//             if (!isLoading && hasMoreData && isBottom(contentRef)) {
//                 onBottomHit();
//             }
//         };

//         document.addEventListener('scroll', onScroll);
//         return () => document.removeEventListener('scroll', onScroll);
//     }, [onBottomHit, isLoading, hasMoreData]);

//     return <div ref={ contentRef }> { children } < /div>;
// };



// export const fetchProducts = createAsyncThunk(
//     "GetAllProducts",
//     (url: string) =>
//         axios
//             .get(url)
            
            
// )

