import React, { Component } from 'react';
import NewsItem from './NewsItem'
import dl from './dulieu.json'
class ListItem extends Component {
  
    
    
   
    
    render() {
        return (
            <section id="features mt-5">
                <div className="masthead mt-5" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/07/31/16/24/banner-1559400__340.jpg")' }}>

                    <div className="content">
                        <div className="container px-5 mb-5 pb-5">
                            <h2 className="text-white display-1 lh-1 mb-5 pb-5">
                                <br />
                                Danh sách tin tức.
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="row ">
                        {
                            
                            dl.map((value,key) => {
                                
                                return (
                                    <NewsItem key={key}
                                    tinId={value.id}
                                    trichDan={value.trichDan} tieuDe={value.tieuDe} anh={value.anh} />

                                )
                                
                            })
                        }
                        


                    </div>
                </div>
            </section>
        );
    }
}

export default ListItem;