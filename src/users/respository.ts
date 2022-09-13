import { Users } from "./models/usersModel"
import module from "./modules/hashPassword"

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
    const user = await Users.findOne({ where: { email: body.email } });

    if (!user) {
      throw new Error();
    }

    const newPassword = module.makePasswordHashed(user.password, user.salt)

    if (newPassword !== user.password) {
      throw new Error();
    }
    return user.id
  },
}