import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TegnologiasComponent } from './tegnologias.component';

describe('TegnologiasComponent', () => {
  let component: TegnologiasComponent;
  let fixture: ComponentFixture<TegnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TegnologiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TegnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
