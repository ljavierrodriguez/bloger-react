import React from 'react';

const Index = props => {
    return (
        <>

            {/* <!-- banner --> */}
            <div className="banner">
                <div className="container">
                    {/* <!-- heading --> */}
                    <h2>I'm Banner Heading for This Page</h2>
                    {/* <!-- paragraph --> */}
                    <p>It is our belief that in order to be most efficient it requires adaptive technology and software our customers can focus on their core business.</p>
                </div>
            </div>
            {/* <!-- banner end --> */}

            {/* <!-- after banner --> */}
            <div className="after-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            {/* <!-- after banner item --> */}
                            <div className="ab-item">
                                {/* <!-- heading --> */}
                                <h3>Focus on Systems</h3>
                                {/* <!-- paragraph --> */}
                                <p>While our prices are competitive, it's the value that's unmatched.</p>
                                <br />
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            {/* <!-- after banner item --> */}
                            <div className="ab-item">
                                {/* <!-- heading --> */}
                                <h3>Plan of Action</h3>
                                {/* <!-- paragraph --> */}
                                <p>While our prices are competitive, it's the value that's unmatched.</p>
                                <br />
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            {/* <!-- after banner item --> */}
                            <div className="ab-item">
                                {/* <!-- heading --> */}
                                <h3>Quality Compliance</h3>
                                {/* <!-- paragraph --> */}
                                <p>While our prices are competitive, it's the value that's unmatched.</p>
                                <br />
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- after banner end--> */}

            {/* <!-- events --> */}
            <div className="event" id="event">
                <div className="container">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>Upcoming events</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            {/* <!-- event item --> */}
                            <div className="event-item">
                                {/* <!-- image --> */}
                                <img className="img-responsive" src="img/event/1.jpg" alt="Events" />
                                {/* <!-- heading --> */}
                                <h4><a href="#">Rihanna, Eminem on stage</a></h4>
                                {/* <!-- sub text --> */}
                                <span className="sub-text">Integrating technology and software solutions.</span>
                                {/* <!-- paragraph --> */}
                                <p>It is our belief that in order to be most efficient it requires adaptive technology and software solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            {/* <!-- event item --> */}
                            <div className="event-item">
                                {/* <!-- image --> */}
                                <img className="img-responsive" src="img/event/2.jpg" alt="Events" />
                                {/* <!-- heading --> */}
                                <h4><a href="#">Dr. Dre on stage live</a></h4>
                                {/* <!-- sub text --> */}
                                <span className="sub-text">Integrating technology and software solutions.</span>
                                {/* <!-- paragraph --> */}
                                <p>It is our belief that in order to be most efficient it requires adaptive technology and software solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            {/* <!-- event item --> */}
                            <div className="event-item">
                                {/* <!-- image --> */}
                                <img className="img-responsive" src="img/event/3.jpg" alt="Events" />
                                {/* <!-- heading --> */}
                                <h4><a href="#">Macaroons live Party</a></h4>
                                {/* <!-- sub text --> */}
                                <span className="sub-text">Integrating technology and software solutions.</span>
                                {/* <!-- paragraph --> */}
                                <p>It is our belief that in order to be most efficient it requires adaptive technology and software solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- events end --> */}

            {/* <!-- blog --> */}
            <div className="blog" id="blog">
                <div className="container">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>Latest Blogs</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            {/* <!-- blog entry --> */}
                            <div className="entry">
                                {/* <!-- blog entry image --> */}
                                <img className="img-responsive" src="img/blog/1.jpg" alt="Blog" />
                                {/* <!-- heading / blog post title --> */}
                                <h3><a href="#">Communicating with you every step of the way</a></h3>
                                {/* <!-- blog information --> */}
                                <span className="meta">
                                    July 02, 2014 | Tag: Technology | By: David John
								</span>
                                {/* <!-- paragraph --> */}
                                <p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            {/* <!-- blog entry --> */}
                            <div className="entry">
                                {/* <!-- blog entry image --> */}
                                <img className="img-responsive" src="img/blog/2.jpg" alt="Blog" />
                                {/* <!-- heading / blog post title --> */}
                                <h3><a href="#">Communicating with you every step of the way</a></h3>
                                {/* <!-- blog information --> */}
                                <span className="meta">
                                    July 02, 2014 | Tag: Technology | By: David John
								</span>
                                {/* <!-- paragraph --> */}
                                <p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn btn-default">See More</a>
                    </div>
                </div>
            </div>
            {/* <!-- blog end --> */}

            {/* <!-- subscribe --> */}
            <div className="subscribe" id="subscribe">
                <div className="container">
                    {/* <!-- subscribe content --> */}
                    <div className="sub-content">
                        <h3>Subscribe Here for Updates</h3>
                        <form role="form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Email..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Subscribe</button>
                                </span>
                            </div>{/* <!-- /input-group --> */}
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- subscribe end --> */}

            {/* <!-- team --> */}
            <div className="team" id="team">
                <div className="container">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>Executing Team</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/1.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="#">executive.member@bloger.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/2.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="#">executive.member@bloger.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/1.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="#">executive.member@bloger.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/2.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="#">executive.member@bloger.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- team end --> */}
        </>
    )
}

export default Index;