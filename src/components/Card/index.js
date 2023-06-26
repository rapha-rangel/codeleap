import { connect, useDispatch } from "react-redux";
import {Section, 
        Container, 
        Content, 
        Title,
        InputTitle,
        LabelTitle,
        TextareaContent,
        LabelContent,
        ButtonDiv,
        CancelButton,  
        ActionButton,
        ContentDiv} from "./styled";
import {putItems , 
        setTitle, 
        setContent, 
        postItems, 
        deleteItems,
        setListInicial} from "../../redux/reducers/list";

const Card = (props) =>{
  
  const dispatch = useDispatch();
  
  const handleChangeTitle = (e) =>{
    dispatch(setTitle(e.target.value));
  }

  const handleChangeContent = (e) =>{
    dispatch(setContent(e.target.value))
  }

  const handleAction = ()=>{
    switch (props.actionName){
      case "Create":
        props.postItems(props.user, props.title, props.content);
      break;
      case "Save":
        props.putItems(props.user, props.title, props.content, props.id)
        props.setOpenEdit(false);
      break;
      case "Delete":
        props.deleteItems(props.id);
        props.setOpenDelete(false);
      break;
      default:
    }
  }

  const handleClose = ()=>{
    switch (props.actionName){
      case "Save":
        props.setOpenEdit(false);
        dispatch(setListInicial());
        props.setAnimation(false)
      break;
      case "Delete":
        props.setOpenDelete(false);
        dispatch(setListInicial());
        props.setAnimation(false);
      break;
      default:
    }
  }
  
  return(
    <Section  actionName={props.actionName}>
    <Container actionName={props.actionName}>
      <Content>
        <Title >{props.titleName}</Title>
        <ContentDiv actionName={props.actionName} >
          <InputTitle  type= "text" id="title" value={props.title} onChange={handleChangeTitle}/>
          <LabelTitle  for="title">Title</LabelTitle>
          <TextareaContent type="text" id="content" rows="3" cols="33" value={props.content} onChange={handleChangeContent}></TextareaContent>
          <LabelContent  for="content">Content</LabelContent>
        </ContentDiv>
        <ButtonDiv>
          <ActionButton actionName={props.actionName} disabled={(!props.title || !props.content) && (props.actionName !== "Delete") } onClick={handleAction}>{props.actionName}</ActionButton>
          <CancelButton actionName={props.actionName} onClick={handleClose}>Cancel</CancelButton>
        </ButtonDiv>
      </Content>
    </Container>
    </Section>
  )
}

const mapStateToProps =(state) =>({
  user: state.login.user,
  title: state.list.title,
  content: state.list.content,
  id: state.list.id,
})

const mapDispatchToProps = {
  postItems,
  putItems,
  deleteItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Card) ;