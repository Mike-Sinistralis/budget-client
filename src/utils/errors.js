class NotFoundError extends Error {
    constructor(msg) {
        super(msg);
        this.message = msg || 'Not Found';
        this.status = 404;
        Error.captureStackTrace(this);
    }
}

export default { NotFoundError };
