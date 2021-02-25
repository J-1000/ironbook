import React from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

export const userRender = ((user) => {
    return (
      <div>
        <table>
          <tbody>
            <tr key={uuidv4()}>
              <th className="table">{user.firstName}</th>
              <th className="table">{user.lastName}</th>
              <th className="table">{user.campus}</th>
              <th className="table">{user.role}</th>
              <th className="table">{user.linkedin}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  });



