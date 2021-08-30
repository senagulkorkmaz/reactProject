import React from "react";
import { Table } from "semantic-ui-react";

const TableExampleStriped = () => (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>NOT BAŞLIĞI</Table.HeaderCell>
        <Table.HeaderCell>Yazıldığı Tarih</Table.HeaderCell>
        <Table.HeaderCell>GİZLİLİK(Özel/Genel)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExampleStriped;
