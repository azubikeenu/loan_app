import { DOMElements } from '../../utils/constants.js'
export const renderResult = result => {
    const html = `
                     <div class="form-group">
                     <h5>Results</h5>
                         <div class="input-group">
                             <span class="input-group-addon">Monthly Payment</span>
                             <input type="number"  value = "${result.monthlyPayment}" class="form-control" id="monthly-payment" disabled>
                         </div>
                     </div>

                     <div class="form-group">
                         <div class="input-group">
                             <span class="input-group-addon">Total Payment</span>
                             <input type="number"  value = "${result.totalPayment}"class="form-control" id="total-payment" disabled>
                         </div>
                     </div>

                     <div class="form-group">
                         <div class="input-group">
                             <span class="input-group-addon">Total Interest</span>
                             <input type="number" value= "${result.totalInterest}" class="form-control" id="total-interest" disabled>
                         </div>
                     </div>

                 `
    DOMElements.results.insertAdjacentHTML( 'afterbegin', html )

}


export const displayResult = result => {
    DOMElements.loader.style.display = 'none'
    renderResult( result )
}

export const showLoader = ( result ) => {
    DOMElements.loader.style.display = 'block'
    setTimeout( () => {
        displayResult( result )
    }, 2000, result )
}

export const clearResult = () => {
    // dont have time ! optimize later !!!
    DOMElements.results.innerHTML = "";
}
