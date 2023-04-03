
import http from 'http';

import Config from './Config';
import Router from './Router';


class Application {
  private readonly _server;
  private readonly _router: Router;
  private readonly _config: Config;

  constructor(config: Config, router: Router) {
    this._config = config;
    this._router = router;
    this._server = http.createServer(this._router.getInstance());
  }

  start() {
    this._router.create();

    this._server.listen(this._config.port, () => {
      console.log('Server started');
    });
  }
}

export default Application;