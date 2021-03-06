import {
  CreateUserInput,
  GiveKudosInput,
  UpdateHeaderImageInput,
  UpdateUserInput,
} from '@flare/api-interfaces';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CurrentUser } from '@flare/api/shared';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('me')
  findMe(@CurrentUser() user: CurrentUser) {
    return this.usersService.findOne(user.id);
  }

  @Query('getTopUsers')
  getTopUsers(@CurrentUser() user: CurrentUser) {
    return this.usersService.getTopUsers(user);
  }

  @Query('userByUsername')
  findByUsername(
    @Args('username') username: string,
    @CurrentUser() user: CurrentUser
  ) {
    return this.usersService.findByUsername(username, user);
  }

  @Query('isUsernameAvailable')
  isUsernameAvailable(@Args('username') username: string) {
    return this.usersService.isUsernameAvailable(username);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation('createUser')
  create(@Args('input') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation('updateUser')
  update(
    @Args('input') updateUserInput: UpdateUserInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.usersService.update(updateUserInput, user);
  }

  @Mutation('completeProfile')
  completeProfile(
    @Args('input') updateUserInput: UpdateUserInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.usersService.update(updateUserInput, user, 'SETUP_PROFILE');
  }

  @Mutation('completeOnboarding')
  completeOnboarding(@CurrentUser() user: CurrentUser) {
    return this.usersService.completeOnboarding(user);
  }

  @Mutation('deleteUser')
  delete(@Args('id') id: string) {
    return this.usersService.delete(id);
  }

  @Mutation('follow')
  follow(@Args('userId') userId: string, @CurrentUser() user: CurrentUser) {
    return this.usersService.follow(userId, user);
  }

  @Mutation('unfollow')
  unfollow(@Args('userId') userId: string, @CurrentUser() user: CurrentUser) {
    return this.usersService.unfollow(userId, user);
  }

  @Mutation('giveKudos')
  giveKudos(
    @Args('input') input: GiveKudosInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.usersService.giveKudos(input, user);
  }

  @Mutation('removeKudos')
  removeKudos(@Args('id') id: string, @CurrentUser() user: CurrentUser) {
    return this.usersService.removeKudos(id, user);
  }

  @Mutation('updateHeaderImage')
  updateHeaderImage(
    @Args('input') input: UpdateHeaderImageInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.usersService.updateHeaderImage(input, user);
  }
}
