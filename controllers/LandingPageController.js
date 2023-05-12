
function landingPage(_req, res, _next) {
    res.locals = { title: 'Express and EJS' };
    res.render('index');
}

export default {
    views: {
        landingPage
    }
}