import { Component } from '@angular/core';
import { ColorDirective } from './color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
  <p appColor="red">Color me</p>
  <p appColor>Color me2</p>`,
  imports: [ColorDirective]})
class TestComponent {}

describe('ColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, ColorDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  xit('should create an instance', () => {
    const directive = new ColorDirective({} as any);
    expect(directive).toBeTruthy();
  });

  it('should color the element', () => {
    const p = fixture.nativeElement.querySelectorAll('p');
    console.log(p[0]);
    console.log(p[1]);
    expect(p[0].style.color).toBe('red');
    expect(p[1].style.color).toBe('blue');
  });
});
