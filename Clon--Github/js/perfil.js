const request = superagent


let name = document.querySelector('.profile__name')
let aka = document.querySelector('.profile__nickName')
let imageAvatar = document.querySelector('.profile__photo')
let company = document.querySelector('.company')
let city = document.querySelector('.location')
let email = document.querySelector('.email')
let blog = document.querySelector('.blog')
let container = document.querySelector('.containerright')
let input = document.querySelector('.textInput')


let reposVar = ""




const url = 'https://api.github.com/users/damianallende'
request
	.get(url)
	.then(function(data){
			
			//console.log(data.body)
			name.textContent = data.body.login
			imageAvatar.src = data.body.avatar_url
			aka.textContent = data.body.name
			company.textContent = data.body.company
			city.textContent = data.body.location
			email.textContent = data.body.email
			blog.textContent = data.body.blog
			//console.log(data.body.results[0].email)
			
	})

const url_repos = 'https://api.github.com/users/damianallende/repos'
	request
	.get(url_repos)
	.then(function(data){
		reposVar = data.body
		// console.log(reposVar)

		let templete =""
		
			
			reposVar.forEach(function(element){
				templete += `<article class="repo">
								<h2 class="repo__title">${element.name}</h2>
								<h3 class="repo__description">${element.description}</h3>
								<p class="repo__all">${element.language} | ${element.stargazers_count} | ${element.updated_at}</p>
							</article>`
			})

			container.innerHTML = templete
			

			


		
			//console.log(data.body.results[0].email)
			
	})
