import {useState} from 'react'

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isErorr, setIsError] = useState('')

    const fetching = async(...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setIsError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isErorr, setIsError]
}