import React, { Component } from 'react';
import { Redirect } from 'react-router';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fName: '',
            fEmail: '',
            fTel: '',
            fDesc: '',
        }
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        console.log(ten);
        console.log(giatri);
        this.setState({
            [ten]:giatri
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }
    getGiaTri = ()=>{
        var noiDung = " ";
        noiDung += "Ten nhan duoc la: " + this.state.fName;
        noiDung += "/Email nhan duoc la: " + this.state.fEmail;
        noiDung += "/So dien thoai la: " + this.state.fTel;
        noiDung += "/Noi dung ghi chu la: " + this.state.fDesc;
        return noiDung;
    }
    
    render() {
        if (this.state.isRedirect) {
            console.log(this.getGiaTri());
            console.log(this.state.fName);
            return <Redirect to="/" />
        }
        return (
            <div className="">

                <div className="masthead mt-5" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559400__340.jpg")' }}>

                    <div className="content">
                        <div className="container px-5 mb-5 pb-5">
                            <h2 className="text-white display-1 lh-1 mb-5 pb-5">
                                <br />
                                Liên hệ.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container mb-5 mt-5" id="feedbackModal" tabIndex={-1} aria-labelledby="feedbackModalLabel" aria-hidden="false">

                    <div className="modal-dialog modal-dialog-centered mb-5 mt-5">
                        <div className="modal-content mb-5 mt-5">
                            <div className="modal-header bg-gradient-primary-to-secondary p-4">
                                <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body border-0 p-4">
                                <form>
                                    <div className="form-floating mb-4">
                                        <input name="fName" onChange={(event) => this.isChange(event)} className="form-control" id="inputName" type="text" placeholder="Enter your name..." />
                                        <label htmlFor="inputName">Name</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input name="fEmail" onChange={(event) => this.isChange(event)} className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input name="fTel" onChange={(event) => this.isChange(event)} className="form-control" id="inputPhone" type="tel" placeholder="(123) 456-7890" />
                                        <label htmlFor="inputPhone">Phone number</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <textarea name="fDesc" onChange={(event) => this.isChange(event)} className="form-control" id="inputMessage" placeholder="Enter your message here..." style={{ height: '10rem' }} defaultValue={""} />
                                        <label htmlFor="inputMessage">Message</label>
                                    </div>
                                    <div className="d-grid mb-5">
                                        <button onClick={(event) => this.submitForm(event)} className="btn btn-primary rounded-pill py-3" type="submit">Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;