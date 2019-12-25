import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../navBar/navbar.css';
import './home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

const AnimationExample = () => (
    <div className="home">
    <Router basename="/home" >
    <Route render={({ location }) => ( <div className="tabs-nav-wrapper"><Route exact path="/" render={() => <Redirect to="/assets" />}
    />
    <div className="fake-top">
        <div className="fake-top-items-wrapper">
            <i className="material-icons">menu</i>
            <button className="filter-add md-primary md-button md-ink-ripple" type="button" ><i
                className="md-icon-button material-icons ng-scope">search</i><span className="ng-scope"> Search</span>
            </button>
            <span className="framework-indicator">Assets Page Built with React as a separate self-contained App. Uses React router to switch between tabs. </span>
            <span className="daisy-span"> Daisy</span>
        </div>

    </div>
<ul style={styles.nav} className="tabs-nav">
    <NavLink to="/assets" className="title-wrapper"> <span>ASSETS</span>  <span className="assets-count">3,639,335</span></NavLink>
    <NavLink to="/subtitles" className="title-wrapper"><span>SUBTITLES</span>  <span className="assets-count">277,800</span></NavLink>
    <NavLink to="/captions" className="title-wrapper"><span>CAPTIONS</span>  <span className="assets-count">59,131</span></NavLink>
    <NavLink to="/documents" className="title-wrapper"><span>DOCUMENTS </span> <span className="assets-count">189,349</span></NavLink>
    </ul>
    <div style={styles.content} className="content">
    <TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
    <Switch location={location}>
    <Route exact path="/assets" component={assets} />
    <Route exact path="/subtitles" component={subtitles} />
    <Route exact path="/captions" component={captions} />
    <Route exact path="/documents" component={documents} />
        {/* Without this `Route`, we would get errors during the initial transition from `/` to `/assets` */}
    <Route render={() => <div>Not Found</div>} />
    </Switch>
    </CSSTransition>
    </TransitionGroup>
</div>
</div>
)}
/>
</Router>
    </div>
);
const NavLink = props => (
    <li style={styles.navItem}>
    <Link {...props}  />
</li>
);
const assets = ({ match: { params } }) => (
    <div><img src="../src/images/assets.png" className="main-image"/></div>
);
const subtitles = ({ match: { params } }) => (
    <div><img src="../src/images/subtitles.png" className="main-image"/></div>
);
const documents = ({ match: { params } }) => (
    <div><img src="../src/images/documents.png" className="main-image"/></div>
);
const captions = ({ match: { params } }) => (
    <div><img src="../src/images/captions.png" className="main-image"/></div>
);
const styles = {};
styles.content = {
    textAlign: "center"
};
styles.nav = {
    display: "flex"
};
styles.navItem = {
    listStyleType: "none",
    padding: "10px"
};
export default AnimationExample;
