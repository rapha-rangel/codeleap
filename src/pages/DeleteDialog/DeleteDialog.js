import {ContainerDelete, 
        Title, 
        DeleteButtonDiv, 
        DeleteButton, 
        CancelButton,
        Content, 
        Section} from "./DeleteDialogStyle";
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
    <Section>
    <ContainerDelete>
      <Content>
        <Title>Are you sure you want delete this item?</Title>
        <DeleteButtonDiv>
          <DeleteButton onClick={handleDeleteItem}>Delete</DeleteButton>
          <CancelButton onClick={handleCloseDeleteDialog} >Cancel</CancelButton>
        </DeleteButtonDiv>
      </Content>
    </ContainerDelete>
    </Section>
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