
import { BaseError, NotFoundError, MethodNotAllowError } from '@helper/errors';

import NodeRouter from 'node-router';

import Route from './Route';
import Result from './Result';


interface IConfig {
  origin: string;
}


class Router {
  private readonly _config: IConfig;
  private readonly _routes: Route[] = [];
  private readonly _instance: NodeRouter = new NodeRouter();

  constructor(config: IConfig, routes: Route[]) {
    this._config = config;
    this._routes = routes;
  }

  public create() {
    this._initCORS();

    for(let index in this._routes) {
      const route = this._routes[index];
      this._addRoute(route);
    }

    this._initNotFoundRout();
  }

  private _addRoute(route: Route) {
    this._instance.push(route.method, route.path, route.send.bind(route));
  }

  private _initCORS() {
    this._instance.push((req, res, next) => {
      try {
        const origin = req.headers.origin;

        res.setHeader("Content-Type", "application/json; charset=utf-8");

        if (new RegExp('(' + this._config.origin + ')').test(origin)) {
          res.setHeader('Access-Control-Allow-Origin', this._config.origin);
        }

        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
        res.setHeader('Access-Control-Max-Age', 2592000);

        if (req.method === 'OPTIONS') {
          res.writeHead(204);
          return res.end(JSON.stringify({ success: true , data: 'Доступно' }));
        }

        if (['GET', 'POST', 'PUT', 'DELETE'].indexOf(req.method) === -1) {
          res.writeHead(405);
          return res.end(new Result().status(false).error(new MethodNotAllowError().data).build());
        }

        return next();
      }
      catch (error) {
        console.log(123, error)
      }
    });
  }

  private _initNotFoundRout() {
    this._instance.push(function(error, req, res, next) {
      if (error instanceof BaseError) {
        res.statusCode = error.status;
        return res.end(new Result().status(false).error(error.data).build());
      }
      next();
    }, function (req, res) {
      res.statusCode = 404;
      res.end(new Result().status(false).error(new NotFoundError().data).build());
    });
  }

  public getInstance() {
    return this._instance;
  }
}

export default Router;