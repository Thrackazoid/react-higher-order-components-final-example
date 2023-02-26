import React from "react"

// A function that takes a component as its first argument and returns a new component that wraps the given component, providing extra capabilities to it.

export function basicPropHOC(component) {
    const Component = component
    return function(props) {
        return (
            <Component basicProp='a pretty basic prop yo' {...props} />
        )
    }
}