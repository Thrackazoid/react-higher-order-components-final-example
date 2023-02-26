import React from "react"
import {basicPropHOC} from "./basicPropHOC"
import {withExtraPropAdded} from "./withExtraPropAdded"

function App(props) {
    console.log(props)
    return (
        <div>Hello world!</div>
    )
}

const AppWithBasicProp = basicPropHOC(App)
const AppWithTwoExtraProps = withExtraPropAdded(AppWithBasicProp)
export default AppWithTwoExtraProps