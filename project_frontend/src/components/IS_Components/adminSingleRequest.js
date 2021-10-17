import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Paper from '@material-ui/core/Paper';

const adminSingleRequest = ({itemname, userName, userEmail, brand, model, version, userImage }) => {

    return (
        <div className="pb-2">
          <Paper style={{ padding: 10, borderRadius: 8 }} variant="outlined">
            <div className="row no-gutters">
              <div className="col-2">
                <div className="pt-3">
                <Avatar src={userImage} style={{width: 100, height: 100}}/>
                </div>
              </div>
              <div className="col-10">
              <div className="pt-3">
                <h5 className="text-color">{userName}</h5>
                <h6 className="text-muted">{userEmail}</h6>
                <p className="text-color pb-0">Item Name - {itemname} <br/>
                Brand - {brand} <br/>
                Model - {model} <br/>
                Version - {version}</p>
                </div>
              </div>
            </div>      
          </Paper>
        </div>
      )
    }

    export default adminSingleRequest