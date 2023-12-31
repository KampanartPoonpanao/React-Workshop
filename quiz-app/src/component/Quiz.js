import { DataContext } from "../App";
import QuestionsData from "../data/QuestionData";
import { useContext, useEffect, useState } from "react";

const Quiz = ()=> {
    //console.log(QuestionsData);
    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState("")
    const {score,setScore,setAppState} = useContext(DataContext)
   useEffect(()=> {
    checkAnswer()
   },[selectChoice])

   const checkAnswer=()=>{
    if(selectChoice!==""){
        if(selectChoice === QuestionsData[current].answer){
            setScore(score+1)
            nextQuestion()
        }else{
            nextQuestion()
        }
    }
   }
   const nextQuestion=()=> {
    setSelectChoice("")
    if(current===QuestionsData.length+1){
        setAppState("score")
    }else{
        setCurrent(current+1)
    }
    
   }
}

export default Quiz;