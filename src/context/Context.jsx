import {createContext, useState} from 'react'
import run from './../config/gemini'
export const Context = createContext();


const ContextProvider = (props) => {


  const [input , setInput] = useState("");
  const [recentPrompt , setRecentPrompt]= useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult , setShowResult] = useState(false);
  const [loading , setLoading] = useState(false);
  const [resultData , setResultData] = useState("");
  const delayPara = (index , nextword) =>{
     setTimeout(function(){
       setResultData(prev => prev+nextword)
     },75*index)
  }
 const newChat =() =>{
    setLoading(false)
    setShowResult(false)
 }
  const onSent = async (prompt) => {
        setResultData("")
        setShowResult(true)
        let response;
        if(prompt !== undefined){
           response = await run(prompt);
           setRecentPrompt(prompt)
        }else{
          setPrevPrompt(prev =>[...prev,input])
          setRecentPrompt(input)
          response = await run(input)
        }
        let responseArray = response.split("**")
        let newResponseArray=" "
        for(let i = 0; i < responseArray.length ; i++){
           if(i === 0 || i%2 !==1){
            newResponseArray += responseArray[i]
           }else{
            newResponseArray += "<b>"+responseArray[i]+"</b>"
           }
        }
        let newResponseArray2 = newResponseArray.split("*").join("</br>")
        let newResponseArray3 = newResponseArray2.split("  ")
        for(let i=0 ; i<newResponseArray3.length ; i++){
          const nextWord = newResponseArray3[i];
          delayPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")
};

     const contextValue = {
      prevPrompt,
      setPrevPrompt,
      recentPrompt,
      setRecentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput,
      onSent,
      newChat
     }
     return(
        <Context.Provider value={contextValue}>
          {props.children}
        </Context.Provider>
     )
}
export default ContextProvider