import repository from "./repository";

export default {
  getAll: async () => {
    return await repository.getAll()
  },
  post: async (body: any) => {
    return await repository.post(body)
  },
  getOne: async (productId: number) => {
    return await repository.getOne(productId)
  },
  patch: async (productId: number, body: any) => {
    return await repository.patch(productId, body)
  },
}