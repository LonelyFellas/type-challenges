type First = {

}

type Second = {

}

function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};

    for(const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop]
        }
    }

    return  result as First & Second;
}