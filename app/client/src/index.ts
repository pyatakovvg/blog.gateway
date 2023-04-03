
import { Application, Config, Router, Route } from "@library/app";

import ArticleGetAll from "@api/v1/article/getAll";


const config = new Config({
  port: process.env.PORT,
});

const router = new Router({
  origin: 'http://localhost:3020',
}, [
  new Route('get', '/api/v1/articles', new ArticleGetAll()),
]);

const app = new Application(config, router);

app.start();
