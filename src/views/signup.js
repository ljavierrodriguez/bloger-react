import React from 'react';

const SignUp = props => {
    return (
        <>
            {/* <!-- banner --> */}
            <div class="banner">
                <div class="container">
                    {/* <!-- form content / register area --> */}
                    <div class="register-area">
                        {/* <!-- heading --> */}
                        <h3>Sign Up, For An Account</h3>
                        <form role="form" id="register-form">
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputName1" placeholder="Full Name" />
                            </div>
                            <div class="form-group">
                                <div class="btn-group" data-toggle="buttons">
                                    <label class="btn btn-info">
                                        <input type="radio" name="options" id="option1" /> Male
									</label>
                                    <label class="btn btn-info">
                                        <input type="radio" name="options" id="option2" /> Female
									</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Re-Password" />
                            </div>
                            <div class="checkbox form-group">
                                <label>
                                    <input type="checkbox" /> I agree with all terms and conditions.
								</label>
                            </div>
                            <button type="submit" class="btn btn-default">SignUp</button>&nbsp;
							<button type="reset" class="btn btn-default">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- banner end --> */}

        </>
    )
}

export default SignUp;