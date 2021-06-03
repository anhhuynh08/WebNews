import React, { Component } from 'react';
import dl from './dulieu.json'
import NewsItem from './NewsItem'
class Content extends Component {
    render() {
        var dem = 1;
        console.log(this.props.match.params.id);
        return (
            <div >
                <div className="masthead mt-5" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559400__340.jpg")' }}>
                    <div className="cont">
                        <div className="container px-5 mb-5 pb-5">
                            <h2 className="text-white display-1 lh-1 mb-5 pb-5">
                                <br />
                                Chi tiết tin.
                            </h2>
                        </div>
                    </div>
                </div>
                {
                    dl.map((value, key) => {

                        if (value.id === parseInt(this.props.match.params.id, 20)) {
                            return (
                                <div className="container" key={key}>
                                    <div className="content_news" >
                                        <img src={value.anh} alt=""  className="img-fluid rong100" />
                                        <h1 className="lead text-center tieude ">{value.tieuDe}</h1>
                                        <hr className="my-2" />
                                        {value.noiDung}
                                    </div>
                                </div>
                            )
                        } else {
                            return ("")
                        }
                    })
                }
                <div className="container">
                    <div className="row ">
                        <h2 className="text-warning mb-5 ">
                            <br />
                                Tin liên quan.
                            </h2>
                        {
                            dl.map((value, key) => {
                                console.log(this.props.match.params.id);
                                if (value.id !== parseInt(this.props.match.params.id, 20)) {
                                    if (dem <= 4) {
                                        return (
                                            <NewsItem key={key}
                                                tinId={value.id}
                                                trichDan={value.trichDan} tieuDe={value.tieuDe} anh={value.anh} />

                                        )
                                    }else {
                                        return false;
                                    }
                                } else {
                                    return false;
                                }

                            })
                        }



                    </div>

                </div>

            </div>

        );
    }
}

export default Content;