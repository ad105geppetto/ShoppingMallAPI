import repository from "./respository";

export default {
  signup: async (body: any) => {
    return await repository.signup(body)
  },
}