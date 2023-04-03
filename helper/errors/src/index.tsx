
interface IErrorData {
  code: string,
  message: string,
}

interface IError {
  name: string;
  status: number | 'canceled';
  data: IErrorData;
}


export class BaseError extends Error implements IError {
  name: string;
  readonly status: number | 'canceled';
  readonly data: IErrorData;

  constructor(status: number | 'canceled', data: IErrorData) {
    super();

    this.name = 'BaseError';
    this.status = status;
    this.data = data;

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, BaseError);
    }
  }
}


export class BadRequestError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.400', message: 'Неправильный, некорректный запрос' }) {
    super(400, data);

    this.name = 'BadRequestError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

export class CanceledError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.0', message: 'Неправильный, некорректный запрос' }) {
    super('canceled', data);

    this.name = 'BadRequestError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, BadRequestError);
    }
  }
}

export class UnauthorizedError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.401', message: 'Не авторизован' }) {
    super(401, data);

    this.name = 'UnauthorizedError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, UnauthorizedError);
    }
  }
}

export class NotFoundError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.404', message: 'Не найдено' }) {
    super(404, data);

    this.name = 'NotFoundError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, NotFoundError);
    }
  }
}

export class MethodNotAllowError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.405', message: 'Метод не разрешен' }) {
    super(405, data);

    this.name = 'MethodNotAllowError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, MethodNotAllowError);
    }
  }
}

export class InternalServerError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.500', message: 'Внутренняя ошибка сервера' }) {
    super(500, data);

    this.name = 'InternalServerError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, InternalServerError);
    }
  }
}

export class ServiceUnavailableError extends BaseError {
  constructor(data: IErrorData = { code: '0.0.503', message: 'Сервис недоступен' }) {
    super(503, data);

    this.name = 'ServiceUnavailableError';

    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, ServiceUnavailableError);
    }
  }
}
