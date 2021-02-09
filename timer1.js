const beepAt = (time) => {
  setTimeout(() => {
    console.log('beep');
    process.stdout.write('\x07');
  }, time);
};

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


const input = process.argv.slice(2);
input.forEach(time => {
  if(time > 0 && Number.isInteger(parseFloat(time))){
    beepAt(parseInt(time) * 1000);
  }
});


