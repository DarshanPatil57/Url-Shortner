import { useState } from "react";

const useFetch = (cb,options = {})=>{
    const [data,setData] = useState(null)
    const [errors,setErrors] = useState(null)

    const fn = async(...args)=>{
        setErrors(null)

        try {
            const response = await cb(options, ...args);
            setData(response)
            setErrors(null)
        } catch (error) {
            setErrors(error)
        }
    }
    return {data,errors,fn}
}

export default useFetch