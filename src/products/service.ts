import repository from "./repository";
import { isAdmin } from "./constant/authority"
import UserWithoutAccess from "./exception/UserWithoutAccess";

export default {
  getAll: async () => {
    return await repository.getAll()
  },
  post: async (body: any, headers: any) => {
    const grade = Number(headers.grade)
    if (isAdmin(grade)) {
      return await repository.post(body)
    } else {
      throw new UserWithoutAccess()
    }
  },
  getOne: async (productId: number) => {
    return await repository.getOne(productId)
  },
  patch: async (productId: number, body: any, headers: any) => {
    const grade = Number(headers.grade)
    if (isAdmin(grade)) {
      return await repository.patch(productId, body)
    } else {
      throw new UserWithoutAccess()
    }
  },
  delete: async (productId: number, headers: any) => {
    const grade = Number(headers.grade)
    if (isAdmin(grade)) {
      return await repository.delete(productId)
    } else {
      throw new UserWithoutAccess()
    }
  },
}