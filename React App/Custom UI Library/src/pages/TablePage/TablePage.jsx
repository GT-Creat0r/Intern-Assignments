import { useState } from "react";
import {
  ComponentDemo,
  ComponentSection,
} from "../../layouts/ComponentLayout/ComponentLayout";
import Table from "../../components/Table/Table";

const TablePage = () => {
  const [columns] = useState([
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
    { headerName: "Electric", field: "electric" },
  ]);

  const [rowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  return (
    <div>
      <h1>Table</h1>
      <p>Display tabular data with various styling options.</p>
      <ComponentSection title="Basic Table">
        <ComponentDemo
          title="Simple Table"
          description="Basic table with header and rows"
          component={<Table columns={columns} rowData={rowData}></Table>}
          code={`import {Table } from './components/Table/Table';

const columns = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Electric', field: 'electric' },
];

const data = [
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
];

<Table columns={columns} rowData={data} />`}
        />
      </ComponentSection>
    </div>
  );
};

export default TablePage;
