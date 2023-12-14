import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalajComponent } from './palaj.component';

describe('PalajComponent', () => {
  let component: PalajComponent;
  let fixture: ComponentFixture<PalajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalajComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PalajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
