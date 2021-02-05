import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './components/posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './components/post/post.component';
import {AppColorDirective} from './directives/app-color.directive';
import {MouseLeaveDirective} from './directives/mouse-leave.directive';
import {CustomPipe} from './custom.pipe';
import {PostService} from './services/post.service';

@NgModule({
  declarations: [PostsComponent, PostComponent, AppColorDirective, MouseLeaveDirective, CustomPipe],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule, PostsComponent],
  providers: [PostService]
})
export class PostModule {
}
