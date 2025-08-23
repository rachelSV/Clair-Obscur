import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosUtilesComponent } from './infos-utiles.component';

describe('InfosUtilesComponent', () => {
  let component: InfosUtilesComponent;
  let fixture: ComponentFixture<InfosUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfosUtilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
