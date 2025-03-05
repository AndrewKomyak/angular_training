import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostsComponent } from "./posts.component";
import { PostsService } from "./posts.service";
import { EMPTY, of } from "rxjs";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

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

      it('should call fetch on init', () => {
        let spy = spyOn(service, 'fetch').and.callFake(() => {
          return EMPTY;
        });

        component.ngOnInit();

        expect(spy).toHaveBeenCalled();
      });

      it('should populate posts on init', () => {
        const posts = [1,2,3,4,5];
        spyOn(service, 'fetch').and.returnValue(of(posts));

        component.ngOnInit();

        expect(component.posts.length).toBe(posts.length);
      });

      it('should do nothing on add with empty value', () => {
        let spy = spyOn(service, 'create');

        component.add('');

        expect(spy).not.toHaveBeenCalled();
      });

      it('should call create on add', () => {
        let spy = spyOn(service, 'create').and.returnValue(EMPTY);

        component.add('test');

        expect(spy).toHaveBeenCalled();
      });

      it('should add post on create success', () => {
        spyOn(service, 'create').and.returnValue(of({title: 'test'}));

        component.add('test');

        expect(component.posts.length).toBe(1);
      });

      it('should call remove on delete', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        let spy = spyOn(service, 'remove').and.returnValue(EMPTY);

        component.delete(1);

        expect(spy).toHaveBeenCalledWith(1);
      });

      it('should not call remove if not confirmed', () => {
        spyOn(window, 'confirm').and.returnValue(false);
        let spy = spyOn(service, 'remove');

        component.delete(1);

        expect(spy).not.toHaveBeenCalled();
      });
});