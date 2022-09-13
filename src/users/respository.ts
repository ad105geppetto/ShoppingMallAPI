import { Users } from "./models/usersModel"
import module from "./modules/hashPassword"

export default {
  signup: async (body: any) => {
    const hashInfo = module.hashPassword(body.password)
    await Users.create({ ...body, ...{ password: hashInfo.hash, salt: hashInfo.salt } });
  },
}