import { ComponentFixture, fakeAsync, flush, TestBed } from "@angular/core/testing";
import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";
import { of } from "rxjs";

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [PostsService, provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();
    
      fixture = TestBed.createComponent(PostsComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(PostsService);
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    // xit('should fetch posts', () => {
    //   const posts = [{id: 1, title: 'Post 1'}];
    //   spyOn(service, 'fetch').and.returnValue(of(posts));
    //   component.ngOnInit();
    //   expect(component.posts).toEqual(posts);
    // });

    it('should fetch posts', fakeAsync(() => {
      const posts = [{id: 1, title: 'Post 1'}];
      spyOn(service, 'fetchPromise').and.returnValue(Promise.resolve(posts) as any);
      component.ngOnInit();
      flush();
      expect(component.posts).toEqual(posts);
    }));
})
