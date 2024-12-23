import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationSyntaxComponent } from './interpolation-syntax.component';

describe('InterpolationSyntaxComponent', () => {
  let component: InterpolationSyntaxComponent;
  let fixture: ComponentFixture<InterpolationSyntaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationSyntaxComponent]
    });
    fixture = TestBed.createComponent(InterpolationSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
