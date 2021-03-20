import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin)
      throw new Error("You must be an admin to list all users!");

    const allusers = this.usersRepository.list();

    return allusers;
  }
}

export { ListAllUsersUseCase };
