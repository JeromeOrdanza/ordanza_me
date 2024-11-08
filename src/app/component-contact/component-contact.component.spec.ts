import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContactComponent } from './component-contact.component';

describe('ComponentContactComponent', () => {
  let component: ComponentContactComponent;
  let fixture: ComponentFixture<ComponentContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
