import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {
  console.log('sidebar props', props)
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <Link className="btn btn-primary btn-block" to={'/playlists'}>
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
      <hr />
      <ul className="list-unstyled">
        {
          props.playLists &&
          props.playLists.map(playList => {
            return (
              <li key={playList.id} className="playlist-item menu-item">
                <Link to={`/playlists/${playList.id}`}>{playList.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </sidebar>
  );
}

export default Sidebar;
