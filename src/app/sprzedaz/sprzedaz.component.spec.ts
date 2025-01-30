import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprzedazComponent } from './sprzedaz.component';

describe('SprzedazComponent', () => {
  let component: SprzedazComponent;
  let fixture: ComponentFixture<SprzedazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprzedazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprzedazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
