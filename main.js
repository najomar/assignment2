var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');


// produces a random number 
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// original text
storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'
];

insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House'];
insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'
];


// add event listener to randomize button

randomize.addEventListener('click', result);



/**
 * result
 * call function result to generate random text
 * @param none
 * @return string
 */
function result() {

console.log('storyText: '+ storyText)

  newStory = storyText
  xItem = randomValueFromArray(insertX)
  yItem = randomValueFromArray(insertY)
  zItem = randomValueFromArray(insertZ)


  console.log('xitem' + xItem)
  console.log('xitem' + yItem)
  console.log('xitem' + zItem)

  // todo replace text with items
  newStory.replace(/:insertx:/g, xItem);
  newStory.replace(/:inserty:/g, yItem);
  newStory.replace(/:insertz:/g, zItem);


  console.log(newStory)
  // Check if custom name is present
  if (customName.value !== '') {
    var name = customName.value;
    // replace bob with custom name
    storyText.replace('Bob', name)
  }

  if (document.getElementById("uk").checked) {
    // Change weight into stones
    var pound = 300;
    var weight = Math.round(pound / 14);
    var stoneMessage = weight + ' stone';
    console.log('he')
    storyText.replace('300 pounds', stoneMessage)

    // change temp into centigrade
    var fTemp = 94;
    var temperature = Math.round((fTemp - 32) * 5 / 9);
    var messageTemperature = temperature + ' centigrade';
    newStory.replace("94 fahrenheit", messageTemperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


