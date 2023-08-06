import House from "../house";

const FeatureHouse = (house) => {
    return (
        <div>
            <div className="row featuredHouse">
                <h3 className="col-md-12 text-center">Feature House</h3>
            </div>
            <House house={house.house}/>
        </div>
    );
}
 
export default FeatureHouse;