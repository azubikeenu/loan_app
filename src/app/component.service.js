export default class UIComponents {
    constructor() {
        this.form = document.getElementById( 'loan-form' );
        this.amount = document.getElementById( 'amount' );
        this.interest = document.getElementById( 'interest' );
        this.years = document.getElementById( 'years' );
    }
    getValues () {
        const amount = this.amount.value;
        const interest = this.interest.value;
        const years = this.years.value
        return [amount, interest, years]
    }
    performCalculations ( func ) {
        this.form.addEventListener( 'submit', func );
    }
}