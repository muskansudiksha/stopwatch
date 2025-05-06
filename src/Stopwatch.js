import React,{useState,useEffect} from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const handleChange = () => {
        setRunning(!running);
    };

    useEffect(()=>{
        let intervalId = null;
        if(running){
            intervalId = setInterval(()=>{
                setTime((prevTime)=>prevTime+1);
            }, 1000);   
        }
        return ()=>{
            clearInterval(intervalId);
        }
    }, [running]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60);
        const secondsLeft = seconds%60;
        return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {formatTime(time)}</p>
            {!running ? <button type='button' onClick={handleChange}>Start</button>
            : <button type='button' onClick={handleChange}>Stop</button>}
            <button onClick={()=>{setTime(0);setRunning("false");}}>Restart</button>
        </div>
    );

};

export default Stopwatch;