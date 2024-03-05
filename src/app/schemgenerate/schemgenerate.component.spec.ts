import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemgenerateComponent } from './schemgenerate.component';

describe('SchemgenerateComponent', () => {
  let component: SchemgenerateComponent;
  let fixture: ComponentFixture<SchemgenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemgenerateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchemgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
