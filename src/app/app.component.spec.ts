import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
  RouterModule,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, ReplaySubject } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let router: Router;
  let title: Title;
  let activatedRoute: ActivatedRoute;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const eventSubject = new ReplaySubject<RouterEvent>(1);
  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject.asObservable(),
    url: 'text/url',
  };

  const activatedRouteMock = {
    snapshot: { data: {} },
    firstChild: { data: {} },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        Title,
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock },
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    title = TestBed.inject(Title);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should', fakeAsync(() => {
    eventSubject.next(new NavigationEnd(1, 'result', 'redirect'));
    component.ngOnInit();
    flush();
  }));
});
