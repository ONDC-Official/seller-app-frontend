import StoreTimings from "./StoreTimings";
import MyButton from "../../Shared/Button";

const StoreTimingsRenderer = ({ storeTimings, setStoreTimings }) => {
  const handleStoreTiming = (data, index) => {
    storeTimings[index] = data;
    setStoreTimings([...storeTimings]);
  };

  const handleAddMoreTimings = () => {
    storeTimings.push({
      daysRange: { from: 1, to: 5 },
      timings: [{ from: "10:00", to: "12:00" }],
    });
    setStoreTimings([...storeTimings]);
  };

  return (
    <>
      {storeTimings.map((storeTiming, index) => (
        <StoreTimings
          storeTiming={storeTiming}
          setStoreTiming={(data) => handleStoreTiming(data, index)}
        />
      ))}
      <div
        style={{marginTop: "7px", marginBottom: "10px" }}
      >
        <MyButton
          variant="outlined"
          type="button"
          title="Add more days & timings"
          className="text-black"
          onClick={handleAddMoreTimings}
        />
      </div>
    </>
  );
};

export default StoreTimingsRenderer;
