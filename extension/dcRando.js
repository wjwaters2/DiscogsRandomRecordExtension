var form = document.createElement("form")
form.setAttribute("action", "https://www.discogs.com/user/demr_awd/collection") 
form.setAttribute("method", "post")
form.setAttribute("id", "random_list_form") 
var input = document.createElement("input") 
input.setAttribute("name", "Action.RandomItem") 
input.setAttribute("value", "Random Item") 
input.setAttribute("type", "hidden")
form.appendChild(input) 
var h = document.createElement("h1")
var message = document.createTextNode("Searching Your Records")
h.appendChild(message)
document.body.appendChild(form)
document.body.appendChild(h)
document.querySelector('#random_list_form').submit()
