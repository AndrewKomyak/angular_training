import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('counter should be 0 on init', () => {
    expect(component.counter).toBe(0);
  });

  it ('counter should be increased by 1 after increment', () => {
    const expected = component.counter + 1;
    
    component.increment();
    const actual = component.counter;

    expect(actual).toBe(expected);
  });

  it ('counter should be decreased by 1 after decrease', () => {
    const expected = component.counter - 1;
    
    component.decrease();
    const actual = component.counter;

    expect(actual).toBe(expected);
  });

  it('should increment value by event emitter', () => {
    let result = 0;
    component.counterEmitter.subscribe(v => result = v);
    component.increment();

    expect(result).toBe(1);
  });

  it('should create form with controls', () => {
    expect(component.form.contains('login')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should flag invalid login on empty string', () => {
    const control = component.form.get('login');
    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });
});
