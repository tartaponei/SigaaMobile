import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideComponent } from './styleguide.component';

describe('StyleguideComponent', () => {
  let component: StyleguideComponent;
  let fixture: ComponentFixture<StyleguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleguideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
