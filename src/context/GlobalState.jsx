import useFetch from "../hooks/useFetch"
import {globalContext} from "./globalContext"

export default function GlobalState ({children}) {
    const [trails, setTrails] = useFetch('/trails.json')

    const context = {
        trails,
        setTrails
    }


    return (
        <globalContext.Provider value={context}>
                {children}
        </globalContext.Provider>
    )
}
