import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExtraComponent } from './about-extra.component';

describe('AboutExtraComponent', () => {
  let component: AboutExtraComponent;
  let fixture: ComponentFixture<AboutExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
