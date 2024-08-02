module.exports = class CusResponse {
    constructor(isOk, isdata, message, data, total) {
        this.isOk = isOk;
        this.isdata = isdata;
        this.message = message;
        this.data = data;
        this.total = total;
    }
};