import repository from "./repository";

export default {
  setOrder: async (body: any) => {
    return await repository.setOrder(body)
  },
}