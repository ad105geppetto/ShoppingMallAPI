import repository from "./repository";

export default {
  getAll: async () => {
    return await repository.getAll()
  },
  post: (body: any) => {
    return repository.post(body)
  }
}