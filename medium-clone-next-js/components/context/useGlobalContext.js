import React from 'react'
import {AppContext} from "./context"

const useGlobalContext = () => {
    const data = React.useContext(AppContext);
    return data;
}

export default useGlobalContext
