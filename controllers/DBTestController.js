import UserModel from "../models/UserModel.js";

async function testPage(_req, res, _next) {
    res.locals = { connected: await UserModel.tableExists() };
    res.render('db-test');
}

export default {
    testPage
}