const Transaction = require('../models/transaction');

const existTransactionId = async(id) => {
    //*** Verify if transaction exist */
    const transactionExist = await Transaction.findById(id);
    if (!transactionExist) {
        throw new Error(`This id ${id} not exist`);
    }
}

module.exports = {
    existTransactionId,
}