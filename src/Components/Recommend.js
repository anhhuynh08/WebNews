import React, { Component } from 'react';
import NewsRelated from './NewsRelated'
import dl from './dulieu.json'
class Recommend extends Component {
    render() {
        var dem = 1;
        return (
            <div className="container mt-5 mb-5">
                <div className="card border-primary text-center">
                    <img className="card-img-top" src="holder.js/100px180/" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Tin liên quan</h4>
                    </div>
                </div>
                <div className="row">
                    {
                        dl.map((value, key) => {

                            if (dem <= 4) {
                                return (
                                    <NewsRelated key={key}
                                        tinId={value.id}
                                        trichDan={value.trichDan} tieuDe={value.tieuDe} anh={value.anh} />
                                );
                            }else {
                                return null;
                            }
                        })
                    }


                </div>
                <h2 className="text-primary mt-5 mb-5">-----</h2>
            </div>

        );
    }
}

export default Recommend;