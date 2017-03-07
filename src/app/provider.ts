

export class provider{


	constructor(public type: Type, public id : number ,
		        public baseUrl :string,
		        public apiUrl :string,
		        public validated :string,
		        public label :string,
		        public logoUrl :string ,
		        public welcomeModelLogo :string ,
		        public launchUrl :string ,
		        public isEnabled :string 
		          ) {}

}

enum Type {
    	CONNECT, ENGRADE, ALEKS, CONNECT1, CONNECT2, SIMNET, SIMNET2, CREATE, SUPPORT_TOOLS, SAMPLE_PROVIDER, MHE_PRODUCT1, MHE_PRODUCT2, MHE_PRODUCT3
    }
