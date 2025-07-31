import Card from './Card.jsx'

function App() {
  return (
    <> 
      <div className="m-20">
        <h1 className="bg-clip-text text-transparent lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-2xl font-extrabold mb-10">All the cards are here.</h1>
        <div className="flex flex-wrap justify-center gap-20">
        <Card imageSrc="/card1.png" altText="card1img" head="card 1" description="card 1 description"/>
        <Card imageSrc="/card2.png" altText="card2img" head="card 2" description="card 2 description"/>
        <Card imageSrc="/card3.png" altText="card3img" head="card 3" description="card 3 description"/>
        <Card imageSrc="/card4.png" altText="card4img" head="card 4" description="card 4 description"/>
        <Card imageSrc="/card5.png" altText="card5img" head="card 5" description="card 5 description"/>
        <Card imageSrc="/card6.png" altText="card6img" head="card 6" description="card 6 description"/>
        <Card imageSrc="/card7.png" altText="card7img" head="card 7" description="card 7 description"/>
        <Card imageSrc="/card8.png" altText="card8img" head="card 8" description="card 8 description"/>
        <Card imageSrc="/card9.png" altText="card9img" head="card 9" description="card 9 description"/>
        <Card imageSrc="/card10.png" altText="card10img" head="card 10" description="card 10 description"/>
        <Card imageSrc="/card11.png" altText="card11img" head="card 11" description="card 11 description"/>
        <Card imageSrc="/card12.png" altText="card12img" head="card 12" description="card 12 description"/>
      </div>
      </div>
      
    </>
  )
}

export default App
