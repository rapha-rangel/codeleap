import Card from '../../components/Card'; 

const EditScreen = ({setOpenEdit, setAnimation}) =>{

  return(
    <Card
      titleName={"Edit Item"}
      actionName={"Save"}
      setOpenEdit={setOpenEdit}
      setAnimation={setAnimation}
    />
  )
}


export default EditScreen;