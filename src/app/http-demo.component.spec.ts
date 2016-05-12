import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HttpDemoAppComponent } from '../app/http-demo.component';

beforeEachProviders(() => [HttpDemoAppComponent]);

describe('App: HttpDemo', () => {
  it('should create the app',
      inject([HttpDemoAppComponent], (app: HttpDemoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'http-demo works!\'',
      inject([HttpDemoAppComponent], (app: HttpDemoAppComponent) => {
    expect(app.title).toEqual('http-demo works!');
  }));
});
