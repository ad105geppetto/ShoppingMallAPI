import { Users } from "./models/usersModel"

export default {
  signup: async (body: any) => {
    await Users.create(body);
  },
}