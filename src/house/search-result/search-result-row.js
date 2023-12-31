import "./search-result-row.css";

const SearchResultRow = ({house}) => {
    const setActive = () => {};

    return ( 
       <tr onClick={setActive}>
           <td>{house.address}</td>
           <td>{house.price}</td>
           <td>{house.likes}</td>
       </tr>
     );
}
 
export default SearchResultRow;