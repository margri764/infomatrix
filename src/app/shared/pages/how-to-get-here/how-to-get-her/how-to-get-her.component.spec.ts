import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGetHerComponent } from './how-to-get-her.component';

describe('HowToGetHerComponent', () => {
  let component: HowToGetHerComponent;
  let fixture: ComponentFixture<HowToGetHerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToGetHerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToGetHerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
