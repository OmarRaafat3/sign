import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesLearnComponent } from './tools.component';

describe('FeaturesLearnComponent', () => {
  let component: FeaturesLearnComponent;
  let fixture: ComponentFixture<FeaturesLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
