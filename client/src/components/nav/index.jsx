import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import MediaQuery from 'react-responsive';
import Sidebar from 'react-sidebar';

import Login from '../login/index.jsx';
import Dashboard from '../dashboard/index.jsx';
import EditProfile from '../profile/editProfile.jsx';
import Profile from '../profile/index.jsx';
import CommonArea from '../common-area/index.jsx';
import ChatMain from '../chat-main/index.jsx';
import CreateSpace from '../create-a-space/index.jsx';
import Listing from '../listing/index.jsx';
import EditListing from '../listing/editListing.jsx';
import Search from '../search/index.jsx';
import SideNavItems from './side-nav.jsx';
import Header from './header.jsx';
import Logo from '../../assets/ss-logo-transparent.png';
import AllListings from '../all-listings/index.jsx';
import SearchResults from '../search-results/index.jsx';
import PastSearches from '../past-searches/index.jsx';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    fontFamily: 'Raleway',
  },
};

const mql = window.matchMedia('(min-width: 800px)');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      mql: mql,
      docked: props.docked,
      open: props.open,
      transitions: true,
      touch: true,
      refresh: false,
      allUserChats: {},
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.getAllChats = this.getAllChats.bind(this);
    this.startNewChat = this.startNewChat.bind(this);
    this.fbLogout = this.fbLogout.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleRefresh = this.toggleRefresh.bind(this);
  }
  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});

    Axios.get(`/api/isAuthenticated/${localStorage.getItem('id_token')}`)
      .then((response) => {
        if (response.data === false) {
          this.setState({ isAuthenticated: false });
        } else {
          this.getAllChats();
        }
      })
      .catch(error => console.error('error checking authentication', error));
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  getAllChats(callback) {
    const { chatClient } = this.props;
    chatClient.login(localStorage.getItem('nexmo_token'))
      .then((app) => {
        this.app = app;
        console.log('*** logged into app', app);
        this.setState({ chatApp: app });
        app.on('member:invited', (member, event) => {
          console.log('*** invitation received:', event);

          // app.getConversation(event.cid || event.body.cname)
          //   .then((conversation) => {
          //     this.conversation = conversation;
          //     conversation.join()
          //       .then(() => {
          //         const conversationDictionary = {};
          //         conversationDictionary[this.conversation.id] = this.conversation;
          //         this.updateConversationsList(conversationDictionary);
          //       })
          //       .catch(error => console.error(error));
          //   })
          //   .catch(error => console.error(error));
        });
        return app.getConversations();
      })
      .then((conversations) => {
        console.log('*** Retrieved conversations', conversations);
        this.setState({ allUserChats: conversations }, callback);
      })
      .catch(error => console.error('error logging into nexmo', error));
  }

  startNewChat(userNexmoId, userNameFirst, userNameLast) {
    const { chatApp } = this.state;
    if (!chatApp) {
      this.getAllChats(() => {
        chatApp.newConversationAndJoin({
          display_name: `${userNameFirst} ${userNameLast}`,
        })
          .then((conversation) => {
            conversation
              .invite({ id: userNexmoId })
              .then(user => console.log('invited', user))
              .catch(error => console.error('error inviting user to chat', error));
          })
          .catch(error => console.error('error creating new chat', error));
      });
    } else {
      chatApp.newConversationAndJoin({
        display_name: `${userNameFirst} ${userNameLast}`,
      })
        .then((conversation) => {
          conversation
            .invite({ id: userNexmoId })
            .then(user => console.log('invited', user))
            .catch(error => console.error('error inviting user to chat', error));
        })
        .catch(error => console.error('error creating new chat', error));
    }
  }

  fbLogout() {
    const { chatClient } = this.state;
    console.log('logging out!');
    localStorage.removeItem('id_token');
    localStorage.removeItem('nexmo_token');
    chatClient.logout();
    this.setState({
      isAuthenticated: false,
    });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  toggleOpen(event) {
    console.log('toggled');
    this.setState({ open: !this.state.open });
    if (event) {
      event.preventDefault();
    }
  }

  toggleRefresh() {
    this.setState({ refresh: !this.state.refresh });
  }

  render() {
    const { isAuthenticated, allUserChats, chatApp } = this.state;
    const { chatClient } = this.props;

    const sidebar = <SideNavItems toggleOpen={this.toggleOpen} />;

    const contentHeader = (
      <span className="pr-2">
        <MediaQuery minDeviceWidth={800}>
          <Link to="/">
            <span>SpaceShare</span>
          </Link>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={799}>
          <Link to="/">
            <img src={Logo} className="mobile-logo" alt="SpaceShare logo" />
          </Link>
        </MediaQuery>
      </span>
    );

    const hamburger = (
      <span className="pl-0 pr-2">
        {!this.state.docked &&
        <a onClick={this.toggleOpen} href="#" style={styles.contentHeaderMenuLink}>
          <i className="material-icons">menu</i>
        </a>}
      </span>
    );

    const contentHeaderMobile = (
      <span>
        <Link to="/">
          <img src={Logo} className="mobile-logo" alt="SpaceShare logo" />
        </Link>
      </span>
    );

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      touch: this.state.touch,
      transitions: this.state.transitions,
      onSetOpen: this.onSetSidebarOpen,
    };

    const commonAreaProps = {
      chatClient,
      key: this.state.refresh,
      startNewChat: this.startNewChat,
    };

    const profileProps = {
      startNewChat: this.startNewChat,
    };

    const chatClientAndChats = {
      chatClient,
      chatApp,
      allUserChats,
      getAllChats: this.getAllChats,
    };

    const refreshKeyProp = {
      key: this.state.refresh,
    };

    const toggleRefreshProp = {
      toggleRefresh: this.toggleRefresh,
    };

    if (isAuthenticated) {
      return (
        <Sidebar {...sidebarProps}>
          <Header hamburger={hamburger} title={contentHeader} mobileTitle={contentHeaderMobile} logout={this.fbLogout}>
            <div style={styles.content}>
              <Route exact path="/" render={() => isAuthenticated && <Redirect to="/dashboard" />} />
              <Switch>
                <Route path="/dashboard" render={props => <Dashboard {...props} {...refreshKeyProp} {...chatClientAndChats} />} />
                <Route path="/edit-profile" render={props => <EditProfile {...props} {...toggleRefreshProp} />} />
                <Route path="/profile" render={props => <Profile {...props} {...profileProps} />} />
                <Route path="/common-area" render={props => <CommonArea {...props} {...commonAreaProps} />} />
                <Route path="/messages" render={props => <ChatMain {...props} {...chatClientAndChats} />} />
                <Route path="/new-space" render={props => <CreateSpace {...props} {...toggleRefreshProp} />} />
                <Route path="/listing" component={Listing} />
                <Route path="/edit-listing" render={props => <EditListing {...props} />} />
                <Route path="/edit-space" component={CreateSpace} />
                <Route path="/search" component={Search} />
                <Route path="/search-results" component={SearchResults} />
                <Route path="/listings" component={AllListings} />
                <Route path="/saved-searches" component={PastSearches} />
              </Switch>
            </div>
          </Header>
        </Sidebar>
      );
    }
    return <Login />;
  }
}

Nav.propTypes = {
  chatClient: PropTypes.object,
};

Nav.defaultProps = {
  chatClient: new ConversationClient(),
};

export default Nav;
