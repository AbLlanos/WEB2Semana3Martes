import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarLoginComponent } from './cerrar-login.component';

describe('CerrarLoginComponent', () => {
  let component: CerrarLoginComponent;
  let fixture: ComponentFixture<CerrarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerrarLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerrarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
