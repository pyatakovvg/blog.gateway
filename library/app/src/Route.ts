
import { BaseError, InternalServerError } from '@helper/errors';

import Result from './Result';
import Controller from './Controller';
import {ClientRequest} from "http";


type TMethod = 'get' | 'post' | 'put' | 'delete';


class Route {
  public readonly method: TMethod;
  public readonly path: string;
  public readonly controller: Controller;

  constructor(method: TMethod, path: string, controller: Controller) {
    this.method = method;
    this.path = path;
    this.controller = controller;
  }

  async send(req, res, next) {
    try {
      const result = await this.controller.send({
        query: req.query,
      });

      res.end(new Result().status(true).data(result).build());
    }
    catch(error) {
      if ( ! (error instanceof BaseError)) {
        return next(new InternalServerError({ code: '0.0.500', message: error.stack.toString() }));
      }
      return next(error);
    }
  }
}

export default Route;
