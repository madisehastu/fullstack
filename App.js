// Button:
<button onClick={() => setGood(good + 1)}>
good
</button>

// Statistics:
const Statistics = (props) => {
  return (
    <div>
      <div> all {props.all} </div>
      <div> average {props.average} </div>
      <div> positive {props.positive} </div>
    </div>
  )
}

<Statistics all= {good + neutral + bad} average = {(good - bad) / (good + neutral + bad)} positive = {good / (good + neutral + bad)}/>
