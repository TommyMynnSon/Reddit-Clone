import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'lireddit',
    user: 'tommyson',
    type: 'postgresql',
    debug: !__prod__
  });

  const post = orm.em.create(Post, {title: 'my first pst'});
  await orm.em.persistAndFlush(post);

  console.log("---------------sql 2---------------s")
  await orm.em.nativeInsert(Post, { title: "my first post 2" });
};

main();