import repository from "./repository";
import { isAdmin } from "./constant/authority"

export default {
  getAll: async () => {
    return await repository.getAll()
  },
  post: async (body: any, headers: any) => {
    const Grade = headers.grade
    if (isAdmin(Grade)) {
      return await repository.post(body)
    } else {
      throw Error()
    }
  },
  getOne: async (productId: number) => {
    return await repository.getOne(productId)
  },
  patch: async (productId: number, body: any, headers: any) => {
    const Grade = headers.grade
    if (isAdmin(Grade)) {
      return await repository.patch(productId, body)
    } else {
      throw Error()
    }
  },
  delete: async (productId: number, headers: any) => {
    const Grade = headers.grade
    if (isAdmin(Grade)) {
      return await repository.delete(productId)
    } else {
      throw Error()
    }
  },
}