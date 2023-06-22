import {ContainerEdit, 
        Content, 
        Title, 
        InputTitle, 
        LabelTitle, 
        TextareaContent, 
        LabelContent, 
        EditButtonDiv,
        SaveButton,
        CancelButton,  
        Section} from '../EditScreen/EditScreenStyle';
import { connect, useDispatch } from 'react-redux';
import { putItems, setTitle, setContent, setListInicial } from '../../redux/reducers/list';
import { useState, useEffect } from 'react';

const EditScreen = (props) =>{
  const [buttonAllow, setButtonAllow] =useState(false);
  const dispatch = useDispatch();

  const handleCloseEdit =()=>{
    props.setOpenEdit(false);
    dispatch(setListInicial());
    props.setAnimation(false)
  }

  const allowedButton =()=> {
    if(props.title && props.content){
      setButtonAllow(true)
    }else{
      setButtonAllow(false)
    }
  }

  const handleChangeTitle =(e)=>{
    dispatch(setTitle(e.target.value));
  }

  const handleChangeContent=(e)=>{
    dispatch(setContent(e.target.value));
  }

  const handleSave =()=>{
    if(buttonAllow){
      props.putItems( props.user, props.title, props.content, props.id)
      props.setOpenEdit(false);
      props.setAnimation(false)

      } else {}
  }

  useEffect(()=>{
    allowedButton()
  },[handleChangeTitle, handleChangeContent])

  return(
    <Section>
    <ContainerEdit>
      <Content>
        <Title>Edit Item</Title>
        <InputTitle  type= "text" id="title" value={props.title} onChange={handleChangeTitle}/>
        <LabelTitle for="title">Title</LabelTitle>
        <TextareaContent type= "text" id="content" rows="3" cols="33"value={props.content}  onChange={handleChangeContent}></TextareaContent>
        <LabelContent for="content">Content</LabelContent>
        <EditButtonDiv>
          <SaveButton buttonAllow={buttonAllow} onClick={handleSave}>Save</SaveButton>
          <CancelButton onClick={handleCloseEdit}>Cancel</CancelButton>
        </EditButtonDiv>
      </Content>
    </ContainerEdit>
    </Section>
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