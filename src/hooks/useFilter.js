import { useState } from "react"

export function useFilter(dataList, callBack) {
    const [query,setQuery] = useState('')
    const filteredData = dataList.filter((data)=> callBack(data).toLowerCase().includes(query.toLocaleLowerCase()))
    return [filteredData, setQuery]
}
