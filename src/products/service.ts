import repository from "./repository";

export default {
  get: () => {
    return repository.get()
  }
}