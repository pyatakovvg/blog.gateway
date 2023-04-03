
interface IRequest {
  query: Record<string, any>;
}


class Controller {
  async send(req?: IRequest) {
    throw new Error('Метод "send" необходимо перегрузить');
  }
}

export default Controller;
