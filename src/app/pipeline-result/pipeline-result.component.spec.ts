import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineResultComponent } from './pipeline-result.component';

describe('PipelineResultComponent', () => {
  let component: PipelineResultComponent;
  let fixture: ComponentFixture<PipelineResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipelineResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipelineResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
