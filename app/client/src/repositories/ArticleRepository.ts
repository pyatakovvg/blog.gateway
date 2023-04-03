
interface IFilter {
  uuid?: string;
}


class ArticleRepository {
  get(filter?: IFilter) {
    return [
      {
        uuid: '111',
        title: 'Описание 1',
        content: 'Контент для описания 1',
        author: {
          uuid: '666666',
          email: 'zemlya@mail.ru',
          name: 'Viktor',
        },
        createdAt: new Date().toString(),
      },
      {
        uuid: '222',
        title: 'Описание 2',
        content: 'Контент для описания 2',
        author: {
          uuid: '666666',
          email: 'zemlya@mail.ru',
          name: 'Viktor',
        },
        createdAt: new Date().toString(),
      },
      {
        uuid: '333',
        title: 'Описание 3',
        content: 'Контент для описания 3',
        author: {
          uuid: '666666',
          email: 'zemlya@mail.ru',
          name: 'Viktor',
        },
        createdAt: new Date().toString(),
      }
    ].filter((item) => {
      if (filter.uuid) {
        if (filter.uuid === item.uuid) {
          return true;
        }
        return false;
      }
      return true;
    });
  }
}

export default ArticleRepository;
