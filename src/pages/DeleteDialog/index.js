import Card from "../../components/Card";

const DeleteDialog =({setOpenDelete, setAnimation}) =>{

  return(
    <Card
      titleName={"Are you sure you want delete this item?"}
      actionName={"Delete"}
      setOpenDelete={setOpenDelete}
      setAnimation={setAnimation}
    />
  )
}

export default DeleteDialog;