import React from "react";
import { Form, Header, Icon, Label, Menu } from "semantic-ui-react";

var Datetime = () => {
  var showdate = new Date();
  var displaytodaysdate =
    showdate.getDate() +
    "/" +
    (showdate.getMonth() + 1) +
    "/" +
    showdate.getFullYear();
  var displayhourse = showdate.getHours() + "." + showdate.getMinutes();
  return (
    <div>
      <Label color="grey" as="h7" icon>
        <Icon name="calendar" />
        {displaytodaysdate}
        <hr></hr>
        <Icon name="clock" />
        {displayhourse}
      </Label>
    </div>
  );
};

export default Datetime;
