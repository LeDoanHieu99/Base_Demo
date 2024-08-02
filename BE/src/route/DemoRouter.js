import express from "express";
import DemoController from "../controller/DemoController";
// import AuthenMiddlerware from '../middlerware/AuthMiddlerware';
import ErrorHandler from '../middlerware/ErrorHandler';

let router = express.Router();

const initDemoRouter = (app) => {
    // router.get('/GetStatsInfo', DemoController.GetStatsInfo);
    // router.post('/AddWareHouseInfo', DemoController.AddWareHouseInfo);
    // router.put('/GetSecurityHole', DemoController.GetSecurityHole);
    // router.delete('/GetStatsAsCluster', DemoController.GetStatsAsCluster);
    // router.get('/GetStatsAsRegion', DemoController.GetStatsAsRegion);

    router.use(ErrorHandler);
    return app.use('/api/v1/', router)
}
export default initDemoRouter;