import { parseInputs } from '../utils/parseIntputs.js'
import { isValid } from '../utils/isValid.js'
import * as resultsView from './views/resultsView.js'

export const run = ( ui, alert ) => {
    ui.performCalculations( e => {
        e.preventDefault();
        const inputs = ui.getValues()
        const numbers = parseInputs( ...inputs );
        const [amount, interest, years] = numbers;
        if ( isValid( ...numbers ) ) {
            const principal = amount;
            const calculatedInterest = interest / 100 / 12;
            const calculatedPayments = years * 12;
            const x = Math.pow( 1 + calculatedInterest, calculatedPayments );
            const monthly = ( principal * calculatedInterest * x ) / ( x - 1 );
            if ( isFinite( monthly ) ) {
                const monthlyPayment = monthly.toFixed( 2 );
                const totalPayment = ( monthly * calculatedPayments ).toFixed( 2 );
                const totalInterest = ( ( monthly * calculatedPayments ) - principal ).toFixed( 2 );
                // clear  results
                resultsView.clearResult()
                // render loader for 3 seconds
                resultsView.showLoader( { monthlyPayment, totalPayment, totalInterest } )

            }

        } else {
            resultsView.clearResult()
            alert.showNotification( inputs, numbers )
        }
    } )
}