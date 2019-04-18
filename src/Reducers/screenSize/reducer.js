import {CHANGE_SIZE} from './action'

const wichDevice = size => {
    if (size >= 960) {
        return 'desktop'
    } else if (size < 960 && size >= 768) {
        return 'tablet'
    } else {
        return 'phone'
    }
}

const initialState = wichDevice(window.innerWidth)

const screenSize = (state = initialState, action) => {
    if ( action.type === CHANGE_SIZE ) {
        return wichDevice(action.size)
    } else {
        return state
    }
}

export default screenSize

