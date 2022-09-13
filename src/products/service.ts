import repository from "./repository";

export default {
  getAll: () => {
    return repository.getAll()
  },
  post: (body: any) => {
    return repository.post(body)
  }
}