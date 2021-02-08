import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteContentsComponent } from './site-contents.component';

describe('SiteContentsComponent', () => {
  let component: SiteContentsComponent;
  let fixture: ComponentFixture<SiteContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
