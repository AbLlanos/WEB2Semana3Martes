import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsarioFormComponent } from './registro-usario-form.component';

describe('RegistroUsarioFormComponent', () => {
  let component: RegistroUsarioFormComponent;
  let fixture: ComponentFixture<RegistroUsarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUsarioFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
