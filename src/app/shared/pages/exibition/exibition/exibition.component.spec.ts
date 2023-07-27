import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibitionComponent } from './exibition.component';

describe('ExibitionComponent', () => {
  let component: ExibitionComponent;
  let fixture: ComponentFixture<ExibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
