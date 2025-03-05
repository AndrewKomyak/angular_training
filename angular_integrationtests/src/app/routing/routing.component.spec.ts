import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { By } from '@angular/platform-browser';

class RouterStrub {
  navigate(path: string) {}
}

class ActivatedRouteStub {
  private subject = new Subject<Params>();

  push(params: Params) {
    this.subject.next(params);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingComponent],
      providers: [{provide: Router, useClass: RouterStrub}, {provide: ActivatedRoute, useClass: ActivatedRouteStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should navifgate to posts if go back is called', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/posts']);
  });

  it('should navigate to 404 if id is 0', () => {
    let router = TestBed.inject(Router);
    let route = TestBed.inject(ActivatedRoute) as unknown as ActivatedRouteStub;
    spyOn(router, 'navigate');
    route.push({id: '0'});
    expect(router.navigate).toHaveBeenCalledWith(['/404']);
  });

  it('should have routr-outlet directive', () => {
    const element = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(element).not.toBeNull();
  });
});
