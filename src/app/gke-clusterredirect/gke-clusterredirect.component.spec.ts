import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkeClusterredirectComponent } from './gke-clusterredirect.component';

describe('GkeClusterredirectComponent', () => {
  let component: GkeClusterredirectComponent;
  let fixture: ComponentFixture<GkeClusterredirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkeClusterredirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GkeClusterredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
