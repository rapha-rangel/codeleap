import {CreateButtonDiv, 
        Section, 
        Header, 
        CreateButton, 
        ContainerCreate, 
        Content, 
        Title, 
        InputTitle,
        LabelTitle,
        TextareaContent,
        LabelContent,  
        HeaderTitle,
        HeaderStatus,
        HeaderUser,
        HeaderLogo,
        ContainerData,
        HeaderData, 
        HeaderDataLogo, 
        HeaderDataStatus,
        HeaderDataTitle,
        ContentData,
        InfoData,
        UserData,
        TimeData,
        ContentDataContent,
        MoreFeedButton} from "./MainStyled";
import { BsPencilSquare, BsTrash} from 'react-icons/bs';
import { BiLogOutCircle} from 'react-icons/bi';
import EditScreen from "../EditScreen/EditScreen";
import { useEffect, useState } from "react";
import { connect, useDispatch} from "react-redux";
import { isLogout } from "../../redux/reducers/login";
import {fetchItems , 
        setTitle, 
        setContent, 
        postItems, 
        getList, 
        setId, 
        setDateTime,
        setLimitPlus, 
        setLimitReset,
        fetchInicialItems,
        setItemsToMapReset,
        setItemsToMap,
        erroList} from "../../redux/reducers/list";
import DeleteDialog from "../DeleteDialog/DeleteDialog";


const Main =(props)=>{
  const [animationContainer, setAnimationConatiner] = useState(false);
  const [animationButton, setAnimationButton] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [textInput, setTextInput] = useState(false);
  const [textContent, setTextContent] = useState(false);
  const [buttonAllow, setButtonAllow] = useState(false);
  const [backMain, setBackMain] = useState(false);
  const dispatch = useDispatch();

  const convertTime = (listTime)=>{
    let timeNow = new Date().toISOString();
    timeNow = Date.parse(timeNow) - 10800000;
    listTime = Date.parse(listTime);
    let difTime = timeNow - listTime
    difTime = Math.floor(difTime /60000)
    if(difTime < 0){
      return `0 minutes ago`
    }else if(difTime >= 0 && difTime <= 59) {
      return `${difTime} minutes ago`
    } else if (difTime > 1439){
      return `${Math.floor(difTime/1440)} days ago`
    } else if (difTime > 59){
      return `${Math.floor(difTime/60)} hours ago` ; 
    }
  }

  const handleOpenEditScreen =(id) => {
    dispatch(setId(id))
    setOpenEdit(true);
    setBackMain(true)
  }

  const handleOpenDeleteDialog =(id , title, content, time) => {
    dispatch(setTitle(title));
    dispatch(setContent(content));
    dispatch(setDateTime(time));
    dispatch(setId(id));
    setOpenDelete(true);
    setBackMain(true);
  }

  const handleCloseMain = () => {
    dispatch(isLogout());
    dispatch(setLimitReset());
    dispatch(setItemsToMapReset())
    dispatch(erroList())
    props.setOpenMain(false);
    setAnimationConatiner(false)
  }

  const allowedButton =()=> {
    if(props.title && props.content){
      setButtonAllow(true)
    }else{
      setButtonAllow(false)
    }
  }

  const handleChangeTitle = (e) =>{
    dispatch(setTitle(e.target.value));
    e.target.value ? setTextInput(true) : setTextInput(false);
  }

  const handleChangeContent = (e) =>{
    dispatch(setContent(e.target.value))
    e.target.value ? setTextContent(true) : setTextContent(false);
  }

  const handleCreate =() => {
    if(textInput && textContent){
    props.postItems(props.user, props.title, props.content);
    setTextContent(false);
    setTextInput(false);
    }else{
    }
  }

  const handleMoreFeed =()=>{
    setAnimationButton(true)
    setTimeout(()=>{
      dispatch(setLimitPlus());
      props.fetchItems(props.limit)
      dispatch(setItemsToMap())
      setAnimationConatiner(true)
      setTimeout(()=>{
        setAnimationButton(false)
      }, 1000)
    },500)
  }

  useEffect(()=>{
    allowedButton();
    props.fetchInicialItems();
  },[getList()])

  return (
    <>
      {openEdit 
      ?
      <>
      <EditScreen setOpenEdit={setOpenEdit} setAnimation={setAnimationConatiner}/>
      <Section backMain={backMain}>
          <Header>
          <HeaderTitle>CodeLeap Network</HeaderTitle>
          <HeaderStatus>
            <HeaderUser>{props.user}</HeaderUser>
            <HeaderLogo onClick={handleCloseMain}><BiLogOutCircle/></HeaderLogo>
          </HeaderStatus>
          </Header>
        <ContainerCreate>
          <Content>
            <Title>What's on your mind?</Title>
            <InputTitle type= "text" id="title" onChange={handleChangeTitle}/>
            <LabelTitle for="title">Title</LabelTitle>
            <TextareaContent type= "text" id="content" onChange={handleChangeContent}></TextareaContent>
            <LabelContent for="content">Content</LabelContent>
            <CreateButtonDiv>
            <CreateButton textInput={textInput} onClick={handleCreate}>Create</CreateButton>
            </CreateButtonDiv>
          </Content>
        </ContainerCreate>
        {props.itemsToMap && props.itemsToMap.map((item) => (
          <ContainerData  animation={false} key={item.id}>
          <HeaderData>
          <HeaderDataTitle>{item.title}</HeaderDataTitle>
          {props.user === item.username
          ?
          <HeaderDataStatus>
            <HeaderDataLogo ><BsPencilSquare/></HeaderDataLogo>
            
            <HeaderDataLogo ><BsTrash/></HeaderDataLogo>
          </HeaderDataStatus>
          :
          <HeaderDataStatus></HeaderDataStatus>
          }
          </HeaderData>
          <ContentData>
            <InfoData>
              <UserData>@{item.username}</UserData>
              <TimeData>{convertTime(item.created_datetime)} hours ago</TimeData>
            </InfoData>
            <ContentDataContent>{item.content}</ContentDataContent>
          </ContentData>
        </ContainerData>
      ))} 
      </Section>
      </>
      :
      <>
        {openDelete
          ?
            <>
            <DeleteDialog setOpenDelete={setOpenDelete}/>
            <Section backMain={backMain}>
                <Header>
                <HeaderTitle>CodeLeap Network</HeaderTitle>
                <HeaderStatus>
                  <HeaderUser>{props.user}</HeaderUser>
                  <HeaderLogo onClick={handleCloseMain}><BiLogOutCircle/></HeaderLogo>
                </HeaderStatus>
                </Header>
              <ContainerCreate>
                <Content>
                  <Title>What's on your mind?</Title>
                  <InputTitle type= "text" id="title" onChange={handleChangeTitle}/>
                  <LabelTitle for="title">Title</LabelTitle>
                  <TextareaContent type= "text" id="content" onChange={handleChangeContent}></TextareaContent>
                  <LabelContent for="content">Content</LabelContent>
                  <CreateButtonDiv>
                  <CreateButton textInput={textInput} onClick={handleCreate}>Create</CreateButton>
                  </CreateButtonDiv>
                </Content>
              </ContainerCreate>
              {props.itemsToMap && props.itemsToMap.map((item) => (
                <ContainerData  key={item.id} animation={false} >
                <HeaderData>
                <HeaderDataTitle>{item.title}</HeaderDataTitle>
                {props.user === item.username
                ?
                <HeaderDataStatus>
                  <HeaderDataLogo ><BsPencilSquare/></HeaderDataLogo>
                  
                  <HeaderDataLogo ><BsTrash/></HeaderDataLogo>
                </HeaderDataStatus>
                :
                <HeaderDataStatus></HeaderDataStatus>
                }
                </HeaderData>
                <ContentData>
                  <InfoData>
                    <UserData>@{item.username}</UserData>
                    <TimeData>{convertTime(item.created_datetime)} hours ago</TimeData>
                  </InfoData>
                  <ContentDataContent>{item.content}</ContentDataContent>
                </ContentData>
              </ContainerData>
            ))} 
            </Section>
            </>
        :
          <Section>
          <Header>
          <HeaderTitle>CodeLeap Network</HeaderTitle>
          <HeaderStatus>
            <HeaderUser>{props.user}</HeaderUser>
            <HeaderLogo onClick={handleCloseMain}><BiLogOutCircle/></HeaderLogo>
          </HeaderStatus>
          </Header>
        <ContainerCreate>
          <Content>
            <Title>What's on your mind?</Title>
            <InputTitle type= "text" id="title" value={props.title} onChange={handleChangeTitle}/>
            <LabelTitle for="title">Title</LabelTitle>
            <TextareaContent type= "text" id="content" rows="3" cols="33"value={props.content} onChange={handleChangeContent}></TextareaContent>
            <LabelContent for="content">Content</LabelContent>
            <CreateButtonDiv>
            <CreateButton buttonAllow={buttonAllow} onClick={handleCreate}>Create</CreateButton>
            </CreateButtonDiv>
          </Content>
        </ContainerCreate>
        {props.itemsToMap && props.itemsToMap.map((item) => (
          <ContainerData animation={animationContainer} key={item.id}>
          <HeaderData>
          <HeaderDataTitle>{item.title}</HeaderDataTitle>
          {props.user === item.username
          ?
          <HeaderDataStatus>
            <HeaderDataLogo onClick={()=> handleOpenEditScreen(item.id)}><BsPencilSquare/></HeaderDataLogo>
            
            <HeaderDataLogo onClick={()=> handleOpenDeleteDialog(item.id, item.title, item.content, item.created_datetime)}><BsTrash/></HeaderDataLogo>
          </HeaderDataStatus>
          :
          <HeaderDataStatus></HeaderDataStatus>
          }
          </HeaderData>
          <ContentData>
            <InfoData>
              <UserData>@{item.username}</UserData>
              <TimeData>{convertTime(item.created_datetime)}</TimeData>
            </InfoData>
            <ContentDataContent>{item.content}</ContentDataContent>
          </ContentData>
        </ContainerData>
      ))} 
        <MoreFeedButton animation={animationButton}  onClick={handleMoreFeed}>More Feed</MoreFeedButton>
          </Section>
        }
      </>
  }
  
</>
  )
}

const mapStateToProps =(state) =>({
  user: state.login.user,
  title: state.list.title,
  content: state.list.content,
  limit: state.list.limit,
  itemsToMap: state.list.itemsToMap,
})

const mapDispatchToProps = {
  fetchItems,
  postItems,
  fetchInicialItems,
};



export default connect(mapStateToProps, mapDispatchToProps)(Main) ;