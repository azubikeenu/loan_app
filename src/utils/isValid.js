export const isValid = ( ...args ) => {
    return args.every( arg => !isNaN( arg ) && typeof arg === "number" )

}