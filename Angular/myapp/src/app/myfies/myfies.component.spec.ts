import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfiesComponent } from './myfies.component';

describe('MyfiesComponent', () => {
  let component: MyfiesComponent;
  let fixture: ComponentFixture<MyfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyfiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
