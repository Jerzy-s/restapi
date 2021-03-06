const express = require('express');
const router = express.Router();


/* router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling Get Methode'
    });
});
*/

 router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling Post Methode'
    });
}); 

router.get('/:productId', (req, res, next)=> {
    const id = req.params.productId;
    if( id == 'special') {
        res.status(200).json({
            message: 'You discoverd speical ID',
            id: id
        });
    }else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});
router.patch('/:productId', (req, res, next)=> {
    res.status(200).json({
        message: 'updated product'
    })
});
router.delete('/:productId', (req, res, next)=> {
    res.status(200).json({
        message: 'delet product'
    })
});

module.exports = router;