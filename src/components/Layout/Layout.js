import React from 'react';

import Wrapper from '../../hoc/Wrapper';

const layout = props => {
  return (
    <Wrapper>
      <header className="site-header">Site-header</header>
      <aside className="site-sidebar">
        <nav className="site-navigation">Site-navigation</nav>
      </aside>
      <main className="site-content">
        <section>{props.children}</section>
      </main>
      <footer className="site-footer">
        <div>Site-footer</div>
      </footer>
    </Wrapper>
  );
};

export default layout;
