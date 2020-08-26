import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import BottomMenu from "./components/BottomMenu";

import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import ProfilePage from "./pages/ProfilePage";
import NotificationPage from "./pages/NotificationPage";
import MessagePage from "./pages/MessagePage";
import BookmarkPage from "./pages/BookmarkPage";

const Routes: React.FC = () => {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/Vitor4444444444" component={ProfilePage} />
        <Route path="/notifications" component={NotificationPage} />
        <Route path="/messages" component={MessagePage} />
        <Route path="/bookmarks" component={BookmarkPage} />
      </Switch>
      <BottomMenu />
    </Router>
  );
};

export default Routes;
