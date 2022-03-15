import {useEffect, useState} from "react";

import {pathName} from "../StorageData/navigateData";

function useLocationState(locationPathName, locationState) {
    const getState = () => {
        for (let key in pathName) {
            if (pathName[key].path === locationPathName && locationState !== pathName[key].state) {
                locationState = pathName[key].state
                return locationState
            }
        }
        return locationState
    }

    const [state, setState] = useState( () => {
        getState()
    })


    useEffect( () => {
        setState(getState)
    }, [locationPathName])

    return [state, setState]
}

export {useLocationState}