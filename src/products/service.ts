import repository from "./repository";

export default {
  getAll: async () => {
    return await repository.getAll()
  },
  post: async (body: any) => {
    return await repository.post(body)
  }
}