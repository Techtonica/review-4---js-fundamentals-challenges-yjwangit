// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

function mincal(){
  let midnight = new Date("00:00:00 2021-02-05");
  let timenow = new Date();
  let timediff = timenow.getTime()-midnight.getTime();
  let mindiff = parseInt(dimediff/1000/60);
  return mindiff;
}
consolel.log(mincal());
