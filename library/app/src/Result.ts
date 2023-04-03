
class Result {
  private _result: any = {};

  status(value: boolean) {
    this._result.success = value;
    return this;
  }

  data(value: any) {
    this._result.data = value;
    return this;
  }

  error(value: any) {
    this._result.error = value;
    return this;
  }

  build() {
    return JSON.stringify(this._result);
  }
}

export default Result;
