//import React from 'react'
import React, { useState } from "react";
import { Button, Divider, Form, Grid, Segment, Input } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import Note from "../NoteLayout/Note";
import PrivatePublic from "./PrivatePublic";

const SignedIn = () => {
  return (
    <div>
      <Menu.Item>
        <Note />
        <PrivatePublic />

        <li>
          {" "}
          <NavLink
            to="/information"
            style={{ marginLeft: "1.5em" }}
            className="btn btn-floating pink lighten-1"
          >
            SK
          </NavLink>
        </li>

        {/* <Image
        className='btn btn-floating pink lighten-1'
          style={{ marginLeft: "0.6em" }}
          avatar
          spaced="right"
          src="data:image/png;base64,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"
        ></Image> */}
        <Dropdown>
          <Dropdown.Menu>
            <Link to="/information">
              <Dropdown.Item
                style={{ color: "black" }}
                text="Bilgilerim"
                icon="info"
              />
            </Link>
            <Link to="/profile">
              <li>
                <Dropdown.Item
                  style={{ color: "black" }}
                  text="Notlarım"
                  icon="edit"
                />
              </li>
            </Link>

            <Link to="/">
              <li>
                <Dropdown.Item
                  style={{ color: "black" }}
                  text="Çıkış Yap"
                  icon="sign-out"
                />
              </li>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
   )
  }
  
  export default SignedIn
