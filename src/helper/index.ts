//@ts-nocheck
import { messageT } from './../types';
import { compareAsc, format } from "date-fns";



export const formatMessage   =(arr:messageT[])=> {
    const tempMessages = [];
    let previousDate = null;
  
    arr.forEach(item => {
          const currentDateFullDate = new Date(item.createdAt);
        const currentDate = currentDateFullDate?.toISOString()?.split('T')[0];
  
      if (previousDate !== currentDate) {
        tempMessages.push({
          type: "newDateSection",
          marginalTime: currentDateFullDate
        });
        previousDate = currentDate;
      }
  
      tempMessages.push(item);
    });
  
    return tempMessages;
  }