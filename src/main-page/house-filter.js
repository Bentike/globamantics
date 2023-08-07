import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HouseFilter = ({ allhouses }) => {
  const history = useHistory();
  const countries = allhouses
    ? Array.from(
        new Set(
          allhouses.map((h) => {
            h.country;
          })
        )
      )
    : [];
  countries.unshift(null);

  const onSearchChange = (event) => {
    const country = event.target.value;
    history.push(`/searchresults/${country}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">Look For Your Dream House</div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => {
            <option key={c} value={c}>
              {c}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
