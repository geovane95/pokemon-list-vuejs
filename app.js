new Vue({
    el:"#app",
    data: {
        title:"Listagem de Pokémons",
        q:'',
        pic:'',
        pokemons:{
        
        }
    },
    methods: {
        searchPokemon()
        {
            let vm  = this;
            // console.log('aq')
            
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.q}`).
            then(response =>{
                    
                    console.log(response)
            })
        },
        ImgFrente(index)
        {
            let pokePic = index+1;
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokePic+'.png';
        },
        ImgTras(index)
        {
            let pokePic = index+1;
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+pokePic+'.png';
        },
        ImgFrenteShiny(index)
        {
            let pokePic = index+1;
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+pokePic+'.png';
        },
        ImgTrasShiny(index)
        {
            let pokePic = index+1;
            return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/'+pokePic+'.png';
        }
    },
    created() {
        let vm  = this;
        // console.log('aq')
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.q}`).
        then(response =>{
                
            vm.pokemons = response.data.results;

            console.log(response);
        })

      
    },
})