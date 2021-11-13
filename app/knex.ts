import * as Knex from "knex";
import * as pg from "pg";
import { Model } from "objection";
// @ts-ignorets-ignore
const knexConfig = require("../knexfile");
Model.knex(knexConfig);
// @ts-ignorets-ignore
const knexConnection = Knex(knexConfig);

knexConnection
  .raw("select 1+1 as result")
  .then(() => {
    console.log(`Connection successfully completed`);
  })
  .catch((err: Error) => console.log(`Connection error:`, err));

pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => {
  return parseFloat(value);
});
// @ts-ignorets-ignore
const knexInstance = Knex(knexConfig);
knexInstance.migrate.latest()
.then((res: any) => console.log("migrate ok", res))
.catch((err: any) => console.log("migration error", err))

knexInstance.seed.run()
.then((res: any) => console.log("seeds Ok", res))
.catch((err: any) => console.log("migration error", err))


export default knexInstance