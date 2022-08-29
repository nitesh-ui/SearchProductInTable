import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  const productList = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  
  return (
    <div className="container my-3">
      <div className="row">
        <h3 className="text-center">Search product in table</h3>
        <FilterableProductTable products={productList}/>
      </div>
    </div>
  );
}

export default App;
