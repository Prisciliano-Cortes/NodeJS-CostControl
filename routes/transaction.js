const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const { getAllTransactions, createTransaction } = require('../controllers/transaction');

const router = Router();

//*** Get all transactions - public */
router.get('/', getAllTransactions)


//*** Create a transaction */
router.post(
    '/', 
    [ 
        check('month', 'Month is required').not().isEmpty(),
        check('day', 'Day is required').not().isEmpty(),
        check('types', 'Types is required').not().isEmpty(),
        check('quantity', 'Quantity is required').not().isEmpty(),
        check('addressee', 'Addressee is required').not().isEmpty(),
        check('color', 'Color is required').not().isEmpty(),
        check('resume', 'Resume is required').not().isEmpty(),
        validateFields 
    ], 
    createTransaction
)

// //*** Update one product with valid token - private */
// router.put(
//     '/:id', 
//     [
//         check('id').custom( existProductId ),
//         validateFields
//     ],
//     updateProduct
// )

// //*** Delete one product with rol is Admin */
// router.delete(
//     '/:id', 
//     [
//         check('id', 'This is not ID Mongo valid').isMongoId(),
//         check('id').custom( existProductId ),
//         validateFields
//     ],
//     deleteProduct
// )

module.exports = router;