import React from 'react';
import { Link, hashHistory} from 'react-router';

const App = ({ children }) => (
  <div id="master-view">
    <p>My Main Page</p>
    <Link onClick={() => hashHistory.push('/privacy')}>Privacy</Link>
    <div className="fb-messengermessageus"
      data-messenger_app_id="223589748119371"
      data-page_id="1816355725292778"
      data-color="blue"
      data-size="standard" >test
    </div>
    {children}
  </div>
);

export default App;
