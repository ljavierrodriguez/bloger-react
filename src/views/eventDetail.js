import React, { useContext, useEffect } from 'react';
import { Context } from './../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventDetail = ({ history, match: { params: { id, category } } }, ...props) => {
    const { store: { events } } = useContext(Context);

    const [event, setEvent] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0); // iniciar la pagina desde arriba
        const eventData = !!events ? events.filter((evento) => evento.id == id) : null;
        if (eventData !== null) {
            setEvent(...eventData);
        }
    });

    return (
        <>

            {/* <!-- banner --> */}
            <div className="banner">
                <div className="container">
                    {/* <!-- heading --> */}
                    <h2>{!!event && event.title}</h2>
                    <h5>{category}</h5>
                    {/* <!-- paragraph --> */}
                    <p>{!!event && event.resume}</p>
                </div>
            </div>
            {/* <!-- banner end --> */}



            {/* <!-- events --> */}
            <div className="event" id="event">
                <div className="container-fluid">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>{/* Upcoming events */}</h2>
                    </div>
                    <div className="row" >
                        <div className="col-md-10 col-md-offset-1" style={{ backgroundColor: 'red' }}>
                            <img src={!!event && event.image} alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <br />
                            <p>{!!event && event.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- events end --> */}

            <button className="btn btn-info" onClick={() => history.push("/")}>Regresar</button>

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

export default EventDetail;