export default `
<body>
  <h1>Conditionals</h1>
  <p>
    In the script below change the value of *x*
    to something other than 'xuy4ek',
    and see how the message changes!
  </p> 

  <h2>Task</h2>
  <p>
    The script also has a click handler.
  </p>
  <p>
    It shows event.pageX in the alert popup.
  </p>
  <p>
    Click the page to try it out.
  </p>
  <p>
    Your task to make the alert appear only
    when event.pageX is more than 100.
  </p>
  <p>
    <pre><code>
      if (event.pageX > 100) {
        alert('PageX is > 100');
      } else {
        alert('PageY is < 100');
      }
    </code></pre>
  </p>
    

</body>

<script>
  /**
   * Example
   */
  var x = 'xuy4ek';

  if (x == 'xuy4ek') {
    console.log('X - eto Xuy4eK!');
  } else {
    console.log('X - HE XUY!');
  }

  /**
   * Task
   */
  function handleClick(event) {
    alert('PageX is: ' + event.pageX);
  }

  document.addEventListener('click', handleClick)
</script>
`;
