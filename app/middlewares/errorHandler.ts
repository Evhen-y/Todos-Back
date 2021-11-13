import * as Koa from "koa"

export default async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
      await next();
    } catch (err) {
        ctx.body = {
            code:409,
            message: err.details[0].message,
        }
        ctx.app.emit("error", err, ctx);
    }
  };