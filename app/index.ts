import * as Koa from "koa";
import { WEB_SERVER_SETTINGS} from "./constans/global";
import * as Router from "koa-router";
import todosRouter from "./routes/Todos.router";
import "./knex";
import {commonMiddlewares} from "./middlewares";

const app = new Koa();
const router = new Router({prefix: "/api"})

app.use(commonMiddlewares())
router.use(todosRouter().middleware())

app.use(router.routes())


app.listen(WEB_SERVER_SETTINGS.PORT, () => {
    console.log('Server is started', `PORT: ${WEB_SERVER_SETTINGS.PORT}`)
});