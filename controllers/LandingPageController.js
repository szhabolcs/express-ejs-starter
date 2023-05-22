import { __dirname } from "../app.js";

function landingPage(_req, res, _next) {
    res.locals = { title: 'Express + EJS', readmeURL: `vscode://file/${__dirname}/README.md` };
    res.render('index');
}

export default {
    landingPage
}