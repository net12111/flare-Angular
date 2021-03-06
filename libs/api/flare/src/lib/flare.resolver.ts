import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FlareService } from './flare.service';
import {
  AddCommentInput,
  AddLikeInput,
  CreateFlareInput,
  RemoveCommentInput,
  RemoveLikeInput,
} from '@flare/api-interfaces';
import { CurrentUser } from '@flare/api/shared';
import { BookmarkService } from './bookmark.service';

@Resolver('Flare')
export class FlaresResolver {
  constructor(
    private readonly flareService: FlareService,
    private readonly bookmarkService: BookmarkService
  ) {}

  @Query('flare')
  findOne(@Args('id') id: string, @CurrentUser() user: CurrentUser) {
    return this.flareService.findOne(id, user);
  }

  @Query('flares')
  findAll(@CurrentUser() user: CurrentUser) {
    return this.flareService.findAllFlaresFromFollowingUsers(user);
  }

  @Query('popularFlares')
  findPopularFlares(@CurrentUser() user: CurrentUser) {
    return this.flareService.findPopularFlares(user);
  }

  @Query('bookmarkedFlares')
  findAllBookmarks(@CurrentUser() user: CurrentUser) {
    return this.bookmarkService.findAllBookmarked(user);
  }

  @Mutation('createFlare')
  create(
    @Args('input') createFlareInput: CreateFlareInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.flareService.create(createFlareInput, user);
  }

  @Mutation('deleteFlare')
  delete(@Args('id') id: string, @CurrentUser() user: CurrentUser) {
    return this.flareService.delete(id, user);
  }

  @Mutation('addComment')
  addComment(
    @Args('input') input: AddCommentInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.flareService.addComment(input, user);
  }

  @Mutation('removeComment')
  removeComment(
    @Args('input') input: RemoveCommentInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.flareService.removeComment(input, user);
  }

  @Mutation('addLike')
  addLike(
    @Args('input') input: AddLikeInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.flareService.addLike(input, user);
  }

  @Mutation('removeLike')
  removeLike(
    @Args('input') input: RemoveLikeInput,
    @CurrentUser() user: CurrentUser
  ) {
    return this.flareService.removeLike(input, user);
  }

  @Mutation('bookmark')
  bookmark(@Args('flareId') flareId: string, @CurrentUser() user: CurrentUser) {
    return this.bookmarkService.bookmark(flareId, user);
  }

  @Mutation('removeBookmark')
  removeBookmark(@Args('id') id: string, @CurrentUser() user: CurrentUser) {
    return this.bookmarkService.removeBookmark(id, user);
  }
}
