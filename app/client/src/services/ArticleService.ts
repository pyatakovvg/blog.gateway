
import ArticleRepository from '@repositories/ArticleRepository';


interface IFilter {
  uuid?: string;
}


class ArticleService {
  constructor(private readonly repository: ArticleRepository) {}

  getAll(filter?: IFilter) {
    return this.repository.get(filter);
  }
}

export default ArticleService;
