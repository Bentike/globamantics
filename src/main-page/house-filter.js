const HouseFilter = ({ allhouses }) => {
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
  return(
     <div className="row mt-3">
        <div className="offset-md-2 col-md-4">
           Look For Your Dream House
        </div>
        <div className="col-md-4 mb-3">
           <select className="form-select">
              {countries.map((c) => {
                <option key={c} value={c}>
                    {c}
                </option>
              })}
           </select>
        </div>
     </div>
  );
};

export default HouseFilter;
