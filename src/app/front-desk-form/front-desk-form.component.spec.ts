import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskFormComponent } from './front-desk-form.component';

describe('FrontDeskFormComponent', () => {
  let component: FrontDeskFormComponent;
  let fixture: ComponentFixture<FrontDeskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontDeskFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDeskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
