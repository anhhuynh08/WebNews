import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <header className="masthead mt-5" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDG7IGiozWCU1PwuawwI0BDmaeZJGAIwp-7Q&usqp=CAU")' }}>
                <section className="cta ">
                    <div className="cta-content">
                        <div className="container px-5 mb-5 pb-5">
                            <h2 className="text-white display-1 lh-1 mb-5 pb-5">

                                <br />
                                Tin tức.
                            </h2>

                        </div>
                    </div>
                </section>
            </header>

        );
    }
}

export default Header;