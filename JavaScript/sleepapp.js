const getSleepHours = (day)=> {
  switch (day){
   case 'monday': return 8;
   case 'tuesday': return 8;
   case 'wednesday': return 8;
   case 'thursday': return 8;
   case 'friday': return 8;
   case 'saturday': return 8;
   case 'sunday': return 8;

}
}

const getActualSleepHours = ()=> {
  return  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;
}
const getIdealSleepHours = (hours)=> {
  //const idealHours = 9;
  return hours * 7;
}
const calculateSleepDebt = ()=> {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours ){
    console.log(`You got the perfect amount of sleep! ${idealSleepHours}`);
    return 0;
  }
    if (actualSleepHours > idealSleepHours ){
    console.log('You got more sleep than needed! You slept ' + (actualSleepHours - idealSleepHours) +' hours more');
    return actualSleepHours - idealSleepHours;
  } else { console.log('You should get more sleep! You need ' + (idealSleepHours - actualSleepHours )+' hours of sleep');
    return idealSleepHours - actualSleepHours ;

  }
}
calculateSleepDebt();
