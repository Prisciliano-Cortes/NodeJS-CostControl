const { response, request } = require("express");
const Transaction = require('../models/transaction');

const getAllTransactions = async( req = request, res = response ) => {
    const transactions = await Transaction.find()

    res.status(200).json({
        transactions
    })
}

const createTransaction = async(req = request, res = response) => {
    const body = req.body;

    try {
        
        //*** Generate data for save */
        const data = {...body }

        const transaction = new Transaction( data );

        //*** Save in DB */
        await transaction.save();

        res.status(201).json({
            transaction 
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Talk with admin'
        })
    }
}


module.exports = {
    getAllTransactions,
    createTransaction
}