'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ErrorLog extends Model {
        static associate(models) {
        }
    }
    ErrorLog.init({
        api: DataTypes.STRING,
        time: DataTypes.STRING,
        error_meg: DataTypes.STRING,
        error_log: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'ErrorLog',
    });
    ErrorLog.associate = models => {
        // ErrorLog.belongsTo(models.Document, {
        //     // file_id của bảng Document lưu trữ khóa chỉnh của bảng Document
        //     foreignKey: 'document_id',
        // });
    }
    return ErrorLog;
};