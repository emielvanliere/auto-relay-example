import {
  RelayedQuery,
  RelayLimitOffset,
  RelayLimitOffsetArgs,
} from "auto-relay";
import { Query, Resolver } from "type-graphql";
import { Repository } from "typeorm";
import { User } from "../entities/User";

@Resolver((of) => User)
export class UserResolver {
  private readonly userRepository: Repository<User>;

  @Query((returns) => [User])
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  @RelayedQuery(() => User)
  public async getAllUsersPaginated(
    @RelayLimitOffset() pagination?: RelayLimitOffsetArgs
  ): Promise<[User[], number]> {
    return this.userRepository.findAndCount({
      where: {},
      skip: pagination?.offset,
      take: pagination?.limit,
    });
  }
}
