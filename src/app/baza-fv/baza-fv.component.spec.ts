import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaFvComponent } from './baza-fv.component';

describe('BazaFvComponent', () => {
  let component: BazaFvComponent;
  let fixture: ComponentFixture<BazaFvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazaFvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazaFvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
