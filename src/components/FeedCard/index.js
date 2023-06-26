import {Container,
        Header,
        HeaderTitle,
        HeaderStatus,
        HeaderLogo,
        ContentData,
        Info,
        User,
        Time,
        Content} from "./styled";
import {setTitle, 
        setContent, 
        setId, 
        setDateTime} from "../../redux/reducers/list";
import { BsPencilSquare, BsTrash} from 'react-icons/bs';
import { connect, useDispatch } from "react-redux";
import { convertTime } from "../../utils/helpers";
const FeedCard = (props) =>{

  const dispatch = useDispatch();

  const handleOpenEdit =(id) => {
    dispatch(setId(id))
    props.setOpenEdit(true);
    props.setBackMain(true)
  }

  const handleOpenDelete =(id , title, content, time) => {
    dispatch(setTitle(title));
    dispatch(setContent(content));
    dispatch(setDateTime(time));
    dispatch(setId(id));
    props.setOpenDelete(true);
    props.setBackMain(true);
  }

  

  return(
    <>
    {props.itemsToMap && props.itemsToMap.map((item) => (
      <Container  animation={props.animation} key={props.id}>
        <Header>
          <HeaderTitle>{item.title}</HeaderTitle>
          {props.user === item.username
          ?
            <HeaderStatus>
              <HeaderLogo onClick={()=> handleOpenEdit(item.id)}><BsPencilSquare/></HeaderLogo>
              
              <HeaderLogo onClick={()=> handleOpenDelete(item.id, item.title, item.content, item.created_datetime)}><BsTrash/></HeaderLogo>
            </HeaderStatus>
          :
            <HeaderStatus></HeaderStatus>
          }
        </Header>
        <Content>
          <Info>
            <User>@{item.username}</User>
            <Time>{convertTime(item.created_datetime)}</Time>
          </Info>
          <ContentData>{item.content}</ContentData>
        </Content>
      </Container>
  ))} 
  </>
  )
}

const mapStateToProps =(state) =>({
  user: state.login.user,
  itemsToMap: state.list.itemsToMap,
})

export default connect(mapStateToProps)(FeedCard) ;