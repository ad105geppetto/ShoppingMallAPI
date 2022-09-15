import { Users } from "./models/usersModel"
import module from "./modules/hashPassword"
import NotFoundUser from "./exception/NotFoundUser";
import NotEqualPassword from "./exception/NotEqualPassword";
import connection from '../db';

export default {
  signup: async (body: any) => {
    const hashInfo = module.hashPassword(body.password)
    await Users.create({ ...body, ...{ password: hashInfo.hash, salt: hashInfo.salt } });
  },
  login: async (body: any) => {
    const user = await Users.findOne({ where: { email: body.email }, raw: true });
    console.log(user)
    if (!user) {
      throw new NotFoundUser();
    }

    const newHashedPassword = module.makePasswordHashed(body.password, user.salt)

    if (newHashedPassword !== user.password) {
      throw new NotEqualPassword();
    }

    return { userId: user.id, grade: user.grade_id }
  },
  dropout: async (userId: number) => {
    return await connection.transaction(async (transaction) => {
      const user = await Users.findOne({ where: { id: userId }, raw: true, transaction });

      if (!user) {
        throw new NotFoundUser();
      }

      await Users.destroy({
        where: { id: userId },
        transaction,
      });
    })
  },
}