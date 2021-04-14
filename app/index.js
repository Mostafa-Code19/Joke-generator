const joke = document.querySelector('.joke')
const joke_delivery = document.querySelector('.joke_delivery')
const anotherOne = document.querySelector('.anotherOne')

class API {
    constructor(self) {

    }
    
    params =  {
        url: 'https://v2.jokeapi.dev/joke/',
        categories: {
            'Any': 'Any',
            'Programming': 'Programming',
            'Misc': 'Misc',
            'Dark': 'Dark',
            'Pun': 'Pun',
            'Spooky': 'Spooky',
            'Christmas': 'Christmas',
        },
        blacklistFlags: {
            'nsfw': 'nsfw',
            'religious': 'religious',
            'political': 'political',
            'racist': 'racist',
            'sexist': 'sexist',
            'explicit': 'explicit',
        },
        amount: 2
    }

    full_url() {
        const full_url = this.params.url + 
            this.params.categories['Programming']
            // '?blacklistFlags=' + this.params.blacklistFlags['racist'] +
            // '&amount=' + this.params.amount

        this.grabData(full_url)
    }

    async grabData(full_url) {
        const response = await fetch(full_url)
        const data = await response.json()

        this.show(data)
    }

    show(data) {
        console.log(data)

        if (typeof(data.joke) !== 'undefined') {
            return  joke.innerHTML = data.joke,
                    joke_delivery.innerHTML = ''

        } else {
            return  joke.innerHTML = data.setup,
                    joke_delivery.innerHTML = data.delivery
        }
    }
}

anotherOne.addEventListener('click', () => {
    newJoke.full_url()
})

newJoke = new API()
newJoke.full_url()