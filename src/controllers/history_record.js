const HistoryRecordService = require('../services/history_record')

module.exports={
    insert: async function(req, res){
        var result = await HistoryRecordService.insert(req.body)
        res.send(result)
    },
    update: async function(req, res){
        var result = await HistoryRecordService.update(req.body)
        res.send(result)
    },
    getAll: async function(req, res){
        var result = await HistoryRecordService.getAll()
        res.send(result)
    },
    getHistoryRecord: async function(req, res){
        try {
            var result = await HistoryRecordService.getHistoryRecord(req.params.userId, req.params.screenplayId, req.params.screenplayType)
            res.send(result)
        } catch (error) {
            res.status(404).send('No history record found.')
        }
        
    },
    getHistoryRecordForUserByType: async function(req, res){
        var result = await HistoryRecordService.getHistoryRecordForUserByType(req.params.userId, req.params.screenplayType)
        res.send(result)
    }
}