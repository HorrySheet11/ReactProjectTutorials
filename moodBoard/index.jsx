export function MoodBoardItem({color, image, description}){
  return(
    <div className="mood-board-item" style={{backgroundColor:color}}>
      <img className="mood-board-image" src={image}/>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard(){
  const moods=[
    {
      key:'1',
      color:'red',
      image:"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: 'description 1'
    },
    {
      key:'2',
      color:'blue',
      image:"https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: 'description 2'
    },
    {
      key:'3',
      color:'green',
      image:"https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: 'description 3'
    },
  ]

  return(
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
      {moods.map((mood)=>(
        <MoodBoardItem 
        key={mood.key}
        color={mood.color}
        image={mood.image}
        description={mood.description}
        />
      ))}
    </div>
    </div>
    
  )
}

