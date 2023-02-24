import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const useHandleSearch = <T>(
    data: T[],
    valueToCheck: (keyof T)[],
    searchKeyword: string
): T[] => {
    const [filteredData, setFilteredData] = useState<T[]>(data);
    const [debouncedSearch] = useDebounce<string | undefined>(searchKeyword, 500);

    useEffect(() => {
        const filteredData = debouncedSearch ? (data.filter(value => {
            const searchLowerCased = searchKeyword.toLowerCase();
            return !!valueToCheck.some(keys => {
                return String(value[keys]).toLowerCase().includes(searchLowerCased);
            })
        })) : (data);
        setFilteredData(filteredData);
    }, [debouncedSearch, data])
    return filteredData;
} 