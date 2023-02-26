import React from "react"

export function withExtraPropAdded(Component) {
    return function(props) {
        return (
            <Component anotherProp="I'm pretty extra they tell me" {...props} />
        )
    }
}