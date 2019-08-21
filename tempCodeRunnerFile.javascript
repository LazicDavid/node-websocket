var text = 'Owning a car — any car — is about knowing that it can get you where you need to go. Most electric vehicles can drive over 100 miles on a single charge—with many exceeding 200 to 300 miles. <a href="https://fueleconomy.gov/feg/evtech.shtml" target="blank">[1]</a> Since the average person drives only 37 miles per day, <a href="https://www.fhwa.dot.gov/ohim/onh00/bar8.htm" target="blank">[2]</a> the range of most EVs works just fine. So if you  think EVs can\'t stand up to your work commute or getting Jane to soccer, ballet, and axe-throwing practice, think again.'

const matches = text.match(/<a.+?>\[\d+\]<\/a>/gim);
const rest = text.split(/<a.+?>\[\d+\]<\/a>/gim);

const parts = matches.map(match => {
  const fragments = match.split('>[');
  return `${fragments[0]} class="superscript">[${fragments[1]}`;
});

const replaced = rest
  .map((item, index) => parts[index] ? `${item}${parts[index]}` : `${item}`)
  .join(' ');

console.log('replaced', replaced);