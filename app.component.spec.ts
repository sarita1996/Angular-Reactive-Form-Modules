import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule,FormGroup } from '@angular/forms';

describe('AppComponent', () => {
  
  //added this to create component fixture(1) and imports line 4
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
        
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  }));

  //add this (2)
  beforeEach(() => {
        // create component and test fixture
        fixture = TestBed.createComponent(AppComponent);
        //get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

 it(`should have as title 'reactive'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('reactive');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('reactive app is running!');
  });

 
  it('form invalid when empty', () => {
  expect(component.myForm.valid).toBeFalsy();
});


  it('First Name field validity', () => {
  let firstName = component.myForm.controls['firstName'];
  expect(firstName.valid).toBeFalsy(); 
});

   it('Last Name field validity', () => {
  let lastName = component.myForm.controls['lastName'];
  expect(lastName.valid).toBeFalsy(); 
});

it('email field validity', () => {
    let errors = {};
    let email = component.myForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    email.setValue("sara@gmail.com");
    expect(email.valid).toBeTruthy();
  });


it('phoneNumber field validity', () => {
    let errors = {};
    let phoneNumber = component.myForm.controls['phoneNumber'];
    errors = phoneNumber.errors || {};
    expect(errors['required']).toBeTruthy();

    phoneNumber.setValue("11970900000");
    expect(phoneNumber.valid).toBeTruthy();
    // expect(phoneNumber.hasError('minLength')).toBeTruthy();
  });

  it('age field validity', () => {
    let errors = {};
    let age = component.myForm.controls['age'];
    errors = age.errors || {};
    expect(errors['required']).toBeTruthy();
  });


it('dob field validity', () => {
    let errors = {};
    let dob = component.myForm.controls['dob'];
    errors = dob.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('gender field validity', () => {
    let errors = {};
    let gender = component.myForm.controls['gender'];
    errors = gender.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('country field validity', () => {
    let errors = {};
    let country = component.myForm.controls['dob'];
    errors = country.errors || {};
    expect(errors['required']).toBeTruthy();
  });

it('check field validity', () => {
    let errors = {};
    let check = component.myForm.controls['check'];
    errors = check.errors || {};
    expect(errors['required']).toBeTruthy();
  });


});

