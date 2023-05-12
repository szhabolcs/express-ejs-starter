import UserModel from "../models/UserModel.js";

async function test(_req, res, _next) {
    res.locals = { connected: await UserModel.tableExists() };
    res.render('db-test');
}

export default {
    views: {
        test
    }
}