import { isValid } from '../utils/isValid.js'
export default class AlertService {
    constructor() {
        this.errorBox = document.querySelector( "#error" );
    }
    showNotification ( inputs, numbers ) {
        const fullMessage = inputs.reduce( ( message, curr, index ) => {
            if ( isValid( numbers[index] ) ) {
                message += "";
            } else {
                if ( curr ) {
                    message += `\n${curr} is not a valid number`;
                }
            }
            return message;
        }, "Please enter only valid numbers" )
        this.errorBox.innerText = fullMessage;
        this.errorBox.style.display = 'block'
        // hide after 3 seconds
        setTimeout( this.hideErrors, 3000 )

    }
    errorInComputation ( message ) {
        this.errorBox.textContent = message
        this.errorBox.style.display = 'block'
        setTimeout( this.hideErrors, 3000 )
    }
    hideErrors () {
        document.querySelector( '#error' ).style.display = 'none'
    }

}
