import React from 'react'
import LargeCard from './components/LargeCard'
import Cards from './components/Cards';


const LargeData=[
  { id: 1,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    tittle:"Food Beyond Limit",
    description:"Spaghetti Carbonara is a rich and creamy Italian pasta dish made with eggs, Parmesan cheese, pancetta, and black pepper. The sauce is created by tossing hot pasta with the eggs and cheese, forming a silky texture. The crispy pancetta adds a savory crunch, while freshly ground black pepper enhances the flavor. Served warm, this dish offers a perfect balance of creaminess and saltiness, making it a classic comfort food."
   },
  { id: 2,
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    tittle:"Food Beyond Limit",
    description:"Butter Chicken, also known as Murgh Makhani, is a famous Indian dish made with tender chicken pieces cooked in a creamy tomato-based gravy. The chicken is marinated in yogurt and spices, then grilled before being simmered in a rich, buttery sauce. The combination of aromatic spices, fresh cream, and butter gives it a velvety texture. It pairs well with naan or basmati rice, making it a delicious and comforting meal." },
  // { id: 3,
  //   image:"https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  //   tittle:"Food Beyond Limit",
  //   description:"Butter Chicken, also known as Murgh Makhani, is a famous Indian dish made with tender chicken pieces cooked in a creamy tomato-based gravy. The chicken is marinated in yogurt and spices, then grilled before being simmered in a rich, buttery sauce. The combination of aromatic spices, fresh cream, and butter gives it a velvety texture. It pairs well with naan or basmati rice, making it a delicious and comforting meal." },
    
];

const featuredItems = [
  { id: 4, name: "Crispy Salmon Bowl", price: "$3.69", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg" },
  { id: 5, name: "Steak Bowl", price: "$3.69", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg" },
  { id: 6, name: "Vegan Protein Bowl", price: "$3.69", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg" },
  { id: 7, name: "Avocado Egg Bowl", price: "$3.69", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg" },
];

const App = () => {
  return (
    <div>
      <div>
        <h1 className='text-[40px] font-Semibold'>Based on Your Search</h1>
        <div className=' border-black grid grid-cols-2 gap-10 py-3 '>
      {LargeData.map((food)=>(
        <LargeCard key={food.id} food={food} />
      ))}
        </div>
      </div>
      <div>
        <h1 className='text-[40px] font-Semibold'>Features Items</h1>
        <div className='grid grid-cols-4'>
          {featuredItems.map((food2)=>(
            <Cards key={food2.id} food2={food2}/>
          ))}
        </div>
      </div>
      
    </div>
    
   
  )
}

export default App
