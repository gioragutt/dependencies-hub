import HttpError from 'standard-http-error';
import escapeRegExp from 'lodash.escaperegexp';
import { Request, Handler, ErrorRequestHandler } from 'express';

const stackFileRegex = new RegExp(`${escapeRegExp(process.cwd())}`, 'ig')

export function createApiEndpoint<T>(fn: (req: Request) => T | Promise<T>): Handler {
  return (req, res, next) => Promise.resolve()
      .then(() => fn(req))
      .then(result => res.send(result))
      .catch(error => next(error));
}

export function createMiddleware(fn: (req: Request) => void | Promise<void>): Handler {
  return (req, res, next) => Promise.resolve()
      .then(() => fn(req))
      .then(() => next())
      .catch(error => next(error));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const status =
    err.httpErrorCode ||
    err.status ||
    (err instanceof HttpError && err.code) ||
    500
  res.status(status).send({
    message: err.message,
    stack:
      process.env.NODE_ENV === 'production'
        ? undefined
        : (err.stack || '').replace(stackFileRegex, ''),
  })
  res.emit('error', err) // pino.js handle error log in this way
}
