const currentDate = new Date();

let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

let meridiem = 'AM';
if (hours >= 12) {
  meridiem = 'PM';
  if (hours > 12) {
    hours -= 12;
  }
}

const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${meridiem}`;

console.log(formattedTime);


let count=1;
const counter = ()=>{
    console.log(count);
if(count<10)
{
    count++;
console.clear()
    setTimeout(()=>{
        counter()
    },1000)
    }  
}                        

counter();