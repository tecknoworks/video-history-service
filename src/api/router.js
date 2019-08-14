const express = require('express')
const router = express.Router()
const HistoryRecordController= require('../controllers/history_record')

router.post('/', HistoryRecordController.insert)
router.put('/', HistoryRecordController.update)
router.get('/all', HistoryRecordController.getAll)
router.get('/user-id/:userId/screenplay-id/:screenplayId/screenplay-type/:screenplayType', HistoryRecordController.getHistoryRecord)
router.get('/user-id/:userId/screenplay-type/:screenplayType', HistoryRecordController.getHistoryRecordForUserByType)

module.exports = router