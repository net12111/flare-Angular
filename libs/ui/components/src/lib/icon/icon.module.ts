import { NgModule } from '@angular/core';
import {
  RemixIconModule,
  RiBookmarkLine,
  RiChat1Line,
  RiChatPollLine,
  RiClipboardLine,
  RiCodeLine,
  RiCompass3Line,
  RiFullscreenExitFill,
  RiFullscreenFill,
  RiGithubLine,
  RiHeart2Line,
  RiHome2Line,
  RiImageLine,
  RiNotification4Line,
  RiShareLine,
  RiStackLine,
  RiTerminalBoxLine,
  RiText,
  RiUser3Line,
} from 'angular-remix-icon';

@NgModule({
  imports: [
    RemixIconModule.configure({
      RiHome2Line,
      RiNotification4Line,
      RiBookmarkLine,
      RiUser3Line,
      RiCompass3Line,
      RiImageLine,
      RiCodeLine,
      RiTerminalBoxLine,
      RiStackLine,
      RiGithubLine,
      RiChatPollLine,
      RiHeart2Line,
      RiChat1Line,
      RiShareLine,
      RiFullscreenFill,
      RiFullscreenExitFill,
      RiText,
      RiClipboardLine,
    }),
  ],
  exports: [RemixIconModule],
})
export class IconModule {}
