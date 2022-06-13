const PreviousSearches = ({ location, weather }) => {
  return (
    <div className="previous">
      <h4>Previous Searches</h4>
        <p>No previous searches</p>
    </div>
  );

  // if(!location){
  //     return (
  //         <div className="previous">
  //             <h4>Previous Searches</h4>
  //             <ul>
  //                 <li>No previous searches..</li>
  //             </ul>
  //         </div>
  //     )
  // } else{
  //     return (
  //         <div className="previous">
  //             <h4>Previous Searches</h4>
  //                 <ul>
  //                     <li>{location.toUpperCase()} - {}{'\u00b0'}F</li>
  //                 </ul>
  //         </div>
  //     )
  // }
};

export default PreviousSearches;
