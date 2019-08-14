const HistoryRecord = require('../models/history_record')

module.exports={
    getHistoryRecord: async function($userId, $screenplayId, $screenplayType){
        let result = await HistoryRecord.findOne({userId: $userId, screenplayId: $screenplayId, screenplayType: $screenplayType})
        return result.toObject()
    },
    getHistoryRecordForUserByType: async function($userId, $screenplayType){
        try {
            let result = await HistoryRecord.find({userId: $userId, screenplayType: $screenplayType})
            let historyRecordMap= {}
            for(var i in result){
                historyRecordMap[result[i].screenplayId]=result[i].toObject()
            }
            return historyRecordMap
        } catch (error) {
            return error.message
        }
    },
    getAll: async function () {
        let resultList = await HistoryRecord.find()
        return resultList.map(doc => doc.toObject())
    },
    getById: async function (id) {
        try {
            let result = await HistoryRecord.findById(id);
            return result.toObject();
        } catch (error) {
            return error.message
        }
        
    },
    insert: async function (HistoryRecordMap) {
        try {
            console.log(HistoryRecordMap);
            let result = await  HistoryRecord.create(HistoryRecordMap)
            console.log(result.toObject());
            return result.toObject()
        } catch (error) {
            return error
        }
        
    },
    update: async function(HistoryRecordMap){
        let result = await HistoryRecord.findByIdAndUpdate(HistoryRecordMap.id, HistoryRecordMap)
        return result.toObject()
    },
    delete: async function (id) {
        return HistoryRecord.findByIdAndDelete(id)
    }
}