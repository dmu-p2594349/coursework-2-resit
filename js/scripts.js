function submitClipOfTheWeek() {
  const name = document.getElementById('clipOfTheWeek-fullName').value
  const ride = document.getElementById('clipOfTheWeek-ride').value
  const url = document.getElementById('clipOfTheWeek-url').value
  console.log('POST to a server somewhere')
  console.log('Values from the form are ', {name, ride, url})
  alert('Thanks, I hate it')
}
