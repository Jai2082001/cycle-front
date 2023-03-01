import classes from './FullScreenLoader.module.css'

const FullScreenLoader = () => {
    return (
    <div className={classes.fullScreenLoader}>
        <div className={classes.container}>
        <div className={classes.bike}>
            <svg width="207" height="105" viewBox="262 556 207 105" xmlns="http://www.w3.org/2000/svg"><g id="Bike" fill="none" fill-rule="evenodd" transform="translate(264 558)"><ellipse id="front-wheel" stroke="#484848" stroke-width="4" cx="163.9" cy="62.495" rx="38.9" ry="38.495"/><ellipse className={classes.frontwheel} id="front-wheel-highlight" stroke="#484848" stroke-width="4" cx="163.9" cy="62.599" rx="28.9" ry="28.599"/><ellipse id="back-wheel" stroke="#484848" stroke-width="4" cx="39.026" cy="62.12" rx="38.9" ry="38.495"/><ellipse id="front-hub" stroke="#484848" stroke-width="4" cx="164.222" cy="62.309" rx="6.483" ry="6.415"/><ellipse id="back-hub" stroke="#484848" stroke-width="4" cx="39.465" cy="60.799" rx="6.483" ry="6.415"/><path d="M161.274 56.892L138.814.254" id="front-fork" stroke="#484848" stroke-width="4"/><path d="M95.883 61H45.948" id="chain" stroke="#484848" stroke-width="4"/><path d="M99.79 55.53L67.584 12.954" id="inner-bar" stroke="#484848" stroke-width="4"/><path d="M66.574 13h78.6" id="cross-bar" stroke="#484848" stroke-width="4"/><path d="M138.17 12.46l-32.644 44.36" id="front-bar" stroke="#484848" stroke-width="4"/><path d="M68.978 12.017L41.935 53.984" id="rear-bar" stroke="#484848" stroke-width="4"/><path d="M68 14.783V6.82" id="seat-post" stroke="#484848" stroke-width="4"/><path d="M56.07 4.302c0 1.66 1.36 3 3.034 3h17.574c1.67 0 3.035-1.34 3.035-3S78.348 1.3 76.678 1.3H59.104C57.426 1.3 56.07 2.64 56.07 4.3z" id="seat" fill="#81C7CD" fill-rule="nonzero"/><path d="M138.47 2.43s20.813-7.524 20.813 6.192" id="handles" stroke="#81C7CD" stroke-width="4"/><path d="M11.143 20.94l3.353 3.524c13.808-10.06 32.426-10.386 46.465-1.2l3.453-3.22c-15.94-10.96-37.49-10.794-53.27.896z" id="mud-guard" fill="#484848" fill-rule="nonzero"/><g id="pedal-group" transform="translate(95 53)"><ellipse id="pedal-bracket" stroke="#484848" stroke-width="4" cx="7.27" cy="7.3" rx="6.387" ry="6.32"/><path d="M8.704 13.883l3.91 9.8" id="pedal-line" stroke="#484848" stroke-width="4"/><path d="M6.452 28.03c.544 1.243 1.996 1.815 3.252 1.273l9.096-3.898c1.252-.542 1.826-1.983 1.283-3.227-.544-1.24-2-1.815-3.257-1.273l-9.09 3.902c-1.258.538-1.832 1.984-1.284 3.223z" id="pedal" fill="#774992" fill-rule="nonzero"/></g></g></svg>
        </div>
        </div>
    </div>
    )
}

export default FullScreenLoader