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
    const user = await Users.findOne({ where: { email: body.email }, raw: true });

    if (!user) {
      throw new Error();
    }

    const newHashedPassword = module.makePasswordHashed(body.password, user.salt)

    if (newHashedPassword !== user.password) {
      throw new Error();
    }

    return user.id
  },
}