console.log('AngularPetApp Controllers');

namespace ClientSideRouting.Controllers
{
    class Pet
    {
        public constructor(
            public id:          number,
            public petName:     string,
            public owner:       string,
            public type:        string,
            public gender:      string,
            public description: string,
            public hobbies:     string,
            public pic:         string = 'Pending'
        ) { }

    }

    function generateId()
    {
        let nextId: number = 0;

        if (pets.length == 0)
        {
            nextId = 1;
        }
        else
        {
            nextId = pets[pets.length -1].id + 1;
        }

        return nextId;
    }


    let pet1 = new Pet(1, 'Snowball', 'Zack Ibrahim', 'cat', 'female', 'Calicole', 'Puking up hair balls.', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyw2eqUgevbqwkwmori4vCDmnQfSFEFWrXCuST0IQ6w1QvgSkgkg');
    let pet2 = new Pet(2, 'Sweet Pea', 'Christian Wunder', 'dawg', 'male', 'Tan', 'Murdering and eating the neighborhood cats', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQACVHs4735MYDoDvzvZaHN2Mmi_C7wVdt0pVMxacLw-iIJmJC5');
    let pet3 = new Pet(3, 'Darth Vader', 'Cort Shields', 'cat', 'male', 'Black', 'Killing Jedi', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8aeinLzuleuH8_lqXuaNM3ZE5Cc_crEfI_CYWfHFE5B2w22iI');
    let pet4 = new Pet(4, 'Animal', 'Matthew Ploor', 'dog', 'male', 'Dark brown', 'Killing squirrels', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR7Yc538iEGUQnDrmYklVAIkvlxZ4ZGuOkpI_mgyeUYkf-dtphA7w');
    let pets: Pet[] = [pet1, pet2, pet3, pet4];

    export class MasterController
    {
        public pets;

        private id:         number;
        public petName:     string = '';
        public owner:       string = '';
        public type:        string = '';
        public gender:      string = '';
        public description: string = '';
        public hobbies:     string = '';
        public pic:         string = '';

        public inputPet = new Pet(0, '', '', '', '', '', '', '');
        
        constructor()
        {
            this.pets = pets;
        }

        public getPetForm()
        {
            this.inputPet.petName     = this.petName;
            this.inputPet.owner       = this.owner;
            this.inputPet.type        = this.type;
            this.inputPet.gender      = this.gender;
            this.inputPet.description = this.description;
            this.inputPet.hobbies     = this.hobbies;
            this.inputPet.pic         = this.pic;

            this.petName     = null;
            this.owner       = null;
            this.type        = null;
            this.gender      = null;
            this.description = null;
            this.hobbies     = null;
            this.pic         = null;

            //this.inputPet.id = pets.length + 1;
            this.inputPet.id = generateId();

            pets.push(this.inputPet);

            console.log(`Pet data: ${this.inputPet.id} ${this.inputPet.petName} ${this.inputPet.owner} ${this.inputPet.type}`);
        }
    }

    export class DetailsController
    {
        public pet;

        private id:         number;
        public petName:     string = '';
        public owner:       string = '';
        public type:        string = '';
        public gender:      string = '';
        public description: string = '';
        public hobbies:     string = '';
        public pic:         string = '';

        constructor(private $stateParams: ng.ui.IStateParamsService)
        {
            this.pet = pets.filter((p) => { return p.id == $stateParams['id'] })[0];
        }

        public findPetIdIndex(petId: string)
        {
            let id: number = +petId;

            for (let i = 0; i < pets.length; i++)
            {
                if (pets[i].id == id)
                {
                    console.log(`pets[${i}].id = ${pets[i].id} supplied id = ${id}`);
                    return i;

                }
            }
        }

        public deletePet(petId: string)
        {
            //let id: number = +petId;

            //console.log(`Pet id = ${petId}`);

            //for (let i = 0; i < pets.length; i++)
            //{
            //    if (pets[i].id == id)
            //    {
            //        console.log(`pets[${i}].id = ${pets[i].id} supplied id = ${id}`);

            //        pets.splice(i,1);
            //    }
            //}


            pets.splice(this.findPetIdIndex(petId), 1);


        }

        public preFillForm(petId: string)
        {
            let id: number = this.findPetIdIndex(petId);

            //let idNum: number = +petId;

            //for (let i = 0; i < pets.length; i++)
            //{
            //    if (pets[i].id == idNum)
            //    {
            //        id = i;
            //    }
            //}

            //console.log(`preFillForm pets[${id}].id = ${pets[id].id} supplied id = ${petId}`);

            this.petName =     pets[id].petName;
            this.owner =       pets[id].owner;
            this.type =        pets[id].type;
            this.gender =      pets[id].gender;
            this.description = pets[id].description;
            this.hobbies =     pets[id].hobbies;
            this.pic =         pets[id].pic;
        }


        public updatePetForm(petId:string)
        {
            let id: number = this.findPetIdIndex(petId);

            pets[id].petName =     this.petName;
            pets[id].owner =       this.owner;
            pets[id].type =        this.type;
            pets[id].gender =      this.gender;
            pets[id].description = this.description;
            pets[id].hobbies =     this.hobbies;
            pets[id].pic =         this.pic;

            console.log(`pets[${id}] ${pets[id].petName} ${pets[id].pic}updated`);

            //console.log(`Pet data: ${this.inputPet.id} ${this.inputPet.petName} ${this.inputPet.owner} ${this.inputPet.type}`);
        }
    }

    export class AboutController
    {
    }
}


//private $uibModal: angular.ui.bootstrap.IModalService