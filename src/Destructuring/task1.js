//this is called destructuring
function MyComponent({nameForClass,name,income=10}) {
    return (
      <><div
       className={nameForClass}>
        {name}:${income}
        </div>
        <hr/>
       </>
      
    );
  }
  
  function App() {
    return (
      <div> 
        Hello Guyz 
        <MyComponent name="Momina" nameForClass="div1"  income={3000}/> 
        <MyComponent name="Ahmad"  nameForClass="div2" income={700}/> 
        <MyComponent name="Fatima" nameForClass="div3" />
      </div>
    );
  }