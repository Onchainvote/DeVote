

//@ts-ignore
function VoteCandi({ name, img, party, votes }: { name: string, img: string ,party: string, votes:number }) {

   
    return (
       

        <div className="overflow-hidden border rounded-lg shadow-lg">
            {/* Image Section */}
            <div className="relative">
                <img src={img} 
                    alt="{`image of ${name}`}"
                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform rounded-t-lg hover:scale-105" 
                />
                
            </div>
           

         {/* Candidate's Name */}
            <div className='p-4'>
                 <h2 className="mb-2 text-xl font-bold">{name}</h2>
                <p className="mb-2 text-xl font-bold">{party}</p>
            </div>
            <div className="p-4 mb-2 text-xl font-bold">
                    {/* <h3>{votes} votes</h3> */}
            </div>

            
        </div>
    )
}

export default VoteCandi