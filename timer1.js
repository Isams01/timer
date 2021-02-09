const beepAt = (time) => {
  setTimeout(() => {
    console.log('beep');
    process.stdout.write('\x07');
  }, time);
};

const input = process.argv.slice(2);
input.forEach(time => {
  beepAt(parseInt(time) * 1000);
});


