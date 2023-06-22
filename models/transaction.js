const { Schema, model } = require('mongoose');

const TransactionSchema = Schema({
    month: {
        type: String,
        required: [true, 'Month is required'],
    },
    day : {
        type: Number,
        required: [true, 'Day is required'],
    },
    types: {
        type: String,
        required: [true, 'Types is required'],
        enum: {
            values: ['Ingresos', 'Gastos'],
            message: '{VALUE} is not valid'
        }
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
    addressee: {
        type: String,
        required: [true, 'Addressee is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required'],
        enum: {
            values: ['success', 'danger'],
            message: '{VALUE} is not valid'
        }
    },
    resume: {
        type: String,
        required: true
    }
})

TransactionSchema.methods.toJSON = function () {
    const { __v, ...transaction } = this.toObject();
    return transaction
}

module.exports = model('Transaction', TransactionSchema)