import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccComponent } from './page-acc.component';

describe('PageAccComponent', () => {
  let component: PageAccComponent;
  let fixture: ComponentFixture<PageAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAccComponent]
    });
    fixture = TestBed.createComponent(PageAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
