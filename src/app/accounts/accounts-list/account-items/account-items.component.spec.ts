import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountItemsComponent } from './account-items.component';

describe('AccountItemsComponent', () => {
  let component: AccountItemsComponent;
  let fixture: ComponentFixture<AccountItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
