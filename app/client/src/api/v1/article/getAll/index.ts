
import { Controller } from '@library/app';

import ArticleService from "@services/ArticleService";
import ArticleRepository from "@repositories/ArticleRepository";


class ArticleGetAll extends Controller {
  private readonly _articleService: ArticleService = new ArticleService(new ArticleRepository());

  async send({ query }) {
    return this._articleService.getAll({
      uuid: query.uuid,
    });
  }
}

export default ArticleGetAll;
