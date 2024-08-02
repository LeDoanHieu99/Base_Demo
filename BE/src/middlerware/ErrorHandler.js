
let ErrorHandler = (err, req, res, next)=>{
    const Object = err.message || err.messageObject;
    const StatusCode = err.status || 400;

    console.log(Object);
    const errFormat = {
        Status: 1,
        StatusCode: StatusCode,
        Object: Object,
        isOk: false,
        isError: true
    }
    return res.status(200).json(errFormat)
}

export default ErrorHandler;