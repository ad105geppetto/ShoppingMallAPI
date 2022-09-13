import repository from "./respository";

export default {
  signup: async (body: any) => {
    return await repository.signup(body)
  },
  login: async (body: any) => {
    return await repository.login(body)
  },
  dropout: async (userId: number) => {
    return await repository.dropout(userId)
  },
}