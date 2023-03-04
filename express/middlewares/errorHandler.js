const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message);
    throw new Error('Oops! Something Went Wrong')
}

module.exports = errorHandler;