import logger from '../utils/logging.js';

export default function errorHandler(err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    logger.debug(err);

    // render the error page
    res.status(err.status || 500);
    res.render('error');
}