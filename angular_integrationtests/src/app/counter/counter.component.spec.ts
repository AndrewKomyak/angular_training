import { ComponentFixture, TestBed } from "@angular/core/testing";
import {CounterComponent} from "./counter.component";
import { By } from "@angular/platform-browser";

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterComponent]
    })

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render count property', () => {
    let num = 42;
    component.counter = num;
    fixture.detectChanges();

    var actual = fixture.debugElement.query(By.css('.counter')).nativeElement.textContent;

    expect(actual).toContain(num.toString());
  });

  it('should add green class if counter is even', () => {
    component.counter = 2;
    fixture.detectChanges();

    var actual = fixture.debugElement.query(By.css('.counter')).classes;

    expect(actual['green']).toBeTruthy();
  });

  it('should add remove green class if counter is odd', () => {
    component.counter = 3;
    fixture.detectChanges();

    var actual = fixture.debugElement.query(By.css('.counter')).classes;

    expect(actual['green']).toBeFalsy();
  });

  it('should increment on increment button click', () => {
    component.counter = 0;
    fixture.detectChanges();

    fixture.debugElement.query(By.css('button#increment')).triggerEventHandler('click', null);

    expect(component.counter).toBe(1);
  });

  it('should decrement on decrement button click', () => {
    component.counter = 0;
    fixture.detectChanges();

    fixture.debugElement.query(By.css('button#decrement')).triggerEventHandler('click', null);

    expect(component.counter).toBe(-1);
  });
});