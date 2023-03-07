



function DayDate() {
    const date=new Date()

    const days=["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Satday"];
    const months=["january","february","March","April","May","june","july","august","september","october","November","december"];
    const day=days[date.getDay()];
    const month=months[date.getMonth()];
    const year=date.getFullYear();
    const dateToday=date.getUTCDate();

  return (
    <div className="App">
   <h2>{month}-{dateToday}-{year},{day}</h2>
    </div>
  );
}

export default DayDate;
