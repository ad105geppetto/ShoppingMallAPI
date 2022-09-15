import { Users } from "./models/usersModel"
import module from "./modules/hashPassword"
import connection from '../db';

interface user {
  password: string,
  salt: string
}

export default {
  signup: async (body: any) => {
    const hashInfo = module.hashPassword(body.password)
    await Users.create({ ...body, ...{ password: hashInfo.hash, salt: hashInfo.salt } });
  },
  login: async (body: any) => {
    const user = await Users.findOne({ where: { email: body.email }, raw: true });

    if (!user) {
      throw new Error();
    }

    const newHashedPassword = module.makePasswordHashed(body.password, user.salt)

    if (newHashedPassword !== user.password) {
      throw new Error();
    }

    return { userId: user.id }
  },
  dropout: async (userId: number) => {
    return await connection.transaction(async (transaction) => {
      const user = await Users.findOne({ where: { id: userId }, raw: true, transaction });

      if (!user) {
        throw new Error();
      }

      await Users.destroy({
        where: { id: userId },
        transaction,
      });
    })
  },
}