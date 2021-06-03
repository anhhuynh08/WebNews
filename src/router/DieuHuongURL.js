import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Content from '../Components/Content';
import ListItem from '../Components/ListItem';
import Contact from '../Components/Contact';
import Recommend from '../Components/Recommend';
class DieuHuongURL extends Component {
    render() {
        return (
            <div>

                <div>
                    <Route exact path="/" component={ListItem} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/news/:slug.:id.html" component={Content} />
                    <Route exact path="/listnews" component={ListItem} />
                    <Route exact path="/recom" component={Recommend} />
                </div>

            </div>
        );
    }
}

export default DieuHuongURL;