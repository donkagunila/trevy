import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumHeadComponent } from './album-head.component';

describe('AlbumHeadComponent', () => {
  let component: AlbumHeadComponent;
  let fixture: ComponentFixture<AlbumHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
