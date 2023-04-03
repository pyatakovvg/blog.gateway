
interface IConfigParams {
  port: number;
}


class Config {
  private readonly _port: number;

  constructor(config: IConfigParams) {
    this._port = config.port;
  }

  get port() {
    return this._port;
  }
}

export default Config;
