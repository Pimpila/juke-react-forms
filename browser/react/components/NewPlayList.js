import React from 'react';

export default function NewPlayList(props) {
  return (
    <div className="well">
      <form className="form-horizontal" onSubmit={ event => props.showState(event) }>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input
              value={props.inputValue}
              onChange={ event => props.collectInput(event)}
              className="form-control"
              type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" disabled={props.setDisable()} className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

