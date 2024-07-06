export default function SignUpForm(): JSX.Element {
    return (
      <div className="container page">
          <div className="row">
              <div className="col-md-6 offset-md-3 col-xs-12">
                  <h1 className='text-xs-center ng-binding'>Sign up</h1>
                  <p className="text-xs-center">
                      <a>Have an account? </a>
                  </p>

                  <form>
                    <fieldset className='form-group'>
                        <input type="email" className="form-control form-control-lg ng-pristine ng-untouch ng-valid ng-empty ng-valid-email" placeholder='Username'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <input type="text" className="form-control form-control-lg ng-pristine ng-untouch ng-valid ng-empty ng-valid-email" placeholder='Email'/>
                    </fieldset>
                    <fieldset className='form-group'>
                        <input type="password" className="form-control form-control-lg ng-pristine ng-untouch ng-valid ng-empty ng-valid-email" placeholder='Password'/>
                    </fieldset>
                    <button className="btn btn-lg btn-primary pull-xs-right ng-binding" type="submit">Sign up</button>
                  </form>
              </div>
          </div>
      </div>
    );
  };
  
  