
function landingPage(_req, res, _next) {
    res.locals = { title: 'Express + EJS' };
    res.render('index');
}

export default {
    views: {
        landingPage
    }
}