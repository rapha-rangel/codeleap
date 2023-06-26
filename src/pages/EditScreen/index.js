import Card from '../../components/Card'; 
import { connect, useDispatch } from 'react-redux';
import { putItems, setTitle, setContent, setListInicial } from '../../redux/reducers/list';

const EditScreen = (props) =>{
  const dispatch = useDispatch();

  const handleCloseEdit =()=>{
    props.setOpenEdit(false);
    dispatch(setListInicial());
    props.setAnimation(false)
  }

  const handleChangeTitle =(e)=>{
    dispatch(setTitle(e.target.value));
  }

  const handleChangeContent=(e)=>{
    dispatch(setContent(e.target.value));
  }

  const handleSave =()=>{
    props.putItems( props.user, props.title, props.content, props.id)
    props.setOpenEdit(false);
    props.setAnimation(false)
  }

  return(
    <Card
      titleName={"Edit Item"}
      title={props.title}
      content={props.content}
      handleChangeTitle={handleChangeTitle}
      handleChangeContent={handleChangeContent}
      actionName={"Save"}
      handleAction={handleSave}
      handleClose={handleCloseEdit}
    />
  )
}

const mapStateToProps =(state) =>({
  user: state.login.user,
  title: state.list.title,
  content: state.list.content,
  id: state.list.id
})

const mapDispatchToProps ={
  putItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);