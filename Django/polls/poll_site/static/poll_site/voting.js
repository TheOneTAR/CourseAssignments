window.onload =  function (){

   document.getElementById('question_vote').addEventListener('submit',
   votingSubmission);
}

function votingSubmission(event) {
   event.preventDefault();

   var form = document.getElementById('question_vote');

   var data = form.querySelector("[name='question_choice']:checked");

   var question_id = document.getElementById('question_id').value;

   var jsonData = JSON.stringify({
      'question_id':question_id, 
      'choice_id': data.value
   });

   var csrfToken = form.querySelector("[name='csrfmiddlewaretoken']").value;

   var xhr = new XMLHttpRequest();
   xhr.open('POST', 'submit_vote', true);
   xhr.onload = votingSuccess;

   xhr.setRequestHeader('X-CSRFToken', csrfToken);

   xhr.send(jsonData);
}

function votingSuccess(response) {
   if (response.target.status === 200) {
      // Get the data from the response
      var data_json = response.target.response;

      // Translate the data from json
      var data = JSON.parse(data_json);

      // Post the voting results!!
      postResults(data.data)
   }
}

function postResults(data) {
   // Get the div and clear out the form
   var divThing = document.getElementById('question_things');
   divThing.innerHTML = "";

   var h3 = document.createElement('h3');
   h3.textContent = "Current Results!";

   var list = document.createElement('ul');
   list.id = 'results';

   // Loop through the returns results and display them.    
   for (var i = 0; i< data.length; i++) {       
      var choice = "'" + data[i].text + "' has " +
            data[i].votes + " votes";
      var item = document.createElement('li');
      item.textContent = choice;
      list.appendChild(item);
   };

   divThing.appendChild(h3);
   divThing.appendChild(list);

}







