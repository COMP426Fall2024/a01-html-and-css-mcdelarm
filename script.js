function showStory() {
  let selectedStory = document.getElementById('storySelect').value;
  
  //Hide stories
  const stories = document.getElementsByClassName('story');
  for (let i = 0; i < stories.length; i++) {
    stories[i].style.display = 'none';
  }

  document.getElementById(selectedStory).style.display = 'block';
}