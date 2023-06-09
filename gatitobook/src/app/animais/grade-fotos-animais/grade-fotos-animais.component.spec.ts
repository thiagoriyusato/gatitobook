import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosAnimaisComponent } from './GradeFotosAnimaisComponent';

describe('GradeFotosAnimaisComponent', () => {
  let component: GradeFotosAnimaisComponent;
  let fixture: ComponentFixture<GradeFotosAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradeFotosAnimaisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeFotosAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
