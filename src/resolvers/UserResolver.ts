import { Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { User } from "../entities/User";

@Resolver((of) => User)
export class UserResolver {
  private readonly userRepository: Repository<User>;

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return this.userRepository.find();
  }
}
