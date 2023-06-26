import Card from "../../components/Card";
import { connect, useDispatch } from "react-redux";
import { deleteItems, setListInicial } from "../../redux/reducers/list";

const DeleteDialog =(props) =>{
  const dispatch = useDispatch();

  const handleDeleteItem = () =>{
    props.deleteItems(props.id, props.user, props.title, props.content, props.dateTime);
    props.setOpenDelete(false);
  }

  const handleCloseDeleteDialog =() =>{
    props.setOpenDelete(false);
    dispatch(setListInicial());
  }
  return(
    <Card
      titleName={"Are you sure you want delete this item?"}
      actionName={"Delete"}
      handleAction={handleDeleteItem}
      handleClose={handleCloseDeleteDialog}
    />
  )
}

const mapStateToProps =(state) =>({
  user: state.login.user,
  dateTime: state.list.dateTime,
  title: state.list.title,
  content: state.list.content,
  id: state.list.id
})

const mapDispatchToProps = {
  deleteItems,
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteDialog);